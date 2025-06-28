import { TextField } from '@mui/material';
import { Field, Form, Formik, type FormikHelpers } from 'formik';
import * as Yup from 'yup';

import React from 'react'
import type { Category } from '../../types/CategoryDto';



const UpdateCategory = ({ getCategory, handleSubmit = () => { } }: {
    getCategory?: Category,
    handleSubmit?: (
        values: Category,
        formikHelpers: FormikHelpers<Category>
    ) => void | Promise<void>;
}) => {
    const categoryYup = Yup.object({
        categoryName: Yup.string().required('Kategori adı zorunludur').min(3, 'Kategori adı en az 3 karakter olabilir').max(50, 'Kategori adı en fazla 50 karakter olabilir'),
    });
    return (
        <div className="modal fade"
            id="updateCategoryModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            aria-labelledby="staticBackdropLabel">
            <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Kategori Güncelle</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Formik
                                enableReinitialize={true}
                                initialValues={getCategory ?? { categoryID: '', categoryName: '' }}
                                validationSchema={categoryYup}
                                onSubmit={(values, formikHelpers) => handleSubmit(values, formikHelpers)}
                            >
                                {({ touched, errors }) => (
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
                                        <button type="submit" data-bs-dismiss="modal" className="btn mt-3 text-white w-100 " style={{ backgroundColor: '#6bbeb7' }}>Güncelle</button>
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

export default UpdateCategory