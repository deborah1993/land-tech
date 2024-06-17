"use client";

import * as React from "react";
import Map, { Layer, Marker, Source } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./App.css";
import WidgetOne from "@/components/widgets/widget-one";
import HeroTabs from "@/components/tabs/index.js";
import { BaseBoard } from "@/components/boards/base.js";
import SummaryCard from "@/components/cards/summary.js";
import axios from "axios";
import ManagementPanel from "@/components/widgets/management-panel";

const markers = [
  { lng: -82.6316, lat: 27.7651, description: "The Dali Museum" },
  { lng: -82.7415, lat: 27.725, description: "St. Pete Beach" },
  { lng: -82.6463, lat: 27.7886, description: "Sunken Gardens" },
  { lng: -82.7186, lat: 27.637, description: "Fort De Soto Park" },
  {
    lat: 27.77822638054447,
    lng: -82.63680448083112,
    description: "Palladium Theater",
  },
  {
    lat: 27.768504660365558,
    lng: -82.63304024263473,
    description: "Al Lang Stadium",
  },
  {
    lng: -82.64391235122771,
    lat: 27.77166204942377,
    description: "Chihuly Collection",
  },
  {
    lng: -82.63778236932299,
    lat: 27.773412599391264,
    description: "Saturday Morning Market",
  },
  {
    lng: -82.79130939880979,
    lat: 27.845725974574158,
    description: "Studio Movie Grill - Seminole",
  },
  {
    lng: -82.7752101652392,
    lat: 27.84403367921541,
    description: "Lake Seminole Park",
  },
  {
    lng: -82.73348340267069,
    lat: 27.79699546907014,
    description: "Tyrone Square",
  },
];

function Home() {
  const [widget, setWidget] = React.useState({
    lastSold: "16,500,000.00 on 04/07/17",
    property: "Elite training",
    address: "4055 Tyrone Blvd N, St. Petersburg, FL 33709, United States",
    lotArea: "5,287",
    owner: "Timothy Johnson",
    externalLink: "https://www.isielitetraining.com/locations/st-pete/",
  });
  const [data, setData] = React.useState();
  const [show, setShow] = React.useState(0);

  const handleChange = (event, newValue) => {
    setShow(newValue);
  };
  const [card, setCard] = React.useState({});
  const [showSummary, setShowSummary] = React.useState(false);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://api.maptiler.com/data/93dc3483-bf44-40bb-9e97-12f4c21f98c4/features.json?key=8cIbWWiWdp9kG2sX2lj8"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching the GeoJSON data", error);
      }
    };

    getData();
  }, []);

  return (
    <div
      className="App"
      style={{ position: "relative", display: "flex", height: "100%" }}
    >
      <HeroTabs show={show} handleChange={handleChange} setWidget={setWidget} />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
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
          style={{ width: "100%", height: "100vh" }}
          mapStyle="https://api.maptiler.com/maps/fc09eb56-b954-4808-8b36-f146ca7c5dfe/style.json?key=8cIbWWiWdp9kG2sX2lj8"
        >
          {markers.map((element, i) => (
            <Marker
              latitude={element.lat}
              longitude={element.lng}
              color="tomato"
              onClick={() =>
                setWidget({
                  lastSold: "16,500,000.00 on 04/07/17",
                  property: element.description,
                  address:
                    "4055 Tyrone Blvd N, St. Petersburg, FL 33709, United States",
                  lotArea: "5,287",
                  owner: "Timothy Johnson",
                  externalLink:
                    "https://www.isielitetraining.com/locations/st-pete/",
                })
              }
            />
          ))}
          {data && (
            <Source id="my-data" type="geojson" data={data}>
              <Layer
                id="polygon"
                type="fill"
                source="https://api.maptiler.com/maps/streets/style.json?key=8cIbWWiWdp9kG2sX2lj8"
                paint={{
                  "fill-color": "#888888",
                  "fill-opacity": 0.4,
                }}
              />
              <Layer
                id="outline"
                type="line"
                source="https://api.maptiler.com/maps/streets/style.json?key=8cIbWWiWdp9kG2sX2lj8"
                paint={{
                  "line-color": "#000000",
                  "line-width": 2,
                }}
              />
            </Source>
          )}
        </Map>

        {/* <CloroplethMap /> */}
      </div>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          opacity: show === 1 ? 1 : 0,
          transition: "opacity 2s ease",
          zIndex: show === 1 ? 3 : 1,
        }}
      >
        <Map
          mapLib={maplibregl}
          initialViewState={{
            latitude: 27.852282053282245,
            longitude: -82.78105164493117,
            zoom: 14,
          }}
          style={{ width: "100%", height: "100vh" }}
          mapStyle="https://api.maptiler.com/maps/fc09eb56-b954-4808-8b36-f146ca7c5dfe/style.json?key=8cIbWWiWdp9kG2sX2lj8"
        >
          {markers.map((element, i) => (
            <Marker
              latitude={element.lat}
              longitude={element.lng}
              color="tomato"
              onClick={() =>
                setWidget({
                  lastSold: "16,500,000.00 on 04/07/17",
                  property: element.description,
                  address:
                    "4055 Tyrone Blvd N, St. Petersburg, FL 33709, United States",
                  lotArea: "5,287",
                  owner: "Timothy Johnson",
                  externalLink:
                    "https://www.isielitetraining.com/locations/st-pete/",
                })
              }
            />
          ))}
        </Map>
      </div>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
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
          style={{ width: "100%", height: "100vh" }}
          mapStyle="https://api.maptiler.com/maps/fc09eb56-b954-4808-8b36-f146ca7c5dfe/style.json?key=8cIbWWiWdp9kG2sX2lj8"
        >
          {markers.map((element, i) => (
            <Marker
              latitude={element.lat}
              longitude={element.lng}
              color="tomato"
              onClick={() =>
                setWidget({
                  lastSold: "16,500,000.00 on 04/07/17",
                  property: element.description,
                  address:
                    "4055 Tyrone Blvd N, St. Petersburg, FL 33709, United States",
                  lotArea: "5,287",
                  owner: "Timothy Johnson",
                  externalLink:
                    "https://www.isielitetraining.com/locations/st-pete/",
                })
              }
            />
          ))}
        </Map>
      </div>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
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
          style={{ width: "100%", height: "100vh" }}
          mapStyle="https://api.maptiler.com/maps/fc09eb56-b954-4808-8b36-f146ca7c5dfe/style.json?key=8cIbWWiWdp9kG2sX2lj8"
        >
          {markers.map((element, i) => (
            <Marker
              latitude={element.lat}
              longitude={element.lng}
              color="tomato"
              onClick={() =>
                setWidget({
                  lastSold: "16,500,000.00 on 04/07/17",
                  property: element.description,
                  address:
                    "4055 Tyrone Blvd N, St. Petersburg, FL 33709, United States",
                  lotArea: "5,287",
                  owner: "Timothy Johnson",
                  externalLink:
                    "https://www.isielitetraining.com/locations/st-pete/",
                })
              }
            />
          ))}
        </Map>
      </div>

      {show !== 3 ? (
        <WidgetOne widget={widget} />
      ) : show === 3 ? (
        <div
          style={{
            position: "fixed",
            top: "1%",
            right: "1%",
            height: "100%",
            zIndex: 5,
            width: "65%",
          }}
        >
          <ManagementPanel widget={widget} />
          <BaseBoard setShowSummary={setShowSummary} setCard={setCard} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Home;
