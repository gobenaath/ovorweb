class HomeData {
  id: number;
  url: string;
  title: string;
  type?: string;
  description?: string;
  completed?: boolean;
}

class SmartClassData extends HomeData {}

export { HomeData, SmartClassData };
