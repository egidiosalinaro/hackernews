import { useEffect, useState } from 'react';
import { ButtonWrapper, Footer } from '../styles/buttonStyle.js';
import Refresh from '../img/refresh.png';

export const Button = () => {
  const [more, MoreToSee] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      MoreToSee(
        Math.ceil(window.innerHeight + window.scrollY) <
          document.documentElement.scrollHeight
      );
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <Footer className={`${more ? 'more' : ''}`}>
      <ButtonWrapper id="button">
        <img src={Refresh} alt="load more" width={16} />
        Load More
        <span className="loading">
          <span></span>
        </span>
      </ButtonWrapper>
    </Footer>
  );
};
