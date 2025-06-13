import React from 'react'
import RatingComponent from './Rating'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';

const AddComment = () => {
    const formik = useFormik({
        initialValues: {
            rating: 0,
            message: '',
        },
        validationSchema: Yup.object({
            rating: Yup.number()
                .min(0.5, 'En az yarım yıldız verin')
                .required('Puanlama gerekli'),
            message: Yup.string()
                .min(10, 'Yorum en az 10 karakter olmalı')
                .required('Yorum gerekli'),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log('Yorum gönderildi:', values);
            resetForm();
        },
    });

    return (
        <>
            <h4>Yorum Ekle</h4>
            <form onSubmit={formik.handleSubmit} className="d-flex flex-column gap-3 mt-3">
                <div>
                    <RatingComponent
                        isRead={false}
                        defaultValue={formik.values.rating}
                        value={formik.values.rating}
                        onChange={(value: number) => formik.setFieldValue('rating', value)}
                    />
                    {formik.touched.rating && formik.errors.rating && (
                        <div className="text-danger" style={{ fontSize: '0.9rem' }}>
                            {formik.errors.rating}
                        </div>
                    )}
                </div>
                <TextField
                    name="message"
                    label="Yorumunuz"
                    multiline
                    rows={4}
                    fullWidth
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    sx={{
                        "& .MuiInputLabel-outlined": {
                            color: "#407e78",
                        },
                        '& .MuiOutlinedInput-root': {
                            color: "#000",
                            '& fieldset': {
                                borderColor: '#ced4da', // normal
                            },
                            '&:hover fieldset': {
                                borderColor: '#ced4da', // hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ced4da', // focus
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-success w-25'>
                    Gönder
                </button>
            </form>
        </>
    )
}

export default AddComment