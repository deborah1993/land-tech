"use client";

import { Search } from "@mui/icons-material";
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
  MenuItem,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

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

function HeroTabs({ show, handleChange, setWidget }) {
  const [zipCode, setZipCode] = React.useState("");
  const [location, setLocation] = React.useState({ name: "", address: "" });
  const [locationError, setLocationError] = React.useState("");

  const [acres, setAcres] = React.useState("0-50");
  const [vacantLand, setVacantLand] = React.useState("vacant");
  const [zoning, setZoning] = useState({
    agriculture: true,
    core: false,
    multiFam: false,
    general: false,
    mixed: false,
    light: false,
  });

  const handleZoningChange = (event) => {
    setZoning({
      ...zoning,
      [event.target.name]: event.target.checked,
    });
  };

  const handlePlaceChange = (value) => {
    if (value.name === "Fort De Soto Park") {
      setWidget({
        lastSold: "16,500,000.00 on 04/07/17",
        property: "Fort De Soto Park",
        address: "4055 Tyrone Blvd N, St. Petersburg, FL 33709, United States",
        lotArea: "5,287",
        owner: "Timothy Johnson",
        externalLink: "https://www.isielitetraining.com/locations/st-pete/",
      });
    } else if (value.name === "The Dali Museum") {
      setWidget({
        lastSold: "16,500,000.00 on 04/07/17",
        property: "The Dali Museum",
        address: "153 2nd Ave N, St. Petersburg, FL 33701, United States",
        lotArea: "10,253",
        owner: "Ally Capital Group, LLC, Paradise Ventures, Inc",
        externalLink: "https://sundialstpete.com/",
      });
    } else if (value.name === "Sunken Gardens") {
      setWidget({
        lastSold: "16,500,000.00 on 04/07/17",
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
        lastSold: "16,500,000.00 on 04/07/17",
      });
    }
  };

  const handleZipCodeChange = (value) => {
    setZipCode(value);
  };

  const handleZipCodeSubmit = (e) => {
    e.preventDefault();
    //abrir ventana
    window.open(`http://localhost:3000/sign-up?input=${zipCode}`);
  };

  const handleLocationChange = (value) => {
    setLocation(value);
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    if (!location || location.length === 0) {
      return setLocationError("Please fill the input");
    }
    setLocationError("");
    //abrir ventana
    window.open("http://localhost:3000/sign-up");
  };

  const handlePropertyTypeChange = (e) => {
    setVacantLand(e.target.value);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "15vh",
        justifyContent: "flex-start",
        position: "relative",
        zIndex: 4,
        width: "auto",
        backgroundColor: "white",
        boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)",
        maxWidth: "550px",
        width: "100%",
        background: "rgba(1, 37, 82, 0.75)",
        backdropFilter: "blur(calc(24px / 2))",
      }}
    >
      <Box sx={{ maxWidth: "500px", width: "100%" }}>
        <Tabs
          value={show}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            paddingX: "16px",
            "& .MuiTabs-flexContainer": {
              justifyContent: "space-between",
            },
            marginBottom: "23px",
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
            label="Zip Code"
            sx={{
              textTransform: "none",
              spacingX: 6,
              spacingY: 3,
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
              color: show === 0 ? "#02ebc7 !important" : "#FFF",
            }}
            value={0}
            {...a11yProps(0)}
          />
          <Tab
            label="Multi-Criteria"
            color="white"
            value={1}
            {...a11yProps(1)}
            sx={{
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
              color: show === 1 ? "#02ebc7 !important" : "#FFF",
            }}
          />
          <Tab
            label="Location"
            value={2}
            {...a11yProps(2)}
            sx={{
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
              color: show === 2 ? "#02ebc7 !important" : "#FFF",
            }}
          />
          <Tab
            label="Site Tracker"
            value={3}
            {...a11yProps(3)}
            sx={{
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
              color: show === 3 ? "#02ebc7 !important" : "#FFF",
            }}
          />
        </Tabs>
        <Box display="flex" width="100%" justifyContent="start">
          {show === 0 ? (
            <Box>
              <Box sx={{ padding: "16px" }}>
                <Typography
                  mb="8px"
                  color="#FFF"
                  fontSize="48px"
                  lineHeight="110%"
                  fontWeight={500}
                >
                  Search by Zip Code
                </Typography>
                <Typography
                  color="#FFF"
                  fontSize="20px"
                  lineHeight="28px"
                  fontWeight={500}
                >
                  Review a list of sites in an area of interest
                </Typography>
              </Box>

              <Box
                id="search-n-filters"
                sx={{
                  marginTop: "23px",
                  paddingX: "16px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                <Box
                  size="small"
                  fullWidth
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      padding: "6px 12px",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                      borderRadius: "8px",
                      border: "2px solid #9CA3AF",
                      background: "#FFF",
                    }}
                  >
                    <Search size="small" />
                    <Autocomplete
                      size="small"
                      sx={{
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        width: "100%",
                        bgcolor: "white",
                        borderRadius: "5px 0px 0px 5px",
                        "& .MuiInputBase-root": {
                          padding: "0px",
                          height: "30px",
                          "&::before": {
                            borderBottom: "none !important",
                          },
                          "&::after": {
                            borderBottom: "none !important",
                          },
                        },
                        "& .MuiOutlinedInput-root": {
                          padding: "0px",
                          "& fieldset": {
                            border: "none", // Elimina el borde del campo de entrada
                          },
                        },
                        "& .MuiAutocomplete-endAdornment": {
                          padding: "0px",
                          opacity: 0,
                        },
                        "& .MuiAutocomplete-root": {
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
                      isOptionEqualToValue={(option, value) => option === value}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          size="small"
                          placeholder="Search for site data"
                          height="30px"
                        />
                      )}
                    />
                  </Box>
                </Box>

                <Box
                  fullWidth
                  sx={{
                    height: "30px",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "6px 20px 6px 20px",
                    alignItems: "center",
                    gap: "8px",
                    alignSelf: "stretch",
                    borderRadius: "8px",
                    border: "2px solid #9CA3AF",
                    background: "#FFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#1F2937",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      flex: "1 0 0",
                    }}
                  >
                    Search
                  </Typography>
                </Box>
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
                }}
                onClick={() => window.open("http://localhost:3000/sign-up")}
              >
                Start free trial
              </Button>
            </Box>
          ) : show === 1 ? (
            <Box>
              <Box sx={{ padding: "16px" }}>
                <Typography
                  mb="8px"
                  color="#FFF"
                  fontSize="48px"
                  lineHeight="110%"
                  fontWeight={500}
                >
                  Multi Criteria Sourcing Tool
                </Typography>
                <Typography
                  color="#FFF"
                  fontSize="20px"
                  lineHeight="28px"
                  fontWeight={500}
                >
                  Quickly discover opportunity areas and sites that match your
                  business
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  borderRadius: "8px",
                  paddingBottom: "16px",
                }}
              >
                {/* <Accordion
                  disableGutters
                  sx={{
                    border: "1px solid #9CA3AF",
                    borderRadius: "8px",
                    boxShadow: "none",
                  }}
                > 
                  <AccordionSummary
                    expandIcon={<FiChevronDown />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{
                      borderRadius: "8px",
                    }}
                  >*/}
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
                {/* </AccordionSummary> */}
                {/* <AccordionDetails
                    sx={{ backgroundColor: "#F9FAFB", borderRadius: "8px" }}
                  > */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <TextField
                    fullWidth
                    type="number"
                    placeholder="0 Acre"
                    size="small"
                    sx={{
                      backgroundColor: "#FFF",
                      borderRadius: "8px",
                    }}
                  />
                  <Typography>-</Typography>
                  <TextField
                    fullWidth
                    type="number"
                    placeholder="50 Acre"
                    size="small"
                    sx={{
                      backgroundColor: "#FFF",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
                {/* </AccordionDetails>
                </Accordion> */}

                {/* <Accordion
                  disableGutters
                  sx={{
                    border: "1px solid #9CA3AF",
                    borderRadius: "8px",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<FiChevronDown />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  > */}
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
                {/* </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: "#F9FAFB" }}> */}
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
                {/* </AccordionDetails>
                </Accordion> */}

                {/* <Accordion
                  disableGutters
                  sx={{
                    border: "1px solid #9CA3AF",
                    borderRadius: "8px",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<FiChevronDown />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  > */}
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
                {/* </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: "#F9FAFB" }}> */}
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
                          },
                        }}
                        control={
                          <Checkbox
                            checked={zoning.light}
                            onChange={handleZoningChange}
                            name="light"
                            value="light"
                            style={{
                              color: zoning.light ? "#02EBC7" : "#FFF",
                              fill: zoning.light ? "#02EBC7" : "#FFF",
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
                          },
                        }}
                        control={
                          <Checkbox
                            checked={zoning.mixed}
                            onChange={handleZoningChange}
                            name="mixed"
                            value="mixed"
                            style={{
                              color: zoning.mixed ? "#02EBC7" : "#FFF",
                              fill: zoning.mixed ? "#02EBC7" : "#FFF",
                            }}
                          />
                        }
                        label="Mixed Use"
                      />
                      <FormControlLabel
                        sx={{
                          "& .MuiFormControlLabel-label": {
                            color: "white",
                          },
                        }}
                        control={
                          <Checkbox
                            checked={zoning.multiFam}
                            onChange={handleZoningChange}
                            name="multiFam"
                            value="multiFam"
                            style={{
                              color: zoning.multiFam ? "#02EBC7" : "#FFF",
                              fill: zoning.multiFam ? "#02EBC7" : "#FFF",
                            }}
                          />
                        }
                        label="Multi Family (Residential)"
                      />
                    </Box>
                  </FormGroup>
                </Box>
                {/* </AccordionDetails>
                </Accordion> */}
              </Box>

              <Button
                sx={{
                  margin: "16px",
                  textTransform: "none",
                  paddingY: "6px",
                  bgcolor: "#02EBC7",
                  color: "#001A41",
                  fontSize: "18px",
                  fontWeight: 700,
                  width: "calc(100% - 32px)",
                  borderRadius: "9999px",
                }}
                onClick={() => window.open("http://localhost:3000/sign-up")}
              >
                Search
              </Button>
            </Box>
          ) : show === 2 ? (
            <Box>
              <Box sx={{ padding: "16px" }}>
                <Typography
                  mb="8px"
                  color="#FFF"
                  fontSize="48px"
                  lineHeight="110%"
                  fontWeight={500}
                >
                  Search for a specific place
                </Typography>
                <Typography
                  color="#FFF"
                  fontSize="20px"
                  lineHeight="28px"
                  fontWeight={500}
                >
                  Assess specific sites for your business
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: "16px",
                  display: "flex",
                  borderRadius: "8px",
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
                    borderRadius: "5px 0px 0px 5px",
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
                    handlePlaceChange(newValue);
                  }}
                  fullWidth
                  value={location.name || ""}
                  inputValue={location.name || ""}
                  onInputChange={(event, newValue) => {
                    handlePlaceChange(newValue);
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
                <Box
                  bgcolor="#012552"
                  borderRadius="0px 5px 5px 0px"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button onClick={() => window.open("")}>
                    <Search style={{ color: "white", fontSize: "20px" }} />
                  </Button>
                </Box>
              </Box>

              {locationError && (
                <Typography sx={{ fontSize: "14px", color: "red" }}>
                  {locationError}
                </Typography>
              )}

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
                }}
                onClick={() => window.open("http://localhost:3000/sign-up")}
              >
                Start free trial
              </Button>
            </Box>
          ) : show === 3 ? (
            <Box sx={{ padding: "16px" }}>
              <Typography
                mb="8px"
                color="#FFF"
                fontSize="48px"
                lineHeight="110%"
                fontWeight={500}
              >
                Stay Organized and Focused with Your Site Tracker
              </Typography>
              {/* <Typography
                color="#FFF"
                fontSize="20px"
                lineHeight="28px"
                fontWeight={500}
              >
                Keep them organized in your pipeline to fulfill the deal
              </Typography> */}

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
                }}
                onClick={() => window.open("http://localhost:3000/sign-up")}
              >
                Start free trial
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
