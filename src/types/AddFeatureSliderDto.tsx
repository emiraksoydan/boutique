import type { FeatureSliderDto } from "./FeatureSliderDto";

export interface AddFeatureSliderDto extends Omit<FeatureSliderDto, 'featureSliderID'> {

}