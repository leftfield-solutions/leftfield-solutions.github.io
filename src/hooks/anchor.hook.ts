import { useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';

export const useScrollToAnchor = (offset = 100) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash);

      if (element) {
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // // Remove the hash and trailing slash from the URL
          // let pathname = location.pathname;

          // // Remove trailing slash if it exists
          // if (pathname.endsWith('/')) {
          //   pathname = pathname.slice(0, -1);
          // }

          // navigate(
          //   {
          //     ...location,
          //     pathname: pathname, // Use the modified pathname
          //     hash: ''
          //   },
          //   { replace: true }
          // );

          // lastHash.current = '';
        }, 100);
      }
    }
  }, [location, offset]);

  return null;
};
