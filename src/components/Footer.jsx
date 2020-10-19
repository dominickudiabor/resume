import React, { useState } from 'react';

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: '#f5f5f5' });

  return (
    <footer style={bgStyle} className='mt-auto py-3 text-center'>
      {/* <strong> &copy; 2019 </strong>*/}
      <i className='fas fa-code'></i> with <i className='fab fa-react'></i> by{' '}
      <a
        className='badge badge-dark'
        rel='noopener'
        href='https://github.com/dominickudiabor'
        aria-label='My GitHub'
      >
        Dominic Kudiabor
      </a>{' '}
      <p>
        <small className='text-muted'> All right reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
