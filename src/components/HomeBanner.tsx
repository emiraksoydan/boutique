import React, { useState } from 'react';
import { Galleria } from 'primereact/galleria';
import { motion, AnimatePresence } from 'framer-motion';
import carousel1 from "../assets/images/carousel-1.png";
import carousel2 from "../assets/images/carousel-2.png";
import carousel3 from "../assets/images/carousel-3.png";
import { useGetAllFeatureSliderQuery } from '../redux/generalApi/api';
import { useLocation } from 'react-router';
import { Skeleton } from '@mui/material';

const HomeBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();
    const isOnPage = location.pathname === '/';
    const { data, isLoading, error } = useGetAllFeatureSliderQuery(undefined, { skip: !isOnPage, });
    const itemTemplate = (item: any) => (
        <AnimatePresence mode="wait">
            <motion.div
                key={item.imageUrl}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container min-vh-50  align-items-center">
                    <div className='row align-items-center  flex-column flex-md-row'>
                        <div className='col-md-6 col-12  text-center text-md-start  text-content'>
                            <h4 className="mb-2">{item.title}</h4>
                            <h2 className="display-4 mb-md-0 mb-2 ">{item.title2}</h2>
                            <h1 style={{ color: "#407e78" }} className="display-2">{item.title3}</h1>
                            <p className="lead">{item.description}</p>
                        </div>
                        <div className='col-12 col-md-6 '>
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="img-fluid"
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>

            </motion.div>
        </AnimatePresence>
    );

    return (
        <>
            {isLoading ? (
                <div className="mt-1 px-5  m-0 p-0">
                    <Skeleton className='rounded-5 w-100 ' style={{ height: 400 }} />
                </div>
            ) : (
                <Galleria
                    className="mt-5 w-100 m-0 p-0"
                    value={data}
                    activeIndex={activeIndex}
                    onItemChange={(e) => setActiveIndex(e.index)}
                    item={itemTemplate}
                    showThumbnails={false}
                    showIndicators
                    showItemNavigators
                    showItemNavigatorsOnHover
                    circular
                    autoPlay
                    transitionInterval={5000}
                />
            )}
        </>
    )
}

export default HomeBanner