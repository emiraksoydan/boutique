// General
import { createContext, useContext, useState, type ReactNode } from 'react';



interface DataProviderProps {
    isHoverSidebar?: boolean;
    setIsHoverSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
    children?: ReactNode;
}

const DataContext = createContext<DataProviderProps | null>(null);


const DataProvider = ({ children }: DataProviderProps) => {
    const [isHoverSidebar, setIsHoverSidebar] = useState<boolean>(false);
    const values = { isHoverSidebar, setIsHoverSidebar }
    return <DataContext value={values}>{children}</DataContext>
}
const useData = () => useContext(DataContext);

export { DataProvider, useData };
