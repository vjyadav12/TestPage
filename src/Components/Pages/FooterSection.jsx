import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <h2 className="text-yellow-500 text-2xl font-bold mb-4">LANDAS</h2>
          <p className="mb-1">CEO: Jang Chang-jin</p>
          <p className="mb-1">Business Registration Number: 201-86-15245</p>
          <p className="mb-1">
            6F, 139 Dasan-ro, Jung-gu, Seoul (Landas Building)
          </p>
          <p className="mb-1">E-commerce Registration: Jung-gu No. 0575</p>
          <p className="mb-1">Data Protection Officer: Choi Joo-yeon</p>
        </div>

        {/* Right Column */}
        <div>
          <p className="mb-1">
            <strong>Main Number & AS Inquiry:</strong> 1661-6244
          </p>
          <p className="mb-1">Weekdays: 09:00 ~ 18:00</p>
          <p className="mb-1">Bank: IBK (Industrial Bank of Korea)</p>
          <p className="mb-1">Account Number: 213-111127-04-035</p>
          <p className="mb-1">Account Holder: Landas Co., Ltd.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-6 text-center">
        <div className="mb-2 space-x-4">
          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/terms" className="hover:text-white">
            Terms of Use
          </a>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Copyright © WWW.ldsb2bmall.com All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
