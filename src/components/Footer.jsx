import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-6">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Kishore Reddy Mamidi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
