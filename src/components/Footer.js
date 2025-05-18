const Footer = () => {
  const footerStyle = {
    background: "linear-gradient(135deg, #7aaed6, #d6a24c)",
    color: "white",
    padding: "5px",
    marginTop: "10px",
    textAlign: "center",
    fontSize: "16px",
    width: "100%",
    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    bottom: "0",
    left: "0",
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 CSCI 4691 Winter. All rights reserved.</p>
    </footer>
  );
};

export default Footer;