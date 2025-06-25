import React from 'react'
import BreadCrumbComponent from '../components/BreadCrumb'
import { Field, Form, Formik } from 'formik';
import { Divider, TextField, useMediaQuery } from '@mui/material';
import * as Yup from 'yup';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useTheme } from '@mui/material/styles';

import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

const Contact = () => {
    const breadcrumbItems = [{ label: 'İletişim' }];
    const initialValues = { FullName: '', Email: '', Subject: '', Message: '', }
    const handleSubmit = (values: any) => { console.log(values); }
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const contactYup = Yup.object().shape({
        FullName: Yup.string()
            .required('Lütfen isim ve soy isim giriniz')
            .max(40, 'En fazla 40 karakter olabilir'),
        Email: Yup.string()
            .email('Geçerli bir email giriniz')
            .matches(
                /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                'Lütfen geçerli bir e-posta giriniz'
            )
            .required('Email gerekli'),
        Subject: Yup.string()
            .required('Konu alanı gerekli')
            .max(15, 'En fazla 15 karakter olabilir'),
        Message: Yup.string()
            .required('Mesaj gerekli')
            .min(5, 'Mesaj en az 5 karakter olabilir')
            .max(100, 'Mesaj en fazla 100 karakter olabilir'),
    });
    return (
        <>
            <BreadCrumbComponent items={breadcrumbItems}></BreadCrumbComponent>
            <div className='container  px-4 py-5'>
                <div className='row'>
                    <div className='col-md-5 col-12'>
                        <Formik initialValues={initialValues} validationSchema={contactYup} onSubmit={(values) => handleSubmit(values)}>
                            {({ touched, errors, values, setFieldValue }) => (
                                <Form>
                                    <span className='fw-medium fs-4 '>İletişime geçin</span>
                                    <div className='row mt-3 gap-3 gap-md-0'>
                                        <div className='col-md-6 col-sm-12'>
                                            <Field
                                                as={TextField}
                                                id='name'
                                                name='FullName'
                                                label='İsim - Soyisim'
                                                variant='outlined'
                                                fullWidth
                                                size='small'
                                                error={touched.FullName && !!errors.FullName}
                                                helperText={touched.FullName && errors.FullName}
                                            />
                                        </div>
                                        <div className='col-md-6 col-sm-12'>
                                            <Field
                                                as={TextField}
                                                id='email'
                                                name='Email'
                                                label='Email'
                                                fullWidth
                                                variant='outlined'
                                                size='small'
                                                error={touched.Email && !!errors.Email}
                                                helperText={touched.Email && errors.Email}
                                            />
                                        </div>
                                        <div className='col-md-12 mt-0 mt-md-3'>
                                            <Field
                                                as={TextField}
                                                id='subject'
                                                name='Subject'
                                                label='Konu'
                                                fullWidth
                                                variant='outlined'
                                                size='small'
                                                error={touched.Subject && !!errors.Subject}
                                                helperText={touched.Subject && errors.Subject}
                                            />
                                        </div>
                                        <div className='col-md-12 mt-0 mt-md-3'>
                                            <Field
                                                as={TextField}
                                                id='message'
                                                name='Message'
                                                label="Mesaj"
                                                value={values.Message}
                                                onChange={(e: any) => setFieldValue('Message', e.target.value)}
                                                InputProps={{ sx: { overflow: 'auto', resize: 'none' } }}
                                                multiline
                                                rows={4}
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                                error={touched.Message && !!errors.Message}
                                                helperText={touched.Message && errors.Message}
                                            />
                                        </div>
                                    </div>
                                    <button type='submit' className='btn text-white mt-3 w-100' style={{ backgroundColor: '#468078' }}>Mesajı gönder</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className='col-md-7 col-12 ps-md-5 ps-2 mt-md-0 mt-3 '>
                        <MapContainer
                            center={[41.0082, 28.9784]}
                            zoom={15}
                            style={{ height: '280px', width: '100%' }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[41.0082, 28.9784]}>
                                <Popup>İstanbul</Popup>
                            </Marker>
                        </MapContainer>
                        <div className=' d-md-flex d-block flex-row align-items-center gap-3 mt-3'>
                            <div className='fw-medium mb-3 mb-md-0' style={{ color: '#468078' }}>
                                <CiLocationOn className='me-2'></CiLocationOn>
                                <span>34100 Ataşehir İstanbul</span>
                            </div>
                            <Divider sx={{ borderBottom: '1px solidrgb(117, 118, 119)', opacity: 1, width: isMobile ? '100%' : 50, }} />
                            <div className='fw-medium mb-3 mb-md-0 mt-3 mt-md-0' style={{ color: '#468078' }}>
                                <MdOutlineEmail className='me-2'></MdOutlineEmail>
                                <span>deneme@gmail.com</span>
                            </div>
                            <Divider sx={{ borderBottom: '1px solidrgb(117, 118, 119)', opacity: 1, width: isMobile ? '100%' : 50, }} />
                            <div className='fw-medium mb-3 mb-md-0 mt-3 mt-md-0' style={{ color: '#468078' }}>
                                <MdOutlinePhone className='me-2'></MdOutlinePhone>
                                <span>05555555555</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact