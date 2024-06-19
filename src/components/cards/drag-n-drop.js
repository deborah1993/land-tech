"use client";

import * as React from "react";
import { Box, Card, Grid, Typography, CardContent } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import { styled } from "@mui/system";

const Title = styled("div")(() => ({
  marginBottom: "1.5px",
  color: "#666666",
}));

const SubTitle = styled("span")(() => ({
  marginBottom: "1.5px",
  color: "#333333",
  fontWeight: "bold",
}));
const Heading = styled("div")(() => ({
  color: "#333333",
  fontWeight: "bold",
  fontSize: "16px",
}));

const TaskCard = ({ item, index, setCard }) => {
  const handleClick = () => {
    setCard(item);
  };
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card
            sx={{ width: "95%", mt: "8px", mb: "4px", mr: "auto", ml: "auto" }}
          >
            <CardContent sx={{ p: "0 16px" }} onClick={handleClick}>
              <Heading>{item.assigned_To}</Heading>
              <Box sx={{ flexGrow: 1, color: "#333333", m: "20px 0 0" }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Title>Assignee</Title>
                    <SubTitle>{item.assignee}</SubTitle>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Title>Priority</Title>
                    <SubTitle>{item.priority}</SubTitle>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Title>Due Date</Title>
                    <SubTitle>{item.due_Date}</SubTitle>
                  </Grid>
                </Grid>
                <Box sx={{ marginLeft: "auto", textAlign: "end" }}>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {"Saved May 28th, 2024"}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};
export default TaskCard;
