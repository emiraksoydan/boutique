import { Autocomplete, MenuItem, TextField } from '@mui/material';
import { Field, Form, Formik, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import type { AddCategoryDto } from '../../types/AddCategoryDto';
import type { Category } from '../../types/CategoryDto';
import { getCategoryDisplayName } from '../../utils/CategoryHelper';

const AddCategory = ({ categories, handleSubmit = () => { } }: {
    categories: Category[],
    handleSubmit?: (
        values: AddCategoryDto,
        formikHelpers: FormikHelpers<AddCategoryDto>
    ) => void | Promise<void>;
}) => {
    const initialValues: AddCategoryDto = {
        categoryName: '',
        parentCategoryID: '',
    };
    const categoryYup = Yup.object({
        categoryName: Yup.string()
            .required('Kategori adı zorunludur')
            .min(3, 'Kategori adı en az 3 karakter olabilir')
            .max(25, 'Kategori adı en fazla 15 karakter olabilir'),

        parentCategoryID: Yup.string().nullable(),
    });
    console.log("AddCategory categories", categories);
    return (
        <div className="modal fade"
            id="addCategoryModal"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            aria-labelledby="staticBackdropLabel"
            tabIndex={-1}
            aria-hidden="true">
            <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Kategori Ekle</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Formik initialValues={initialValues} validationSchema={categoryYup} onSubmit={(values, formikHelpers) => handleSubmit(values, formikHelpers)} >
                            {({ touched, errors, isValid, dirty, values, setFieldValue }) => (
                                <Form>
                                    <Autocomplete
                                        options={categories}
                                        getOptionLabel={(option) => getCategoryDisplayName(option, categories)}
                                        onChange={(event, newValue) => {
                                            setFieldValue("parentCategoryID", newValue ? newValue.categoryID : null);
                                        }}
                                        value={
                                            categories.find(cat => cat.categoryID === values.parentCategoryID) || null
                                        }
                                        isOptionEqualToValue={(option, value) => option.categoryID === value.categoryID}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                name="parentCategoryID"
                                                label="Üst Kategori Seçin (Opsiyonel)"
                                                variant="outlined"
                                                fullWidth
                                                size="small"
                                                margin="normal"
                                                error={touched.parentCategoryID && !!errors.parentCategoryID}
                                                helperText={touched.parentCategoryID && errors.parentCategoryID}
                                            />
                                        )}
                                    />

                                    <Field
                                        as={TextField}
                                        name="categoryName"
                                        label="Yeni Kategori Adı"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        margin="normal" // Biraz boşluk ekleyelim
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

    )
}


export default AddCategory