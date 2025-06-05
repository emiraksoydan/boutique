import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type SubItem = {
    label: string;
};

type Category = {
    label: string;
    items: SubItem[];
};

type Props = {
    columns: Category[][];
    direction?: "right" | "down"; // default: right
    anchorRef?: React.RefObject<HTMLElement | null>;
    className?: string;
};

const MegaSubMenu: React.FC<Props> = ({
    columns,
    direction = "right",
    anchorRef,
    className = "",
}) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (anchorRef?.current) {
            const rect = anchorRef.current.getBoundingClientRect();
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;

            const top = rect.top + scrollY;
            const left = rect.right + scrollX; // sağında çıkması için rect.right

            setPosition({ top, left });
        }
    }, [anchorRef]);

    return (
        <motion.div
            className={`position-absolute bg-white shadow-lg border rounded z-3 ${className}`}
            style={{ top: position.top, left: position.left, minWidth: 300 }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
        >
            <div className="d-flex flex-row p-3">
                {columns.map((column, colIndex) => (
                    <div key={colIndex} className="d-flex flex-column me-4">
                        {column.map((category, catIndex) => (
                            <div key={catIndex}>
                                <strong>{category.label}</strong>
                                <ul className="list-unstyled">
                                    {category.items.map((subItem, i) => (
                                        <li key={i}>{subItem.label}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
export default MegaSubMenu;