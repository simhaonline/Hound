package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/ConDai/simpleGraphQL/graph/generated"
	"github.com/ConDai/simpleGraphQL/graph/model"
	"golang.org/x/crypto/bcrypt"
)

func (r *mutationResolver) SignUp(ctx context.Context, firstName *string, lastName *string, password *string, email *string) (*string, error) {
	emailResults, err := r.Conn.Query("SELECT email FROM users WHERE email = $1", *email)
	if err != nil {
		return nil, errors.New("Failed to fetch emails from table users")
	}

	defer emailResults.Close()

	if emailResults.Next() {
		return nil, errors.New("Email is already registered")
	}

	bytes, err := bcrypt.GenerateFromPassword([]byte(*password), 14)
	hashedPassword := string(bytes)
	hashedPassword = "123"
	if err != nil {
		return nil, errors.New("Failed to generated hashed password")
	}

	newUserSQL := `INSERT INTO users (first_name, last_name,email,hash_password,perm_type,time_registered) 
							   VALUES ($1,$2,$3,$4,$5, $6)`

	_, err = r.Conn.Exec(newUserSQL, *firstName, *lastName, *email, hashedPassword, 1, time.Now())

	if err != nil {
		return nil, errors.New("Failed to create new user")
	}

	return nil, nil
}

func (r *mutationResolver) Login(ctx context.Context, email *string, password *string) (*model.User, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) Logout(ctx context.Context, token *string) (*string, error) {
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

	// var id string = "1"
	// user := model.User{
	// 	ID:             &id,
	// 	FirstName:      "Luka",
	// 	LastName:       "Gamulin",
	// 	Email:          "email",
	// 	HashedPassword: "Password",
	// 	Permission:     0,
	// }
	// users = append(users, &user)
	// return users, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
