import React, { useEffect, useState } from 'react';
import { getStoryIds } from './services/hackerNewsApi';

export const App = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    setStoryIds('hell00o');
  }, []);

  return <p>{storyIds}</p>;
};
