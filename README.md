# Prompt Analyzer

A full-stack application for analyzing and managing AI prompts, featuring a Node.js backend and a React frontend.

## Prerequisites

- Node.js (v16 or higher) and npm (comes with Node.js)
  - Recommended: Install using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for easy version management

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/prompt-analyzer.git
cd prompt-analyzer
```

### 2. Set Up Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Update the `.env` file with your specific configuration (API keys, database URLs, etc.)

### 3. Install Dependencies

#### Backend Dependencies
From the project root:
```bash
npm install
```

#### Frontend Dependencies
```bash
cd app
npm install
cd ..
```

### 4. Running the Application

#### Development Mode

1. Start the backend server (from project root):
   ```bash
   npm run dev
   ```
   The backend will be available at `http://localhost:3000`

2. In a new terminal, start the frontend development server:
   ```bash
   cd app
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173` (or the next available port)

#### Production Build

1. Build the frontend:
   ```bash
   cd app
   npm run build
   ```

2. The built files will be in the `app/dist` directory, which can be served by your backend.

## Project Structure

- `/` - Backend (Node.js/Express)
  - `server.js` - Main server file
  - `index.js` - Application entry point
  - `/utils` - Utility functions and helpers
- `/app` - Frontend (React + Vite)
  - `/src` - React application source code
  - `vite.config.js` - Vite configuration

## Technologies Used

### Backend
- Node.js
- Express

### Frontend
- React
- TypeScript
- Vite
- shadcn-ui
- Tailwind CSS

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[Your chosen license here]
