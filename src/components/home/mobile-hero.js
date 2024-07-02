"use client";

import * as React from "react";
import { Box, Button, Collapse, Typography } from "@mui/material";
import Map, { Layer, Marker, Source } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import axios from "axios";
import { markers } from "@/lib/hard-code-data";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import CollapsibleMobile from "../widgets/collapsible-mobile";
import TabsMobile from "../tabs/tabs-mobile";
import { CustomMarkerIcon } from "@/lib/utils/marker";

function MobileHero() {
  const [widget, setWidget] = React.useState(markers[0]);
  const [data, setData] = React.useState();
  const [show, setShow] = React.useState(1);
  const [expand, setExpand] = React.useState(false);
  const [formData, setFormData] = React.useState({});

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
    <Box
      className="App"
      sx={{
        position: "relative",
        display: { xs: "flex", lg: "none" },
        height: "100%",
        minHeight: "100dvh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "90vw",
          position: "absolute",
          top: "25dvh",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
        }}
      >
        {!expand && <CollapsibleMobile widget={widget} data={formData} />}
      </div>

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
          style={{ width: "100%", height: "100dvh" }}
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
            longitude: -82.55123628988616,
            zoom: 9.3,
          }}
          scrollZoom={false}
          dragPan={false}
          style={{
            width: "100%",
            height: "100dvh",
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
          style={{ width: "100%", height: "100dvh" }}
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
          style={{ width: "100%", height: "100dvh" }}
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

      <Box
        className="tabs-mobile"
        sx={{
          height: expand ? "85dvh" : "55px",
          marginTop: "auto",
          width: "100%",
          borderRadius: "40px 40px 0px 0px",
          transition: "height 0.3s",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100%",
            width: "100%",
          }}
        >
          <div>
            <Box
              sx={{
                width: "100%",
                position: "relative",
                borderRadius: "40px 40px 0px 0px",
              }}
            >
              <Collapse
                orientation="vertical"
                in={expand}
                collapsedSize={60}
                sx={{ width: "100%" }}
              >
                <Box
                  sx={{
                    width: "90%",
                    position: "absolute",
                    top: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 1000,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                  }}
                >
                  <Button
                    sx={{
                      width: "100%",
                      color: "white",
                      fontSize: "30px",
                      position: "relative",
                      top: -20,
                      zIndex: 1000,
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => setExpand(!expand)}
                  >
                    {expand ? (
                      <Box>
                        <FiChevronDown
                          sx={{
                            color: "#FFF",
                            stroke: "#FFF",
                            fill: "#FFF",
                          }}
                        />
                      </Box>
                    ) : (
                      <Box>
                        <FiChevronUp
                          sx={{
                            color: "#FFF",
                            stroke: "#FFF",
                            fill: "#FFF",
                          }}
                        />
                      </Box>
                    )}
                    <Typography
                      sx={{
                        position: "relative",
                        top: -20,
                        fontSize: "14px",
                        textTransform: "none",
                        fontWeight: 600,
                        letterSpacing: "1px",
                      }}
                    >
                      Find you own sites
                    </Typography>
                  </Button>
                </Box>

                <TabsMobile
                  setFormData={setFormData}
                  setExpand={setExpand}
                  show={show}
                  handleChange={handleChange}
                  setWidget={setWidget}
                />
              </Collapse>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default MobileHero;
