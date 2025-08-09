import React from 'react';

export default function WindowTracker() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const watchWindowWidth = () => setWidth(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener('resize', () => watchWindowWidth);

    return () => {
      window.removeEventListener('resize', () => watchWindowWidth);
    };
  }, []);

  return <h1>Window width: {width}</h1>;
}
