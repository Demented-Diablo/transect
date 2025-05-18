const Header = () => {
    const headerStyle = {
    background: "linear-gradient(135deg, #5a8bb5, #c6933b)",
    color: "white",
    padding: "15px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    };
 
return (
    <header style={headerStyle}>
        <h1>TranSECT Project Data Entry</h1>
    </header>
    );
};
    
export default Header;
    