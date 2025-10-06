Simple Shopping Cart
1. Project Description

-A minimal e-commerce application where users can:
-Browse products in a responsive grid
-Add products to a shopping cart
-View cart with item quantities and total price
-Checkout by providing delivery details
-Submit orders to a backend (mock API)
-The project demonstrates React frontend with Redux Toolkit (RTK) and a Node.js backend with hardcoded products.

2. Setup and Run Locally

Clone the repository:
git clone 
cd simple-shopping-cart

Frontend:
cd frontend
npm install
npm start

Runs on http://localhost:3000

Backend:
cd backend
npm install
npm start

Runs on http://localhost:5000

4. Assumptions / Design Choices

-Products are hardcoded in the backend (no database).
-Cart state is managed using Redux Toolkit.
-Checkout calculates subtotal, GST (18%), and total.
-Quantity can be adjusted before checkout.
-Minimal backend logic: orders are logged to the console.
-Responsive design for mobile, tablet, and desktop.

5. Loom Video Link
   https://www.loom.com/share/f2ec49d79e9f48d3a59bda6ab5cce78a
