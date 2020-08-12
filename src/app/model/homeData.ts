class HomeData {
  id: number;
  url: string;
  title: string;
  type?: string;
  description?: string;
}

class SmartClassData extends HomeData {}

export { HomeData, SmartClassData };
