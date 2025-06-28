
# LLM Prompt Filter

A full-stack application for analyzing, classifying, and validating AI prompts. Combines a Node.js backend with a modern React + TypeScript frontend, providing a powerful framework to filter, categorize, and monitor prompt content in real time.

## ✨ Features

- **Prompt Engineering Tools**: apply temperature control, few-shot examples, and risk evaluation  
- **Compliance Classification**: flag prompts with categories, risk levels, and compliance status  
- **Manipulation Detection**: identify attempts to bypass content policies  
- **Output Validation**: ensure JSON-formatted, consistent responses  
- **Modern UI**: built with React, Tailwind CSS, shadcn-ui, and Vite  

## 📦 Prerequisites

- Node.js (v16+ recommended)  
  - Suggest using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for version management

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/prompt-compliance-analyzer.git
cd prompt-compliance-analyzer
```

### 2️⃣ Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` with your own secrets (API keys, DB URLs, etc.)

### 3️⃣ Install dependencies

#### Backend

```bash
npm install
```

#### Frontend

```bash
cd app
npm install
cd ..
```

### 4️⃣ Run the application

#### Development mode

- Start backend:
  ```bash
  npm run dev
  ```
  → available at [http://localhost:3000](http://localhost:3000)

- Start frontend (in a new terminal):
  ```bash
  cd app
  npm run dev
  ```
  → available at [http://localhost:5173](http://localhost:5173)

#### Production build

```bash
cd app
npm run build
```

→ production files will be in `app/dist`

## 🗂 Project Structure

```
/
  server.js
  index.js
  utils/
  prompts/
  app/
    src/
      components/
      hooks/
      lib/
      pages/
    public/
    vite.config.ts
```

- **Backend**: Node.js (Express) with prompt classification logic  
- **Frontend**: React + Vite + shadcn-ui components for modern, modular UI  
- **prompts/**: contains prompt examples and system messages  
- **utils/**: helper scripts for validating LLM output  

## 🛠 Technologies

- **Backend**: Node.js, Express  
- **Frontend**: React, TypeScript, Tailwind CSS, shadcn-ui, Vite

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add your feature'`)  
4. Push to GitHub (`git push origin feature/your-feature`)  
5. Open a Pull Request

## 📄 License

[MIT](LICENSE) (or update with your chosen license)
