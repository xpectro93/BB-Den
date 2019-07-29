DROP DATABASE IF EXISTS burrow;
CREATE DATABASE burrow;

\c burrow;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  profile_picture VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  author VARCHAR NOT NULL,
  cover_pic VARCHAR
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  userId INT REFERENCES users(id),
  type VARCHAR NOT NULL,
  status VARCHAR,
  thumbnail VARCHAR,
  likeURL VARCHAR
);

CREATE TABLE todo (
  id SERIAL PRIMARY KEY,
  userId INT REFERENCES users(id),
  topic VARCHAR
  title VARCHAR NOT NULL,
  body VARCHAR,
  completed BOOLEAN ,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
