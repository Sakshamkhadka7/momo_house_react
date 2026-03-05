import React from "react";
import AppRoutes from "./components/common/AppRoutes";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Header />

        <div className="min-h-400">
          <AppRoutes />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default App;
