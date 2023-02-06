import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";

const Catigor = ({ card }) => {
  return (
    <Link href="/Detail">
      <Box
        sx={{
          display: "block",
          textAlign: "center",
          width: "100%",
        }}
      >
        <img src={`${card.imageURL}`} alt="" width={50} />
        <Box sx={{ opacity: "0.4", color: "white" }}>{card.ner}</Box>
      </Box>
    </Link>
  );
};
const Herocard = () => {
  const coti = [
    {
      ner: "Beaches",
      imageURL: "./images/Beaches.svg",
    },
    {
      ner: "Deserts",
      imageURL: "./images/Deserts.svg",
    },
    {
      ner: "Mountains",
      imageURL: "./images/Mountains.svg",
    },
    {
      ner: "Iconic Cities",
      imageURL: "./images/IconicCity.svg",
    },
    {
      ner: "Houseboats",
      imageURL: "./images/HouseBoats.svg",
    },
    {
      ner: "Countryside",
      imageURL: "./images/CountrySide.svg",
    },
    {
      ner: "Camping",
      imageURL: "./images/Camping.svg",
    },
    {
      ner: "Castles",
      imageURL: "./images/Castles.svg",
    },
    {
      ner: "Skiing",
      imageURL: "./images/Skiing.svg",
    },
    {
      ner: "Tropical",
      imageURL: "./images/Tropical.svg",
    },
  ];
  return (
    <Grid sx={{margin:'40px 0 80px 120px'}}>
      <Grid sx={{ marginBottom: "3%" }}>
        <Typography
          variant="h3"
          sx={{ color: "white", fontWeight: "700", width: "900px" }}
        >
          Top categories
        </Typography>
      </Grid>
      <Grid sx={{ marginTop: "2%", marginBottom: "3%" }}>
        <Box sx={{ display: "flex", gap: "6% " }}>
          {coti.map((card, index) => (
            <Catigor key={index} card={card} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Herocard;