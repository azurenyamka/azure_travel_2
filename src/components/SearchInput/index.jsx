import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { FiSearch } from 'react-icons/fi';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';


export default function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 1700 ,backgroundColor:'rgba(255, 255, 255, 0.4)',backdropFilter: 'blur(16px)',margin:'0 0 40px 120px',borderRadius:'20px',paddingLeft:'25px',paddingRight:'16px'}}>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Box sx={{display:'flex', alignItems:'center'}}>
        <FiSearch size={20} color={'white'}/>
        <TextField
          id="filled-search"
          placeholder="Search destinations, hotelsfield"
          type="search"
          sx={{width:500,  outline:"none",'& fieldset':{border:'none'}}}
        />
        </Box>
        <Box sx={{display:'flex',gap:'84px',alignItems:'center'}}>
        <Box sx={{display:'flex'}}>
        <img style={{alignSelf:'center',marginRight:'5px'}} src='./images/Group.svg'/>
        <Typography variant='p' sx={{fontSize: '16px', color:'white'}}>Check in</Typography>
        </Box>
        <Box sx={{display:'flex'}}>
        <img style={{alignSelf:'center',marginRight:'5px'}} src='./images/Group.svg'/>
        <Typography variant='p' sx={{fontSize: '16px', color:'white'}}>Check in</Typography>
        </Box>
        <Box sx={{display:'flex',}}>
          <img style={{alignSelf:'center',marginRight:'5px'}} src='./images/Vector copy.svg'/>
          <Typography variant='p' sx={{fontSize: '16px', color:'white'}}>1 room, 2 adults</Typography>
        </Box>
        <Box>
        <Button sx={{color:'#2659C3',backgroundColor:'white',borderRadius:'20px',width:'147px'}} variant="contained">Search</Button>
        </Box>
        </Box>
      </Box>
    </Stack>
  );
}