package users

import (
	"database/sql"
	"errors"
	"fmt"
)

type User struct {
	Id           int    `json:"u_id"`
	FirstName    string `json:"first_name"`
	LastName     string `json:"last_name"`
	Email        string `json:"email"`
	HashPassword string `json:"hash_password"`
	PermType     int    `json:"perm_type"`
}

func (u *User) GetUsers(db *sql.DB, limit int) ([]User, error) {
	if u.PermType == 1 {
		rows, err := db.Query("SELECT u_id,first_name,last_name FROM Users LIMIT $1", limit)
		if err != nil {
			return nil, err
		}
		defer rows.Close()
		users := []User{}
		for rows.Next() {
			var u User
			if err := rows.Scan(&u.Id, &u.FirstName, &u.LastName); err != nil {
				return nil, err
			}
			users = append(users, u)
		}
		return users, nil
	}
	fmt.Println("Wrong permissions")
	return nil, errors.New("wrong permissions")
}
func (u *User) UpdateUser(db *sql.DB) error {
	return errors.New("Not implemented")
}

func (u *User) DeleteUser(db *sql.DB) error {
	return errors.New("Not implemented")
}

func (u *User) CreateUser(db *sql.DB) error {
	err := db.QueryRow(
		"INSERT INTO Users (first_name, last_name,email, hash_password, perm_type,time_registered) VALUES ($1, $2,$3,$4,$5,current_timestamp);",
		u.FirstName, u.LastName, u.Email, u.HashPassword, u.PermType).Scan(&u.Id)
	if err != nil {
		return err
	}
	return nil
}
