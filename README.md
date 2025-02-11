# MERN Stack Notes App

A full-stack Notes App built using the MERN (MongoDB, Express, React, Node.js) stack. This application allows users to create, read, update, and delete (CRUD) notes.

## Features

- User authentication with JWT
- Create, read, update, and delete notes
- Responsive UI with React and Tailwind CSS
- Secure backend API with Express and MongoDB
- State management with React Context API

## Tech Stack

- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, MongoDB, JWT Authentication
- **Database:** MongoDB (Mongoose ODM)

## Installation

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Clone the Repository

```bash
git clone https://github.com/indubrolk/Notes-App.git
cd Notes-App
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Start the backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd ../frontend
npm install
```

Start the frontend server:

```bash
npm start
```

## API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | /api/users       | Register a user   |
| POST   | /api/users/login | Login a user      |
| GET    | /api/notes       | Get all notes     |
| POST   | /api/notes       | Create a new note |
| PUT    | /api/notes/\:id  | Update a note     |
| DELETE | /api/notes/\:id  | Delete a note     |

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, GitHub profile [indubrolk](https://github.com/indubrolk).


