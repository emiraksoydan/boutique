// General
import { createContext, useContext, type ReactNode } from 'react';
import * as Yup from 'yup';



interface YupProviderProps {
    productYup?: Yup.ObjectSchema<any>;
    children?: ReactNode;
}

const YupContext = createContext<YupProviderProps | null>(null);


const YupProvider = ({ children }: YupProviderProps) => {
    const productYup = Yup.object({
        categoryID: Yup.string().required('Kategori seçimi zorunludur'),
        productName: Yup.string().required('Ürün adı zorunludur').min(3, 'Ürün adı en az 3 karakter olabilir').max(50, 'Ürün adı en fazla 50 karakter olabilir'),
        productPrice: Yup.string().required('Fiyat gerekli'),
        productImageUrl: Yup.string().required('Ürün görseli zorunludur'),
        productDescr: Yup.string().required('Ürün açıklaması zorunludur').min(10, 'Ürün açıklaması en az 10 karakter olabilir').max(500, 'Ürün açıklaması en fazla 500 karakter olabilir'),
    });
    const values = { productYup }
    return <YupContext value={values}>{children}</YupContext>
}
const useYup = () => useContext(YupContext);

export { YupProvider, useYup };
