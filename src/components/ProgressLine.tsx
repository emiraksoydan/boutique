import React from 'react'

type ProgressLineProps = {
    label: string;
    value: number; // 0 - 100 arası
};

const ProgressLine: React.FC<ProgressLineProps> = ({ label, value }) => {
    return (
        <div className="d-flex align-items-center gap-3">
            <span className="mb-0 text-body-secondary">{label}</span>
            <div
                className="progress flex-fill"
                role="progressbar"
                aria-label={`${label} rating`}
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    className="progress-bar"
                    style={{ width: `${value}%`, backgroundColor: '#407e78' }}
                >
                    {value}%
                </div>
            </div>
        </div>
    );
}

export default ProgressLine