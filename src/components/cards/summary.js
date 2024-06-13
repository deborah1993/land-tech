"use client";

import React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { DialogContent, Box } from "@mui/material";
import { Send } from "@mui/icons-material";

const navItems = [
  "Summary",
  "Zoning",
  "FLU",
  "Comparable",
  "Ownership",
  "Demographics",
  "Permits",
  "Hazards",
  "Activity",
  "Letters",
  "Attachments",
  "Site Report",
];
function SummaryCard({ open, onClose, item }) {
  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth="md">
      <DialogTitle
        sx={{
          bgcolor: "#37414f",
          color: "white",
          fontWeight: 900,
          fontSize: "25px",
          textAlign: "start",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {item.title}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            sx={{ color: "white", bgcolor: "#84cb15", gap: "5px" }}
            onClick={() => window.open("http://localhost:3000/sign-up")}
          >
            <Send />
            Share Site
          </Button>
          <Button onClick={onClose} sx={{ color: "white" }}>
            X
          </Button>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "flex-start",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "15%",
              height: "100%",
              alignItems: "flex-start",
              marginRight: "15px",
              backgroundColor: "#e4e7ea",
            }}
          >
            {navItems.map((element, i) => (
              <Box
                key={i}
                sx={{
                  width: "100%",
                  backgroundColor: i === 0 ? "#FFF" : "#e4e7ea",
                  color: "gray", //"#acb0b3"
                  padding: "10px",
                  cursor: "pointer",
                }}
                onClick={() => window.open("http://localhost:3000/sign-up")}
              >
                {element}
              </Box>
            ))}
          </Box>
          <Box sx={{ width: "45%", height: "100%" }}>
            <img src="/summary-map.png" width="100%" />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Box
              sx={{
                width: "100%",
                padding: "10px 20px 20px 20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography fontSize="30px" fontWeight={900}>
                {"Property name"}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: "15px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography sx={{ fontWeight: 900, fontSize: "14px" }}>
                    Address
                  </Typography>
                  <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                    {"Some address here"}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography sx={{ fontWeight: 900, fontSize: "14px" }}>
                    Lot area
                  </Typography>
                  <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                    {30}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography sx={{ fontWeight: 900, fontSize: "14px" }}>
                    Last sold
                  </Typography>
                  <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                    {12 / 3 / 2020}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                padding: "0px 15px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Typography fontSize="20px" fontWeight={900}>
                Ownership
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                  Owner
                </Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                  {"Mark Owe"}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                  External links
                </Typography>
                <a href={""}>See more</a>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                padding: "20px 20px 10px 20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography fontSize="20px" fontWeight={900}>
                  Zoning
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
                >
                  <Typography fontSize="20px" fontWeight={400}>
                    5.6
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default SummaryCard;
