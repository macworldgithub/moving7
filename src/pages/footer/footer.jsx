import "./footer.css";
function Footer() {
  return (
    <div className="bg-[#333] text-white w-full h-auto md:w-full py-10 md:h-[371px] md:mt-20 pl-8 footer">
      <div className="flex flex-col gap-y-4 md:items-center md:flex justify-around leading-loose md:p-20">
        <div>
          <img src="images/icon-32-logo 2.svg" alt="" />
          <p className="text-gray-4 text-lg">
            We connect people and removal
            <br /> companies
          </p>
        </div>
        <div className="text-left flex items-start w-full flex-col">
          <h1 className="text-base text-left md:text-xl tracking-wider">
            For consumer
          </h1>
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
          <h2 className="text-base md:text-xl tracking-wider">
            For removal companies
          </h2>
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
            <h2 className="text-base Md:text-xl tracking-wider">Need help?</h2>
            <div className="text-gray-400">
              <li>Contact us</li>
              <li>UAE@gmail.com</li>
            </div>
          </ul>
        </div>
      </div>

      <div className="flex items-center pt-4 md:justify-evenly">
        <div className="border-dashed border-t-2 w-[80%]">
          <div className="flex flex-col text-center items-center sm:flex sm:items-start sm:flex-col sm:bg-red-900  md:justify-between pt-5 flex-wrap">
            <div>
              <h4 className="pb-3">Copyright © 2023</h4>
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
