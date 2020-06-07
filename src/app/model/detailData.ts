import { HomeData } from './homeData';
import { KeyValue } from './keyValue';
import { CompareImage } from './compareImage';

class DetailData extends HomeData {
  village: string;
  district: string;
  subTitle?: string;
  mainListSection?: SubSection;
  htmlContent?: string;
  subSection?: SubSection;
  compareImages?: CompareImage[];
  commonImages?: CompareImage[];
  completed?: boolean;
}

class SubSection {
  heading?: string;
  keyValueData: KeyValue[];
}

export { DetailData, SubSection };
