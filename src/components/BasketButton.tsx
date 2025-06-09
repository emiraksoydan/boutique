import React from 'react'
import MotionTooltip from './MotionToolTip'
import { TbBasketPlus } from 'react-icons/tb'

const BasketButton = ({ isList }: { isList: boolean }) => {
    return (
        <MotionTooltip content={isList ? 'Satın Al' : 'Sepete Ekle'}>
            <button
                className={`${isList ? 'rounded-pill gap-2 px-3' : 'rounded-circle'}  basket-btn btn p-2 d-flex align-items-center justify-content-center`}
                style={{ backgroundColor: isList ? "#407e78" : "#eaf6ea", border: '1px solid #407e78', color: isList ? 'white' : 'black' }}
            >
                <TbBasketPlus className='hover-icon-color' color={isList ? 'white' : 'gray'} size={20} />
                {isList ? <span>Sepete Ekle</span> : ""}
            </button>
        </MotionTooltip>
    )
}

export default BasketButton