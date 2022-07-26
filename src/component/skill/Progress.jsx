import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const Progress = (props) => {
  return (
    <>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={{ width: '90%', mr: 1 }}>
      <LinearProgress variant="determinate" {...props} style={{color:"hotpink"}} />
    </Box>
    <Box sx={{ minWidth: 35 }}>
      <Typography variant="body2" style={{fontWeight:"600"}}>{`${Math.round(
        props.value,
      )}%`}</Typography>
    </Box>
  </Box>
    
    </>
  )
}

export default Progress