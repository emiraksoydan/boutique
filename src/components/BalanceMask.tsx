import React from 'react'
// Styles
import { NumericFormat } from 'react-number-format';
import TextField from '@mui/material/TextField';
import type { FieldProps } from 'formik';

const BalanceMask = ({ field, form, ...other }: FieldProps) => {
    return (
        <>
            <NumericFormat
                {...field}
                {...other}
                customInput={TextField}
                thousandSeparator="."
                decimalSeparator=","
                decimalScale={2}
                fixedDecimalScale
                allowNegative={false}
                prefix="₺ "
                onValueChange={(values) => { form.setFieldValue(field.name, values.floatValue); }}
            />
        </>
    )
}

export default BalanceMask