"use client";

import * as React from "react";
import Map, { Layer, Marker, Source } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./App.css";
import HeroTabs from "@/components/tabs/index.js";
import { BaseBoard } from "@/components/boards/base.js";
import axios from "axios";
import ManagementPanel from "@/components/widgets/management-panel";
import RightHandPanel from "@/components/widgets/right-hand-panel";
import { markers } from "@/lib/hard-code-data";
import { Box } from "@mui/material";
import { CustomMarkerIcon } from "@/lib/utils/marker";
import MobileHero from "@/components/home/mobile-hero";
import HubspotScript from "@/lib/hs-cookie/hubspotScript";
// import FullStoryScript from "@/lib/fullstoryScript";
// import * as FullStory from "@fullstory/browser";

// if (typeof window !== "undefined") {
//   FullStory.init({ orgId: "o-1ZT2V2-na1" });
// }

function Home() {
  const [widget, setWidget] = React.useState(markers[0]);
  const [data, setData] = React.useState();
  const [show, setShow] = React.useState(1);
  const [card, setCard] = React.useState(markers[0]);

  const handleChange = (event, newValue) => {
    setShow(newValue);
  };

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.maptiler.com/data/93dc3483-bf44-40bb-9e97-12f4c21f98c4/features.json?key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching the GeoJSON data", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <HubspotScript />
      {/* <FullStoryScript /> */}
      <Box
        className="desktop"
        sx={{
          display: { xs: "none", lg: "flex" },
          position: "relative",
          height: "100dvh",
        }}
      >
        <HeroTabs
          show={show}
          handleChange={handleChange}
          setWidget={setWidget}
        />
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100dvh",
            opacity: show === 0 ? 1 : 0,
            transition: "opacity 2s ease",
            zIndex: show === 0 ? 3 : 1,
          }}
        >
          <Map
            mapLib={maplibregl}
            initialViewState={{
              latitude: 27.768613703255071,
              longitude: -82.64043346195938,
              zoom: 13.7,
            }}
            scrollZoom={false}
            dragPan={false}
            style={{ width: "100%", height: "100%" }}
            mapStyle={`https://api.maptiler.com/maps/fc09eb56-b954-4808-8b36-f146ca7c5dfe/style.json?key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`}
          >
            {markers.map((element, i) => (
              <Marker
                latitude={element.lat}
                longitude={element.lng}
                style={{
                  cursor: "pointer",
                }}
                color="tomato"
                onClick={() => setWidget(element)}
              >
                <div className="bounce-container">
                  <div className="bounce2">
                    <CustomMarkerIcon />
                  </div>
                </div>
              </Marker>
            ))}
            {data && (
              <Source id="my-data" type="geojson" data={data}>
                <Layer
                  id="polygon"
                  type="fill"
                  source={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`}
                  paint={{
                    "fill-color": "#888888",
                    "fill-opacity": 0.4,
                  }}
                />
                <Layer
                  id="outline"
                  type="line"
                  source={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`}
                  paint={{
                    "line-color": "#000000",
                    "line-width": 2,
                  }}
                />
              </Source>
            )}
          </Map>
        </div>

        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100dvh",
            opacity: show === 1 ? 1 : 0,
            transition: "opacity 2s ease",
            zIndex: show === 1 ? 3 : 1,
          }}
        >
          <Map
            mapLib={maplibregl}
            initialViewState={{
              latitude: 28.040907605152702,
              longitude: -82.65123628988616,
              zoom: 9.7,
            }}
            scrollZoom={false}
            dragPan={false}
            style={{
              width: "100%",
              height: "100%",
            }}
            mapStyle={`https://api.maptiler.com/maps/fc09eb56-b954-4808-8b36-f146ca7c5dfe/style.json?key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`}
          >
            {markers.map((element, i) => (
              <Marker
                latitude={element.lat}
                longitude={element.lng}
                style={{
                  cursor: "pointer",
                }}
                color="tomato"
                onClick={() => setWidget(element)}
              >
                <div className="bounce-container">
                  <div className="bounce2">
                    <CustomMarkerIcon />
                  </div>
                </div>
              </Marker>
            ))}
          </Map>
        </div>

        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100dvh",
            opacity: show === 2 ? 1 : 0,
            transition: "opacity 2s ease",
            zIndex: show === 2 ? 3 : 1,
          }}
        >
          <Map
            mapLib={maplibregl}
            initialViewState={{
              latitude: 27.77355608584451,
              longitude: -82.63846347842352,
              zoom: 15,
            }}
            scrollZoom={false}
            dragPan={false}
            style={{ width: "100%", height: "100%" }}
            mapStyle={`https://api.maptiler.com/maps/fc09eb56-b954-4808-8b36-f146ca7c5dfe/style.json?key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`}
          >
            {markers.map((element, i) => (
              <Marker
                latitude={element.lat}
                longitude={element.lng}
                style={{
                  cursor: "pointer",
                }}
                color="tomato"
                onClick={() => setWidget(element)}
              >
                <div className="bounce-container">
                  <div className="bounce2">
                    <CustomMarkerIcon />
                  </div>
                </div>
              </Marker>
            ))}
          </Map>
        </div>

        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100dvh",
            opacity: show === 3 ? 1 : 0,
            transition: "opacity 2s ease",
            zIndex: show === 3 ? 3 : 1,
          }}
        >
          <Map
            mapLib={maplibregl}
            initialViewState={{
              latitude: 27.866272594509272,
              longitude: -82.48739865410533,
              zoom: 10,
            }}
            scrollZoom={false}
            dragPan={false}
            style={{ width: "100%", height: "100%" }}
            mapStyle={`https://api.maptiler.com/maps/fc09eb56-b954-4808-8b36-f146ca7c5dfe/style.json?key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`}
          >
            {markers.map((element, i) => (
              <Marker
                latitude={element.lat}
                longitude={element.lng}
                style={{
                  cursor: "pointer",
                }}
                color="tomato"
                onClick={() => setWidget(element)}
              >
                <div className="bounce-container">
                  <div className="bounce2">
                    <CustomMarkerIcon />
                  </div>
                </div>
              </Marker>
            ))}
          </Map>
        </div>

        {show !== 3 ? (
          <RightHandPanel widget={widget} />
        ) : show === 3 ? (
          <div
            style={{
              position: "fixed",
              display: "flex",
              paddingX: "1vw",
              left: "35vw",
              zIndex: 5,
              width: "65vw",
              gap: "5vw",
              alignItems: "flex-start",
            }}
          >
            <BaseBoard setCard={setCard} />
            <ManagementPanel widget={card} />
          </div>
        ) : (
          <></>
        )}
      </Box>

      <MobileHero />
    </>
  );
}

export default Home;
