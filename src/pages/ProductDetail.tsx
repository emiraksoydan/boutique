import React, { useEffect, useRef, useState } from 'react'
import BreadCrumbComponent from '../components/BreadCrumb';
import { Link } from 'react-router';
import { Galleria, type GalleriaResponsiveOptions } from 'primereact/galleria';
import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import RatingComponent from '../components/Rating';
import { Divider, FormControl, RadioGroup, Tab, Tabs, TextField } from '@mui/material';
import RadioColor from '../components/RadioColor';
import { CiHeart } from 'react-icons/ci';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import CustomTabPanel from '../components/CustomTabPanel';
import ProgressLine from '../components/ProgressLine';
import { FixedSizeList as List } from 'react-window';
import type { Comment } from '../components/CommentCard';
import CommentCard from '../components/CommentCard';
import AddComment from '../components/AddComment';

type ImageItem = {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    alt?: string;
    title?: string;
};
function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ProductDetail = () => {
    const [images, setImages] = useState<ImageItem[]>([]);
    const [value, setValue] = useState(0);
    const [tabValue, setTabValue] = React.useState(0);
    const ratingData = [
        { label: '5 yıldız', value: 75 },
        { label: '4 yıldız', value: 25 },
        { label: '3 yıldız', value: 50 },
        { label: '2 yıldız', value: 30 },
        { label: '1 yıldız', value: 85 },
    ];
    const comments: Comment[] = [
        {
            avatarUrl: p1,
            fullName: 'Ahmet Yılmaz',
            rating: 4.5,
            message: 'Ürün gerçekten kaliteli, hızlı teslimat için teşekkürler!',
            date: '13 Haziran 2025 14:32',
        },
        {
            avatarUrl: p1,
            fullName: 'Elif Demir',
            rating: 5,
            message: 'Çok memnun kaldım, tekrar sipariş vereceğim.',
            date: '12 Haziran 2025 09:15',
        },
        {
            avatarUrl: p2,
            fullName: 'Elif Demir',
            rating: 5,
            message: 'Çok memnun kaldım, tekrar sipariş vereceğim.',
            date: '12 Haziran 2025 09:15',
        },
        // {
        //     avatarUrl: p3,
        //     fullName: 'Elif Demir',
        //     rating: 5,
        //     message: 'Çok memnun kaldım, tekrar sipariş vereceğim.',
        //     date: '12 Haziran 2025 09:15',
        // },
    ];
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        if (val < 0) return; // Negatif olursa değeri güncelleme
        setValue(val);
    };
    const breadcrumbItems = [{
        template: () => (
            <Link to="/product" className='text-decoration-none text-black'>
                Ürünler
            </Link>
        )
    },
    { label: 'Ürün Detayı' }];

    useEffect(() => {
        const imageData: ImageItem[] = [
            {
                itemImageSrc: p1,
                thumbnailImageSrc: p1,
                alt: 'Resim 1',
                title: 'Ürün Görseli 1'
            },
            {
                itemImageSrc: p2,
                thumbnailImageSrc: p2,
                alt: 'Resim 2',
                title: 'Ürün Görseli 2'
            },
            {
                itemImageSrc: p3,
                thumbnailImageSrc: p3,
                alt: 'Resim 4',
                title: 'Ürün Görseli 4'
            },
            {
                itemImageSrc: p1,
                thumbnailImageSrc: p1,
                alt: 'Resim 5',
                title: 'Ürün Görseli 5'
            },
            {
                itemImageSrc: p2,
                thumbnailImageSrc: p2,
                alt: 'Resim 6',
                title: 'Ürün Görseli 6'
            },
            {
                itemImageSrc: p3,
                thumbnailImageSrc: p3,
                alt: 'Resim 7',
                title: 'Ürün Görseli 7'
            },

        ];
        setImages(imageData);
    }, []);
    const galleria = useRef<Galleria | null>(null);
    const [isFullScreenGalleria, setIsFullScreenGalleria] = useState<boolean>(false);
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '1400px',
            numVisible: 4,
        },
        {
            breakpoint: '1024px',
            numVisible: 3,
        },
        {
            breakpoint: '768px',
            numVisible: 3,
        },
        {
            breakpoint: '575px',
            numVisible: 3,
        }
    ];
    const itemTemplate = (item: ImageItem) => {
        return <img onClick={() => {
            setIsFullScreenGalleria(prev => !prev);
            galleria?.current?.show();
        }} src={item.itemImageSrc} alt={item.alt} className={`${isFullScreenGalleria ? 'galleria-item-height' : 'img-fluid'} object-fit-contain`} />
    }

    const thumbnailTemplate = (item: ImageItem) => {
        return <img src={item.thumbnailImageSrc} className='img-fluid object-fit-contain  ' alt={item.alt} />
    }

    return (
        <>
            <BreadCrumbComponent items={breadcrumbItems}></BreadCrumbComponent>
            <div className='container ps-0'>
                <div className='row'>
                    <div className='col-md-4 col-12 p-0 my-5'>
                        <Galleria onHide={() => {
                            setIsFullScreenGalleria(false);
                        }} ref={galleria} pt={{
                            thumbnailItems: {
                                className: 'd-flex gap-2 '
                            },
                            thumbnailContainer: {
                                className: 'bg-transparent px-0'
                            },
                            nextThumbnailButton: {
                                className: 'text-black ps-0 ps-md-2'
                            },
                            previousThumbnailButton: {
                                className: 'text-black pe-0 pe-md-2'
                            }
                        }} value={images} responsiveOptions={responsiveOptions} fullScreen={isFullScreenGalleria ? true : false} showItemNavigators={isFullScreenGalleria ? true : false} showThumbnails={isFullScreenGalleria ? false : true} circular numVisible={5} item={itemTemplate} thumbnail={thumbnailTemplate} />

                    </div>
                    <div className='col-md-8 col-12  my-5 ps-4'>
                        <h2>Share this:
                            Colorful Pattern Shirts</h2>
                        <div className='d-flex gap-2 align-items-center'>
                            <RatingComponent></RatingComponent>
                            <span className='mb-1'>(25 yorum)</span>
                        </div>
                        <Divider className='w-100 my-3' sx={{ borderBottom: '1px solidrgb(117, 118, 119)', opacity: 1 }} />
                        <div className='d-flex gap-3 align-items-end'>
                            <h2 style={{ color: '#407e78' }}>200 TL</h2>
                            <h5 className='text-muted text-decoration-line-through pb-1'>200 TL</h5>
                        </div>
                        <Divider className='w-100 my-3' sx={{ borderBottom: '1px solidrgb(117, 118, 119)', opacity: 1 }} />
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!</span>
                        <div className='d-flex gap-4 mt-3 align-items-center'>
                            <span className='fw-bold '>Renkler : </span>
                            <FormControl >
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <RadioColor label='' type='color' value="black" color="black"></RadioColor>
                                    <RadioColor label='' type='color' value="white" color="white"></RadioColor>
                                    <RadioColor label='' type='color' value="red" color="red"></RadioColor>
                                    <RadioColor label='' type='color' value="blue" color="blue"></RadioColor>
                                    <RadioColor label='' type='color' value="green" color="green"></RadioColor>
                                    <RadioColor label='' type='color' value="purple" color="purple"></RadioColor>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className='d-flex gap-4 mt-3 align-items-center'>
                            <span className='fw-bold '>Ebatlar  : </span>
                            <FormControl >
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <RadioColor label='-38' type='size' value="black" color="black"></RadioColor>
                                    <RadioColor label='39' type='size' value="white" color="white"></RadioColor>
                                    <RadioColor label='40' type='size' value="red" color="red"></RadioColor>
                                    <RadioColor label='41' type='size' value="blue" color="blue"></RadioColor>
                                    <RadioColor label='42' type='size' value="green" color="green"></RadioColor>
                                    <RadioColor label='43+' type='size' value="purple" color="purple"></RadioColor>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className='d-flex gap-3 mt-4 align-items-center'>
                            <TextField
                                id="outlined-number"
                                label=""
                                defaultValue={0}
                                value={value}
                                onChange={handleChange}
                                size='small'
                                type="number"
                                sx={{
                                    width: 85,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'rgba(0, 0, 0, 0.23)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(0, 0, 0, 0.23)',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'rgba(0, 0, 0, 0.23)',
                                            boxShadow: 'none',
                                        },
                                    },
                                }}
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                    htmlInput: {
                                        min: 0,
                                    }

                                }}
                            />
                            <button className='btn text-white px-5' style={{ backgroundColor: '#407e78' }}>Sepete Ekle</button>
                            <button className='btn border px-2'>
                                <CiHeart className='hover-icon-color' color="black" size={25} />
                            </button>
                        </div>
                        <div className='d-flex flex-row gap-2 align-items-center mt-4'>
                            <h6 className='pt-1'>Paylaş : </h6>
                            <FaLinkedinIn color='#6f6e70' />
                            <FaFacebookF color='#6f6e70' />
                            <FaInstagram color='#6f6e70' />
                            <FaTwitter color='#6f6e70' />
                        </div>
                    </div>
                    <div className='col-md-12 mb-5 mt-0'>
                        <Tabs slotProps={{
                            indicator: {
                                style: {
                                    backgroundColor: '#407e78',
                                    height: '2px',
                                },
                            }
                        }} value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
                            <Tab sx={{
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&.Mui-selected': {
                                    color: '#407e78  !important',
                                    transform: 'none',
                                    boxShadow: 'none',
                                },
                                '&:hover:not(.Mui-selected)': {
                                    transform: 'translateY(-3px)',
                                    color: '#407e78  !important'
                                },
                            }} className='px-4 py-0 bg-white text-black' label="Açıklama" {...a11yProps(0)} />
                            <Tab sx={{
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&.Mui-selected': {
                                    color: '#407e78  !important',
                                    transform: 'none',
                                    boxShadow: 'none',
                                },
                                '&:hover:not(.Mui-selected)': {
                                    transform: 'translateY(-3px)',
                                    color: '#407e78  !important'
                                },
                            }} className='px-4 py-0 bg-white text-black ' label="Bilgi" {...a11yProps(1)} />
                            <Tab sx={{
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&.Mui-selected': {
                                    color: '#407e78 !important',
                                    transform: 'none',
                                    boxShadow: 'none',
                                },
                                '&:hover:not(.Mui-selected)': {
                                    transform: 'translateY(-3px)',
                                    color: '#407e78  !important'
                                },
                            }} className='px-4 py-0 bg-white text-black ' label="Yorumlar" {...a11yProps(2)} />
                        </Tabs>
                        <CustomTabPanel value={tabValue} index={0}>
                            <div className='py-4'>
                                Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.

                                Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={tabValue} index={1}>
                            <div className='py-4'>
                                Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.

                                Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                            </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={tabValue} index={2}>
                            <div className='py-5 px-2 gap-5 row'>
                                <div className='col-md-7 col-sm-12'>
                                    <h4>Müşteri Soru-Cevap</h4>
                                    <List
                                        height={430}
                                        itemCount={comments.length}
                                        itemSize={130}
                                        width="100%"
                                    >
                                        {({ index }) => (
                                            <CommentCard comment={comments[index]} />
                                        )}
                                    </List>
                                    <AddComment />
                                </div>
                                <div className='col-md-4 ps-sm-3 ps-md-0 col-sm-12'>
                                    <h4>Müşteri Puanlama</h4>
                                    <div className='mt-4 d-flex gap-3'>
                                        <RatingComponent isRead={true} ></RatingComponent>
                                        <h6>4.8 out of 5</h6>
                                    </div>
                                    <div className='mt-4 d-flex gap-3 col-12 flex-column'>
                                        {ratingData.map((item, index) => (
                                            <ProgressLine key={index} label={item.label} value={item.value} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CustomTabPanel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail