import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const Profile = () => {
    const [userdata, setuserData] = useState([]);
    
    const navigate = useNavigate();

const revert = () => {
  navigate('/')
}
const {id} = useParams();

    useEffect(() => {
     
      if(id !== ''){
        fetch(`https://649034421e6aa71680cacc9a.mockapi.io/user/${id}`)
        .then((res) => res.json())
        .then((users) => {setuserData(users)})
      }
       
    },[id])

    console.log(userdata)
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap:'wrap',
        '& > :not(style)': {
          m: 10,
          width: '900px',
          paddingLeft:'10px',
          
          
        },
      }}
    >
      
     
        
          <Card sx={{ maxWidth:'600px' }}>
      <CardMedia
        sx={{ height: 140 ,backgroundColor:'#1976d2'  }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
        
      />
      <CardContent>
        <Typography textAlign={'end'} gutterBottom variant="h4" component="div">
          {userdata.name}
        </Typography>
        <Divider/>
        <Typography variant="body2" color="text.secondary">
         <p style={{textAlign:'left'}}>Email : {userdata.email}</p>
         <p style={{textAlign:'left'}}>Dob : {userdata.dob}</p>
         <p style={{textAlign:'left'}}>City : {userdata.city}</p>
         <p style={{textAlign:'left'}}>About.....</p>
         <p style={{textAlign:'start'}}>{userdata.about}</p>
        </Typography>
      </CardContent>
     <Button onClick={revert}>Back</Button>
    </Card>
      
    </Box>
  )
}

export default Profile