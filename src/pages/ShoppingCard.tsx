import React from 'react'
import BreadCrumbComponent from '../components/BreadCrumb'
import { Link } from 'react-router';
import { DataTable } from 'primereact/datatable';
import shoes from "../assets/images/shoes.jpg";
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { MdDeleteOutline, MdOutlinePayment } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { Divider } from '@mui/material';

const ShoppingCard = () => {
    const breadcrumbItems = [{ label: 'Alışveriş' }, { label: 'Alışveriş sepeti' }];
    const cartItems = [
        {
            id: '1',
            name: 'Ürün A',
            descrip: 'Maboriosam in a tonto nesciung eget distingy magndapibus',
            image: shoes,
            quantity: 2,
            price: 120,
        },
        {
            id: '2',
            name: 'Ürün B',
            descrip: ' Sit at ipsum amet clita no est,sed amet sadipscing et gubergren',
            image: shoes,
            quantity: 1,
            price: 75,
        },
    ];
    const subTotalBodyTemplate = (rowData: any) => {
        return rowData.quantity * rowData.price + ' ₺';
    };
    const imageBodyTemplate = (rowData: any) => (
        <img
            src={rowData.image}
            alt={rowData.name}
            style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
        />
    );

    const nameAndDescriptionTemplate = (rowData: any) => (
        <div>
            <div className="fw-bold" style={{ color: '#468078' }}>{rowData.name}</div>
            <div className="text-muted small">{rowData.descrip}</div>
        </div>
    );
    const handleDelete = (id: string) => {
        console.log("Silinecek ID:", id);
    };
    const deleteButtonTemplate = (rowData: any) => (
        <MdDeleteOutline fontSize={20} onClick={() => handleDelete(rowData.id)} color='red' ></MdDeleteOutline >
    );
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const footer = (
        <ColumnGroup>
            <Row>
                <Column
                    colSpan={6}
                    footer={
                        <div className="d-flex justify-content-between align-items-center ">
                            <div className='d-flex gap-3 align-items-center'>
                                <div>Sepet Tutarı: {total} ₺</div>
                                <Divider sx={{ width: 50, borderBottom: '1px solidrgb(117, 118, 119)', opacity: 1 }} />
                                <div>Kargo: Ücretsiz</div>
                                <Divider sx={{ width: 50, borderBottom: '1px solidrgb(117, 118, 119)', opacity: 1 }} />
                                <div className="fw-bold">Genel Toplam: {total} ₺</div>
                            </div>
                            <div className='d-flex gap-3'>
                                <button className='btn align-items-center d-flex gap-2 text-danger'> <IoCloseOutline fontSize={20} /> Tüm Kartı Sil</button>
                                <Link to="/" className='align-items-center d-flex gap-2 text-decoration-none text-success'><MdOutlinePayment fontSize={20} /> Ödemeye Geç</Link>
                            </div>
                        </div>
                    }
                />
            </Row>
        </ColumnGroup>
    );
    return (
        <>
            <BreadCrumbComponent items={breadcrumbItems}></BreadCrumbComponent>
            <div className='container px-4 py-5'>
                <DataTable emptyMessage="Sepetiniz boş" value={cartItems} footerColumnGroup={footer} scrollable scrollHeight='400px'>
                    <Column style={{ borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }} alignHeader={'center'} bodyClassName="text-center" header="Resim" body={imageBodyTemplate} />
                    <Column style={{ borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }} alignHeader={'center'} bodyClassName="text-center" header="Ürün" body={nameAndDescriptionTemplate} />
                    <Column style={{ borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }} alignHeader={'center'} bodyClassName="text-center" field="price" header="Fiyat (₺)" />
                    <Column style={{ borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }} alignHeader={'center'} bodyClassName="text-center" field="quantity" header="Miktar" />
                    <Column style={{ borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }} alignHeader={'center'} bodyClassName="text-center" body={subTotalBodyTemplate} header="Toplam (₺) " />
                    <Column style={{ borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }} alignHeader={'center'} header="İşlem" body={deleteButtonTemplate} bodyClassName="text-center"
                    />
                </DataTable>
            </div>
        </>
    )
}

export default ShoppingCard