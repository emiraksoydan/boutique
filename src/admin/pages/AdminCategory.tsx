import { useEffect, useState } from 'react'
import { useAddCategoryMutation, useDeleteCategoryMutation, useGetAllCategoriesQuery, useLazyGetCategoryByIdQuery, useUpdateCategoryMutation } from '../../redux/generalApi/api';
import { useLocation } from 'react-router';
import SkeletonComponent from '../../components/Skeleton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MdDeleteOutline, MdOutlineUpdate, MdInfoOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IconButton, Tooltip } from '@mui/material';
import DeleteModal from '../../modals/DeleteModal';
import AddCategory from '../../modals/CategoryModal/AddCategory';
import UpdateCategory from '../../modals/CategoryModal/UpdateCategory';
import type { Category } from '../../types/CategoryDto';
import type { AddCategoryDto } from '../../types/AddCategoryDto';
import { useData } from '../../contexts/DataContext';
import type { FormikHelpers } from 'formik';


const AdminCategory = () => {
    const location = useLocation();
    const dataContext = useData();
    if (!dataContext) { return null; }
    const { categories, setCategories } = dataContext;
    const isOnPage = location.pathname === '/admin/admin-category';
    const [getCategory, setGetCategory] = useState<Category | undefined>(undefined);
    const columns = [{ value: 'categoryID', name: 'Kategori ID' }, { value: 'categoryName', name: 'Kategori Adı' }, { value: '', name: 'İşlemler' }];
    const { data, isLoading, error } = useGetAllCategoriesQuery(undefined, { skip: !isOnPage && (categories?.length ?? 0) > 0, });
    const [triggerGetCategoryById, { data: getData, isLoading: getIsLoading, error: getIsError }] = useLazyGetCategoryByIdQuery();
    const [createCategory] = useAddCategoryMutation();
    const [deleteCategory] = useDeleteCategoryMutation();
    const [updateCategory] = useUpdateCategoryMutation();

    useEffect(() => {
        if (getData) { setGetCategory(getData); }
    }, [getData]);
    useEffect(() => {
        if (data && categories?.length === 0) { if (setCategories) { setCategories(data); } }
    }, [data]);

    const handleAddSubmit = async (values: AddCategoryDto, formikHelpers: FormikHelpers<AddCategoryDto>) => {
        try { await createCategory(values).unwrap(); if (setCategories) { setCategories([]); }; formikHelpers.resetForm(); } catch (error) { console.log("Kategori eklenirken hata oluştu:", error); }
    }
    const handleUpdateSubmit = async (values: Category) => {
        try {
            await updateCategory(values).unwrap();
            if (setCategories) { setCategories([]); }
        } catch (error) { console.log("Kategori güncellenirken hata oluştu:", error); }
    }
    const handleUpdateClick = (id: string) => { triggerGetCategoryById(id); };
    const handleDeleteClick = async (id: string) => { if (getCategory?.categoryID !== id) triggerGetCategoryById(id); }
    const handleDeleteCompletedClick = async () => {
        try {
            await deleteCategory(getCategory!.categoryID).unwrap();
            if (setCategories) { setCategories([]); }
        } catch (error) { console.log("Kategori eklenirken hata oluştu:", error); }
    }

    const transactionsBodyTemplate = (rowData: any) => {
        return (
            <div className='d-flex gap-2 align-items-center'>
                <Tooltip title="Kategori sil" placement="top">
                    <IconButton data-bs-toggle="modal" data-bs-target="#deleteModal" className='rounded-3' onClick={() => handleDeleteClick(rowData?.categoryID)} style={{ backgroundColor: '#ddf0eb', }}>
                        <MdDeleteOutline color="red" fontSize="x-large" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Kategori güncelle" placement="top">
                    <IconButton
                        data-bs-toggle="modal" data-bs-target='#updateCategoryModal' className='rounded-3' onClick={() => handleUpdateClick(rowData?.categoryID)} style={{ backgroundColor: '#ddf0eb', }}>
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
        <>
            <div className='py-4 mt-4 ms-3 bg-white rounded-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='fs-4 ps-3'>Kategori Listesi</span>
                    <button className='btn text-white me-4' data-bs-toggle='modal'
                        data-bs-target='#addCategoryModal' style={{ backgroundColor: '#6bbeb7' }}><FaPlus className='mb-1 me-1' fontSize='medium' />Kategori Ekle</button>
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
            <AddCategory categories={categories ?? []} handleSubmit={handleAddSubmit}></AddCategory>
            <UpdateCategory categories={categories ?? []} getCategory={getCategory} handleSubmit={handleUpdateSubmit}></UpdateCategory>
            <DeleteModal name={getCategory?.categoryName} handleSubmit={handleDeleteCompletedClick} ></DeleteModal>
        </>
    )
}

export default AdminCategory