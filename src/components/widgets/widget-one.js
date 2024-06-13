"use client";

import {
  ArrowForward,
  Close,
  DragHandle,
  Lock,
  Search,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Button,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

function WidgetOne({ widget }) {
  const [filters, setFilters] = React.useState([
    "Vacant",
    "20-acres",
    "Agriculture",
  ]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        maxWidth: "480px",
        display: "flex",
        top: "0%",
        right: "1%",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 3,
      }}
    >
      <>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.80)",
            borderRadius: "8px",
            boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Box
            id="title-close"
            sx={{
              paddingX: "16px",
              display: "flex",
              alignSelf: "stretch",
              borderBottom: "2px solid #E5E7EB",
              justifyContent: "space-between",
              paddingY: "6px",
            }}
          >
            <Typography
              fontSize="16px"
              fontWeight={600}
              color="#1F2937"
              lineHeight="24px"
            >
              {widget.property}
            </Typography>

            <Box id="close-button">
              <Close />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              padding: "16px",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "16px",
              alignSelf: "stretch",
              borderBottom: "1px solid #D1D5DB",
              background: "rgba(249, 250, 251, 0.65)",
            }}
          >
            <Typography
              sx={{
                alignSelf: "stretch",
              }}
              color="#1F2937"
              fontSize="14px"
              fontWeight={400}
              lineHeight="20px"
            >
              {widget.direction ??
                "400 Central Ave, Saint Petersburg, Fl, 33701"}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                alignSelf: "stretch",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "16px",
                  }}
                >
                  Lot Area
                </Typography>

                <Typography
                  sx={{
                    color: "#1F2937",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  {widget.area ?? "2.26 acres"}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "16px",
                  }}
                >
                  Property State
                </Typography>

                <Typography
                  sx={{
                    color: "#1F2937",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  {widget.state ?? "In use"}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                alignSelf: "stretch",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "16px",
                  }}
                >
                  Last Sold
                </Typography>

                <Typography
                  sx={{
                    color: "#1F2937",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  {widget.lastSold ?? "$5,898,427.00"}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: "1 0 0",
                }}
              >
                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "16px",
                  }}
                >
                  Last Sold Date
                </Typography>

                <Typography
                  sx={{
                    color: "#1F2937",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  {widget.lastSoldDate ?? "12/13/2022"}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "6px",
                alignSelf: "stretch",
              }}
            >
              <Box
                id="ownership-title"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "34px",
                  alignSelf: "stretch",
                }}
              >
                <Typography
                  sx={{
                    color: "#1F2937",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  Ownership
                </Typography>
              </Box>

              <Box
                id="ownership-data"
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    padding: "4px 8px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    background: "#FFF",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "4px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#1F2937",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "20px",
                      }}
                    >
                      CATS RED APPLE ST PETE LLC 800 3RD AVE FL 5 NEW YORK NY
                      10022
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Button
                sx={{
                  display: "flex",
                  padding: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "8px",
                  border: "2px solid rgba(255, 255, 255, 0.00",
                }}
              >
                <Typography
                  sx={{
                    color: "#0057AD",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    textTransform: "none",
                  }}
                >
                  View Owner Portfolio
                </Typography>
                <ArrowForward color="#0057AD" />
              </Button>
            </Box>

            <Button
              sx={{
                display: "flex",
                padding: "6px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                alignSelf: "stretch",
                textTransform: "none",
                borderRadius: "8px",
                border: "2px solid #0057AD",
                background: "#FFF",
              }}
            >
              <Lock />
              <Typography
                sx={{
                  color: "#0057AD",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "20px",
                }}
              >
                View all Property Information
              </Typography>
            </Button>
          </Box>

          <Box
            id="site-data"
            sx={{
              display: "flex",
              padding: "16px 16px 16px 16px",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              alignSelf: "stretch",
              backdropFilter: " blur(calc(8px / 2))",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                flexShrink: 0,
                alignSelf: "stretch",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                <Typography
                  sx={{
                    color: "#1F2937",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    alignSelf: "stretch",
                  }}
                >
                  Site data
                </Typography>

                <Box
                  id="search-n-filters"
                  sx={{
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
                      gap: "8px",
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
                      <Search />
                      <TextField
                        variant="standard"
                        size="small"
                        height="30px"
                        sx={{
                          border: "none",
                          color: "#6B7280",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "20px",
                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        placeholder="Search for site data"
                      />
                    </Box>
                  </Box>

                  {/* <Select
                      size="small"
                      sx={{
                        backgroundColor: "#FFF",
                        display: "flex",
                        width: "98px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "8px",
                        borderRadius: "8px",
                        border: "2px solid #9CA3AF",
                      }}
                    >
                      <MenuItem placeholder="Filters">
                        <ListItem>Filters</ListItem>
                      </MenuItem> 
  </Select>*/}

                  <Box
                    fullWidth
                    sx={{
                      height: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "6px 12px",
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
                      Filters
                    </Typography>
                    <FiChevronDown />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    alignContent: "flex-start",
                    gap: "8px 8px",
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                  }}
                >
                  {filters.map((element, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        padding: "4px 4px 4px 12px",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "9999px",
                        border: "1px solid #9CA3AF",
                        background: "#F3F4F6)",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#1F2937",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "16px",
                        }}
                      >
                        {element}
                      </Typography>
                      <Close />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            <Box
              id="zoning"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                alignSelf: "stretch",
              }}
            >
              <Accordion
                id="accordion"
                disableGutters
                fullWidth
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  borderRadius: "8px",
                  border: "2px solid #E5E7EB",
                  background: "#F9FAFB",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  fullWidth
                  expandIcon={<FiChevronDown />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{ width: "100%" }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <DragHandle />
                    <Typography
                      sx={{
                        color: "#1F2937",
                        fontSize: "14px,",
                        fontWeight: 400,
                        lineHeight: "20px",
                      }}
                    >
                      Zoning
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        padding: "0px 4px",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "4px",
                        background: "#6B7280",
                        color: "#FFF",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#FFF",
                          fontSize: "12px",
                          fontWeight: 500,
                          lineHeight: "16px",
                        }}
                      >
                        {widget.zoning ?? "1"}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>

                <AccordionDetails
                  fullWidth
                  sx={{
                    width: "100% !important",
                    display: "flex",
                    padding: "8px 16px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "24px",
                    alignSelf: "stretch",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                      alignSelf: "stretch",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        padding: "8px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        alignSelf: "stretch",
                        borderRadius: "8px",
                        border: "2px solid #E5E7EB",
                        background: "#FFF",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          alignSelf: "stretch",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            flex: "1 0 0",
                          }}
                        >
                          <Box
                            sx={{
                              width: "8px",
                              height: "20px",
                              borderRadius: "2px",
                              border: `2px solid ${
                                widget.zoningColor ?? "#F97316"
                              }`,
                              background: `${widget.zoningColor ?? "#FFEDD5"}`,
                            }}
                          ></Box>
                          <Typography
                            sx={{
                              display: "-webkit-box",
                              webkitBoxOrient: "vertical",
                              webkitLineClamp: 1,
                              flex: "1 0 0",
                              overflow: "hidden",
                              color: "#1F2937",
                              textOverflow: "ellipsis",
                              fontSize: "14px",
                              fontWeight: 600,
                              lineHeight: "20px",
                            }}
                          >
                            {widget.where ?? "Downtown Center"}
                          </Typography>
                        </Box>
                        <Button
                          sx={{
                            display: "flex",
                            padding: "2px 8px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4px",
                            borderRadius: "8px",
                            border: "2px solid rgba(255, 255, 255, 0.00))",
                            textTransform: "none",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#0057AD",
                              fontSize: "14px",
                              fontWeight: 500,
                              lineHeight: "20px",
                            }}
                          >
                            View
                          </Typography>
                          <ArrowForward />
                        </Button>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          alignSelf: "stretch",
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
                          {widget.use ?? "Mixed Use, Saint Petersburg FL"}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#1F2937",
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "20px",
                          }}
                        >
                          {widget.date ?? "01/01/2022"}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              padding: "16px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              alignSelf: "stretch",
              borderRadius: "0px 0px 8px 8px",
              background: "rgba(255, 255, 255, 0.80)",
              backdropFilter: "blur(calc(8px / 2))",
            }}
          >
            <Button
              sx={{
                display: "flex",
                padding: "6px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                alignSelf: "stretch",
                borderRadius: "8px",
                border: "2px solid #0057AD",
                background: "#0057AD",
              }}
            >
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "20px",
                }}
              >
                Get More Insights
              </Typography>
            </Button>
          </Box>
        </Box>
      </>
    </div>
  );
}

export default WidgetOne;
