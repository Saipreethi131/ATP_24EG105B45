# Express.js & MongoDB Backend

This is a simple backend API for managing **Users** and **Products**, connected to a MongoDB database.

---
## 🚀 How to Run

1. **Install packages**:
   ```bash
   npm install
   ```

2. **Setup environment variables**:
   Create a `.env` file in the root folder and add:
   ```env
   PORT=4000
   MONGODB_URL=mongodb://localhost:27017/sampledb
   SECRECT_KEY=any_secret_key
   ```

3. **Run the server**:
   ```bash
   node server.js
   ```

---

## 🔌 API Routes

### 👤 User Routes (`/user-api`)
* **`POST /users`**: Register a new user (automatically secures passwords).
* **`POST /auth`**: Log in (saves a secure login cookie).
* **`GET /users`**: List all users (requires login).
* **`GET /user`**: Get current logged-in user profile & cart (requires login).
* **`PUT /users/:id`**: Update user details (requires login).
* **`DELETE /users/:id`**: Remove user by ID.
* **`PUT /cart/product-id/:pid`**: Add a product to the user's cart (requires login).

### 📦 Product Routes (`/product-api`)
* **`POST /products`**: Create a new product.
* **`GET /products`**: View all products.
* **`GET /products/:pid`**: View one product by ID.
* **`PUT /products/:pid`**: Update product details.
* **`DELETE /products/:pid`**: Delete a product.

---

## 🛠️ Main Features
* **Password Hashing**: Passwords are securely hashed using `bcrypt` before saving.
* **Security & Tokens**: Uses JSON Web Tokens (JWT) stored in HTTP-only cookies to secure routes.
* **Central Error Handler**: Automatically catches and handles database and server errors.