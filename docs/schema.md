
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
CoverPic        | integer   | not null

## LIKES
Id
userid
Type
Status(WishList,Read)
Rating
memeURL

TODO
Id
UserId
Body
Topic

MESSAGE
Id
userId
Email
Message
