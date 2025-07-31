import React, { useState } from "react";
import logo from "../logo.svg";
import "./App.css";
import Layout from "../components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="App dark:bg-brand bg-white">
        <header className="App-header dark:text-gray-50">
          <div className="animate-spin-slow">
            <img src={logo} className="App-logo animate-spin" alt="logo" />
          </div>
          <p>Hello Vite + React + Tailwind!</p>
          <p>
            <button
              onClick={() => setCount((count) => count + 1)}
              className="p-5 rounded-96"
            >
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          <p className="space-x-3">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <span> | </span>
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
            <span>|</span>
            <a
              className="App-link"
              href="https://tailwindcss.com/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwindcss Docs
            </a>
          </p>
        </header>
      </div>
    </Layout>
  );
}

export default App;
