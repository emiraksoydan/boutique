import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router';
import SkeletonComponent from '../../components/Skeleton';
import { DataTable } from 'primereact/datatable';
import DeleteModal from '../../modals/DeleteModal';
import { FaPlus } from "react-icons/fa6";
import AddSliderModal from '../../modals/SliderModal/AddSliderModal';
import UpdateSliderModal from '../../modals/SliderModal/UpdateSliderModal';
import { Column } from 'primereact/column';
import { IconButton, Tooltip } from '@mui/material';
import { MdDeleteOutline, MdOutlineUpdate } from 'react-icons/md';
import { useAddFeatureSliderMutation, useDeleteFeatureSliderMutation, useGetAllFeatureSliderQuery, useLazyGetFeatureSliderByIdQuery, useUpdateFeatureSliderMutation } from '../../redux/generalApi/api';
import type { FeatureSliderDto } from '../../types/FeatureSliderDto';
import type { AddFeatureSliderDto } from '../../types/AddFeatureSliderDto';
import type { FormikHelpers } from 'formik';


const AdminSlider = () => {
    const location = useLocation();
    const isOnPage = location.pathname === '/admin/admin-slider/';
    const columns = [{ value: 'featureSliderID', name: 'Slider ID' }, { value: 'title', name: 'Başlık' }, { value: 'title2', name: 'Alt Başlık 2' }, { value: 'title3', name: 'Alt Başlık 3' }, { value: 'description', name: 'Açıklama' }, { value: 'imageUrl', name: 'Resim URL' }, { value: '', name: 'İşlemler' }];
    const { data, isLoading, error } = useGetAllFeatureSliderQuery(undefined, { skip: !isOnPage });
    const [getSlider, setGetSlider] = useState<FeatureSliderDto | undefined>(undefined);
    const [triggerGetSliderById, { data: getData, isLoading: getIsLoading, error: getIsError }] = useLazyGetFeatureSliderByIdQuery();
    const [createSlider] = useAddFeatureSliderMutation();
    const [deleteSlider] = useDeleteFeatureSliderMutation();
    const [updateSlider] = useUpdateFeatureSliderMutation();
    useEffect(() => {
        if (getData) { setGetSlider(getData); }
    }, [getData]);


    const handleAddSubmit = async (values: AddFeatureSliderDto, formikHelpers: FormikHelpers<AddFeatureSliderDto>) => {
        try {
            await createSlider(values).unwrap(); setGetSlider(undefined); formikHelpers.resetForm();
        } catch (error) { console.log("Slider eklenirken hata oluştu:", error); }
    }
    const handleUpdateSubmit = async (values: FeatureSliderDto,) => {
        try {
            await updateSlider(values).unwrap();
            setGetSlider(undefined);
        } catch (error) { console.log("Slider güncellenirken hata oluştu:", error); }
    }
    const handleClick = (id: string) => { if (getSlider?.featureSliderID !== id) triggerGetSliderById(id); }
    const handleDeleteCompletedClick = async () => {
        try {
            await deleteSlider(getSlider!.featureSliderID).unwrap();
        } catch (error) { console.log("Slider eklenirken hata oluştu:", error); }
    }

    const transactionsBodyTemplate = (rowData: any) => {
        return (
            <div className='d-flex gap-2 align-items-center'>
                <Tooltip title="Slider sil" placement="top">
                    <IconButton data-bs-toggle="modal" data-bs-target="#deleteModal" className='rounded-3'
                        onClick={() => handleClick(rowData?.featureSliderID)}
                        style={{ backgroundColor: '#ddf0eb', }}>
                        <MdDeleteOutline color="red" fontSize="x-large" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Slider güncelle" placement="top">
                    <IconButton
                        data-bs-toggle="modal" data-bs-target='#updateSliderModal' className='rounded-3'
                        onClick={() => handleClick(rowData?.featureSliderID)}
                        style={{ backgroundColor: '#ddf0eb', }}>
                        <MdOutlineUpdate color='blue ' fontSize='x-large' />
                    </IconButton>
                </Tooltip>
            </div>
        )
    };

    return (
        <>
            <div className='py-4 mt-4 ms-3 bg-white rounded-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='fs-4 ps-3'>Slider Listesi</span>
                    <button className='btn text-white me-4' data-bs-toggle='modal'
                        data-bs-target='#addSliderModal' style={{ backgroundColor: '#6bbeb7' }}><FaPlus className='mb-1 me-1' fontSize='medium' />Slider Görseli Ekle</button>
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
                                if (index === 0 || index === 5) return null;
                                return (<Column key={index} align='left' body={index === 6 ? transactionsBodyTemplate : ''} sortable field={column.value} headerStyle={{ color: '#b2b8c9', fontSize: 15 }} header={column.name} bodyClassName='fs-6 fw-semibold' />);
                            })}
                        </DataTable></>
                )}
            </div>

            <AddSliderModal handleSubmit={handleAddSubmit}></AddSliderModal>
            <UpdateSliderModal getSlider={getSlider} handleSubmit={handleUpdateSubmit}></UpdateSliderModal>
            <DeleteModal name={getSlider?.title} handleSubmit={handleDeleteCompletedClick} ></DeleteModal>

        </>
    )
}

export default AdminSlider