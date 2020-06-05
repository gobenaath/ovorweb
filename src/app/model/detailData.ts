import { HomeData } from './homeData';
import { KeyValue } from './keyValue';
import { CompareImage } from './compareImage';

class DetailData extends HomeData {
  village: string;
  district: string;
  detailDescription: string;
  subSection: SubSection;
  compareImages: CompareImage;
  mainImages: string[];
}

class SubSection {
  heading: string;
  keyValueData: KeyValue[];
}

export { DetailData, SubSection };
