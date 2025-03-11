"use client"

import "./globals.css";

import React, { useState } from "react";
import Layout from "pages/layout";
import Home from "pages/home";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
  <html lang="en">
    <body>
      <Layout setCurrentPage={setCurrentPage}>
      {currentPage === "home" && <Home />}
      {/* Add more pages as needed */}
    </Layout>
    </body>
  </html>
)
}
