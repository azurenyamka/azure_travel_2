import React from 'react';
import styles from './style.module.css';
import Navbar from '../../components/Navbar';
import { Grid, Typography } from '@mui/material';
import FreeSolo from '../../components/SearchInput';
import Categories from '../../components/Categories';
import AutoGrid from '../../components/ScrollBar';
import Kardman from '../../components/OfferCard';

const Home = () => {
  return (
    <Grid className={styles.container}>
      <Grid className={styles.background}>
        <Grid className={styles.content}>
          <Navbar />
          <Typography sx={{fontWeight: 700, fontSize: 72,  color:'white', width: 759,height: 166,lineHeight:'83px', margin:'40px 0px 40px 120px',}} variant='h1'>The whole world awaits.</Typography>
          <FreeSolo/>
          {/* <Typography sx={{fontWeight: 700,fontSize: '32px',lineHeight: '37px', color:'white',margin:'0 0 32px 120px'}}>Top categories</Typography> */}
          <Categories/>
          <AutoGrid/>
        </Grid>
        {/* <Grid> */}
          <Kardman/>
        {/* </Grid> */}
      </Grid>
    </Grid>
  )
}

export default Home;