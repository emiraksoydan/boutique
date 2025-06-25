import { Avatar, InputAdornment, TextField } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router';
import { MdSearch } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { GoGear } from "react-icons/go";

const AdminHeaderBar = () => {
    const getLocation = useLocation();

    return (
        <div className='d-flex justify-content-between align-items-center ps-3 pe-0 p-2 '>
            <h2>Anasayfa</h2>
            <div className='rounded-pill p-2 bg-white d-flex align-items-center gap-3'>
                <TextField
                    size='small'
                    placeholder="Ara..."
                    variant="outlined"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MdSearch fontSize='x-large' />
                                </InputAdornment>
                            )
                        }
                    }}
                    sx={{
                        width: '200px',
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: '#f5f6fe !important',
                            borderRadius: '20px !important',
                            padding: '8px 18px',
                            '& fieldset': {
                                border: 'none',
                            },
                            '&:hover fieldset': {
                                border: 'none',
                            },
                            '&.Mui-focused fieldset': {
                                border: 'none',
                            },
                        },
                        '& input': {
                            padding: 0,
                        },
                        '& .MuiInputBase-root': {
                            backgroundColor: 'transparent',
                        },
                    }} />
                <BsBell color='#a9b0c2' fontSize='large' />
                <GoGear color='#a9b0c2' fontSize='large' />
                <Avatar sx={{
                    bgcolor: '#260078',
                }}></Avatar>

            </div>
        </div>
    )
}

export default AdminHeaderBar