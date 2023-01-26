import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const ImgCard = ({ card }) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        borderRadius: "20px",
      }}
    >
      <img style={{borderRadius:'25px'}} src={`${card.imageURL}`} alt="" width={400} height={270} />
      <Box
        sx={{
          color: "dark",
          position: "absolute",
          top: "75%",
          left: "10%",
          color: "white",
          fontSize: "28px",
        }}
      >
        {card.ner}
      </Box>
    </Box>
  );
};
const Mainthree = () => {
  const coti = [
    {
      ner: "Bali, Indonesia",
      imageURL: "./images/image 18.svg",
    },
    {
      ner: "Kerry, Ireland",
      imageURL: "./images/image 18 (1).svg",
    },
    {
      ner: "Sydney, Australia",
      imageURL: "./images/image 18 (2).svg",
    },
    {
        ner: "Paris, France",
        imageURL: "./images/image 18 copy.svg",
      },
    {
        ner: "Bali, Indonesia",
        imageURL: "./images/image 18.svg",
    },
    {
        ner: "Kerry, Ireland",
        imageURL: "./images/image 18 (1).svg",
    },
    {
        ner: "Sydney, Australia",
        imageURL: "./images/image 18 (2).svg",
    },
    
  ];
  return (
    <Grid sx={{margin:'0 0 80px 120px', marginTop:"10%"}}>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "700",
          width: "900px",
          marginBottom: "2%",
        }}
      >
        Top Vacation Destinations
      </Typography>
      <Grid
        sx={{
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box sx={{ display: "flex", gap: "2% ", zIndex: "1", }}>
          {coti.map((card, index) => (
            <ImgCard key={index} card={card} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Mainthree;

