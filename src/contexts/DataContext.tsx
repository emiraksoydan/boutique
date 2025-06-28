// General
import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Category } from '../types/CategoryDto';



interface DataProviderProps {
    isHoverSidebar?: boolean;
    setIsHoverSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
    categories?: Category[];
    setCategories?: React.Dispatch<React.SetStateAction<Category[]>>;
    children?: ReactNode;
}

const DataContext = createContext<DataProviderProps | null>(null);


const DataProvider = ({ children }: DataProviderProps) => {
    const [isHoverSidebar, setIsHoverSidebar] = useState<boolean>(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const values = { isHoverSidebar, setIsHoverSidebar, categories, setCategories }
    return <DataContext value={values}>{children}</DataContext>
}
const useData = () => useContext(DataContext);

export { DataProvider, useData };
