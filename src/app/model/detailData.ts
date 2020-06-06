import { HomeData } from './homeData';
import { KeyValue } from './keyValue';
import { CompareImage } from './compareImage';

class DetailData extends HomeData {
  village: string;
  district: string;
  detailDescription: string;
  htmlContent?: string;
  subSection: SubSection;
  compareImages: CompareImage[];
  commonImages: CompareImage;
}

class SubSection {
  heading: string;
  keyValueData: KeyValue[];
}

export { DetailData, SubSection };
