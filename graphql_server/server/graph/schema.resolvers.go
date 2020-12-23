package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/ConDai/simpleGraphQL/graph/generated"
	"github.com/ConDai/simpleGraphQL/graph/model"
)

func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	rows, err := r.Conn.Query("SELECT u_id,first_name,last_name FROM Users")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	users := []*model.User{}
	for rows.Next() {
		var u model.User
		if err := rows.Scan(&u.ID, &u.FirstName, &u.LastName); err != nil {
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

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
