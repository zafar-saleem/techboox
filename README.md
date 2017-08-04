TechBoox
===========

Bookstore website

Stack
===========
Fullstack Javascript(Nodejs v5 with Krakenjs framework), MongoDB, CSS, HTML, Foundation, Dust templates.

Usage
===========
Clone repository
Run `npm install` in projects root folder to download dependencies.
Create `techboox` database in MongoDB.
Create `books` and `categories` collections with following attribute:

```
book
	title: String,
	category: String,
	description: String,
	author: String,
	publisher: String,
	price: Number,
	cover: String

categories
	name: String
```

Now run `npm start` in techboox root folder.
