# NestJS | Passport-local Authenticated | URL-shortener

This project implements a URL shortener using NestJS. It includes user authentication using the passport-local strategy and allows users to generate short codes for long URLs.

This document has been authored by referencing the content provided in the backendinfo.txt file. For more comprehensive information about the project, kindly consult the aforementioned file.

#### How to get started with running the project has also been mentioned below.

#### Project snippets/images can be viewed in the images directory in the root.

## Technologies Used

- NestJS
- Passport (passport-local strategy)
- express-session
- nanoid (optional)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-url-shortener.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-url-shortener
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

## Getting Started

### Development Mode

```bash
npm run start:dev
```

### Production Mode

```bash
npm run start
```

### Links to access the projects

Use the links given below in the Notable URLs category

## Project Structure

The project follows a modular structure, including modules, services, guards, strategies, and more.

## Notable URLs

- **Main:**
  - [http://localhost:3000/login](http://localhost:3000/login) - Login page

- **Postman:**
  - [http://localhost:3000/login](http://localhost:3000/login) - Use Postman or similar agent to POST and confirm login
  - [http://localhost:3000/protected](http://localhost:3000/protected) - After login using Postman or similar agent, this URL is available for access

- **Browser:**
  - [http://localhost:3000/](http://localhost:3000/) - URL shortener accessed via browser (bypass the login)
  - [http://localhost:3000/login](http://localhost:3000/login) - Login form accessed via browser

## User Authentication

For testing purposes, three users are created with the usernames: user1, user2, and user3. The password for all is "resu321321".

## URL Shortening Logic

The URL shortening logic includes taking the long url and clipping it into a small one with randomly generated characters and mapping the short-url to the long one.
(Optional) The URL shortening logic can also use the nanoid library to generate short codes for long URLs.

## Frontend Integration

The frontend is served by the backend and provides access to the URL shortener.

## Session Management

Session management is implemented using `express-session` with the secret set as "resu321321". User serialization is handled to store user information in sessions.

## Additional Information

- The project uses `@nestjs/serve-static` to serve static files.
- For production use, consider using modules like `node.bcrypt.js` for password hashing.

## Author

Project created by Paul Aji (https://github.com/paulaji)

## License

This project is licensed under the [MIT License](LICENSE).

## References

Programming Assistance: Documentations, Youtube, ChatGPT
Text/Document Refactoring: ChatGPT
Aesthetic/UI Support: ChatGPT


```
