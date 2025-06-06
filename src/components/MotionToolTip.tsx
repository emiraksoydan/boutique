// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';

// const MotionTooltip = ({
//     children,
//     content,
// }: {
//     children: React.ReactNode;
//     content: string;
// }) => {
//     const [show, setShow] = useState(false);

//     return (
//         <div
//             className="position-relative d-inline-block"
//             onMouseEnter={() => setShow(true)}
//             onMouseLeave={() => setShow(false)}
//         >
//             {children}
//             <AnimatePresence>
//                 {show && (
//                     <motion.div
//                         initial={{ opacity: 0, y: -6 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -6 }}
//                         transition={{ duration: 0.2 }}
//                         className="position-absolute start-50 translate-middle-x"
//                         style={{
//                             bottom: 'calc(100% + 10px)',
//                             background: '#407e78',
//                             color: '#fff',
//                             padding: '4px 10px',
//                             borderRadius: '6px',
//                             whiteSpace: 'nowrap',
//                             zIndex: 9999,
//                             fontSize: '0.8rem',
//                             position: 'relative', // tooltip içine ok yerleştirmek için
//                         }}
//                     >
//                         {content}
//                         <div
//                             style={{
//                                 content: '""',
//                                 position: 'absolute',
//                                 top: '100%',
//                                 left: '50%',
//                                 transform: 'translateX(-50%)',
//                                 width: 0,
//                                 height: 0,
//                                 borderLeft: '6px solid transparent',
//                                 borderRight: '6px solid transparent',
//                                 borderTop: '6px solid #407e78',
//                             }}
//                         />
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default MotionTooltip;
import { useState } from 'react';

const MotionTooltip = ({
    children,
    content,
}: {
    children: React.ReactNode;
    content: string;
}) => {
    const [show, setShow] = useState(false);

    return (
        <div
            className="position-relative d-inline-block"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {children}
            <div
                className={`custom-tooltip position-absolute pe-none d-flex align-items-center flex-column opacity-0  start-50 bottom-100 z-3  ${show ? 'show opacity-100' : ''}`}
            >
                <div className="tooltip-box text-white px-2 py-1 rounded-2 text-nowrap">
                    {content}
                </div>
                <div className="tooltip-arrow w-0 h-0" />
            </div>
        </div>
    );
};

export default MotionTooltip;