import React from 'react'
import type { AddFeatureSliderDto } from '../../types/AddFeatureSliderDto';
import { Field, Form, Formik, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Autocomplete, TextField } from '@mui/material';


const AddSliderModal = ({ handleSubmit = () => { } }: {
    handleSubmit?: (
        values: AddFeatureSliderDto,
        formikHelpers: FormikHelpers<AddFeatureSliderDto>
    ) => void | Promise<void>;
}) => {
    const statusOptions = [
        { label: 'Aktif', value: true },
        { label: 'Aktif Değil', value: false }
    ];

    const initialValues: AddFeatureSliderDto = {
        title: '',
        title2: '',
        title3: '',
        description: '',
        imageUrl: '',
        status: false,
    };
    const sliderYup = Yup.object({
        title: Yup.string().required('Başlık  zorunludur').min(3, 'Başlık adı en az 3 karakter olabilir').max(10, 'Başlık  en fazla 10 karakter olabilir'),
        title2: Yup.string().required('Başlık  zorunludur').min(3, 'Başlık adı en az 3 karakter olabilir').max(10, 'Başlık  en fazla 10 karakter olabilir'),
        title3: Yup.string().required('Başlık  zorunludur').min(3, 'Başlık adı en az 3 karakter olabilir').max(10, 'Başlık  en fazla 10 karakter olabilir'),
        description: Yup.string().required('Başlık  zorunludur').min(3, 'Başlık adı en az 3 karakter olabilir').max(20, 'Başlık  en fazla 20 karakter olabilir'),
        imageUrl: Yup.string()
            .required('Resim URL zorunludur')
            .url('Resim URL geçerli bir URL olmalıdır')
            .matches(/\.(jpeg|jpg|png)$/i, 'URL bir resim dosyası olmalıdır (jpg, jpeg, png)'),
        status: Yup.boolean().required('Durum zorunludur'),
    });
    return (
        <div className="modal fade"
            id="addSliderModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            aria-labelledby="staticBackdropLabel"
        >
            <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Slider Görseli Ekle</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Formik initialValues={initialValues} validationSchema={sliderYup} onSubmit={(values, formikHelpers) => handleSubmit(values, formikHelpers)} >
                                {({ touched, errors, values, isValid, dirty, setFieldValue }) => (
                                    <Form>
                                        <div className='row fw-medium'>
                                            <div className='col-md-4 col-sm-12'>
                                                <Field
                                                    as={TextField}
                                                    id='slider_title'
                                                    name='title'
                                                    label='Başlık 1'
                                                    variant='outlined'
                                                    fullWidth
                                                    size='small'
                                                    error={touched.title && !!errors.title}
                                                    helperText={touched.title && errors.title}
                                                />
                                            </div>
                                            <div className='col-md-4 col-sm-12'>
                                                <Field
                                                    as={TextField}
                                                    id='slider_title2'
                                                    name='title2'
                                                    label='Başlık 2'
                                                    variant='outlined'
                                                    fullWidth
                                                    size='small'
                                                    error={touched.title2 && !!errors.title2}
                                                    helperText={touched.title2 && errors.title2}
                                                />
                                            </div>
                                            <div className='col-md-4 col-sm-12'>
                                                <Field
                                                    as={TextField}
                                                    id='slider_title3'
                                                    name='title3'
                                                    label='Başlık 3'
                                                    variant='outlined'
                                                    fullWidth
                                                    size='small'
                                                    error={touched.title3 && !!errors.title3}
                                                    helperText={touched.title3 && errors.title3}
                                                />
                                            </div>
                                            <div className='col-md-6 col-sm-12 mt-3'>
                                                <Field
                                                    as={TextField}
                                                    id='slider_imageUrl'
                                                    name='imageUrl'
                                                    label='Resim URL'
                                                    variant='outlined'
                                                    fullWidth
                                                    size='small'
                                                    error={touched.imageUrl && !!errors.imageUrl}
                                                    helperText={touched.imageUrl && errors.imageUrl}
                                                />
                                            </div>
                                            <div className='col-md-6 col-sm-12 mt-3'>
                                                <Field
                                                    as={Autocomplete}
                                                    id="slider_status"
                                                    options={statusOptions}
                                                    getOptionLabel={(option: any) => option.label}
                                                    value={statusOptions.find((option) => option.value === values.status) || null}
                                                    onChange={(event: any, newValue: any) => {
                                                        setFieldValue('status', newValue ? newValue.value : '');
                                                    }}
                                                    renderInput={(params: any) => (
                                                        <TextField
                                                            {...params}
                                                            label="Durum"
                                                            variant="outlined"
                                                            size="small"
                                                            error={touched.status && !!errors.status}
                                                            helperText={touched.status && errors.status}
                                                            fullWidth
                                                        />
                                                    )}
                                                />
                                            </div>
                                            <div className='col-md-12 col-sm-12 mt-3'>
                                                <Field
                                                    as={TextField}
                                                    id='slider_description'
                                                    name='description'
                                                    label='Açıklama'
                                                    InputProps={{ sx: { overflow: 'auto', resize: 'none' } }}
                                                    multiline
                                                    rows={5}
                                                    variant='outlined'
                                                    fullWidth
                                                    size='small'
                                                    error={touched.description && !!errors.description}
                                                    helperText={touched.description && errors.description}
                                                />
                                            </div>
                                        </div>
                                        <button type="submit"   {...(isValid && dirty ? { 'data-bs-dismiss': 'modal' } : {})} className="btn text-white mt-3  w-100" style={{ backgroundColor: '#6bbeb7' }}>Ekle</button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSliderModal