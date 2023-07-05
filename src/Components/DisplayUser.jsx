import {  Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Link} from 'react-router-dom'

import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';




const DisplayUser = () => {

  const [data, setData] = useState([]);

  const [count,setcount] = useState(0);

  useEffect(() => {
    console.log('called')
      fetch('https://649034421e6aa71680cacc9a.mockapi.io/user')
          .then((res) => res.json())
          .then((user) => {setData(user)})

  }, [count])


  

    const handleDelete = async (id) => {
      console.log(id)
     await   fetch( `https://649034421e6aa71680cacc9a.mockapi.io/user/${id}`,{
          method:'DELETE',
          headers:{
              'Content-Type' : 'application/json'
          }
      })
      setcount(count+1);
  }


   


    console.log(data)
    console.log(count)

    
    return (



        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>

            {data.map((users) => (
               <Card key={users.id}  sx={{width: 245 , margin:'5px ' }}>
                <Link style={{textDecoration:'none'}} to = {`/profile/${users.id}`}>
               <CardActionArea >
               
                 <CardContent  >
                  <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
                   <Typography sx={{whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden'}} m={0} display={'inline-block'} gutterBottom variant="h5" component="div">
                     {users.name}
                   </Typography>
                   <div style={{ backgroundColor:'#d8ffa9'  ,border:'1px solid black' ,height:'30px',width:'30px',display:'inline-block' , borderRadius:'50%'}}>
                        <p style = {{display:'inline-block', margin:'5px',paddingTop:'0'}}>{users.name[0]}</p>
                   </div>
                   </div>
                   <br/>
                   <Divider/>
                   <Typography variant="body2" color="text.secondary">
                   <p style = {{margin:'0',paddingTop:'8px',textAlign:'end'}}>DOB : {users.dob}</p>
                   <p style = {{margin:'0',paddingTop:'8px',textAlign:'end'}}>Email : {users.email}</p>
                   </Typography>
                 </CardContent>
               </CardActionArea>
               </Link>
               <CardActions>
                <Link to = {`edituser/${users.id}`}>
                 <Button size="small" color="primary" >
                   Edit
                 </Button>
                 </Link>
                 <Button size="small" color="primary" onClick={() => {handleDelete(users.id)}}>
                   Delete
                 </Button>
               </CardActions>
             </Card>
            ))}

        </div>

    )

}

export default DisplayUser