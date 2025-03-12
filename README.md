# Express.js TypeScript Application

A TypeScript Express.js application with authentication middleware using the `@sdijeremy/shared` package.

## Setup

1. Make sure you have Node.js installed
2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

### Development Mode

To run the application in development mode with automatic restarts:

```
npm run dev
```

### Production Mode

To build and run the application in production mode:

```
npm run build
npm start
```

## Available Endpoints

- `GET /`: Returns a simple JSON response with a welcome message
- `GET /auth-test`: Protected route that requires authentication. Returns user information along with a welcome message.

## Environment Variables

- `PORT`: The port on which the server will run (default: 3000)

## Technologies

- TypeScript
- Express.js
- ES Modules
