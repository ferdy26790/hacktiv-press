# hacktiv-press

## list User routes
| Route | HTTP | Description |
| ------| ----- | ---------- |
| /api/register | POST | register | v
| /api/login | POST | login | v
| /api/users | GET | get all users admin only (coming soon)| -
| /api/users/:id | GET | get detail user (user authorization) | v
| /api/users/:id | PUT | edit user (user authorization (coming soon)) | -
| /api/users/articles | GET | get all articles | v
| /api/users/articles | POST | add article (user authentication) | v
| /api/users/articles/:id | GET | get detail article | v
| /api/users/articles/:id | PUT | edit article (user authorization) | v
| /api/users/articles/:id | DELETE | delete article (user authorization) | v
| /api/users/articles/category/:category | GET | get article by category | v

## usage
``` sh
$ npm run dev
$ npm start
```
## ACCESS API VIA
`http://localhost:3000
