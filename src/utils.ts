import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const capitalizeLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const getRandomArrayElement = <T>(items: T[]) => items[Math.floor(Math.random() * items.length)];

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;


export { capitalizeLetter, getRandomArrayElement, ScrollToTop };
