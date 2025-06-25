import React from 'react'
import { Skeleton } from '@mui/material';

const SkeletonComponent = () => {
    return (
        <div style={{ width: '99%' }}>
            {[...Array(5)].map((_, i) => (
                <Skeleton
                    className='ms-3 mt-3'
                    key={i}
                    variant="rectangular"
                    height={40}
                    sx={{ mb: 1, borderRadius: 1, backgroundColor: 'gainsboro' }}
                />
            ))}
        </div>
    )
}

export default SkeletonComponent