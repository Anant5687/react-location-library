import { useState, useEffect } from 'react';

interface postionType {
  latitude: number | null;
  longitude: number | null;
}

function useLocation() {
  const [position, setPosition] = useState<postionType>({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('COMING');
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      console.log('Geolocation is not available in your browser.');
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return { position, error };
}

export default useLocation;
