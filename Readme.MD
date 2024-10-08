new-react-location is a simple React hook that provides easy access to the user's geolocation. It returns the user's current position (longitude and latitude) or an error if the user denies location access. This package is designed to integrate seamlessly into your React applications, making it effortless to retrieve and manage geolocation data.
<br><br><br>


Installation<br>
To install new-react-location, run the following command:<br>
<br>
npm install new-react-location
<br><br><br>


Example<br>
import React from 'react';<br>
import useLocation from 'new-react-location';<br>

function MyComponent() {
    const { position, error } = useLocation();

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!position) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Your Location:</h2>
            <p>Latitude: {position.latitude}</p>
            <p>Longitude: {position.longitude}</p>
        </div>
    );
}

export default MyComponent;
