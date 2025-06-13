import { FormControlLabel, Radio } from '@mui/material';
import React from 'react'

const RadioColor = ({ value, color, type, label }: { value: string; color: string, type: string, label: string }) => {
    return (
        <FormControlLabel
            value={value}
            control={
                <Radio
                    className='pe-0 ps-1'
                    icon={
                        <span
                            className={`${type === 'color' ? 'rounded-circle' : 'rounded'} d-inline-flex align-items-center justify-content-center`}
                            style={{
                                marginRight: type !== 'color' ? 5 : 0,
                                marginLeft: type !== 'color' ? 5 : 0,
                                width: 25,
                                height: 25,
                                backgroundColor: type === 'color' ? color : 'white',
                                border: color === "white" && type === 'color' ? "2px solid gainsboro" : type !== 'color' ? '1px solid lightgray' : 'none',

                            }}
                        />
                    }
                    checkedIcon={
                        <span
                            className={`${type === 'color' ? 'rounded-circle' : 'rounded'} d-inline-flex align-items-center justify-content-center`}
                            style={{
                                marginRight: type !== 'color' ? 5 : 0,
                                marginLeft: type !== 'color' ? 5 : 0,
                                width: 25,
                                height: 25,
                                backgroundColor: type === 'color' ? color : '#407e78',
                                border: color === "white" && type === 'color' ? "2px solid gray" : 'none',
                                boxShadow: color === "white" && type === 'color' ? "none" : type !== 'color' ? ' none' : '0 0 0 2px gray',
                            }}
                        />
                    }
                />
            }
            label={label}
        />
    )
}

export default RadioColor