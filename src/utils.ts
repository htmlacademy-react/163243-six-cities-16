import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export const capitalizeLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getRandomArrayElement = <T>(items: T[]) => items[Math.floor(Math.random() * items.length)];

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

