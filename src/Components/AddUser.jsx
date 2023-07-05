import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Textarea from '@mui/joy/Textarea';
import { useNavigate, useParams } from 'react-router-dom';

const AddUser = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        dob: '',
        city: '',
        about: ''
    })

    const navigate = useNavigate()

    const { id } = useParams();
    useEffect(() => {
        if (id) {

            fetch(`https://649034421e6aa71680cacc9a.mockapi.io/user/${id}`)
                .then((res) => res.json())
                .then((data) => { setUser(data) })

        }
    }, [id])



    const addUsers = async (data) => {
        await fetch('https://649034421e6aa71680cacc9a.mockapi.io/user', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        navigate('/')
    }

    const handlestate = (name, value) => {
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            fetch(`https://649034421e6aa71680cacc9a.mockapi.io/user/${id}`, {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            navigate('/')
        }
        else {
            addUsers(user)
        }
        setUser({
            name: '',
            email: '',
            dob: '',
            city: '',
            about: ''
        })
    }
    return (
        <Box sx={{ maxWidth: '600px', border: '2px solid grey', margin: '15px',borderRadius:'8px' , boxShadow:'  rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }}>
            <Box sx={{ maxWidth: '500px', margin: '10px' }} >
                <h2 style={{textAlign:'start'}}>{id ? 'Edit User' : 'Add User' }</h2>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth id="name" name='name' type='text' label="Name" required value={user.name} onChange={(e) => { handlestate('name', e.target.value) }} variant="standard" />
                    <br />
                    <TextField fullWidth id="email" name='email' type='email' label="Email" required value={user.email} variant="standard" onChange={(e) => { handlestate('email', e.target.value) }} />
                    <br />
                    <br />
                    <TextField fullWidth sx={{}} id="dob" name='dob' type='date' label="" required value={user.dob} variant="standard" onChange={(e) => { handlestate('dob', e.target.value) }} />
                    <br />
                    <TextField fullWidth id="city" name='city' type='text' label="City" required value={user.city} variant="standard" onChange={(e) => { handlestate('city', e.target.value) }} />
                    <br />
                    <br />
                    <Textarea maxRows={10} fullWidth placeholder="About you......." id="about" required value={user.about} name='about' type='text' variant="outlined" onChange={(e) => { handlestate('about', e.target.value) }} />
                    <Button sx={{ margin: '25px'}} type='submit' >{id ? 'Edit' : 'Add'}</Button>
                </form>
            </Box>
        </Box>
    )
}

export default AddUser