import React from 'react'
import type { FeatureSliderDto } from '../../types/FeatureSliderDto';
import type { FormikHelpers } from 'formik';

const UpdateSliderModal = ({ getSlider, handleSubmit = () => { } }: {
  getSlider?: FeatureSliderDto,
  handleSubmit?: (
    values: FeatureSliderDto,
    formikHelpers: FormikHelpers<FeatureSliderDto>
  ) => void | Promise<void>;
}) => {
  console.log(getSlider);
  return (
    <div>UpdateSliderModat</div>
  )
}

export default UpdateSliderModal