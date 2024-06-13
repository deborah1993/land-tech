"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { DialogContent, Box } from "@mui/material";

function SimpleDialog({ onClose, open }) {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle
        sx={{
          fontWeight: 900,
          fontSize: "35px",
          textAlign: "center",
          padding: "30px",
        }}
      >
        Where Do We Go From Here?
      </DialogTitle>
      <DialogContent sx={{ padding: "50px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <Typography
              sx={{ fontWeight: 900, fontSize: "25px", textAlign: "center" }}
            >
              Try Landtech for free
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Gain hands on experience with the data
            </Typography>
            <Button variant="contained">Register</Button>
            <Button variant="text" sx={{ fontSize: "12px" }}>
              Talk to a sourcing assistant
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default SimpleDialog;
