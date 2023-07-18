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
        {outro.text}.
      </p>

      <p className="text-sm mt-2  opacity-50">
        &copy; {new Date().getFullYear()} {outro.name}. All rights reserved.
      </p>

      <p className="text-sm mt-2  opacity-50">
        Return to {''}
        <a
          href="https://optiminium.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Optiminium.org
        </a>{' '}
      </p>
    </div>
  );
}

export default Footer;
