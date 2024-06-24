"use client";

import {
  Box,
  Tab,
  Tabs,
  Typography,
  TextField,
  FormControlLabel,
  Autocomplete,
  Button,
  FormGroup,
  Checkbox,
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

const filterTrueValuesToString = (obj) => {
  // Filtra las propiedades cuyo valor sea true
  const trueValues = Object.keys(obj).filter((key) => obj[key] === true);

  // Une los nombres de las propiedades filtradas en un string separado por comas
  const result = trueValues.join(", ");

  return result;
};

function HeroTabs({ show, handleChange, setWidget }) {
  const [zipCode, setZipCode] = React.useState("");
  const [location, setLocation] = React.useState({ name: "", address: "" });
  const [acresFrom, setAcresFrom] = React.useState(10);
  const [acresTo, setAcresTo] = React.useState(100);
  const [vacantLand, setVacantLand] = React.useState("vacant");
  const [zoning, setZoning] = useState({
    agriculture: false,
    core: false,
    general: true,
    mixedUse: false,
    lightIndustrial: false,
    multiFamily: true,
  });
  const [flu, setFlu] = useState({
    singleFamily: false,
    multiFamily: true,
    general: true,
    mixedUse: false,
  });

  const handleZoningChange = (event) => {
    setZoning({
      ...zoning,
      [event.target.name]: event.target.checked,
    });
  };

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
        { name: "propertyType", value: vacantLand },
        { name: "specificPlace", value: location.name },
        { name: "zoningSelected", value: filterTrueValuesToString(zoning) },
        { name: "flu", value: filterTrueValuesToString(flu) },
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
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "12vh",
        justifyContent: "flex-start",
        position: "relative",
        zIndex: 4,
        width: "30vw",
        backgroundColor: "white",
        boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)",
        maxWidth: "550px",
        background: "rgba(1, 37, 82, 0.75)",
        backdropFilter: "blur(calc(24px / 2))",
      }}
    >
      <Box sx={{ width: "95%" }}>
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
          {/* <Tab
            label="Zip Code"
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "140%",
              color: show === 0 ? "#02ebc7 !important" : "#FFF",
            }}
            value={0}
            {...a11yProps(0)}
          /> */}
          <Tab
            label="Multi-Criteria"
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
          {/* <Tab
            label="Location"
            value={2}
            {...a11yProps(2)}
            sx={{
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "20px",
              color: show === 2 ? "#02ebc7 !important" : "#FFF",
            }}
          /> */}
          <Tab
            label="Site Tracker"
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
        <Box display="flex" width="100%" justifyContent="start">
          {show === 0 ? (
            <Box>
              <Box sx={{ padding: "0px 16px 16px 16px" }}>
                <Typography
                  mb="0.5vw"
                  color="#FFF"
                  fontSize="2.7vw"
                  lineHeight="110%"
                  fontWeight={500}
                >
                  Search by Zip Code
                </Typography>
                <Typography color="#FFF" fontSize="18px" fontWeight={500}>
                  Review a list of sites in an area of interest
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: "16px",
                  display: "flex",
                  borderRadius: "8px",
                  gap: "10px",
                }}
              >
                <Autocomplete
                  size="small"
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    width: "100%",
                    bgcolor: "white",
                    borderRadius: "5px 5px 5px 5px",
                    "& .MuiInputBase-root::before": {
                      borderBottom: "none !important",
                      padding: "0px",
                    },
                    "& .MuiInputBase-root::after": {
                      borderBottom: "none !important",
                      padding: "0px",
                    },
                    "& .MuiAutocomplete-endAdornment": {
                      padding: "0px",
                      opacity: 0,
                    },
                    "& .MuiAutocomplete-root": {
                      padding: "0px",
                    },
                    "& .MuiOutlinedInput-root": {
                      padding: "0px",
                    },
                  }}
                  disablePortal
                  id="combo-box-demo"
                  options={defaultZipCodes}
                  onChange={(event, newValue) => {
                    handleZipCodeChange(newValue);
                  }}
                  fullWidth
                  value={zipCode || ""}
                  inputValue={zipCode || ""}
                  onInputChange={(event, newValue) => {
                    handleZipCodeChange(newValue);
                  }}
                  isOptionEqualToValue={(option, value) =>
                    option.name === value
                  }
                  renderInput={(params) => <TextField {...params} />}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      {...props}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        textAlign: "left",
                        width: "100%",
                      }}
                    >
                      <Typography variant="body1" sx={{ width: "100%" }}>
                        {option}
                      </Typography>
                    </Box>
                  )}
                />
              </Box>

              <Button
                sx={{
                  marginLeft: "16px",
                  marginY: "30px",
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
                }}
                onClick={handleSubmit}
              >
                Search
              </Button>
            </Box>
          ) : show === 1 ? (
            <Box>
              <Box sx={{ padding: "0px 16px 16px 16px" }}>
                <Typography
                  mb="0.5vw"
                  color="#FFF"
                  fontSize="2.7vw"
                  lineHeight="110%"
                  fontWeight={500}
                >
                  Multi Criteria Sourcing Tool
                </Typography>
                <Typography color="#FFF" fontSize="18px" fontWeight={500}>
                  Quickly discover opportunity areas and sites that match your
                  business
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: "0px 16px 16px 16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  borderRadius: "8px",
                  paddingBottom: "16px",
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
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                    position: "relative",
                  }}
                >
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
                      top: "20%",
                      left: "37%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: "0.9vw",
                      }}
                    >
                      Acre
                    </Typography>
                  </Box>
                  <Typography>-</Typography>
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
                      top: "20%",
                      left: "88%",
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
                    spacingX: 2,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <FormGroup column sx={{ width: "100%" }}>
                    <Box sx={{ display: "flex" }}>
                      <FormControlLabel
                        sx={{
                          width: "47%",
                          "& .MuiFormControlLabel-label": {
                            color: "white",
                            fontSize: "small",
                          },
                        }}
                        control={
                          <Checkbox
                            value={"non-vacant"}
                            checked={vacantLand === "non-vacant"}
                            onChange={(e) => handlePropertyTypeChange(e)}
                            name="non-vacant"
                            style={{
                              color:
                                vacantLand === "non-vacant"
                                  ? "#02EBC7"
                                  : "#FFF",
                              fill:
                                vacantLand === "non-vacant"
                                  ? "#02EBC7"
                                  : "#FFF",
                            }}
                          />
                        }
                        label="Non-vacant land"
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
                            value={"vacant"}
                            checked={vacantLand === "vacant"}
                            onChange={(e) => handlePropertyTypeChange(e)}
                            name="vacant"
                            style={{
                              color:
                                vacantLand === "vacant" ? "#02EBC7" : "#FFF",
                              fill:
                                vacantLand === "vacant" ? "#02EBC7" : "#FFF",
                            }}
                          />
                        }
                        label="Vacant land"
                      />
                    </Box>
                  </FormGroup>
                </Box>

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
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FormGroup column sx={{ width: "100%" }}>
                    <Box sx={{ display: "flex" }}>
                      <FormControlLabel
                        sx={{
                          width: "47%",
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
                      <FormControlLabel
                        sx={{
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
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <FormControlLabel
                        sx={{
                          width: "47%",
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
                              fill: zoning.lightIndustrial ? "#02EBC7" : "#FFF",
                            }}
                          />
                        }
                        label="Light Industrial"
                      />
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <FormControlLabel
                        sx={{
                          width: "47%",
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
                      <FormControlLabel
                        sx={{
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
                    </Box>
                  </FormGroup>
                </Box>

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
                  Future Land Use
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FormGroup column sx={{ width: "100%" }}>
                    <Box sx={{ display: "flex" }}>
                      <FormControlLabel
                        sx={{
                          width: "47%",
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
                          width: "47%",
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

              <Button
                sx={{
                  margin: "0px 16px 16px 16px",
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
                }}
                onClick={handleSubmit}
              >
                Search
              </Button>
            </Box>
          ) : show === 2 ? (
            <Box>
              <Box sx={{ padding: "16px" }}>
                <Typography
                  mb="0.5vw"
                  color="#FFF"
                  fontSize="2.7vw"
                  lineHeight="110%"
                  fontWeight={500}
                >
                  Search for a specific place
                </Typography>
                <Typography color="#FFF" fontSize="18px" fontWeight={500}>
                  Assess specific sites for your business
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: "16px",
                  display: "flex",
                  borderRadius: "8px",
                  gap: "10px",
                }}
              >
                <Autocomplete
                  size="small"
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    width: "100%",
                    bgcolor: "white",
                    borderRadius: "5px 5px 5px 5px",
                    "& .MuiInputBase-root::before": {
                      borderBottom: "none !important",
                      padding: "0px",
                    },
                    "& .MuiInputBase-root::after": {
                      borderBottom: "none !important",
                      padding: "0px",
                    },
                    "& .MuiAutocomplete-endAdornment": {
                      padding: "0px",
                      opacity: 0,
                    },
                    "& .MuiAutocomplete-root": {
                      padding: "0px",
                    },
                    "& .MuiOutlinedInput-root": {
                      padding: "0px",
                    },
                  }}
                  disablePortal
                  id="combo-box-demo"
                  options={defaultOptions}
                  onChange={(event, newValue) => {
                    handleLocationChange(newValue);
                  }}
                  fullWidth
                  value={location.name || ""}
                  inputValue={location.name || ""}
                  onInputChange={(event, newValue) => {
                    handleLocationChange(newValue);
                  }}
                  isOptionEqualToValue={(option, value) =>
                    option.name === value
                  }
                  renderInput={(params) => <TextField {...params} />}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      {...props}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        textAlign: "left",
                        width: "100%",
                      }}
                    >
                      <Typography variant="body1" sx={{ width: "100%" }}>
                        {option.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ width: "100%" }}
                      >
                        {option.address}
                      </Typography>
                    </Box>
                  )}
                />
              </Box>

              <Button
                sx={{
                  marginLeft: "16px",
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
                }}
                onClick={handleSubmit}
              >
                Search
              </Button>
            </Box>
          ) : show === 3 ? (
            <Box sx={{ padding: "16px" }}>
              <Typography
                mb="0.5vw"
                color="#FFF"
                fontSize="2.7vw"
                lineHeight="110%"
                fontWeight={500}
              >
                Stay Organized and Focused with Your Site Tracker
              </Typography>
              <Typography color="#FFF" fontSize="18px" fontWeight={500}>
                Keep them organized in your pipeline to fulfill the deal
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
                }}
                onClick={handleOpen}
              >
                Start
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

export default HeroTabs;
