import React from 'react';
import { Box } from '@mui/system';
import { Typography, Card } from '@mui/material';
import Button from '@mui/material/Button';


const OfferCard = ({ card }) => {
  return (
    <Card sx={{display:'flex', width:'688px', height:'258px',padding:'20px'}}>
        <Box sx={{flex:1}}>
           <img src={{}}></img>
        </Box>
        <Box sx={{flex:1}}>
            <Typography variant='p'>{card.title}</Typography>
            <Typography variant='h6'>{card.pr}</Typography>
            <Typography variant='p'>{card.price}</Typography>
            <Box>
                <Button>Book now</Button>
            </Box>
        </Box>
    </Card>
  )
}


const KardMap = () => {
    const cardInformation = [
        {
        // img:    
        title:'Domestic Flights',
        pr:'Huge savings on flight with trxvl.',
        price:'Book domestic flights starting @ just ₹1459'
        },
        {
        title:'International Hotels',
        pr:'Enjoy upto 20% off on International Hotels.',
        price:'Make the most of  this deal on your first booking with trxvl.'
        },
        {
        title:'Domestic Flights',
        pr:'Huge savings on flight with trxvl.',
        price:'Book domestic flights starting @ just ₹1459'
        },
        {
        title:'International Hotels',
        pr:'Enjoy upto 20% off on International Hotels.',
        price:'Make the most of  this deal on your first booking with trxvl.'
    },
];
  return (
    <>
    {cardInformation.map((card, index) => (
        < OfferCard key={index} card={card} />
    ))}
    </>
    
  )
}



export default KardMap;