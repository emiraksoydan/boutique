import React from 'react'
import { useGetAllCategoriesQuery } from '../../redux/generalApi/api';
import { useLocation } from 'react-router';
import SkeletonComponent from '../../components/Skeleton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MdDeleteOutline, MdOutlineUpdate, MdInfoOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IconButton, Tooltip } from '@mui/material';


const AdminCategory = () => {
    const location = useLocation();
    const isOnPage = location.pathname === '/admin/admin-category';
    const { data, isLoading, error } = useGetAllCategoriesQuery(undefined, { skip: !isOnPage, });
    const columns = [{ value: 'categoryID', name: 'Kategori ID' }, { value: 'categoryName', name: 'Kategori Adı' }, { value: '', name: 'İşlemler' }];
    const transactionsBodyTemplate = (rowData: any) => {
        return (
            <div className='d-flex gap-2 align-items-center'>
                <Tooltip title="Kategori sil" placement="top">
                    <IconButton className='rounded-3' style={{ backgroundColor: '#ddf0eb', }}>
                        <MdDeleteOutline color="red" fontSize="x-large" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Kategori güncelle" placement="top">
                    <IconButton className='rounded-3' style={{ backgroundColor: '#ddf0eb', }}>
                        <MdOutlineUpdate color='blue ' fontSize='x-large' />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Kategori detay gör" placement="top">
                    <IconButton className='rounded-3' style={{ backgroundColor: '#ddf0eb', }}>
                        <MdInfoOutline color='orange' fontSize='x-large' />
                    </IconButton>
                </Tooltip>
            </div>
        )
    };
    return (
        <div className='py-4 mt-4 ms-3 bg-white rounded-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <span className='fs-4 ps-3'>Kategori Listesi</span>
                <button className='btn text-white me-4' style={{ backgroundColor: '#6bbeb7' }}><FaPlus className='mb-1 me-1' fontSize='medium' />Kategori Ekle</button>
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
                            return (<Column key={index} align='left' body={index === 2 ? transactionsBodyTemplate : ''} sortable field={column.value} headerStyle={{ color: '#b2b8c9', fontSize: 15 }} header={column.name} bodyClassName='fs-6 fw-semibold' />);
                        })}
                    </DataTable></>

            )}
        </div>
    )


}

export default AdminCategory