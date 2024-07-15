"use client";

import {
  Box,
  Tab,
  Tabs,
  Typography,
  TextField,
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  MenuItem,
  ListItemText,
  Select,
  Chip,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const defaultOptions = [
  {
    name: "The Dali Museum",
    address: "4055 Tyrone Blvd N, St. Petersburg, FL 33709",
  },
  {
    name: "Fort De Soto Park",
    address: "153 2nd Ave N, St. Petersburg, FL 33701",
  },
  {
    name: "Sunken Gardens",
    address: "4200 54th Ave S, St. Petersburg, FL 33711",
  },
  {
    name: "St. Pete Beach",
    address: "13625 Icot Blvd, Clearwater, FL 33760",
  },
];

const defaultZipCodes = ["32034", "33418", "34690", "3084"];

function NewTabs({ show, handleChange, setWidget }) {
  const [zipCode, setZipCode] = React.useState("");
  const [location, setLocation] = React.useState({ name: "", address: "" });
  const [acresFrom, setAcresFrom] = React.useState(10);
  const [acresTo, setAcresTo] = React.useState(100);
  const [vacantLand, setVacantLand] = React.useState("vacant");
  const [landType, setLandType] = useState(["Vacant"]);
  const [zoning, setZoning] = useState([
    "General (Commercial)",
    "Multi Family (Residential)",
  ]);
  const [flu, setFlu] = useState(["General (Commercial)", "Multi Family"]);

  const handleZoningChange = (event) => {
    setZoning({
      ...zoning,
      [event.target.name]: event.target.checked,
    });
  };

  // FOR CHECK BOX!
  const handleFluChange = (event) => {
    setFlu({
      ...flu,
      [event.target.name]: event.target.checked,
    });
  };

  const handlePlaceChange = (value) => {
    if (value.name === "Fort De Soto Park") {
      setWidget({
        lastSold: "16,500,000.00 ",
        property: "Fort De Soto Park",
        address: "4055 Tyrone Blvd N, St. Petersburg, FL 33709, United States",
        lotArea: "5,287",
        owner: "Timothy Johnson",
        externalLink: "https://www.isielitetraining.com/locations/st-pete/",
      });
    } else if (value.name === "The Dali Museum") {
      setWidget({
        lastSold: "16,500,000.00 ",
        property: "The Dali Museum",
        address: "153 2nd Ave N, St. Petersburg, FL 33701, United States",
        lotArea: "10,253",
        owner: "Ally Capital Group, LLC, Paradise Ventures, Inc",
        externalLink: "https://sundialstpete.com/",
      });
    } else if (value.name === "Sunken Gardens") {
      setWidget({
        lastSold: "16,500,000.00 ",
        property: "Sunken Gardens",
        address: "4200 54th Ave S, St. Petersburg, FL 33711, United States",
        lotArea: "3,971",
        owner: "Jeff Fernandez",
        externalLink: "https://www.starbucks.com/",
      });
    } else if (value.name === "St. Pete Beach") {
      setWidget({
        property: "St. Pete Beach",
        address: "13625 Icot Blvd, Clearwater, FL 33760, United States",
        lotArea: "15,338",
        owner: "Michelle Rud",
        externalLink: "https://www.ihg.com/holidayinnexpress/",
        lastSold: "16,500,000.00 ",
      });
    }
  };

  const handleZipCodeChange = (value) => {
    setZipCode(value);
  };

  const handleLocationChange = (value) => {
    setLocation(value);
  };

  const handlePropertyTypeChange = (e) => {
    setVacantLand(e.target.value);
  };

  const HUBSPOT_API_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.NEXT_PUBLIC_PORTAL_ID}/${process.env.NEXT_PUBLIC_FORM_ID}`;

  const handleSubmit = (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    const url = HUBSPOT_API_URL;

    // Define los datos que deseas enviar
    const data = {
      fields: [
        { name: "lotAreaFrom", value: acresFrom },
        { name: "lotAreaTo", value: acresTo },
        { name: "propertyType", value: landType.join(",") },
        { name: "specificPlace", value: location.name },
        { name: "zoningSelected", value: zoning.join(",") },
        { name: "flu", value: flu.join(",") },
      ],
      context: {
        pageUri: "https://land-tech.vercel.app/",
        pageName: "Land Tech Hero",
      },
    };

    // Convierte los datos a JSON
    const finalData = JSON.stringify(data);

    // Abre la solicitud POST
    xhr.open("POST", url, true);

    // Configura el encabezado para indicar que se envía JSON
    xhr.setRequestHeader("Content-Type", "application/json");

    // Define qué hacer cuando se complete la solicitud
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log("success");
        } else {
          console.log("error");
        }
      }
    };

    // Envía los datos
    xhr.send(finalData);

    // Abre una nueva ventana después de enviar la solicitud
    window.open(
      "https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month"
    );
  };

  const handleOpen = (event) => {
    event.preventDefault();
    // Abre una nueva ventana después de enviar la solicitud
    window.open(
      "https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month"
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: { lg: "auto", xs: "5dvh" },
        paddingY: "1rem",
        marginLeft: "2vw",
        marginBottom: "auto",
        borderRadius: "8px",
        justifyContent: "center",
        position: "relative",
        zIndex: 4,
        width: { lg: "30vw", xs: "100%" },
        boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)",
        maxWidth: "550px",
        background: "rgba(1, 37, 82, 0.75)",
        backdropFilter: "blur(calc(24px / 2))",
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: "95%", height: "auto" }}>
        <Tabs
          value={show}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            paddingX: "0.9vw",
            "& .MuiTabs-flexContainer": {
              justifyContent: "space-evenly",
            },
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
            marginBottom: "1.3vw",
            borderBottom: "2px solid white",
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#02ebc7",
              height: "4px",
              borderRadius: "9999px 9999px 0px 0px",
            },
          }}
        >
          <Tab
            label="Source opportunities"
            color="white"
            value={1}
            {...a11yProps(1)}
            sx={{
              width: "50%",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "20px",
              color: show === 1 ? "#02ebc7 !important" : "#FFF",
            }}
          />
          <Tab
            label="Track deals"
            value={3}
            {...a11yProps(3)}
            sx={{
              width: "50%",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "20px",
              color: show === 3 ? "#02ebc7 !important" : "#FFF",
            }}
          />
        </Tabs>
        <Box
          display="flex"
          width="100%"
          justifyContent="start"
          height="auto"
          alignItems="start"
        >
          {show === 1 ? (
            <Box
              sx={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
              }}
            >
              <Box sx={{ paddingX: "16px" }}>
                <Typography
                  mb="0.5vw"
                  sx={{ mt: { lg: "0px", xs: "16px" } }}
                  color="#FFF"
                  lineHeight="110%"
                  fontWeight={500}
                  fontSize={{ lg: "2vw", xs: "30px" }}
                  fontFamily={"Soin Sans Neue"}
                >
                  Find the perfect site for your development
                </Typography>
                {/* <Typography
                  color="#FFF"
                  fontSize="18px"
                  fontWeight={500}
                  sx={{ display: { xs: "none" } }}
                >
                  Enter your specific sourcing criteria to get a list of sites
                  that match your requirements.
                </Typography> */}
              </Box>

              <Box
                sx={{
                  flex: "1 0 0",
                  width: "100%",
                  padding: "0px 16px 0px 16px",
                  display: "flex",
                  gap: "16px",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  borderRadius: "8px",
                }}
              >
                {/* LOT AREA */}
                {/* <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: "16px",
                    position: "relative",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                    }}
                  >
                    Lot area
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      position: "relative",
                    }}
                  >
                    <Box sx={{ position: "relative", width: "100%" }}>
                      <TextField
                        fullWidth
                        value={acresFrom}
                        type="text"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        placeholder="0 Acre"
                        size="small"
                        sx={{
                          backgroundColor: "#FFF",
                          borderRadius: "8px",
                        }}
                        onChange={(e) => setAcresFrom(+e.target.value)}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          right: "5%",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "gray",
                            fontSize: "16px",
                          }}
                        >
                          Acre
                        </Typography>
                      </Box>
                    </Box>
                    <Typography>-</Typography>
                    <Box sx={{ position: "relative", width: "100%" }}>
                      <TextField
                        fullWidth
                        value={acresTo}
                        type="text"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        placeholder="50 Acre"
                        size="small"
                        sx={{
                          backgroundColor: "#FFF",
                          borderRadius: "8px",
                        }}
                        onChange={(e) => setAcresTo(+e.target.value)}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          right: "5%",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "gray",
                            fontSize: "16px",
                          }}
                        >
                          Acre
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box> */}

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "16px",
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    Property Type
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",

                      width: "100%",
                    }}
                  >
                    <FormGroup
                      column
                      sx={{
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        spacingX: 2,
                        display: "flex",
                        gap: 2,
                      }}
                    >
                      <Box sx={{ display: "flex", width: "47%" }}>
                        <FormControlLabel
                          sx={{
                            width: "50%",
                            "& .MuiFormControlLabel-label": {
                              color: "white",
                              fontSize: "small",
                            },
                          }}
                          control={
                            <Checkbox
                              checked={zoning.core}
                              onChange={handleZoningChange}
                              name="vacant"
                              value="vacant"
                              style={{
                                color: zoning.core ? "#02EBC7" : "#FFF",
                                fill: zoning.core ? "#02EBC7" : "#FFF",
                              }}
                            />
                          }
                          label="Vacant"
                        />
                      </Box>

                      <Box sx={{ display: "flex", width: "47%" }}>
                        <FormControlLabel
                          sx={{
                            width: "50%",
                            "& .MuiFormControlLabel-label": {
                              color: "white",
                              fontSize: "small",
                            },
                          }}
                          control={
                            <Checkbox
                              checked={zoning.general}
                              onChange={handleZoningChange}
                              name="non-vacant"
                              value="non-vacant"
                              style={{
                                color: zoning.general ? "#02EBC7" : "#FFF",
                                fill: zoning.general ? "#02EBC7" : "#FFF",
                              }}
                            />
                          }
                          label="Non vacant"
                        />
                      </Box>
                    </FormGroup>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    Zoning
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* CHECK BOXES */}
                    <FormGroup column sx={{ width: "100%" }}>
                      <Box sx={{ display: "flex", width: "100%" }}>
                        <FormControlLabel
                          sx={{
                            width: "50%",
                            "& .MuiFormControlLabel-label": {
                              color: "white",
                              fontSize: "small",
                            },
                          }}
                          control={
                            <Checkbox
                              checked={zoning.core}
                              onChange={handleZoningChange}
                              name="core"
                              value="core"
                              style={{
                                color: zoning.core ? "#02EBC7" : "#FFF",
                                fill: zoning.core ? "#02EBC7" : "#FFF",
                              }}
                            />
                          }
                          label="Core (Commercial)"
                        />
                        <FormControlLabel
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              color: "white",
                              fontSize: "small",
                            },
                          }}
                          control={
                            <Checkbox
                              checked={zoning.agriculture}
                              onChange={handleZoningChange}
                              name="agriculture"
                              value="agriculture"
                              style={{
                                color: zoning.agriculture ? "#02EBC7" : "#FFF",
                                fill: zoning.agriculture ? "#02EBC7" : "#FFF",
                              }}
                            />
                          }
                          label="Agriculture"
                        />
                      </Box>

                      <Box sx={{ display: "flex", width: "100%" }}>
                        <FormControlLabel
                          sx={{
                            width: "50%",
                            "& .MuiFormControlLabel-label": {
                              color: "white",
                              fontSize: "small",
                            },
                          }}
                          control={
                            <Checkbox
                              checked={zoning.general}
                              onChange={handleZoningChange}
                              name="general"
                              value="general"
                              style={{
                                color: zoning.general ? "#02EBC7" : "#FFF",
                                fill: zoning.general ? "#02EBC7" : "#FFF",
                              }}
                            />
                          }
                          label="General (Commercial)"
                        />
                        <FormControlLabel
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              color: "white",
                              fontSize: "small",
                            },
                          }}
                          control={
                            <Checkbox
                              checked={zoning.lightIndustrial}
                              onChange={handleZoningChange}
                              name="lightIndustrial"
                              value="lightIndustrial"
                              style={{
                                color: zoning.lightIndustrial
                                  ? "#02EBC7"
                                  : "#FFF",
                                fill: zoning.lightIndustrial
                                  ? "#02EBC7"
                                  : "#FFF",
                              }}
                            />
                          }
                          label="Light Industrial"
                        />
                      </Box>

                      <Box sx={{ display: "flex", width: "100%" }}>
                        <FormControlLabel
                          sx={{
                            width: "50%",
                            "& .MuiFormControlLabel-label": {
                              color: "white",
                              fontSize: "small",
                            },
                          }}
                          control={
                            <Checkbox
                              checked={zoning.multiFamily}
                              onChange={handleZoningChange}
                              name="multiFamily"
                              value="multiFamily"
                              style={{
                                color: zoning.multiFamily ? "#02EBC7" : "#FFF",
                                fill: zoning.multiFamily ? "#02EBC7" : "#FFF",
                              }}
                            />
                          }
                          label="Multi Family (Residential)"
                        />
                        <FormControlLabel
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              color: "white",
                              fontSize: "small",
                            },
                          }}
                          control={
                            <Checkbox
                              checked={zoning.mixedUse}
                              onChange={handleZoningChange}
                              name="mixedUse"
                              value="mixedUse"
                              style={{
                                color: zoning.mixedUse ? "#02EBC7" : "#FFF",
                                fill: zoning.mixedUse ? "#02EBC7" : "#FFF",
                              }}
                            />
                          }
                          label="Mixed Use"
                        />
                      </Box>
                    </FormGroup>
                  </Box>

                  <Typography
                    sx={{
                      width: "48%",
                      color: "#FFF",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                      display: { lg: "flex", xs: "none" },
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    Future Land Use
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "colum",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      position: "relative",
                    }}
                  >
                    {/* CHHECK BOXES */}
                    <FormGroup column sx={{ width: "100%" }}>
                      <Box sx={{ display: "flex" }}>
                        <FormControlLabel
                          sx={{
                            width: "50%",
                            "& .MuiFormControlLabel-label": {
                              color: "white",
                              fontSize: "small",
                            },
                          }}
                          control={
                            <Checkbox
                              checked={flu.singleFamily}
                              onChange={handleFluChange}
                              name="singleFamily"
                              value="singleFamily"
                              style={{
                                color: flu.singleFamily ? "#02EBC7" : "#FFF",
                                fill: flu.singleFamily ? "#02EBC7" : "#FFF",
                              }}
                            />
                          }
                          label="Single Family"
                        />
                        <FormControlLabel
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              color: "white",
                              fontSize: "small",
                            },
                          }}
                          control={
                            <Checkbox
                              checked={flu.multiFamily}
                              onChange={handleFluChange}
                              name="multiFamily"
                              value="multiFamily"
                              style={{
                                color: flu.multiFamily ? "#02EBC7" : "#FFF",
                                fill: flu.multiFamily ? "#02EBC7" : "#FFF",
                              }}
                            />
                          }
                          label="Multi Family"
                        />
                      </Box>

                      <Box sx={{ display: "flex" }}>
                        <FormControlLabel
                          sx={{
                            width: "50%",
                            "& .MuiFormControlLabel-label": {
                              color: "white",
                              fontSize: "small",
                            },
                          }}
                          control={
                            <Checkbox
                              checked={flu.general}
                              onChange={handleFluChange}
                              name="general"
                              value="general"
                              style={{
                                color: flu.general ? "#02EBC7" : "#FFF",
                                fill: flu.general ? "#02EBC7" : "#FFF",
                              }}
                            />
                          }
                          label="General (Commercial)"
                        />
                        <FormControlLabel
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              color: "white",
                              fontSize: "small",
                            },
                          }}
                          control={
                            <Checkbox
                              checked={flu.mixedUse}
                              onChange={handleFluChange}
                              name="mixedUse"
                              value="mixedUse"
                              style={{
                                color: flu.mixedUse ? "#02EBC7" : "#FFF",
                                fill: flu.mixedUse ? "#02EBC7" : "#FFF",
                              }}
                            />
                          }
                          label="Mixed Use"
                        />
                      </Box>
                    </FormGroup>
                  </Box>
                </Box>
              </Box>

              <Button
                sx={{
                  margin: { lg: "16px 16px 16px 16px", xs: "16px" },
                  textTransform: "none",
                  paddingY: "6px",
                  bgcolor: "#02EBC7",
                  color: "#001A41",
                  fontSize: "18px",
                  fontWeight: 700,
                  width: "calc(100% - 32px)",
                  borderRadius: "9999px",
                  "&:hover": {
                    backgroundColor: "rgba(2,235,199,0.8)",
                    color: "#FFF",
                  },
                  fontFamily: "Soin Sans Neue",
                }}
                onClick={handleSubmit}
              >
                See your results
              </Button>
            </Box>
          ) : show === 3 ? (
            <Box sx={{ padding: "16px" }}>
              <Typography
                mb="0.5vw"
                color="#FFF"
                fontSize={{ "2xl": "2.7vw", lg: "2.3vw", xs: "30px" }}
                fontFamily={"Soin Sans Neue"}
                lineHeight="110%"
                fontWeight={500}
              >
                Manage sites to completion
              </Typography>
              <Typography
                color="#FFF"
                fontSize="18px"
                fontWeight={500}
                fontFamily={"Noto Sans"}
              >
                Move projects between customizable stages and click to open the
                site card.
              </Typography>

              <Button
                sx={{
                  marginY: "16px",
                  textTransform: "none",
                  paddingY: "6px",
                  bgcolor: "#02EBC7",
                  color: "#001A41",
                  fontSize: "18px",
                  fontWeight: 700,
                  width: "calc(100% - 32px)",
                  borderRadius: "9999px",
                  "&:hover": {
                    backgroundColor: "rgba(2,235,199,0.8)",
                    color: "#FFF",
                  },
                  fontFamily: "Soin Sans Neue",
                }}
                onClick={handleOpen}
              >
                Add your own sites
              </Button>
            </Box>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default NewTabs;
