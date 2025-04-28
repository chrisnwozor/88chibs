import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="text-center">
        <div className="w-max flex item-center gap-2 mx-auto">
          <Mail />
          88chibs@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Chibuike Nwozor. All rights reserved.</p>
        <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://www.instagram.com/eighty_8_brand/">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
