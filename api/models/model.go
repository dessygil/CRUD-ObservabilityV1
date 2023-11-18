package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Post struct {
	ID      primitive.ObjectID `json:"id" bson:"_id,omitempty"`
	Name    string             `json:"name,omitempty" validate:"required"`
	Header  string             `json:"header,omitempty" validate:"required"`
	Content string             `json:"content,omitempty" validate:"required"`
}
