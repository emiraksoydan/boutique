import React, { useState } from 'react';
import { Galleria } from 'primereact/galleria';
import { motion, AnimatePresence } from 'framer-motion';
import carousel1 from "../assets/images/carousel-1.png";
import carousel2 from "../assets/images/carousel-2.png";
import carousel3 from "../assets/images/carousel-3.png";

const HomeBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            itemImageSrc: carousel1,
            title: 'Trade In Offer',
            title2: 'Supper value deals ',
            title3: 'On All Products',
            description: 'Save more with coupons & up to 70% off!',
        },
        {
            itemImageSrc: carousel2,
            title: 'Trade In Offer',
            title2: 'Supper value deals ',
            title3: 'On All Products',
            description: 'Save more with coupons & up to 70% off!',
        },
        {
            itemImageSrc: carousel3,
            title: 'Trade In Offer',
            title2: 'Supper value deals',
            title3: 'On All Products',
            description: 'Save more with coupons & up to 70% off!',
        }
    ];
    const itemTemplate = (item: any) => (
        <AnimatePresence mode="wait">
            <motion.div
                key={item.itemImageSrc}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container min-vh-50 d-flex align-items-center">
                    <div className='row align-items-center'>
                        <div className='col-md-6 col-12  text-center text-md-start'>
                            <h4 className="mb-2">{item.title}</h4>
                            <h2 className="display-4 mb-md-0 mb-2 ">{item.title2}</h2>
                            <h1 style={{ color: "#407e78" }} className="display-2">{item.title3}</h1>
                            <p className="lead">{item.description}</p>
                        </div>
                        <div className='col-12 col-md-6 '>
                            <img
                                src={item.itemImageSrc}
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
        <Galleria
            className="mt-5"
            value={items}
            activeIndex={activeIndex}
            onItemChange={(e) => setActiveIndex(e.index)}
            item={itemTemplate}
            showThumbnails={false}
            showIndicators
            showItemNavigators
            showItemNavigatorsOnHover
            changeItemOnIndicatorHover
            circular
            autoPlay
            transitionInterval={5000}
        />
    )
}

export default HomeBanner