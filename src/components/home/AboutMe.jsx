import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  aboutHeading,
  aboutDescription,
  showInstaProfilePic,
  instaLink,
  instaUsername,
  instaQuerry,
} from '../../data/configurations.json';

const AboutMe = () => {
  const [instaProfilePic, setInstaProfilePic] = useState('');
  const [showInsta, setShowInsta] = useState(showInstaProfilePic);

  useEffect(() => {
    if (showInsta) {
      handleRequest();
    }
  }, [showInsta]);

  const handleRequest = (e) => {
    axios
      .get(instaLink + instaUsername + instaQuerry)
      .then((response) => {
        // handle success
        // console.log(response.data.graphql);
        return setInstaProfilePic(
          response.data.graphql.user.profile_pic_url_hd
        );
      })
      .catch((error) => {
        // handle error
        setShowInsta(false);
        return console.error(error.message);
      })
      .finally(() => {
        // always executed
      });
  };

  return (
    <div id='aboutme' className='jumbotron jumbotron-fluid m-0'>
      <div className='container container-fluid p-5'>
        <div className='row'>
          {showInsta && (
            <div className='col-5 d-none d-lg-block align-self-center'>
              <img
                className='border border-secondary rounded-circle'
                src={instaProfilePic}
                alt='profilepicture'
              />
            </div>
          )}
          <div className={`col-lg-${showInsta ? '7' : '12'}`}>
            <h1 className='display-4 mb-5 text-center'>{aboutHeading}</h1>
            <p className='lead text-left'>{aboutDescription}</p>
            <p className='lead text-left'>
              <a
                className='btn btn-outline-dark btn-lg'
                href={
                  'https://assets.ctfassets.net/449mcwf87tn4/4gvnuep6RWXFta1X7Nomgn/f03bbdebcc578f06ce89fdd355429552/Dominic_Travis_Kudiabor__-_Integrify_CV_-_25.09.2020.pdf'
                }
                target='_blank'
                rel='noreferrer noopener'
                role='button'
                aria-label='Resume/CV'
              >
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
