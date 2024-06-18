"use client";

import { ArrowForward } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
import React from "react";

function ManagementPanel({ widget }) {
  return (
    <div
      style={{
        height: "100%",
        width: "27vw",
        maxWidth: "463px",
        display: "flex",
        // top: "0%",
        // left: "0%",
        // position: "absolute",
        justifyContent: "center",
        alignItems: "start",
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
            sx={{
              display: "flex",
              padding: "16px",
              flexDirection: "column",
              gap: "16px",
              alignSelf: "stretch",
              borderBottom: "1px solid #D1D5DB",
              background: "rgba(249, 250, 251, 0.65)",
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
                Address
              </Typography>
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
            </Box>
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
                  Zoning
                </Typography>
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
            </Box>
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
                  Tasks
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                padding: "0.4vw",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "0.6vw",
                background: "#FFF",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.9vw",
                  alignSelf: "stretch",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5vw",
                    flex: "1 0 0",
                  }}
                >
                  <Box
                    sx={{
                      width: "1.4vw",
                      height: "1.4vw",
                      flexShrink: 0,
                      borderRadius: "9999px",
                      border: "2px solid #9CA3AF",
                      background: "#FFF",
                    }}
                  ></Box>
                  <Typography
                    sx={{
                      flex: "1 0 0",
                      color: "#1F2937",
                      fontSize: "0.8vw",
                      fontWeight: 400,
                    }}
                  >
                    Example task label
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: "0.8vw",
                    fontWeight: 400,
                  }}
                >
                  Due: 23/05/2024
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.9vw",
                  alignSelf: "stretch",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5vw",
                    flex: "1 0 0",
                  }}
                >
                  <Box
                    sx={{
                      width: "1.4vw",
                      height: "1.4vw",
                      flexShrink: 0,
                      borderRadius: "9999px",
                      border: "2px solid #9CA3AF",
                      background: "#FFF",
                    }}
                  ></Box>
                  <Typography
                    sx={{
                      flex: "1 0 0",
                      color: "#1F2937",
                      fontSize: "0.8vw",
                      fontWeight: 400,
                    }}
                  >
                    Example task label
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: "0.8vw",
                    fontWeight: 400,
                  }}
                >
                  Due: 23/05/2024
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.9vw",
                  alignSelf: "stretch",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5vw",
                    flex: "1 0 0",
                  }}
                >
                  <Box
                    sx={{
                      width: "1.4vw",
                      height: "1.4vw",
                      flexShrink: 0,
                      borderRadius: "9999px",
                      border: "2px solid #9CA3AF",
                      background: "#FFF",
                    }}
                  ></Box>
                  <Typography
                    sx={{
                      flex: "1 0 0",
                      color: "#1F2937",
                      fontSize: "0.8vw",
                      fontWeight: 400,
                    }}
                  >
                    Example task label
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#6B7280",
                    fontSize: "0.8vw",
                    fontWeight: 400,
                  }}
                >
                  Due: 23/05/2024
                </Typography>
              </Box>
            </Box>
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
                  Activities
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                padding: "0.4vw",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "0.6vw",
                background: "#FFF",
                justifyContent: "flex-start",
              }}
            >
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
                        <Typography
                          sx={{
                            color: "#1F2937",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          {widget.where ??
                            "Reminder: Call with landowner for Site 1 at 12pm 23/05/2023"}
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
                          View all
                        </Typography>
                        <ArrowForward />
                      </Button>
                    </Box>
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
                        <Typography
                          sx={{
                            color: "#1F2937",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          {widget.where ??
                            "Reminder: Call with landowner for Site 1 at 12pm 23/05/2023"}
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
                          View all
                        </Typography>
                        <ArrowForward />
                      </Button>
                    </Box>
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
                        <Typography
                          sx={{
                            color: "#1F2937",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          {widget.where ??
                            "Reminder: Call with landowner for Site 1 at 12pm 23/05/2023"}
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
                          View all
                        </Typography>
                        <ArrowForward />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    </div>
  );
}

export default ManagementPanel;
