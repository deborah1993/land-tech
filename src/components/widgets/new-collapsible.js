import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

function NewCollapsible({ widget }) {
  return (
    <>
      <Box
        sx={{
          borderRadius: "8px",
          padding: "16px",
          flexDirection: "column",
          gap: "16px",
          alignSelf: "stretch",
          borderBottom: "1px solid #D1D5DB",
          background: "rgba(1, 37, 82, 0.75)",
          marginTop: "auto",
          width: "27vw",
          maxWidth: "463px",
          display: "flex",
          top: "calc(80px + 4rem)",
          right: "1%",
          position: "absolute",
          justifyContent: "start",
          borderRadius: "8px",
          alignItems: "start",
          zIndex: 3,
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none", // IE and Edge
          scrollbarWidth: "none", // Firefox
        }}
      >
        <Box
          sx={{
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flex: "1 0 0",
          }}
        >
          <Typography
            sx={{
              color: "white",
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
            color="white"
            fontSize="14px"
            fontWeight={400}
            lineHeight="20px"
          >
            {widget.address}
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius: "8px",
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
            alignSelf: "stretch",
          }}
        >
          <Box
            sx={{
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flex: "1 0 0",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "16px",
              }}
            >
              Lot Area
            </Typography>

            <Typography
              sx={{
                color: "white",
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
                color: "white",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "16px",
              }}
            >
              Property State
            </Typography>

            <Typography
              sx={{
                color: "white",
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
                color: "white",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "16px",
              }}
            >
              Last Sold
            </Typography>

            <Typography
              sx={{
                color: "white",
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
                color: "white",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "16px",
              }}
            >
              Last Sold Date
            </Typography>

            <Typography
              sx={{
                color: "white",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
              }}
            >
              {widget.lastSoldDate}
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
              width: "100%",
              justifyContent: "space-between",
            }}
            onClick={() =>
              window.open(
                "https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month"
              )
            }
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
              }}
            >
              Ownership
            </Typography>
            <Button
              sx={{
                display: "flex",
                padding: "0px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                borderRadius: "8px",
                border: "2px solid rgba(255, 255, 255, 0.00",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "20px",
                  textTransform: "none",
                  marginRight: "8px",
                }}
              >
                Contact Owner
              </Typography>
            </Button>
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
                  {widget.ownerShip}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignSelf: "stretch",
          }}
        >
          <Box
            sx={{
              borderRadius: "8px",
              width: "100%",
            }}
          >
            {widget.zoningTitle && (
              <Box
                id="zoning-wrapper"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
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
                        color: "white",
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
                              width: "20px",
                              height: "20px",
                              borderRadius: "2px",
                              border: `2px solid ${widget.zoningBorderColor}`,
                              background: `${widget.zoningBackgroundColor}`,
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
                            {widget.zoningTitle}
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
                          onClick={() =>
                            window.open(
                              "https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month"
                            )
                          }
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
                          {widget.zoningSubtitle}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#1F2937",
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "20px",
                            marginRight: "10px",
                          }}
                        >
                          {widget.zoningDate}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}

            {/* {widget.fluTitle && (
            <Box
              id="flu-wrapper"
              sx={{
                display: "flex",
                padding: "0px 16px 16px 16px",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
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
                    {"Future Land Use (FLUM)"}
                  </Typography>
                </Box>
              </Box>

              <Box
                id="flu"
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
                            width: "20px",
                            height: "20px",
                            borderRadius: "2px",
                            border: `2px solid ${widget.fluBorderColor}`,
                            background: `${widget.fluBackgroundColor}`,
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
                          {widget.fluTitle}
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
                        onClick={() =>
                          window.open(
                            "https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month"
                          )
                        }
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
                        {widget.fluSubtitle}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#1F2937",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          marginRight: "10px",
                        }}
                      >
                        {widget.fluDate}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {widget.soilTitle && (
            <Box
              id="soil-wrapper"
              sx={{
                display: "flex",
                padding: "0px 16px 16px 16px",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
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
                    {"Soil"}
                  </Typography>
                </Box>
              </Box>

              <Box
                id="soil"
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
                            width: "20px",
                            height: "20px",
                            borderRadius: "2px",
                            border: `2px solid ${widget.soilBorderColor}`,
                            background: `${widget.soilBackgroundColor}`,
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
                          {widget.soilTitle}
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
                        onClick={() =>
                          window.open(
                            "https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month"
                          )
                        }
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
                        {widget.soilSubtitle}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#1F2937",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          marginRight: "10px",
                        }}
                      >
                        {widget.soilDate}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {widget.permitsTitle && (
            <Box
              id="permits-wrapper"
              sx={{
                display: "flex",
                padding: "0px 16px 16px 16px",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
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
                    {"Permits"}
                  </Typography>
                </Box>
              </Box>

              <Box
                id="soil"
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
                            width: "20px",
                            height: "20px",
                            borderRadius: "2px",
                            border: `2px solid ${widget.permitsBorderColor}`,
                            background: `${widget.permitsBackgroundColor}`,
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
                          {widget.permitsTitle}
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
                        onClick={() =>
                          window.open(
                            "https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month"
                          )
                        }
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
                        {widget.permitsSubtitle}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#1F2937",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          marginRight: "10px",
                        }}
                      >
                        {widget.permitsDate}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {widget.hazardsTitle && (
            <Box
              id="permits-wrapper"
              sx={{
                display: "flex",
                padding: "0px 16px 16px 16px",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
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
                    {"Hazards"}
                  </Typography>
                </Box>
              </Box>

              <Box
                id="soil"
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
                            width: "20px",
                            height: "20px",
                            borderRadius: "2px",
                            border: `2px solid ${widget.hazardsBorderColor}`,
                            background: `${widget.hazardsBackgroundColor}`,
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
                          {widget.hazardsTitle}
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
                        onClick={() =>
                          window.open(
                            "https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month"
                          )
                        }
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
                        {widget.hazardsSubtitle}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#1F2937",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          marginRight: "10px",
                        }}
                      >
                        {widget.hazardsDate}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}

          {widget.waterResourcesTitle && (
            <Box
              id="permits-wrapper"
              sx={{
                display: "flex",
                padding: "0px 16px 16px 16px",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
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
                    {"Water Resources"}
                  </Typography>
                </Box>
              </Box>

              <Box
                id="soil"
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
                            width: "20px",
                            height: "20px",
                            borderRadius: "2px",
                            border: `2px solid ${widget.waterResourcesBorderColor}`,
                            background: `${widget.waterResourcesBackgroundColor}`,
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
                          {widget.waterResourcesTitle}
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
                        onClick={() =>
                          window.open(
                            "https://app.land.tech/signup/?territory=us&plan=unlimited&recurrence=month"
                          )
                        }
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
                        {widget.waterResourcesSubtitle}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#1F2937",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "20px",
                          marginRight: "10px",
                        }}
                      >
                        {widget.waterResourcesDate}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )} */}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default NewCollapsible;
