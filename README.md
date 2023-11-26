# React Test 1

## Overview

This is a simple React e-commerce application that allows users to browse products, add them to a cart, and proceed to checkout. The application utilizes mock API and json file(db.json).

## Features

- **Product Listing:** Display a variety of products with images, descriptions, and prices.
- **Add to Cart:** Users can add products to their shopping cart.
- **Cart Management:** View and manage items in the cart, including updating quantities and removing items.
- **Checkout:** Seamless checkout process for users to review their items and proceed to a mock payment.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Hiccup1104/Product_Display-Test1.git
```
2. Navigate to the project directory:
```bash
cd Product_Display-Test1
```
3. Install dependencies using npm:
```bash
npm install
```
4. Install JSON Server:
```bash
npm install -g json-server
```
5. Start JSON Server for the mock backend:
```bash
json-server --watch db.json --port 5000
```
### Running the App

Start the development server:
```bash
npm start
```
Open http://localhost:3000 in your browser to view the app.

## Usage

- Visit the homepage to browse products.
- Click on a product to view details and add it to the cart.
- Navigate to the cart page to review and remove items.
- Proceed to the checkout page to complete the purchase.

## Technologies Used

- **React Context API:** Manages global state for the application.
- **JSON Server:** Mock backend for data storage and API simulation.
- **Bootstrap:** Used for styling and enhancing the overall visual appeal of the application.
