import { Rating } from '@mui/material'
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const RatingComponent = () => {
    return (
        <Rating
            icon={<StarIcon sx={{ stroke: 'gold', strokeWidth: 1, fontSize: '1.2rem' }} />}
            emptyIcon={<StarBorderIcon sx={{ stroke: 'gold', strokeWidth: 1, fontSize: '1.2rem' }} />}
            size='small'
            name="half-rating"
            defaultValue={0}
            precision={0.5}
        />
    )
}

export default RatingComponent