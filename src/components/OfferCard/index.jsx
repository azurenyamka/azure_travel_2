import React from 'react';
import { Box } from '@mui/system';
import { Typography, Card, Grid } from '@mui/material';
import Button from '@mui/material/Button';


const OfferCard = ({ card }) => {
  return (
    <Grid sx={{display:'flex', width:'1000px', height:'258px',padding:'20px', gap:'24px', borderRadius:'20px', boxShadow:'5px 5px 5px'}}>
        <Box sx={{flex:1}}>
           <img style={{width:"324px", height:'218px', borderRadius:'20px'}} src={card.img}></img>
        </Box>
        <Box sx={{flex:1, display:'flex', flexDirection:'column', gap:'16px'}}>
            <Typography variant='p' sx={{fontWeight: 400, fontSize:'16px', lineHeight:'20px',color: '#000000', opacity: 0.5}}>{card.title}</Typography>
            <Typography variant='h6' sx={{fontWeight: 500, fontSize:'24px', lineHeight:'31px'}}>{card.pr}</Typography>
            <Typography variant='p' sx={{fontWeight: 400, fontSize:'16px', lineHeight:'20px',color: '#000000', opacity: 0.5}}>{card.price}</Typography>
            <Box>
                <Button>Book now</Button>
            </Box>
        </Box>
    </Grid>
  )
}


const KardMap = () => {
    const cardInformation = [
        {
        img:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxpZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',   
        title:'Domestic Flights',
        pr:'Huge savings on flight with trxvl.',
        price:'Book domestic flights starting @ just ₹1459'
        },
        {
        img:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        title:'International Hotels',
        pr:'Enjoy upto 20% off on International Hotels.',
        price:'Make the most of  this deal on your first booking with trxvl.'
        },
        {
        img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        title:'Domestic Flights',
        pr:'Huge savings on flight with trxvl.',
        price:'Book domestic flights starting @ just ₹1459'
        },
        {
        img:'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title:'International Hotels',
        pr:'Enjoy upto 20% off on International Hotels.',
        price:'Make the most of  this deal on your first booking with trxvl.'
    },
    {
      img:'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      title:'International Hotels',
      pr:'Enjoy upto 20% off on International Hotels.',
      price:'Make the most of  this deal on your first booking with trxvl.'
  },
];
  return (
     <Grid><Typography variant='p' sx={{fontWeight: 700, fontSize: '32px', lineHeight: '37px', color: '#000000', margin:'0 0 40px 120px'}}>Offers</Typography>
     <Grid
        sx={{
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
    <Box sx={{display:'flex', gap:'24px', margin:'40px 0 80px 120px'}}>
    {cardInformation.map((card, index) => (
        < OfferCard key={index} card={card} />
    ))}
    </Box>
    </Grid>
    </Grid>
  
    
  )
}



export default KardMap;