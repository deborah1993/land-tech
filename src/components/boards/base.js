"use client";

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { Typography, Box, Button } from "@mui/material";
import {
  DragIndicatorSharp,
  MoreHoriz,
  QueryBuilder,
} from "@mui/icons-material";
import { markers } from "@/lib/hard-code-data";

export const BaseBoard = ({ setCard }) => {
  const [cards, setCards] = useState(markers);

  return (
    <div
      style={{
        mt: "auto",
        display: "inline-flex",
        height: "100%",
        flexDirection: "row",
        overflow: "hidden",
        alignItems: "flex-start",
        flexShrink: 0,
        borderRadius: "5px",
        gap: "2vw",
      }}
    >
      <Column
        title="Sites Saved"
        column="Sites Saved"
        headingColor="#7E22CE"
        cards={cards}
        setCards={setCards}
        setCard={setCard}
      />
      <Column
        title="Opportunity"
        column="Opportunity"
        headingColor="#EF46E7"
        cards={cards}
        setCards={setCards}
        setCard={setCard}
      />
    </div>
  );
};

const Column = ({ title, headingColor, cards, column, setCards, setCard }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div
      style={{
        display: "inline-flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "flex-start",
        flexShrink: 0,
        borderRadius: "5px",
        width: "15vw",
        maxWidth: "300px",
      }}
    >
      <Box
        style={{
          cursor: "grab",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "4px 8px",
            background: "#FFF",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            borderRadius: "5px",
          }}
        >
          <Box
            id="left"
            sx={{
              display: "flex",
              width: "57%",
              height: "38px",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <DragIndicatorSharp
              sx={{
                fontSize: "18px",
                color: "#1F2937",
                stroke: "#1F2937",
              }}
            />
            <Typography
              sx={{
                color: "#1F2937",
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box
            id="right"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                width: "24px",
                color: "#1F2937",
                textAlign: "right",
                fontSize: "14px",
                fontWeight: 400,
                height: "27px",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {filteredCards.length}
            </Typography>
            <MoreHoriz
              sx={{
                color: "#1F2937",
                stroke: "#1F2937",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "7px",
            background: headingColor,
          }}
        ></Box>
      </Box>

      <Box
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        sx={{
          display: "flex",
          padding: "16px 12px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
          flex: "1 0 0",
          height: "100%",
          width: "100%",
          transition: "background-color 0.2s ease-in-out", // transition-colors equivalent
          backgroundColor: active
            ? "rgba(38, 38, 38, 0.1)"
            : "rgba(38, 38, 38, 0)",
          borderRadius: "0px 0px 5px 5px",
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(calc(8px / 2))",
        }}
      >
        {filteredCards.map((c) => {
          return (
            <MyCard
              key={c.id}
              card={c}
              handleDragStart={handleDragStart}
              setCard={setCard}
            />
          );
        })}
        <DropIndicator beforeId={null} column={column} />
      </Box>
    </div>
  );
};

const MyCard = ({ handleDragStart, setCard, card }) => {
  const handleClick = () => {
    setCard(card);
  };
  return (
    <>
      <DropIndicator beforeId={card.id} column={card.column} />
      <motion.div
        layout
        layoutId={card.id}
        draggable="true"
        onDragStart={(e) =>
          handleDragStart(e, {
            title: card.addres,
            id: card.id,
            column: card.column,
          })
        }
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          cursor: "grab",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            minHeight: "168px",
            padding: "8px 12px 12px 12px",
            flexDirection: "column",
            alignItems: "start",
            gap: "8px",
            borderRadius: "5px",
            background: "#FFF",
            boxShadow: "0px 1px 0px 0px #CCC",
          }}
        >
          <Box
            id="content"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                height: "24px",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#1F2937",
                  fontSize: "10px",
                  fontWeight: 600,
                  lineHeight: "14px",
                  textTransform: "uppercase",
                }}
              >
                Saint Petersburg
              </Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M13.5 8.25V6L16.5 9L13.5 12V9.75H9.75V13.5H12L9 16.5L6 13.5H8.25V9.75H4.5V12L1.5 9L4.5 6V8.25H8.25V4.5H6L9 1.5L12 4.5H9.75V8.25H13.5Z"
                  fill="black"
                />
              </svg>
            </Box>

            <Typography
              sx={{
                maxWidth: "220px",
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                color: "#1F2937",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              {card.address}
            </Typography>

            <Typography
              sx={{
                maxWidth: "217px",
                overflow: "hidden",
                color: "#6B7280",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "12px",
                fontWeight: 400,
              }}
            >
              {card.id}
            </Typography>
          </Box>

          <Box
            id="meta"
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "8px",
              alignSelf: "stretch",
            }}
          >
            <QueryBuilder
              color="#4B5563"
              sx={{
                color: "#4B5563",
                fill: "#4B5563",
                stroke: "#4B5563",
                fontSize: "15px",
              }}
            />
            <Typography
              sx={{
                color: "#4B5563",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "12px",
                fontWeight: 400,
              }}
            >
              {card.saved}
            </Typography>
            <Box
              sx={{
                width: "20px",
                height: "20px",
                display: "flex",
                padding: " 7.5px 6px 6.5px 6px",
                borderRadius: "100px",
                border: "1px solid #FFF",
                background: "#3B82F6",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#FFF",
                  textAlign: "center",
                  fontSize: "8px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                LT
              </Typography>
            </Box>
          </Box>

          <Box
            id="frame-561"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "8px",
              flex: "1 0 0",
              alignSelf: "stretch",
            }}
          >
            <Button
              sx={{
                display: "flex",
                padding: "6px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flex: "1 0 0",
                alignSelf: "stretch",
                borderRadius: "8px",
                border: "2px solid #0057AD",
                background: "rgba(0, 87, 173, 0.10)",
              }}
              onClick={handleClick}
            >
              <Typography
                sx={{
                  color: "#1F2937",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "none",
                }}
              >
                View
              </Typography>
            </Button>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      // className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
      style={{
        marginTop: 0.5,
        marginBottom: 0.5,
        height: 0.5,
        width: "100%",
        backgroundColor: "violet",
        opacity: 0,
      }}
    />
  );
};
