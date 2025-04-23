import { useEffect } from 'react';

const useInfiniteScroll = ({ loading, hasMore, callback }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      if (scrollTop + windowHeight >= scrollHeight - 100 && !loading && hasMore) {
        callback(); // Ejecuta lo que vos querés que pase
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore, callback]);
};

export default useInfiniteScroll;