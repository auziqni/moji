"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
import { mapContainerStyle, center, options } from "@/lib/mapsettings";
import { type } from "os";

type MyLocation = {
  lat: number;
  lng: number;
} | null;
export default function Home() {
  // const [markers, setMarkers] = useState<Data[]>([]);

  const [selected, setSelected] = useState<Data>(null);
  const [myLocation, setMyLocation] = useState<MyLocation | null>(null);
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    // libraries: ["places"],
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAPS_API_KEY!,
  });

  //todo : ini harunsya bukan any
  const mapRef = useRef<any | null>(null);

  const onMapLoad = useCallback((map: any) => {
    mapRef.current = map;
  }, []);
  const panTo = useCallback(({ lat, lng }: any) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
    setMyLocation({ lat, lng });
  }, []);

  const handleSetLocationToNull = () => {
    setMyLocation(null);
  };

  if (loadError) return <div>Error . . .</div>;
  if (!isLoaded) return <div>Loading . . .</div>;
  return (
    <main>
      <Locate panTo={panTo} />
      <button
        className="z-10 border-none absolute top-32 right-6  h-6 w-6 bg-red-700"
        onClick={handleSetLocationToNull}
      ></button>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {myLocation ? (
          <Marker
            key={0}
            position={{ lat: myLocation.lat, lng: myLocation.lng }}
          ></Marker>
        ) : (
          <div></div>
        )}
      </GoogleMap>
    </main>
  );
}

function Locate({ panTo }: any) {
  return (
    <button
      className="z-10 bg-transparent border-none absolute top-20 right-6  h-6 w-6"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.svg" alt="compass" />
    </button>
  );
}
