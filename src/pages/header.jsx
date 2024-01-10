import "./header.css"
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="header-btn">
        <button>Get Quotes</button>
      </div>
    </div>
  );
}

export default Header;
