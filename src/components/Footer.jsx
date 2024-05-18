import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <footer className="bg-black text-white p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">BE THE FIRST TO KNOW</h2>
          <p className="mb-2">Sign up for updates from mettā muse.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="p-2 rounded-l bg-white text-gray border border-gray-700 mr-3"
            />
            <button className="p-2 bg-black border border-white rounded">SUBSCRIBE</button>
          </div>
        </div>
        <div className="mb-4 md:mb-0 ">
          <h2 className="text-lg font-bold border-t   border-white pt-6 sm:border-0 ">CONTACT US</h2>
        
        <p>+44 221 133 5360</p>
        <p className="mb-5">customercare@mettamuse.com</p>
        <div className=" border-t  border-white pt-6 sm:border-0 ">
        <p className=" font-bold " >CURRENCY</p>
        <p>USD</p>
        <p className="text-sm hidden sm:block text-gray-400 mb-4">
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </p></div></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between   border-t border-white pt-6">
        <div className="mb-4 md:mb-0">
          <div
            className="flex items-center justify-between cursor-pointer font-medium text-sm mt-1 "
            onClick={toggleDropdown}
          >
            <h2 className="text-lg font-bold ">mettā muse</h2>
            <span className=" sm:hidden">
            
              {dropdownOpen ? (
                <FaChevronUp className="text-white " />
              ) : (
                <FaChevronDown className="text-white" />
              )}
            </span>
          </div>
          {dropdownOpen && (
            <ul className=" dropdown">
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          )}
        </div>
        <div className="mb-4 md:mb-0 border-t border-white  pt-6 sm:border-0 ">
          <div
            className="flex items-center justify-between cursor-pointer font-medium text-sm mt-1 "
            onClick={toggleDropdown}
          >
            <h2 className="text-lg font-bold">QUICK LINKS</h2>
            <span className=" sm:hidden">
              {dropdownOpen ? (
                <FaChevronUp className="text-white " />
              ) : (
                <FaChevronDown className="text-white" />
              )}
            </span>
          </div>
          {dropdownOpen && (
            <ul className="dropdown">
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          )}
        </div>
        <div className=" border-t border-white  pt-6 sm:border-0 ">
          <div
            className="flex items-center justify-between  cursor-pointer font-medium text-sm mt-1 "
            onClick={toggleDropdown}
          >
            <h2 className="text-lg font-bold">FOLLOW US</h2>
            <span className=" sm:hidden">
              {dropdownOpen ? (
                <FaChevronUp className="text-white " />
              ) : (
                <FaChevronDown className="text-white" />
              )}
            </span>
          </div>
          <div className="flex space-x-4 mb-4 mix-blend-difference">
            {dropdownOpen && (
              <ul className=" dropdown flex">
                <Link to="#" aria-label="Instagram">
                  <img
                    src="instagram.png"
                    alt="Instagram"
                    className="h-[120px] w-[120px] mx-1 object-contain "
                  />
                </Link>
                <Link to="#" aria-label="LinkedIn">
                  <img
                    src="linkedin.png"
                    alt="LinkedIn"
                    className="h-[120px] w-[120px] mx-1 object-contain "
                  />
                </Link>
              </ul>
            )}
          </div>
          <h2 className="text-lg font-bold  border-t mb-5  border-white pt-6 sm:border-0 ">mettā muse ACCEPTS</h2>
          <div className=" w-[100%]  md:flex flex mr-1  px-0 justify-between">
            <Link to="#">
              <img
                src="google-pay.png"
                alt="Google Pay"
                className="h-[30px] w-[80px] mx-1 object-contain p-1 border rounded bg-white"
              />
            </Link>
            <Link to="#">
              <img
                src="visa-credit-card.png"
                alt="Visa"
                className="h-[30px] w-[80px] mx-1 object-contain p-1 border rounded bg-white"
              />
            </Link>
            <Link to="#">
              <img
                src="mastercard.png"
                alt="Mastercard"
                className="h-[30px] w-[80px] mx-1 object-contain p-1 border rounded bg-white"
              />
            </Link>
            <Link to="#">
              <img
                src="amex.png"
                alt="American Express"
                className="h-[30px] w-[80px] mx-1 object-contain p-1 border rounded bg-white"
              />
            </Link>
            <Link to="#">
              <img
                src="apple-pay.png"
                alt="Apple Pay"
                className="h-[30px] w-[80px] mx-1 object-contain p-1 border rounded bg-white"
              />
            </Link>
            <Link to="#">
              <img
                src="paypal.png"
                alt="PayPal"
                className="h-[30px] w-[80px] mx-1 object-contain p-1 border rounded bg-white"
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-6">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white p-6">
//       <div className="flex flex-col md:flex-row md:justify-between md:items-center">
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-lg font-bold">BE THE FIRST TO KNOW</h2>
//           <p className="mb-2">Sign up for updates from mettā muse.</p>
//           <div className="flex">
//             <input
//               type="email"
//               placeholder="Enter your e-mail..."
//               className="p-2 rounded-l bg-gray-800 text-white border border-gray-700"
//             />
//             <button className="p-2 bg-gray-700 rounded-r">SUBSCRIBE</button>
//           </div>
//         </div>
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-lg font-bold">CONTACT US</h2>
//           <p>+44 221 133 5360</p>
//           <p>customercare@mettamuse.com</p>
//           <p className="mt-2">CURRENCY</p>
//           <p>USD</p>
//           <p className="text-sm text-gray-400">
//             Transactions will be completed in Euros and a currency reference is available on hover.
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row justify-between mt-6 border-t border-gray-700 pt-6">
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-lg font-bold">mettā muse</h2>
//           <ul>
//             <li>About Us</li>
//             <li>Stories</li>
//             <li>Artisans</li>
//             <li>Boutiques</li>
//             <li>Contact Us</li>
//             <li>EU Compliances Docs</li>
//           </ul>
//         </div>
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-lg font-bold">QUICK LINKS</h2>
//           <ul>
//             <li>Orders & Shipping</li>
//             <li>Join/Login as a Seller</li>
//             <li>Payment & Pricing</li>
//             <li>Return & Refunds</li>
//             <li>FAQs</li>
//             <li>Privacy Policy</li>
//             <li>Terms & Conditions</li>
//           </ul>
//         </div>
//         <div>
//           <h2 className="text-lg font-bold">FOLLOW US</h2>
//           <div className="flex space-x-4 mb-4">
//             <a href="#" aria-label="Instagram">
//               <img src="instagram-icon.svg" alt="Instagram" />
//             </a>
//             <a href="#" aria-label="LinkedIn">
//               <img src="linkedin-icon.svg" alt="LinkedIn" />
//             </a>
//           </div>
//           <h2 className="text-lg font-bold">mettā muse ACCEPTS</h2>
//           <div className="flex space-x-2">
//             <img src="googlepay-icon.svg" alt="Google Pay" />
//             <img src="visa-icon.svg" alt="Visa" />
//             <img src="mastercard-icon.svg" alt="Mastercard" />
//             <img src="amex-icon.svg" alt="American Express" />
//             <img src="applepay-icon.svg" alt="Apple Pay" />
//             <img src="paypal-icon.svg" alt="PayPal" />
//           </div>
//         </div>
//       </div>
//       <p className="text-center text-gray-500 mt-6">
//         Copyright © 2023 mettamuse. All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;
