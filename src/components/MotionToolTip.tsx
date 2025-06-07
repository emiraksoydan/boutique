
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