# Chatter - Chat App Frontend

Chatter is a modern, real-time chat application built with React, Zustand, Socket.IO, DaisyUI, and TailwindCSS. This is the frontend for the chat app, featuring authentication, live messaging, user profiles, and customisable themes.

## Features

- Authentication && Authorization with JWT (signup, login, logout)
- Real-time messaging with Socket.IO
- Online user status
- Profile management with avatar upload
- Theme selection (30+ DaisyUI themes)
- Responsive design
- Toast notifications# Chatter - Chat App Frontend

Chatter is a modern, real-time chat application built with React, Zustand, Socket.IO, DaisyUI, and TailwindCSS. This is the frontend for the chat app, featuring authentication, live messaging, user profiles, and customisable themes.

> The backend is built using the **MERN stack** (MongoDB, Express.js, React, Node.js).

## Features

- User authentication (signup, login, logout)
- Real-time messaging with Socket.IO
- Online user status
- Profile management with avatar upload
- Theme selection (30+ DaisyUI themes)
- Responsive design
- Toast notifications

## Tech Stack

- React 19
- Zustand (state management)
- Socket.IO Client
- DaisyUI & TailwindCSS (UI)
- Axios (API requests)
- React Router
- MERN + Cloudinary (backend + image management)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Running in Development

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Project Structure

```
src/
  components/      # Reusable UI components
  pages/           # Route pages (Home, Auth, Profile, Settings)
  store/           # Zustand stores
  lib/             # Utilities and Axios instance
  constants/       # App constants
  assets/          # Static assets
```

## Configuration

- API base URL is set to `http://localhost:5001/api` in [`src/lib/axios.js`](src/lib/axios.js).
- Themes are configured in [`tailwind.config.js`](tailwind.config.js).

## License

MIT

---

For backend setup and API documentation, see the corresponding

## Tech Stack

- React 19
- Zustand (state management)
- Socket.IO Client
- DaisyUI & TailwindCSS (UI)
- Axios (API requests)
- React Router

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install# chat-app-frontend
```
