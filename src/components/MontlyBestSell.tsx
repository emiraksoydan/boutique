import { Carousel, type CarouselResponsiveOption } from 'primereact/carousel'
import React, { useState } from 'react'
import shoes from '../assets/images/shoes.jpg';
import GridSection from './ProductGridComponent';
import ProductCardComponent from './ProductCardComponent';




const MontlyBestSell = () => {
    const dummyItems = Array.from({ length: 8 }).map((_, index) => ({
        id: index + 1,
        title: `Kategori ${index + 1}`,
        productName: `Ürün ${index + 1}`,
        image: shoes
    }));
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


    return (
        <div className='container-fluid' style={{ backgroundColor: '#f5f5f9' }}>
            <div className='container pt-5 pb-5'>
                <h4 className='ms-2'>Ayın En İyi Satışları</h4>
                <Carousel
                    className='custom-carousel'
                    value={dummyItems}
                    circular
                    autoplayInterval={3000}
                    showIndicators={false}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={(item) => <ProductCardComponent {...item} wrapperClassName='p-2 p-md-2' />}
                    numVisible={4}
                />
            </div>

        </div>
    )
}

export default MontlyBestSell