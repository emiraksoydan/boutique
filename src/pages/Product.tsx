import React, { useEffect, useMemo, useState } from 'react';
import BreadCrumbComponent from '../components/BreadCrumb';
import { Divider, Pagination } from '@mui/material';
import { Slider, type SliderChangeEvent } from 'primereact/slider';
import { Checkbox, type CheckboxChangeEvent } from 'primereact/checkbox';
import shoes from '../assets/images/shoes.jpg';
import ProductCardComponent from '../components/ProductCardComponent';
import { FixedSizeGrid as Grid, FixedSizeList as List, type ListChildComponentProps } from 'react-window';

interface Category {
    name: string;
    key: string;
}

const Product = () => {
    const breadcrumbItems = [{ label: 'Ürünler' }];
    const [layout, setLayout] = useState<'grid' | 'list'>('grid');
    const [page, setPage] = useState(1);
    const pageSize = 9;
    const [columnCount, setColumnCount] = useState(3);

    useEffect(() => {
        const updateColumnCount = () => {
            if (window.innerWidth < 768) {
                setColumnCount(1);
            } else if (window.innerWidth < 992) {
                setColumnCount(2);
            } else {
                setColumnCount(3);
            }
        };
        updateColumnCount();
        window.addEventListener('resize', updateColumnCount);
        return () => window.removeEventListener('resize', updateColumnCount);
    }, []);

    const dummyItems = useMemo(() => [...Array(1000000)].map((_, i) => ({
        id: i,
        title: `Ürün ${i + 1}`,
        image: shoes,
        productName: `Ürün Adı ${i + 1}`
    })), []);

    // Burada tüm listeyi değil, sadece sayfa için slice yapıyoruz.
    const paginatedItems = useMemo(() => {
        const start = (page - 1) * pageSize;
        return dummyItems.slice(start, start + pageSize);
    }, [page, dummyItems]);

    const [value, setValue] = useState<[number, number]>([0, 100]);
    const categoriesColor: Category[] = [
        { name: 'Red(56)', key: 'A' },
        { name: 'Green(78)', key: 'M' },
        { name: 'Blue(100)', key: 'P' },
    ];
    const [selectedColorCategories, setSelectedColorCategories] = useState<Category[]>([]);
    const onCategoryChange = (e: CheckboxChangeEvent) => {
        let _selectedCategories = [...selectedColorCategories];
        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);
        setSelectedColorCategories(_selectedCategories);
    };

    // Grid için item sayısı: paginatedItems.length (9)
    // Satır sayısı:
    const rowCount = Math.ceil(paginatedItems.length / columnCount);

    // Grid hücre genişlik ve yüksekliği (örnek)
    const columnWidth = 310;
    const rowHeight = 410;

    // Grid item renderer
    const Cell = ({ columnIndex, rowIndex, style }: { columnIndex: number; rowIndex: number; style: React.CSSProperties }) => {
        const index = rowIndex * columnCount + columnIndex;
        if (index >= paginatedItems.length) {
            return null;
        }
        const item = paginatedItems[index];
        return (
            <div style={{ ...style, padding: 8 }}>
                <ProductCardComponent
                    id={item.id}
                    title={item.title}
                    productName={item.productName}
                    image={item.image}
                    wrapperClassName='w-95'
                />
            </div>
        );
    };

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
                                value={value}
                                onChange={(e: SliderChangeEvent) => {
                                    if (Array.isArray(e.value) && e.value.length === 2) { setValue(e.value as [number, number]); }
                                }}
                                className='mt-4 mb-3'
                                style={{ backgroundColor: '#407e78 ' }}
                                range
                            />
                            <span className='d-block'>Aralık:</span>
                            <span className='fw-bold'>0 TL - 100 TL</span>
                            <div className='d-flex flex-column gap-2 pt-3'>
                                <span className='fw-bold'>Renk</span>
                                {categoriesColor.map((category) => (
                                    <div key={category.key}>
                                        <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedColorCategories.some((item) => item.key === category.key)} />
                                        <label htmlFor={category.key} className="ms-2">{category.name}</label>
                                    </div>
                                ))}
                            </div>
                            <div className='btn mt-4 w-100 filter-button'>Filtrele</div>
                        </div>
                    </div>

                    <div className='col-md-9 ps-2 ps-md-4 pt-2 mb-3'>
                        <div className='d-flex flex-row'>
                            <span className="flex-fill">Toplamda {dummyItems.length} Ürün Gösteriliyor</span>
                        </div>
                        {layout === 'grid' && (
                            <Grid
                                columnCount={columnCount}
                                columnWidth={columnWidth}
                                height={rowHeight * rowCount}
                                rowCount={rowCount}
                                rowHeight={rowHeight}
                                width={columnWidth * columnCount}
                            >
                                {Cell}
                            </Grid>
                        )}

                        {layout === 'list' && (
                            <List

                                height={paginatedItems.length * 120}
                                itemCount={paginatedItems.length}
                                itemSize={110}
                                width={'100%'}
                            >
                                {({ index, style }: ListChildComponentProps) => {
                                    const item = paginatedItems[index];
                                    return (
                                        <div key={item.id} style={{ marginTop: 10 }} className="card p-3">
                                            <h5>{item.title}</h5>
                                            <p>{item.productName}</p>
                                        </div>
                                    );
                                }}
                            </List>
                        )}

                        <div className={`d-flex justify-content-center ${layout === 'grid' ? 'mt-3' : 'mt-0'}`}>
                            <Pagination
                                count={Math.ceil(dummyItems.length / pageSize)}
                                page={page}
                                onChange={(e, val) => setPage(val)}
                                color="primary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
