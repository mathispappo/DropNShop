# Drop'n'Shop backend

## Installation

1. Have Node.js >=18 installed
2. Copy `.env.example` to `.env` and fill in the values (defaults are fine for local development)
3. Run `npm install`
4. Ensure the DB manager is up and running first
5. Run `npm run dev` to start the backend server

## API

### Authentication

#### `POST /auth/register`

Registers a new user.
Body:
```json
{
  "email": "john.doe@gmail.com",
  "username": "johndoe",
  "password": "password"
}
```
Returns an object with the JWT (`accessToken`) and the user's data.

#### `POST /auth/login`

Logs in a user.
Body:
```json
{
  "username": "johndoe",
  "password": "password"
}
```
Returns an object with the JWT (`accessToken`) and the user's data.

#### `GET /auth/me`

Returns the current user's data. Requires a valid JWT in the `Authorization` header.

#### `GET /auth/google`

Redirects to Google's OAuth2 login page.

#### `GET /auth/google/callback`

Callback URL for Google's OAuth2 login. Redirects to the frontend with the JWT in the URL.

### Items

#### `GET /items`

Returns all items.

#### `GET /items/:id`

Returns an item by ID.

#### `POST /items`

Creates a new item. Requires a valid JWT in the `Authorization` header.
Body:
```json
{
  "title": "Item title",
  "shortDescription": "Short description",
  "longDescription": "Long description",
  "price": 100,
  "technicalSpecifications": {
    "key1": "value1",
    "key2": "value2"
  },
  "imageUrl": "https://example.com/image.jpg"
}
```

#### `PATCH /items/:id`

Updates an item by ID. Requires a valid JWT in the `Authorization` header.
Same body as `POST /items`, but only put the fields you want to update.

#### `DELETE /items/:id`

Deletes an item by ID. Requires a valid JWT in the `Authorization` header.

### Cart Items

#### `GET /cart-items`

Returns all cart items for the current user. Requires a valid JWT in the `Authorization` header.

#### `PUT /cart-items`

Adds or update an item to the cart. Requires a valid JWT in the `Authorization` header.
Body:
```json
{
  "itemId": 1,
  "quantity": 1
}
```

#### `DELETE /cart-items/:id`

Deletes a cart item by ID. Requires a valid JWT in the `Authorization` header.

### Orders

#### `GET /orders`

Returns all orders for the current user. Requires a valid JWT in the `Authorization` header.

#### `GET /orders/:id`

Returns an order by ID. Requires a valid JWT in the `Authorization` header.

#### `POST /orders`

Creates a new order. Requires a valid JWT in the `Authorization` header.
Body:
```json
{
  "orderLines": [
    {
      "itemId": 1,
      "quantity": 1
    }
  ],
  "shippingAddress": "123 Main St, Springfield, IL 62701"
}
```
