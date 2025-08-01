import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./page/HomePage";
function App() {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* CONTENT */}
      <HomePage />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
