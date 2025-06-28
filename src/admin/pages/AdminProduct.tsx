import { IconButton, Tooltip } from '@mui/material';
import { useEffect, useState } from 'react'
import { MdDeleteOutline, MdOutlineUpdate } from 'react-icons/md';
import { Link, useLocation } from 'react-router';
import SkeletonComponent from '../../components/Skeleton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import type { ResultProductDto } from '../../types/ResultProductDto';
import { useDeleteProductMutation, useGetAllProductsWithCategoryQuery, useLazyGetProductByIdQuery } from '../../redux/generalApi/api';
import { FaPlus } from "react-icons/fa6";
import DeleteModal from '../../modals/DeleteModal';


const AdminProduct = () => {
    const location = useLocation();
    const isOnPage = location.pathname === '/admin/admin-product';
    const [getProduct, setGetProduct] = useState<ResultProductDto | undefined>(undefined);
    const columns = [{ value: 'productID', name: 'Ürün ID' }, { value: 'productName', name: 'Ürün Adı' }, { value: 'categoryName', name: 'Kategorisi', render: (rowData: any) => rowData.category?.categoryName || '' }, { value: 'productPrice', name: 'Ürün Fiyatı' }, { value: '', name: 'İşlemler' }];

    const { data, isLoading, error } = useGetAllProductsWithCategoryQuery(undefined, { skip: !isOnPage, });
    console.log("data", data);

    const [triggerGetProductById, { data: getData, isLoading: getIsLoading, error: getIsError }] = useLazyGetProductByIdQuery();
    const [deleteProduct] = useDeleteProductMutation();
    useEffect(() => {
        if (getData) { setGetProduct(getData); }
    }, [getData]);
    const handleDeleteClick = async (id: string) => { if (getProduct?.productID !== id) triggerGetProductById(id); }
    const handleDeleteCompletedClick = async () => {
        try {
            await deleteProduct(getProduct!.productID).unwrap();
        } catch (error) {
            console.log("Kategori eklenirken hata oluştu:", error);
        }
    }

    const transactionsBodyTemplate = (rowData: any) => {
        return (
            <div className='d-flex gap-2 align-items-center'>
                <Tooltip title="Ürün sil" placement="top">
                    <IconButton data-bs-toggle="modal" data-bs-target="#deleteModal" className='rounded-3' onClick={() => handleDeleteClick(rowData?.productID)} style={{ backgroundColor: '#ddf0eb', }}>
                        <MdDeleteOutline color="red" fontSize="x-large" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Ürün güncelle" placement="top">
                    <Link to={`/admin/admin-product/update-product/${rowData?.productID}`} state={{ product: rowData }} className='rounded-3 p-2' style={{ backgroundColor: '#ddf0eb', }}>
                        <MdOutlineUpdate color='blue ' fontSize='x-large' />
                    </Link>
                </Tooltip>
            </div>
        )
    };
    const categoryTemp = (rowData: any) => { return rowData.category?.categoryName || ''; }

    return (
        <>
            <div className='py-4 mt-4 ms-3 bg-white rounded-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='fs-4 ps-3'>Ürün Listesi</span>
                    <Link to={"/admin/admin-product/add-product"} className='btn text-white me-4' style={{ backgroundColor: '#6bbeb7' }}><FaPlus className='mb-1 me-1' fontSize='medium' />Ürün Ekle</Link>
                </div>
                {isLoading ? (
                    <SkeletonComponent />
                ) : error ? (
                    <div>Bir hata oluştu.</div>
                ) : (
                    <>
                        <DataTable value={data}
                            rows={6}
                            className='mt-3 '
                            emptyMessage="Henüz bir şirket bulunmuyor"
                            stripedRows
                            showGridlines
                            size='small'
                            paginator
                            paginatorLeft
                            paginatorTemplate={'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink'}>
                            {columns.map((column, index) => {
                                return (<Column key={index} align='left' body={index === 4 ? transactionsBodyTemplate : index === 2 ? categoryTemp : ''} sortable field={column.value} headerStyle={{ color: '#b2b8c9', fontSize: 15 }} header={column.name} bodyClassName='fs-6 fw-semibold' />);
                            })}
                        </DataTable></>
                )}
            </div>
            <DeleteModal name={getProduct?.productName} handleSubmit={handleDeleteCompletedClick} ></DeleteModal>
        </>
    )
}

export default AdminProduct