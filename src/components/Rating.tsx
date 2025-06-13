import { Rating } from '@mui/material'
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

interface RatingComponentProps {
    isRead?: boolean;
    fontSize?: string;
    defaultValue?: number
    value?: number
    onChange?: (value: number) => void;
}

const RatingComponent: React.FC<RatingComponentProps> = ({ isRead = false, fontSize = '1.2rem', defaultValue = 4.5, value, onChange, }) => {
    return (
        <Rating
            readOnly={isRead}
            icon={<StarIcon sx={{ stroke: 'gold', strokeWidth: 1, fontSize: fontSize }} />}
            emptyIcon={<StarBorderIcon sx={{ stroke: 'gold', strokeWidth: 1, fontSize: fontSize }} />}
            size='small'
            name="half-rating"
            onChange={(_, newValue) => {
                if (onChange && newValue !== null) onChange(newValue)
            }}
            defaultValue={defaultValue}
            value={value}
            precision={0.5}
        />
    )
}

export default RatingComponent