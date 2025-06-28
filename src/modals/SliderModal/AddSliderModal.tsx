import React from 'react'
import type { AddFeatureSliderDto } from '../../types/AddFeatureSliderDto';
import type { FormikHelpers } from 'formik';

const AddSliderModal = ({ handleSubmit = () => { } }: {
    handleSubmit?: (
        values: AddFeatureSliderDto,
        formikHelpers: FormikHelpers<AddFeatureSliderDto>
    ) => void | Promise<void>;
}) => {
    return (
        <div>AddSliderModal</div>
    )
}

export default AddSliderModal