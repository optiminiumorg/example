import React from 'react';
import outroData from '../data/outro';

function Footer() {
  const linkStyle = {
    color: 'rgb(234, 179, 8)',
  };

  const [outro] = outroData;

  return (
    <div className="py-5 text-center">
      <p className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
        {outro.text}
        {/* <a
          href="https://www.fiverr.com/s2/3001fc81b1"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          {' '}
          here
        </a>
        . */}
      </p>
      <p className="text-sm mt-2  opacity-50">
        &copy; {new Date().getFullYear()} {outro.name}. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
