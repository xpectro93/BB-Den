-- DROP DATABASE IF EXISTS burrow;
-- CREATE DATABASE burrow;

-- \c burrow;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  profile_pic VARCHAR,
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
  userId INT REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR NOT NULL,
  bookid INT REFERENCES books(id) ON DELETE CASCADE,
  status VARCHAR,
  thumbnail VARCHAR,
  likeURL VARCHAR
);

CREATE TABLE todo (
  id SERIAL PRIMARY KEY,
  userId INT REFERENCES users(id),
  topic VARCHAR,
  header VARCHAR NOT NULL,
  body VARCHAR,
  completed BOOLEAN,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users(username, password_digest, profile_pic)
VALUES
('red','mad','http://homepages.neiu.edu/~ejgore/cs300/images/red.png'),
('purple','depressed','https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Color_icon_purple_v2.svg/220px-Color_icon_purple_v2.svg.png'),
('green','jelly','http://www.sensationalcolor.com/wp-content/uploads/2009/12/green350x350.jpg');

INSERT INTO books(title, author, cover_pic)
VALUES
('Flowers in the Attic', 'V. C. Andrews', 'https://images-na.ssl-images-amazon.com/images/I/811d3zAinkL.jpg'),
('Petals on the Wind', 'V. C. Andrews', 'http://www.gstatic.com/tv/thumb/v22vodart/10680503/p10680503_v_v8_ae.jpg');

INSERT INTO likes(userId, type, status, thumbnail, likeURL)
VALUES
(1, 'BOOK', 'READ', 'http://www.gstatic.com/tv/thumb/v22vodart/10680503/p10680503_v_v8_ae.jpg', NULL),
(2, 'VID', NULL, 'https://pbs.twimg.com/profile_images/1148327441527689217/1QpS06D6_400x400.png', 'https://www.youtube.com/watch?v=hYs4wDpzUXo'),
(3, 'MEME', NULL, 'https://i.ytimg.com/vi/reloCAxeo5U/hqdefault.jpg','https://www.todaysparent.com/wp-content/uploads/2017/06/when-your-kid-becomes-a-meme-1024x576-1497986561.jpg');

INSERT INTO todo(userId, topic, header, body, completed)
VALUES
(1,'SCHOOL', 'Go to school','head to school and study to get them monies', FALSE),
(3,'SHOPPING', 'Buy apples', 'Need to get 12 apples for my pie!', TRUE),
(2, 'SELF', 'shave', NULL, FALSE );
