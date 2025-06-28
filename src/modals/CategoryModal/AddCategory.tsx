import { TextField } from '@mui/material';
import { Field, Form, Formik, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import type { AddCategoryDto } from '../../types/AddCategoryDto';

const AddCategory = ({ handleSubmit = () => { } }: {
    handleSubmit?: (
        values: AddCategoryDto,
        formikHelpers: FormikHelpers<AddCategoryDto>
    ) => void | Promise<void>;
}) => {
    const initialValues: AddCategoryDto = { categoryName: '', };
    const categoryYup = Yup.object({
        categoryName: Yup.string().required('Kategori adı zorunludur').min(3, 'Kategori adı en az 3 karakter olabilir').max(50, 'Kategori adı en fazla 50 karakter olabilir'),
    });
    return (
        <div className="modal fade"
            id="addCategoryModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            aria-labelledby="staticBackdropLabel">
            <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Kategori Ekle</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Formik initialValues={initialValues} validationSchema={categoryYup} onSubmit={(values, formikHelpers) => handleSubmit(values, formikHelpers)} >
                                {({ touched, errors, isValid, dirty }) => (
                                    <Form>
                                        <Field
                                            as={TextField}
                                            id='category_name'
                                            name='categoryName'
                                            label='Kategori Adı'
                                            variant='outlined'
                                            fullWidth
                                            size='small'
                                            error={touched.categoryName && !!errors.categoryName}
                                            helperText={touched.categoryName && errors.categoryName}
                                        />
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

export default AddCategory