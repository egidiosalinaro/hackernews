import { useEffect, useState } from 'react';
import { HeaderStyle } from '../styles/headerStyle.js';

export const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <HeaderStyle className={`${sticky ? 'sticky' : ''}`}>
      <h1>
        <a href=".">Hacker News</a>
      </h1>
      <div className="sub-heading">
        <h2>by Egidio Salinaro</h2>
        <span>•</span>
        <h5>
          <a href=".">refresh stories</a>
        </h5>
      </div>
    </HeaderStyle>
  );
};
