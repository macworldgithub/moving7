import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div>
        <img src="images/icon-32-logo 2.svg" alt="" />
        <p>We connect people and removal companies</p>
      </div>
      <div>
        <h2>For consumer</h2>
        <ul>
          {/* <li>For consumer</li> */}
          <li>What we do?</li>
          <li>Moving to us</li>
          <li>Moving to uk</li>
          <li>Moving to uae</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>For removal companies</li>
          <li>Become a partner</li>
          <li>Start your free trail</li>
          <li>Partner sign in</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Need help?</li>
          <li>Contact us</li>
          <li>UAE@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
