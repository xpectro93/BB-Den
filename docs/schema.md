#                <(=^-^=)>

# Schema

## USERS
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | varchar   | not null
password_digest | varchar   | not null
Profile picture | varchar   |

## BOOK
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
Title           | varchar   | not null
Author          | varchar   | not null
CoverPic        | varchar   | not null


## LIKES (memes/vids/books)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
userid          | integer   | references user(id) ON DELETE CASCADE
type            | varchar   | not null
status(book)    | varchar   | not null
rating          | integer   | not null
thumbnail       | varchar   |
likeURL         | varchar   | not null


## TODO
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
userId          | integer   | references user(id) ON DELETE CASCADE
topic           | varchar   | not null
title           | varchar   | not null
body            | varchar   |
completed       | boolean   | not null
timestamp       | timestamp | default

## MESSAGE
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
userId          | integer   | references user(id) ON DELETE CASCADE
Email           | varchar   | not null
Message         | varchar   | not null
timestamp       | timestamp | default
