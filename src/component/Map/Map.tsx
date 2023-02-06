import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '200px',
    height: '200px'
  };
  
  const center = {
    lat: 49.3337608,
    lng: 18.7383083,
  };

const Map = () => {
    return (
        <LoadScript
          googleMapsApiKey="YOUR_API_KEY"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
          </GoogleMap>
        </LoadScript>
      )
}
export default Map
