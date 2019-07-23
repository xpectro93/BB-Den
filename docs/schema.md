#                <(=^-^=)> 

# Schema

## USER
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

## LIKES
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
userid          | integer   | not null
type            | varchar   | not null
status          | varchar   | not null
rating          | integer   | not null
memeURL         | varchar   | not null

## TODO
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
userId          | integer   | not null
body            | varchar   | not null
Topic           | varchar   | not null

## MESSAGE
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
userId          | integer   | not null
Email           | varchar   | not null
Message         | varchar   | not null
timestamp       | timestamp | default
