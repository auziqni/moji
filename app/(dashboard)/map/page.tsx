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

export default function Home() {
  // const [markers, setMarkers] = useState<Data[]>([]);
  const [selected, setSelected] = useState<Data>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    // libraries: ["places"],
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAPS_API_KEY!,
  });

  const mapRef = useRef();
  //todo : ini harunsya bukan any
  const onMapLoad = useCallback((map: any) => {
    mapRef.current = map;
  }, []);

  if (loadError) return <div>Error . . .</div>;
  if (!isLoaded) return <div>Loading . . .</div>;
  return (
    <main>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onLoad={onMapLoad}
      ></GoogleMap>
    </main>
  );
}
