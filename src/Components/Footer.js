import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faYoutube,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import applestore from '../Images/appstore.svg';

// Footer with link to the original website and
// social icons etc.

const Footer = () => {
  return (
    <div className="bg-[#4d4d4f]">
      <div container mx-auto px-4>
        <div className="flex justify-center font-assistant text-2xl text-bold">
          <a
            href="https://thesolesupplier.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 no-underline "
          >
            Link to SoleSupplier Site
          </a>
        </div>

        <div className="flex flex-row justify-center p-[80px]">
          <div className="flex flex-col space-y-4 pr-7">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-[#b7b7b8] size-[25px] pr-2 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-[#b7b7b8]  size-[25px] pr-2 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-[#b7b7b8]  size-[25px] pr-2 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-[#b7b7b8]  size-[25px] pr-2 cursor-pointer"
            />
          </div>
          <div className="flex flex-col pr-10">
            <h3 className="footer-list cursor-pointer">Terms</h3>
            <h3 className="footer-list cursor-pointer">Seller Terms</h3>
            <h3 className="footer-list cursor-pointer">Privacy</h3>
            <h3 className="footer-list cursor-pointer">About</h3>
            <h3 className="footer-list cursor-pointer">Contact</h3>
            <h3 className="footer-list cursor-pointer">Meet The Team</h3>
            <h3 className="footer-list cursor-pointer">Editorial Policy</h3>
            <h3 className="footer-list cursor-pointer">Careers</h3>
          </div>
          <div className="w-[350px] space-y-0">
            <h3 className="footer-h3">The Sole Supplier</h3>
            <h3 className="footer-h3">3rd Floor</h3>
            <h3 className="footer-h3">86-90 Paul Street</h3>
            <h3 className="footer-h3">London EC2A 4NE</h3>
          </div>
          <div>
            <h3 className="footer-h3">
              Get the latest releases, dates, news and your<br></br> favourite
              brands on The Sole Supplier app.
            </h3>
            <img
              src={applestore}
              alt="applestore"
              className="cursor-pointer pb-10 pt-3"
            ></img>
            <h4 className="footer-registry">
              © 2024 TomTurnerDev® . All rights Reserved® Company Reg No. 123456
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
