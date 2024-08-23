import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSmoothScroll = (ref, hash) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === hash && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, ref, hash]);
};

export default useSmoothScroll;