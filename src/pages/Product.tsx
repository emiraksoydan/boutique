import React, { useEffect, useMemo, useState } from 'react';
import BreadCrumbComponent from '../components/BreadCrumb';
import { Checkbox, Divider, FormControlLabel, FormGroup, Pagination, Slider } from '@mui/material';
import shoes from '../assets/images/shoes.jpg';
import ProductCardComponent from '../components/ProductCardComponent';
import { AnimatePresence, motion } from 'framer-motion';
import { BiCategory } from "react-icons/bi";
import { TbSortAscending2 } from "react-icons/tb";
import { BsList } from "react-icons/bs";



const Product = () => {
    const breadcrumbItems = [{ label: 'Ürünler' }];
    const [layout, setLayout] = useState<'grid' | 'list'>('grid');
    const [page, setPage] = useState(1);
    const pageSize = 9;

    const dummyItems = useMemo(() => [...Array(1000000)].map((_, i) => ({
        id: i,
        title: `Ürün ${i + 1}`,
        image: shoes,
        productName: `Ürün Adı ${i + 1}`
    })), []);

    const paginatedItems = dummyItems.slice((page - 1) * pageSize, ((page - 1) * pageSize) + pageSize);
    const [value1, setValue1] = React.useState<number[]>([0, 100]);
    const handleChange1 = (event: Event, newValue: number[], activeThumb: number) => {
        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - 10), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + 10)]);
        }
    };
    const [isOpenShow, setIsOpenShow] = useState(false);
    const [isOpenSort, setIsOpenSort] = useState(false);
    const [selectedShow, setSelectedShow] = useState("Hepsi");
    const [selectedSort, setSelectedSort] = useState("Öne çıkanlar");

    return (
        <div>
            <BreadCrumbComponent items={breadcrumbItems}></BreadCrumbComponent>
            <div className='container px-4 mt-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='py-3 px-4 bg-white border'>
                            <h5>Filtreleme</h5>
                            <Divider className='w-100 mt-3' sx={{ borderBottom: '1px solidrgb(117, 118, 119)', opacity: 1 }} />
                            <Slider
                                getAriaLabel={() => 'Minimum distance'}
                                className='mt-3 py-2'
                                value={value1}
                                onChange={handleChange1}
                                disableSwap
                                sx={{ color: '#222222', }}
                            />
                            <span className='d-block'>Aralık:</span>
                            <span className='fw-bold'>  {value1[0]} TL - {value1[1]} TL</span>
                            <div className='d-flex flex-column gap-2 pt-3'>
                                <span className='fw-bold'>Renk</span>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox disableRipple className='pe-1' style={{ color: "#407e78" }} />} label="Kırmızı(50)" />
                                    <FormControlLabel control={<Checkbox disableRipple className='pe-1' style={{ color: "#407e78" }} />} label="Mavi(20)" />
                                    <FormControlLabel control={<Checkbox disableRipple className='pe-1' style={{ color: "#407e78" }} />} label="Sarı(10)" />
                                </FormGroup>
                            </div>
                            <div className='btn mt-4 w-100 filter-button'>Filtrele</div>
                        </div>
                    </div>
                    <div className='col-md-9 ps-2 ps-md-4 pt-2 mb-3'>
                        <div className="row g-2">
                            <div className="col-12 col-md-6 d-flex justify-content-md-start justify-content-between align-items-center flex-wrap">
                                <span>Toplamda {dummyItems.length} Ürün Gösteriliyor</span>
                                <div className="btn-group btn-group-sm custom-btn-group me-0 ms-md-3" role="group" aria-label="Basic example">
                                    <button type="button" className={`btn custom-btn ${layout === 'grid' ? 'active' : ''}`} onClick={() => setLayout('grid')}>
                                        <BiCategory />
                                    </button>
                                    <button type="button" className={`btn custom-btn ${layout === 'list' ? 'active' : ''}`} onClick={() => setLayout('list')}>
                                        <BsList />
                                    </button>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 d-flex flex-md-row justify-content-end gap-2">
                                <div className="d-flex align-items-center px-3 py-2 rounded-pill show-values-dropdown ">
                                    <BiCategory color="#b0b1b1" />
                                    <div className="dropdown position-relative d-inline-block">
                                        <a
                                            className="btn btn-sm dropdown-toggle"
                                            href="#"
                                            role="button"
                                            id="dropdownMenuLink"
                                            aria-haspopup="true"
                                            aria-expanded={isOpenShow}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsOpenShow(prev => !prev); // toggle
                                            }}
                                        >
                                            {"Göster : " + selectedShow}
                                        </a>
                                        <AnimatePresence>
                                            {isOpenShow && (
                                                <motion.div
                                                    className="dropdown-menu show position-absolute d-block z-3 top-100"
                                                    aria-labelledby="dropdownMenuLink"
                                                    initial={{ opacity: 0, y: -10, x: -10 }}
                                                    animate={{ opacity: 1, y: 9, x: -10 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    style={{ left: -10 }}
                                                >
                                                    {["Hepsi", "50", "100", "150"].map(value => (
                                                        <div className='d-flex align-items-center hover-rate' key={value}>
                                                            <div className='col-md-10'>
                                                                <a
                                                                    href='#'
                                                                    className="dropdown-item"
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        setSelectedShow(value);
                                                                        setIsOpenShow(false);
                                                                    }}
                                                                >
                                                                    {value}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center px-3 py-2 rounded-pill show-values-dropdown ">
                                    <TbSortAscending2 color="#b0b1b1" />
                                    <div className="dropdown position-relative d-inline-block">
                                        <a
                                            className="btn btn-sm dropdown-toggle"
                                            href="#"
                                            role="button"
                                            id="dropdownMenuLink"
                                            aria-haspopup="true"
                                            aria-expanded={isOpenSort}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsOpenSort(prev => !prev); // toggle
                                            }}
                                        >
                                            {"Sırala : " + selectedSort}
                                        </a>
                                        <AnimatePresence>
                                            {isOpenSort && (
                                                <motion.div
                                                    className="dropdown-menu show position-absolute d-block z-3 top-100"
                                                    aria-labelledby="dropdownMenuLink"
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 9 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    style={{ left: -10 }}
                                                >
                                                    {["Öne çıkanlar", "Fiyat: Çoktan aza", "Fiyat: Azdan çoka", "Ortalama puan", "Yayın tarihi"].map(value => (
                                                        <div className='d-flex align-items-center hover-rate' key={value}>
                                                            <div className='col-md-10'>
                                                                <a
                                                                    href='#'
                                                                    className="dropdown-item"
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        setSelectedSort(value);
                                                                        setIsOpenSort(false);
                                                                    }}
                                                                >
                                                                    {value}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {layout === 'grid' && (
                            <div className="row mt-4">
                                {paginatedItems.map((item) => (
                                    <div key={item.id} className={`col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 px-2 mb-3`}>
                                        <ProductCardComponent
                                            id={item.id}
                                            title={item.title}
                                            productName={item.productName}
                                            image={item.image}
                                            wrapperClassName="w-100"
                                            isList={false}

                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                        {layout === 'list' && (
                            <>
                                {paginatedItems.map((item) => (
                                    <div key={item.id} className="p-0 mb-2 mt-2">
                                        <ProductCardComponent
                                            id={item.id}
                                            title={item.title}
                                            productName={item.productName}
                                            image={item.image}
                                            wrapperClassName="w-100"
                                            isList={true}
                                        />
                                    </div>
                                ))}
                            </>
                        )}
                        <div className="d-flex justify-content-center mt-4">
                            <Pagination
                                count={Math.ceil(dummyItems.length / pageSize)}
                                page={page}
                                onChange={(e, val) => setPage(val)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
