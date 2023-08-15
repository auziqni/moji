"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
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
  centerjakarta,
  centeroffice,
  options,
  closeOptions,
  middleOptions,
  farOptions,
} from "@/lib/mapsettings";
// import { parajamaah } from "@/lib/mock";
import type { Jamaah, Admin } from "@prisma/client";
import TelegramMessage from "./teleSen";

export default function Map({
  jamaahArr,
  admin,
}: {
  jamaahArr: Jamaah[];
  admin: Admin | null;
}) {
  const [jamaahOutranged, setjamaahOutranged] = useState<Jamaah[]>([]);
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

  useEffect(() => {
    const newArray = jamaahArr.filter((obj: Jamaah) => {
      const distance = calculateDistance(
        myLocation?.lat ?? centerjakarta.lat,
        myLocation?.lng ?? centerjakarta.lng,
        obj.lat ?? centerjakarta.lat,
        obj.lng ?? centerjakarta.lng
      );
      console.log(distance);
      return distance > 7.5;
    });
    myLocation ? setjamaahOutranged(newArray) : "";
  }, [myLocation, jamaahArr]);

  const changeIconMarker = () => {
    setviewweather(!viewweather);
  };

  if (loadError) return <div>Error . . .</div>;
  if (!isLoaded) return <div>Loading . . .</div>;

  function getIconMarker(ismale: boolean, temp: number) {
    if (viewweather) {
      if (temp < 30) {
        return "/wlow.png";
      } else if (temp > 40) {
        return "/whigh.png";
      } else {
        return "/wmed.png";
      }
    } else {
      if (ismale) {
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
          <Image src="/weather.png" alt="compass" height={20} width={20} />
        ) : (
          <Image src="/place_male.png" alt="compass" height={20} width={20} />
        )}
      </button>

      <TelegramMessage
        props={jamaahOutranged}
        idteleuser={admin?.contact ?? null}
      />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={centerjakarta}
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

        {jamaahArr.map((jamaah) => (
          <Marker
            key={jamaah.id}
            position={{ lat: jamaah?.lat ?? 0, lng: jamaah?.lng ?? 0 }}
            onClick={() => {
              setSelected(jamaah);
            }}
            icon={{
              url: `${getIconMarker(jamaah.ismale ?? true, jamaah.temp ?? 30)}`,
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
                { lat: selected?.lat ?? 0, lng: selected?.lng ?? 0 },
              ]}
            />
            <InfoWindow
              position={{ lat: selected?.lat ?? 0, lng: selected?.lng ?? 0 }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div className="text-black ">
                <h2 className=" text-lg">
                  {selected.name} <span>{selected.age} </span>
                </h2>
                <h2 className="text-md">
                  <span>{selected.province}</span>
                  {", "}
                  <span>{selected.group}</span>
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
      <Image src="/compass.svg" alt="compass" height={20} width={20} />
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
              lat: centeroffice.lat,
              lng: centeroffice.lng,
            });
          },
          () => null
        );
      }}
    >
      <Image src="/apartments.png" alt="compass" height={20} width={20} />
    </button>
  );
}

function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = degToRad(lat2 - lat1);
  const dLon = degToRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(lat1)) *
      Math.cos(degToRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

function degToRad(deg: number) {
  return deg * (Math.PI / 180);
}
