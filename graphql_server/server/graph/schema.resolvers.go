package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"errors"
	"fmt"
	"time"

	generated1 "github.com/ConDai/gqlServer/graph/generated"
	"github.com/ConDai/gqlServer/graph/model"
	uuid "github.com/satori/go.uuid"
	"golang.org/x/crypto/bcrypt"
)

func (r *mutationResolver) SignUp(ctx context.Context, firstName *string, lastName *string, password *string, email *string) (*model.Status, error) {
	fmt.Println("hits signup!")
	var status model.Status

	emailResults, err := r.Conn.Query("SELECT email FROM users WHERE email = $1", *email)
	if err != nil {
		return nil, errors.New("Failed to fetch emails from table users")
	}

	defer emailResults.Close()

	// Check that there are no emails that match
	if emailResults.Next() {
		status = model.StatusFailed
		return &status, errors.New("Email is already registered")
	}

	// Hash the password and store
	bytes, err := bcrypt.GenerateFromPassword([]byte(*password), 14)
	hashedPassword := string(bytes)
	if err != nil {
		status = model.StatusFailed
		return &status, errors.New("Failed to generated hashed password")
	}
	fmt.Println("Here!")
	newUserSQL := `
		INSERT INTO users 
			( first_name, 
				last_name,
				email,
				hashed_password,
				time_registered
			) 
			VALUES ($1,$2,$3,$4,$5);`

	_, err = r.Conn.Exec(newUserSQL, *firstName, *lastName, *email, hashedPassword, time.Now())

	if err != nil {
		status = model.StatusFailed
		return &status, errors.New("Failed to create new user")
	}

	status = model.StatusSuccess
	return &status, nil
}

func (r *mutationResolver) Login(ctx context.Context, email *string, password *string) (*string, error) {
	fmt.Println("Login hit!")
	passwordResult, err := r.Conn.Query(`
		SELECT id,first_name,last_name,hashed_password 
		FROM users 
		WHERE email = $1`, *email)

	// Validate the user
	if !passwordResult.Next() {
		return nil, errors.New("User with email does not exist")
	}

	var userId int
	var firstName string
	var lastName string
	var hashedPassword string

	if err := passwordResult.Scan(&userId, &firstName, &lastName, &hashedPassword); err != nil {
		return nil, err
	}
	// Verify the password
	err = bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(*password))
	if err != nil {
		return nil, errors.New("Incorrect password")
	}

	// Create a new token
	token, err := uuid.NewV4()
	if err != nil {
		return nil, errors.New("Failed to generate token")
	}

	// Create a session for the user
	newSessionSQL := `INSERT INTO Sessions(id, access_token,token_issued) 
										VALUES ($1,$2,$3)`
	_, err = r.Conn.Exec(newSessionSQL, userId, token, time.Now())
	if err != nil {
		return nil, errors.New("Failed to create session")
	}
	tokenString := token.String()
	return &tokenString, nil
}

func (r *mutationResolver) Logout(ctx context.Context, token *string) (*model.Status, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	rows, err := r.Conn.Query("SELECT first_name,last_name,email FROM users")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	users := []*model.User{}
	for rows.Next() {
		var u model.User
		if err := rows.Scan(&u.FirstName, &u.LastName, &u.Email); err != nil {
			return nil, err
		}
		users = append(users, &u)
	}
	return users, nil
}

func (r *queryResolver) Properties(ctx context.Context) ([]*model.Property, error) {

	user := model.User{
		FirstName: "luka",
		LastName:  "Gam",
		Email:     "fuck you",
	}

	var property model.Property
	property.Seller = &user
	properties := []*model.Property{&property}
	return properties, nil
}

// Mutation returns generated1.MutationResolver implementation.
func (r *Resolver) Mutation() generated1.MutationResolver { return &mutationResolver{r} }

// Query returns generated1.QueryResolver implementation.
func (r *Resolver) Query() generated1.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
