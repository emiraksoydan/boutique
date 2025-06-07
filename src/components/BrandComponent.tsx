import { Carousel, type CarouselResponsiveOption } from 'primereact/carousel';
import React, { useState } from 'react';

import brand1 from '../assets/images/brand-1.png';
import brand2 from '../assets/images/brand-2.png';
import brand3 from '../assets/images/brand-3.png';
import brand4 from '../assets/images/brand-4.png';
import brand5 from '../assets/images/brand-5.png';
import brand6 from '../assets/images/brand-6.png';
import GridSection from './ProductGridComponent';

interface Brand {
    image: string;
}
const BrandComponent = () => {
    const [brands, setBrands] = useState<Brand[]>([
        { image: brand1 },
        { image: brand2 },
        { image: brand3 },
        { image: brand4 },
        { image: brand5 },
        { image: brand6 },
    ]);
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const brandTemplate = (brand: Brand) => {
        return (
            <div
                style={{ height: 250 }}
                className='image-container w-100 d-flex position-relative justify-content-center align-items-center rounded-5 overflow-hidden'
            >
                <img src={brand.image} alt={""} className=" object-fit-contain img-fluid" />
            </div>
        );
    };

    return (
        <div className='container mt-5'>
            <h4 className='ms-2'>Öne Çıkarılan Markalar</h4>
            <Carousel className='custom-carousel' value={brands} circular autoplayInterval={3000} showIndicators={false} numScroll={1} responsiveOptions={responsiveOptions} itemTemplate={brandTemplate} numVisible={4}></Carousel>
        </div>
    )
}

export default BrandComponent