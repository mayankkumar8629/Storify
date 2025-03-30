# Storify

This project is a RESTful API for managing a book collection. It is built to perform basic CRUD operations on books and includes user authentication using JWT. The API is designed to be modular, secure, and production-ready.

## Features

### Book Management
- **CRUD Operations:**  
  - **Create:** Add new books to the collection with details such as title, author, category, price, rating, and publication date.
  - **Read:** Retrieve all books or a single book by its ID.
  - **Update:** Modify details of existing books.
  - **Delete:** Remove books from the collection.

### User Authentication
- **Signup & Login:**  
  - Users can sign up and log in with their email and password.
  - JWT tokens are issued upon successful login to secure protected routes.
  
- **Protected Routes:**  
  - Only authenticated users can access or modify book data.

### Advanced Book Queries
- **Filtering & Search:**  
  - Filter books by **author**, **category**, and **rating**.
  - Search books by **title** using partial matches for a more flexible search experience.

- **Pagination:**  
  - Supports paginated responses for GET /books to manage large datasets effectively.

- **Sorting:**  
  - Sort books by **price** (ascending/descending).
  - Sort books by **rating** (from high to low).

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/) or your preferred database

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
2. **Note:**
    need to create .env file and add
    MONGO_URI 
    JWT_SECRET
    

