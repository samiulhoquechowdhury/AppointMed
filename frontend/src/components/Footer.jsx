import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className=" flex">
      <div className="flex items-center justify-between">
        {/* ---Left Section---- */}
        <div className="w-1/3">
          <img src={assets.logo} alt="" width={60} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugit voluptate recusandae accusantium quis. Ipsam perspiciatis
            sunt, esse maxime autem ex dolore eveniet quam ratione culpa est
            debitis sapiente aliquam?
          </p>
        </div>
        {/* certer section */}
        <div>
          <p>COMPANY</p>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* right section */}
        <div>
          <p>GET IN TOUCH</p>
          <ul>
            <li>+91-9876543210</li>
            <li>developer@sam.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
