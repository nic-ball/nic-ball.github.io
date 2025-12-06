# Portfolio Frontend

A modern, responsive Developer Portfolio built with **React**, **Vite**, and **TailwindCSS**, featuring a unique integration of **C++ WebAssembly** for high-performance in-browser computations.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design using TailwindCSS with a focus on visual hierarchy and interaction.
- **C++ WebAssembly Integration**: Demonstrates the power of Wasm by running native C++ code (Fibonacci calculation) directly in the browser.
- **Dynamic Project Showcase**: Fetches and displays projects dynamically from a backend API.
- **Contact Form**: Integrated contact form with validation and error handling.
- **Optimized Performance**: Built with Vite for lightning-fast HMR and optimized production builds.

## 🛠️ Technology Stack

- **Frontend Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **WebAssembly**: [Emscripten](https://emscripten.org/) (Project contains a `cpp/` directory for the C++ source)

## 📂 Project Structure

```bash
portfolio-frontend/
├── cpp/                  # C++ source code for WebAssembly modules
├── public/               # Static assets and compiled Wasm files
│   ├── wasm_demo.js      # Emscripten generated glue code
│   └── wasm_demo.wasm    # Compiled WebAssembly binary
├── src/
│   ├── components/       # Reusable React components (CppDemo, ContactForm)
│   ├── services/         # API integration logic (axios setup)
│   ├── main.jsx          # Entry point
│   └── App.jsx           # Main application layout and logic
├── .env                  # Environment variables
└── package.json          # Project dependencies and scripts
```

## ⚡ Getting Started

### Prerequisites

- **Node.js**: v18 or higher recommended
- **npm**: v9 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nic-ball/portfolio-frontend.git
   cd portfolio-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file in the root directory if you need to override the API URL:
   ```env
   VITE_API_URL=http://localhost:8000/api/
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` directory, ready to be deployed to static hosting services like GitHub Pages, Vercel, or Netlify.

## 🧵 C++ WebAssembly

The project includes a `cpp/main.cpp` file which compiles to WebAssembly. The compiled artifacts (`wasm_demo.js` and `wasm_demo.wasm`) are placed in the `public/` directory so they can be loaded by the browser.

To recompile the C++ code (requires Emscripten installed):

```bash
emcc cpp/main.cpp -o public/wasm_demo.js -s WASM=1 -s "EXPORTED_RUNTIME_METHODS=['ccall','cwrap']" --bind
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
