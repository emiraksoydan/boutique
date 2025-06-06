import { AnimatePresence, motion } from 'framer-motion';
import { TabPanel, TabView } from 'primereact/tabview'
import React, { useEffect, useState } from 'react'
import shoes from '../assets/images/shoes.jpg';
import { Rating } from '@mui/material';
import { TbBasketPlus } from "react-icons/tb";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { CiHeart } from "react-icons/ci";
import { MdOutlineSearch } from "react-icons/md";

// @ts-ignore
import * as bootstrap from 'bootstrap';
import MotionTooltip from './MotionToolTip';


type GridSectionProps = {
    items: { id: number; title: string; image: string, productName: string }[];
};

const GridSection: React.FC<GridSectionProps> = ({ items }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].forEach(tooltipTriggerEl => {
            new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);
    return (
        <div className="container m-0 p-0">
            <div className="row m-0 p-0">
                {items.map((item, index) => (
                    <div key={item.id} className="col-md-3 col-sm-12 mt-3">
                        <div className={`hover-main-container border rounded-5 p-2 text-start h-100 ${hoveredIndex === index ? 'shadow' : ''}`}
                        >
                            <div
                                style={{ height: 250 }}
                                className='image-container w-100 d-flex position-relative justify-content-center align-items-center rounded-5 overflow-hidden'
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}>
                                <img src={item.image} alt={item.title} className=" object-fit-contain img-fluid" />
                                <div className="image-actions position-absolute start-50 top-50 d-flex gap-1 z-2">
                                    <MotionTooltip content="Hızlı Görüntüle">
                                        <button
                                            className="rounded-circle basket-btn btn p-2 d-flex align-items-center justify-content-center"
                                            style={{ backgroundColor: "#eaf6ea", border: "1px solid #407e78" }}
                                        >
                                            <MdOutlineSearch className='hover-icon-color' color="gray" size={20} />
                                        </button>
                                    </MotionTooltip>

                                    <MotionTooltip content="Favorilere Ekle">
                                        <button
                                            className="rounded-circle basket-btn btn p-2 d-flex align-items-center justify-content-center"
                                            style={{ backgroundColor: "#eaf6ea", border: "1px solid #407e78" }}
                                        >
                                            <CiHeart className='hover-icon-color' color="gray" size={20} />
                                        </button>
                                    </MotionTooltip>
                                </div>
                            </div>
                            <span className='d-block  text-muted mt-2 ms-2' style={{ fontSize: '0.75rem' }}>{item.title}</span>
                            <span className='fw-bold d-block ms-2'>{item.productName}</span>
                            <div className='row m-0 p-0 align-items-center  mt-1'>
                                <div className=' col-9 col-md-9 ps-2 '>
                                    <Rating icon={
                                        <StarIcon
                                            sx={{
                                                stroke: 'gold',
                                                strokeWidth: 1,
                                                fontSize: '1.2rem'
                                            }}
                                        />}
                                        emptyIcon={
                                            <StarBorderIcon sx={{ stroke: 'gold', strokeWidth: 1, fontSize: '1.2rem' }} />} size='small' name="half-rating" defaultValue={0} precision={0.5}
                                    />
                                    <div className='d-flex align-items-center gap-2'>
                                        <h6 style={{ color: "#407e78" }}>350 TL</h6>
                                        <h6 className='text-decoration-line-through' style={{ color: "#d1d1d0" }}>200 TL</h6>
                                    </div>
                                </div>
                                <div className='col-3 col-md-3 pe-0'>
                                    <MotionTooltip content='Sepete Ekle'>
                                        <button
                                            className='rounded-circle basket-btn btn ms-md-0 ms-4 p-2 align-items-center justify-content-center d-inline-flex'
                                            style={{ backgroundColor: "#eaf6ea", border: '1px solid #407e78', }}
                                        >
                                            <TbBasketPlus className='hover-icon-color' color='gray' size={20} />
                                        </button>
                                    </MotionTooltip>

                                </div>
                            </div>
                        </div>
                    </div>
                )

                )}
            </div>
        </div>
    );
};
const HomeTabProduct = () => {
    const dummyItems = Array.from({ length: 8 }).map((_, index) => ({
        id: index + 1,
        title: `Kategori ${index + 1}`,
        productName: `Ürün ${index + 1}`,
        image: shoes
    }));
    const [activeIndex, setActiveIndex] = useState(0);
    const tabHeaders = ['Öne Çıkanlar', 'Popülerler', 'Yeni Eklenenler'];
    return (
        <div className='container'>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                {tabHeaders.map((header, index) => (
                    <TabPanel key={index} header={header}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.0 }}
                            >
                                <GridSection items={dummyItems} />
                            </motion.div>
                        </AnimatePresence>
                    </TabPanel>
                ))}
            </TabView>
        </div>

    )
}

export default HomeTabProduct