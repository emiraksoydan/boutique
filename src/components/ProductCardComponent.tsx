import { Rating } from '@mui/material';
import { TbBasketPlus } from "react-icons/tb";

import { CiHeart } from "react-icons/ci";
import { MdOutlineSearch } from "react-icons/md";
import { useEffect, useState } from 'react';
// @ts-ignore
import * as bootstrap from 'bootstrap';
import MotionTooltip from './MotionToolTip';
import BasketButton from './BasketButton';
import RatingComponent from './Rating';

type ProductCardProps = {
    id: number;
    title: string;
    productName: string;
    image: string;
    wrapperClassName?: string;
    isList?: boolean
};

const ProductCardComponent: React.FC<ProductCardProps> = ({ id, title, productName, image, wrapperClassName, isList }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].forEach((tooltipTriggerEl) => {
            new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);

    return (
        <div className={wrapperClassName ?? "p-0 p-md-0"}>
            <div
                className={`hover-main-container  bg-white  p-2 text-start h-100 ${hoveredIndex === id ? 'shadow' : ''} ${isList ? 'rounded-5 border-0 mt-5 mt-md-0 ' : 'border rounded-5'}`}
            >
                <div className={isList ? "row" : ""}>
                    <div className={isList ? "col-md-4 d-flex align-items-center justify-content-center" : ""}>
                        <div
                            style={{ height: 250 }}
                            className={`image-container w-100 d-flex position-relative justify-content-center align-items-center ${isList ? 'rounded-5 border ' : 'rounded-5'} overflow-hidden`}
                            onMouseEnter={() => setHoveredIndex(id)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={image} alt={title} loading='lazy' className=" img-fluid object-fit-contain  " />
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
                    </div>
                    <div className={`${isList ? 'col-md-8' : ''}`}>
                        <span className='d-block text-muted mt-2 ms-2' style={{ fontSize: '0.75rem' }}>{title}</span>
                        <span className={`fw-bold d-block  ms-2 ${isList ? 'fs-4 ' : 'fs-6'} `}>{productName}</span>
                        <div className='row m-0 p-0 align-items-center mt-1'>
                            <div className={isList ? 'col-12 ps-2' : 'col-9 col-md-9 ps-2'}>
                                {!isList && (
                                    <RatingComponent></RatingComponent>
                                )}
                                <div className='d-flex align-items-center gap-2 mt-1'>
                                    <h6 style={{ color: "#407e78" }}>350 TL</h6>
                                    <h6 className='text-decoration-line-through' style={{ color: "#d1d1d0" }}>200 TL</h6>
                                </div>
                            </div>
                            <div className={isList ? 'col-12  ps-2 pe-2 mt-0 mt-md-4' : 'col-3 col-md-3 pe-0'}>
                                {isList ? (
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <BasketButton isList={isList} />
                                        <RatingComponent />
                                    </div>
                                ) : (
                                    <>
                                        <div className='d-flex justify-content-end pe-0 mt-2'>
                                            <BasketButton isList={!!isList} />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default ProductCardComponent;