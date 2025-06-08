import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { BiCategory } from "react-icons/bi";
import logo from "../assets/images/logo3.png";
import { Badge } from 'primereact/badge';
import { IoBagHandleOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Divider, FormControl, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import { FaAngleRight } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router';

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

    const items = [
        {
            label: 'Kadın Giyim',
            items: [
                [
                    {
                        label: 'Living Room',
                        items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]

                    }
                ],
                [
                    {
                        label: 'Kitchen',
                        items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
                    },
                ],
            ]
        },
        {
            label: 'Erkek Giyim',
            items: [
                [
                    {
                        label: 'asda Room',
                        items: [{ label: 'Accessorasdsaies' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]

                    }
                ],
                [
                    {
                        label: 'Kiasdatchen',
                        items: [{ label: 'Baasdr stasdsaool' }, { label: 'Chair' }, { label: 'Table' }]
                    },
                ],
            ]
        },
        {
            label: 'Takı',
        },
        {
            label: 'Ayakkabı',
        }
    ];
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [submenuTop, setSubmenuTop] = useState(0);

    useEffect(() => {
        const hoveredEl = itemRefs.current[hoveredIndex ?? -1];
        const containerEl = itemRefs.current[0]?.parentElement;
        if (hoveredEl && containerEl) {
            const rect = hoveredEl.getBoundingClientRect();
            const containerRect = containerEl.getBoundingClientRect();
            console.log(hoveredEl, containerEl);
            setSubmenuTop(rect.top - containerRect.top);
        }
    }, [hoveredIndex]);
    return (
        <div className='row m-0 p-0 d-flex flex-row align-items-center  p-2 border-bottom'>
            <div className='col-md-4 d-flex flex-column align-items-center'>
                <img src={logo} alt="Logo" className='ms-6' style={{ width: "120px" }} />
                <div className='d-flex flex-row align-items-center ms-7'>
                    <BiCategory color='#468078' size={30} />
                    <div
                        className="dropdown position-relative d-inline-block"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => { setIsOpen(false); setHoveredIndex(null); }}
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
                            {isOpen &&
                                (
                                    <motion.div
                                        className="dropdown-menu cat-menu show position-absolute d-block z-3 top-100"
                                        aria-labelledby="dropdownMenuLink"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 9 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        style={{ left: -25, }}
                                    >
                                        <div className="position-relative">
                                            <div className="d-flex flex-column">
                                                {items.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        ref={(el) => { itemRefs.current[index] = el; }}
                                                        className="dropdown-item  d-flex justify-content-between align-items-center"
                                                        onMouseEnter={() => setHoveredIndex(index)}
                                                        style={{ cursor: "pointer", minWidth: "200px" }}
                                                    >
                                                        {item.label}
                                                        {item.items && <FaAngleRight size={14} />}
                                                    </div>
                                                ))}
                                            </div>
                                            <AnimatePresence>
                                                {hoveredIndex !== null &&
                                                    items[hoveredIndex]?.items && (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: 10 }}
                                                            animate={{ opacity: 1, x: 1 }}
                                                            exit={{ opacity: 0, x: 10 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="position-absolute bg-white shadow  z-3 p-3 d-flex"
                                                            style={{
                                                                top: submenuTop,
                                                                left: "100%",
                                                                minWidth: "300px",
                                                                whiteSpace: "nowrap"
                                                            }}
                                                        >
                                                            {items[hoveredIndex].items.map((column, colIndex) => (
                                                                <div key={colIndex} className="me-4">
                                                                    {column.map((category, i) => (
                                                                        <div key={i} className="mb-2">
                                                                            <div className="fw-bold mb-2 ">{category.label}</div>
                                                                            {category.items.map((sub, subIndex) => (
                                                                                <div key={subIndex} className="text-muted small mb-2">
                                                                                    {sub.label}
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                            </AnimatePresence>
                                        </div>
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
                <div className="row mt-3 gap-3">
                    <Link to={"/"} className="col-auto text-muted fw-bold text-decoration-none">Anasayfa</Link>
                    <Link to={"/product"} className="col-auto text-muted fw-bold text-decoration-none ">Ürünler</Link>
                    <Link to={"/product-detail"} className="col-auto text-muted fw-bold text-decoration-none">Ürün Detayları</Link>
                    <Link to={"/deal-of-day"} className="col-auto text-muted fw-bold text-decoration-none">Günün Fırsatı</Link>
                    <div className="col-auto d-flex align-items-center text-muted fw-bold">
                        Sayfalar <FaCaretDown className="ms-1" />
                    </div>
                    <Link to={"/contact"} className="col-auto text-muted fw-bold text-decoration-none">İletişim</Link>
                </div>
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