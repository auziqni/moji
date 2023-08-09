"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
  Circle,
  Polyline,
} from "@react-google-maps/api";
import {
  mapContainerStyle,
  center,
  centerlampung,
  options,
  closeOptions,
  middleOptions,
  farOptions,
} from "@/lib/mapsettings";
import { parajamaah } from "@/lib/mock";

export default function Map() {
  const [viewweather, setviewweather] = useState(false);
  const [selected, setSelected] = useState<Jamaah | null>(null);
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

  const changeIconMarker = () => {
    setviewweather(!viewweather);
  };

  if (loadError) return <div>Error . . .</div>;
  if (!isLoaded) return <div>Loading . . .</div>;

  function getIconMarker(jamaah: Jamaah) {
    if (viewweather) {
      if (jamaah.temp < 30) {
        return "/wlow.png";
      } else if (jamaah.temp > 40) {
        return "/whigh.png";
      } else {
        return "/wmed.png";
      }
    } else {
      if (jamaah.gendermale) {
        return "/place_male.png";
      } else {
        return "/place_female.png";
      }
      //   jamaah?.gendermale ? "/place_male.png" : "/place_female.png";
    }
  }
  return (
    <main>
      <LocateMe panTo={panTo} />

      <LocateCenter panTo={panTo} />

      <button
        className="z-10 border-none absolute top-32 right-6"
        onClick={changeIconMarker}
      >
        {viewweather ? (
          <img src="/weather.png" alt="compass" className="h-5 w-5" />
        ) : (
          <img src="/place_male.png" alt="compass" className="h-5 w-5" />
        )}
      </button>

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {/* todo: disable click on other pin */}
        {/* todo: cluster pin */}
        {myLocation ? (
          <>
            <Marker
              key={0}
              position={{ lat: myLocation.lat, lng: myLocation.lng }}
              icon={{
                url: "/me.png",
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(45, 45),
              }}
            ></Marker>
            <Circle center={myLocation} radius={2500} options={closeOptions} />
            <Circle center={myLocation} radius={5000} options={middleOptions} />
            <Circle center={myLocation} radius={7500} options={farOptions} />
          </>
        ) : (
          <></>
        )}

        {parajamaah.map((jamaah) => (
          <Marker
            key={jamaah.id}
            position={{ lat: jamaah?.lat ?? 0, lng: jamaah?.lng ?? 0 }}
            onClick={() => {
              setSelected(jamaah);
            }}
            icon={{
              url: `${getIconMarker(jamaah)}`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(45, 45),
            }}
          >
            <div className="h-5 w-24 bg-red-500">qweqweqweqweqweqweqwe</div>
          </Marker>
        ))}

        {selected ? (
          <div>
            <Polyline
              path={[
                { lat: myLocation?.lat ?? 0, lng: myLocation?.lng ?? 0 },
                { lat: selected.lat, lng: selected.lng },
              ]}
            />
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div className="text-black ">
                <h2 className=" text-lg">
                  {selected.name} <span>{selected.age} </span>
                </h2>
                <h2 className="text-md">
                  <span>{selected.negara}</span>
                  {", "}
                  <span>{selected.rombongan}</span>
                </h2>
                <h2 className="text-md">
                  <span>temp: </span> <span>{selected.temp}</span>{" "}
                  <span>humid: </span> <span>{selected.humid}</span>
                </h2>
                <h2 className="text-md"></h2>
              </div>
            </InfoWindow>
          </div>
        ) : null}
      </GoogleMap>
    </main>
  );
}

function LocateMe({ panTo }: any) {
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

function LocateCenter({ panTo }: any) {
  return (
    <button
      className="z-10 bg-transparent border-none absolute top-20 right-16  h-6 w-6"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: centerlampung.lat,
              lng: centerlampung.lng,
            });
          },
          () => null
        );
      }}
    >
      <img src="/apartments.png" alt="compass" className="h-5 w-5" />
    </button>
  );
}
