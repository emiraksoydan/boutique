import { Autocomplete, TextField } from '@mui/material'
import { Field, Form, Formik, type FormikHelpers } from 'formik'
import * as Yup from 'yup';
import { useEffect } from 'react'
import type { AddProductDto } from '../../types/AddProductDto';
import { useData } from '../../contexts/DataContext';
import { useAddProductMutation, useGetAllCategoriesQuery } from '../../redux/generalApi/api';
import { useLocation, useNavigate } from 'react-router';
import BalanceMask from '../../components/BalanceMask';
import { ParseBalance } from '../../utils/ParseBalance';
import { useYup } from '../../contexts/YupContext';
import { getCategoryDisplayName } from '../../utils/CategoryHelper';

const AdminAddProduct = () => {
    const location = useLocation();
    const useNavi = useNavigate();
    const initialValues: AddProductDto = { categoryID: '', productName: '', productPrice: 0, productImageUrl: '', productDescr: '' };
    const isOnPage = location.pathname === '/admin/admin-product/add-product';
    const dataContext = useData();
    const yupContext = useYup();
    if (!dataContext) { return null; }
    if (!yupContext) { return null; }
    const { categories, setCategories } = dataContext;
    const { productYup } = yupContext;
    const { data } = useGetAllCategoriesQuery(undefined, { skip: !isOnPage && (categories?.length ?? 0) > 0, });
    const [addProduct] = useAddProductMutation();
    useEffect(() => {
        if ((categories?.length ?? 0) === 0 && data?.length) { setCategories?.(data); }
    }, [data]);
    const leafCategories = categories?.filter(cat => !categories.some(c => c.parentID === cat.categoryID));
    const handleSubmit = async (values: AddProductDto) => {
        const preparedValues = {
            ...values,
            productPrice: typeof values.productPrice === 'string' ? ParseBalance(values.productPrice) : values.productPrice,
        };
        try {
            if (await addProduct(preparedValues).unwrap()) { useNavi('/admin/admin-product'); }
        } catch (error) {
            console.log("Kategori eklenirken hata oluştu:", error);
        }
    }
    return (
        <div className='py-4 position-relative mt-4 ms-3 rounded-5' style={{ background: 'linear-gradient(to bottom, #82cfc8 0%, #70bab3 50%, #5ba09a 100%)', height: "55%" }}>
            <div className='bg-white position-absolute top-100 start-50 translate-middle z-2 rounded-5 p-4' style={{ boxShadow: '0 12px 24px rgba(0,0,0,0.1)', }}>
                <h4 className='mb-4' style={{ color: '#1f255e' }}>Ürün Bilgisi</h4>
                <Formik initialValues={initialValues} validationSchema={productYup} onSubmit={(values) => handleSubmit(values)}>
                    {({ touched, errors, setFieldValue, setFieldTouched, values }) => (
                        <Form>
                            <div className='row fw-medium' style={{ color: '#1f255e' }}>
                                <div className='col-md-6'>
                                    <label htmlFor='product_name' className='form-label'>Ürün Adı</label>
                                    <Field
                                        as={TextField}
                                        id='product_name'
                                        name='productName'
                                        placeholder='Converse...'
                                        variant='outlined'
                                        fullWidth
                                        size='small'
                                        error={touched.productName && !!errors.productName}
                                        helperText={touched.productName && errors.productName}
                                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor='product_categoryID' className='form-label'>Kategorisi</label>
                                    <Field
                                        as={Autocomplete}
                                        id="product_categoryID"
                                        name="categoryID"
                                        options={leafCategories}
                                        getOptionLabel={(option: any) => {
                                            if (!option) return '';
                                            if (typeof option === 'string') return option;
                                            return getCategoryDisplayName(option, categories ?? []);
                                        }}
                                        value={
                                            values.categoryID
                                                ? categories?.find(c => c.categoryID === values.categoryID) || null
                                                : null
                                        }
                                        onChange={(_e: any, newValue: any) => {
                                            setFieldValue('categoryID', newValue ? newValue.categoryID : null);
                                        }}
                                        onBlur={() => setFieldTouched('categoryID', true)}
                                        renderInput={(params: any) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                size="small"
                                                error={touched.categoryID && !!errors.categoryID}
                                                helperText={touched.categoryID && errors.categoryID}
                                            />
                                        )}
                                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                                    />
                                </div>
                                <div className='col-md-6 mt-4'>
                                    <label htmlFor='product_price' className='form-label'>Ürün Fiyatı</label>
                                    <Field
                                        id='product_price'
                                        name='productPrice'
                                        placeholder='100.00'
                                        component={BalanceMask}
                                        variant='outlined'
                                        fullWidth
                                        size='small'
                                        error={touched.productPrice && !!errors.productPrice}
                                        helperText={touched.productPrice && errors.productPrice}
                                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                                    />
                                    <label htmlFor='product_imageurl' className='form-label mt-4'>Ürün Görseli</label>
                                    <Field
                                        as={TextField}
                                        id='product_imageurl'
                                        name='productImageUrl'
                                        placeholder='test.jpg'
                                        variant='outlined'
                                        fullWidth
                                        size='small'
                                        error={touched.productImageUrl && !!errors.productImageUrl}
                                        helperText={touched.productImageUrl && errors.productImageUrl}
                                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}

                                    />
                                </div>
                                <div className='col-md-6 mt-4'>
                                    <label htmlFor='product_descr' className='form-label'>Ürün Açıklaması</label>
                                    <Field
                                        as={TextField}
                                        id='product_Descr'
                                        name='productDescr'
                                        placeholder='Ayakkabı'
                                        InputProps={{ sx: { overflow: 'auto', resize: 'none' } }}
                                        multiline
                                        rows={5}
                                        variant='outlined'
                                        fullWidth
                                        size='small'
                                        error={touched.productDescr && !!errors.productDescr}
                                        helperText={touched.productDescr && errors.productDescr}
                                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                                    />
                                </div>
                            </div>
                            <div className=' mt-3 d-flex justify-content-end'>
                                <button
                                    type="submit"
                                    className="btn text-white bg-dark"
                                >
                                    Ürünü Ekle
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default AdminAddProduct