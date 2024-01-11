import "./footer.css";
function Footer() {
  return (
    <div className="bg-[#333] text-white  mt-20 w-full h-[421px]">
      <div className="flex items-center justify-around leading-loose p-20 border-dashed border-2">
        <div>
          <img src="images/icon-32-logo 2.svg" alt="" />
          <p className="text-gray-400	">
            We connect people and removal companies
          </p>
        </div>
        <div>
          <h1 className="text-xl tracking-wider">For consumer</h1>
          <ul>
            <div className="text-gray-400">
              <li>What we do?</li>
              <li>Moving to us</li>
              <li>Moving to uk</li>
              <li>Moving to uae</li>
            </div>
          </ul>
        </div>
        <div>
          <h2 className="text-xl tracking-wider">For removal companies</h2>
          <ul>
            <div className="text-gray-400">
              <li>Become a partner</li>
              <li>Start your free trail</li>
              <li>Partner sign in</li>
            </div>
          </ul>
        </div>
        <div>
          <ul>
            <h2 className="text-xl tracking-wider">Need help?</h2>
            <div className="text-gray-400">
              <li>Contact us</li>
              <li>UAE@gmail.com</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-around">
        <div>
          <h4>Copyright © 2023</h4>
        </div>
        <ul className="flex gap-6">
          <li>Copyright © 2023 </li>
          <li>Copyright © 2023 </li>
          <li>Copyright © 2023 </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
