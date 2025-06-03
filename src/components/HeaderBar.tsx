import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { BiCategory } from "react-icons/bi";
import logo from "../assets/images/logo3.png";
import { Dropdown, type DropdownChangeEvent } from 'primereact/dropdown';
import { Badge } from 'primereact/badge';
import { IoBagHandleOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Autocomplete, Divider, FormControl, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
type Category = { name: string };

const HeaderBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const categories: Category[] = [
        { name: 'Tüm Kategoriler' },
        { name: 'Erkek Kıyafet' },
        { name: 'Kadın Kıyafet' },
        { name: 'Aksesuar' },
        { name: 'Ayakkabı' },
    ];
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(categories[0]);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='row m-0 p-0 d-flex flex-row align-items-center  p-2 border-bottom'>
            <div className='col-md-4 d-flex flex-column align-items-center'>
                <img src={logo} alt="Logo" className='ms-6' style={{ width: "120px" }} />
                <div className='d-flex flex-row align-items-center ms-7'>
                    <BiCategory color='#468078' size={30} />
                    <div
                        className="dropdown position-relative d-inline-block"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <a
                            className="btn btn-sm"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            aria-haspopup="true"
                            aria-expanded={isOpen}
                            style={{ fontSize: '20px', fontWeight: 'bold', color: '#468078' }}
                            onClick={(e) => e.preventDefault()}
                        >
                            Kategoriler
                        </a>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    className="dropdown-menu show position-absolute d-block z-3 top-100"
                                    aria-labelledby="dropdownMenuLink"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    style={{ left: -10, }}
                                >
                                    <a href='#' className="dropdown-item" onClick={(e) => { e.preventDefault(); setIsOpen(false); }}>Türkçe</a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <div className='col-md-5'>
                <div className=' d-flex flex-row w-100 gap-1'>
                    <FormControl style={{ width: "30%" }} size="small">
                        <Select
                            value={selectedCategory?.name || ''}
                            onChange={(e) => {
                                const selected = categories.find(c => c.name === e.target.value);
                                setSelectedCategory(selected ?? null);
                            }}
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                '& .MuiSelect-select': {
                                    paddingLeft: 0, // Label/placeholder için soldan boşluğu kaldırır
                                }
                            }}
                        >
                            {categories.map((option) => (
                                <MenuItem
                                    key={option.name}
                                    value={option.name}
                                    selected={selectedCategory?.name === option.name}
                                    sx={{
                                        backgroundColor:
                                            selectedCategory?.name === option.name ? '#e0f4e4 !important' : 'inherit',
                                        color:
                                            selectedCategory?.name === option.name ? '#468078' : 'inherit',
                                        '&:hover': {
                                            backgroundColor: 'whitesmoke',
                                            color: '#000',
                                        },
                                    }}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        placeholder="Ara..."
                        size="small"
                        fullWidth
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CiSearch size={20} />
                                    </InputAdornment>
                                ),
                            }
                        }}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                        }}
                    />
                </div>
                <Divider className='w-100' sx={{
                    borderBottom: '3px solid #424648',
                    opacity: 1,

                }} />
            </div>
            <div className="col-md-3 d-flex justify-content-center  gap-4  ">
                <span className="p-overlay-badge mt-2" style={{ fontSize: '2.0rem' }}>
                    <IoBagHandleOutline className='mb-3' />
                    <Badge value="0" size={"normal"} style={{ backgroundColor: "#468078" }} />
                </span>
                <span className="p-overlay-badge mt-2 me-6 mb-3" style={{ fontSize: '2.0rem' }}>
                    <MdFavoriteBorder className='mb-3' />
                    <Badge value="0" size={"normal"} style={{ backgroundColor: "#468078" }} />
                </span>
            </div>
        </div >
    )
}

export default HeaderBar