import "./footer.css";
function Footer() {
  return (
    <div className="bg-[#333] text-white  mt-20 w-full h-[371px]">
      <div className="flex justify-around leading-loose p-20">
        <div>
          <img src="images/icon-32-logo 2.svg" alt="" />
          <p className="text-gray-400">
            We connect people and removal
            <br /> companies
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

      <div className="flex items-center justify-evenly">
        <div className="border-dashed border-t-2 w-[80%]">
          <div className="flex justify-between pt-5">
            <div>
              <h4>Copyright © 2023</h4>
            </div>
            <ul className="flex items-end gap-8 text-gray-400">
              <li>Legal</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
