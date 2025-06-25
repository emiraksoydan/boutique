import { Divider } from '@mui/material';
import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router';

type CartItem = {
    id: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
};


const ShoppingCard = ({ cartList }: { cartList: CartItem[] }) => {
    return (
        <div className="container p-3">
            {cartList.map((item) => (
                <div
                    key={item.id}
                    className="d-flex align-items-start p-0 mb-2 gap-3"
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: 80, height: 80, objectFit: 'cover', }}
                        className="rounded"
                    />
                    <div >
                        <div className='fs-5  fw-semibold' style={{ color: '#468078' }}>{item.name}</div>
                        <div className="d-flex justify-content-between align-items-center mt-1">
                            <div>
                                <span >{item.quantity}  x  {item.price} ₺</span>
                            </div>
                        </div>
                    </div>
                    <IoCloseOutline className='ms-3 mt-1' color='red' size={20} onClick={() => console.log(item.id)}></IoCloseOutline>
                </div>
            ))}
            <Divider className='w-100 mt-4' sx={{ borderBottom: '1px solidrgb(117, 118, 119)', opacity: 1 }} />
            <div className='d-flex justify-content-between align-items-center mt-3'>
                <span className='fs-6 text-secondary fw-semibold'>Toplam :</span>
                <span className='fs-4  fw-semibold' style={{ color: '#468078' }}>195 ₺</span>
            </div>
            <Link to={"/shopping-card"} className='btn w-100 text-white mt-3' style={{ backgroundColor: '#468078' }}>Sepeti Görüntüle</Link>
        </div>
    )
}

export default ShoppingCard