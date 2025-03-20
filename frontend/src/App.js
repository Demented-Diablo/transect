import React from "react";
import AppRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const appStyle = {
  paddingBottom: "60px",
};

const App = () => {
  return (
    <div style = {appStyle}>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
