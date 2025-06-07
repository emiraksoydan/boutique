import { AnimatePresence, motion } from 'framer-motion';
import { TabPanel, TabView } from 'primereact/tabview'
import React, { useState } from 'react'
import shoes from '../assets/images/shoes.jpg';
import GridSection from './ProductGridComponent';


const HomeTabProduct = () => {
    const dummyItems = Array.from({ length: 8 }).map((_, index) => ({
        id: index + 1,
        title: `Kategori ${index + 1}`,
        productName: `Ürün ${index + 1}`,
        image: shoes
    }));
    const [activeIndex, setActiveIndex] = useState(0);
    const tabHeaders = ['Öne Çıkanlar', 'Popülerler', 'Yeni Eklenenler'];
    return (
        <div className='container'>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                {tabHeaders.map((header, index) => (
                    <TabPanel key={index} header={header}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.0 }}
                            >
                                <GridSection items={dummyItems} />
                            </motion.div>
                        </AnimatePresence>
                    </TabPanel>
                ))}
            </TabView>
        </div>

    )
}

export default HomeTabProduct