import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "380px",
  height: "400px",
};

const center = {
  lat: 0.45636051189202853,
  lng: 34.09229818611026,
};

const stages = [
  {
    lat: 0.27636303993582334,
    lng: 34.10171263018137,
  },
  {
    lat: 0.45636051189202853,
    lng: 34.09229818611026,
  },
];

function StageMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCPoKJIrQ3hataO1CrE2Wntr6eFAQbztmY",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="border rounded-xl w-full object-contain">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        {stages.map((point, i) => (
          <MarkerF key={i} position={point}></MarkerF>
        ))}
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(StageMap);
