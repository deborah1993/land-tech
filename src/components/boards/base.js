"use client";

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export const BaseBoard = ({ setCard, setShowSummary }) => {
  return (
    <div
      // className="h-screen w-full bg-neutral-900 text-neutral-50"
      style={{
        height: "98vh",
        width: "100%",
        color: "black",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "20px",
        boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(20px)",
      }}
    >
      <Board setCard={setCard} setShowSummary={setShowSummary} />
    </div>
  );
};

const Board = ({ setCard, setShowSummary }) => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div
      // className="flex h-full w-full gap-3 overflow-scroll p-12"
      style={{
        display: "flex",
        height: "95vh",
        width: "100%",
        overflow: "hidden",
        padding: "12px",
        gap: 3,
      }}
    >
      <Column
        title="Site Saved"
        column="Site Saved"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
        setCard={setCard}
        setShowSummary={setShowSummary}
      />
      <Column
        title="Opportunity"
        column="Opportunity"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
        setCard={setCard}
        setShowSummary={setShowSummary}
      />
      <Column
        title="Letter Sent"
        column="Letter Sent"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
        setCard={setCard}
        setShowSummary={setShowSummary}
      />
      <Column
        title="Deal completed"
        column="Deal completed"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
        setCard={setCard}
        setShowSummary={setShowSummary}
      />
    </div>
  );
};

const Column = ({
  title,
  headingColor,
  cards,
  column,
  setCards,
  setCard,
  setShowSummary,
}) => {
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
      className="w-56 shrink-0"
      style={{
        width: "22%",
        flexShrink: 0,
        marginRight: "7px",
        padding: "10px",
        borderRadius: "10px",
        border: "1px solid rgba(38, 38, 38, 0.1)",
      }}
    >
      <div
        // className="mb-3 flex items-center justify-between"
        style={{
          marginBottom: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        style={{
          height: "100%",
          width: "100%",
          transition: "background-color 0.2s ease-in-out", // transition-colors equivalent
          backgroundColor: active
            ? "rgba(38, 38, 38, 0.1)"
            : "rgba(38, 38, 38, 0)",
        }}
      >
        {filteredCards.map((c) => {
          return (
            <MyCard
              key={c.id}
              {...c}
              handleDragStart={handleDragStart}
              setShowSummary={setShowSummary}
              setCard={setCard}
            />
          );
        })}
        <DropIndicator beforeId={null} column={column} />
        {/* <AddCard column={column} setCards={setCards} /> */}
      </div>
    </div>
  );
};

const MyCard = ({
  title,
  id,
  column,
  handleDragStart,
  setCard,
  setShowSummary,
}) => {
  const handleClick = () => {
    setCard({ title, id, column });
    setShowSummary(true);
  };
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        // className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
        style={{
          cursor: "grab",
          borderRadius: "5px",
          border: "1px solid gray",
          padding: "5px 10px",
          active: "cursor-grabbing",
          backgroundColor: "white",
          marginBottom: "5px",
        }}
        onClick={handleClick}
      >
        <p
          // className="text-sm text-neutral-100"
          style={{ fontSize: "sm", color: "black" }}
        >
          {title}
        </p>

        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {"Saved May 28th, 2024"}
        </Typography>
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

const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            // className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
            style={{
              width: "100%",
              borderRadius: "md",
              border: "1px solid violet",
              backgroundColor: "violet",
              fontSize: "sm",
              text: "gray",
            }}
          />
          <div
            // className="mt-1.5 flex items-center justify-end gap-1.5"
            style={{
              marginTop: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              gap: 1.5,
            }}
          >
            <button
              onClick={() => setAdding(false)}
              // className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
              style={{
                paddingX: 3,
                paddingY: 1.5,
                fontSize: "sx",
                color: "gray",
              }}
            >
              Close
            </button>
            <button
              type="submit"
              // className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                borderRadius: "md",
                backgroundColor: "beige",
                paddingX: 3,
                paddingY: 1.5,
                fontSize: "xs",
                color: "gray",
              }}
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            gap: 1.5,
            paddingX: 3,
            paddingY: 1.5,
            fontSize: "xs",
            color: "gray",
          }}
        >
          <span>Add card</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

const DEFAULT_CARDS = [
  // Site Saved
  { title: "Saint Pt. Beach", id: "1", column: "Site Saved" },
  { title: "The Dali Museum", id: "2", column: "Site Saved" },
  { title: "Botanical Gardens", id: "3", column: "Site Saved" },
  { title: "Mosque", id: "4", column: "Site Saved" },
  // Opportunity
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "Opportunity",
  },
  { title: "Postmortem for outage", id: "6", column: "Opportunity" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "Opportunity" },

  // Letter Sent
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "Letter Sent",
  },
  { title: "Add logging to daily CRON", id: "9", column: "Letter Sent" },
  // Deal Completed
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "Deal completed",
  },
];
