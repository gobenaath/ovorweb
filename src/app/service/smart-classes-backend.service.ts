import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { SmartClassData } from '../model/homeData';
import { DetailData } from '../model/detailData';
import { PageDescription } from '../model/pageDescription';

@Injectable({
  providedIn: 'root',
})
export class SmartClassesBackendService {
  constructor() {}

  getSmartClassData(): Observable<SmartClassData[]> {
    return of(SmartClassPageData);
  }

  getPageDescription(): Observable<PageDescription> {
    return of(PageDescriptionData);
  }
}

const PageDescriptionData = {
  title: 'School Activities',
  description:
    'We conduct classes in 22 Government schools in remote villages of Tamil Nadu, India across 9 Districts covering over 3830 Studen ts every week' +
    'with over 3475 person hours of effort put by Volunteers who teach English, Math & Computer subjects by 117 Teaching & 22 Non Tea ching' +
    'volunteers per month.This sustained initiative not only brings education to kids at no expense to their parents, but also es tab lishes a highly' +
    'repeatable model that can be deployed at scale.',
  items: [
    {
      title:
        'School Building Refurbished in Panchayat Union Primay School, Kottaiyur, Virudhunagar District ( Rs . 1,86,000',
    },
    {
      title: 'Toilet for Female students Refurbished in 2 Government schools',
      values: [
        'Govt Higher secondary School, Thailapuram , Virudhunagar District',
        'Govt Higher secondary School, Koomapatti , Virudhunagar District',
      ],
    },
    {
      title: 'Furniture for students (340 students)',
      values: [
        '17 bench were given for 68 students in Government Adi dravidar welfare middle school kottaiyur village, Virudhunagar district',
        '8 bench were given for 32 students in Panchayat union primary school kottaiyur village, Virudhunagar district',
        '10 bench were given for 40 students in Government high school kottaiyur village, Virudhunagar district',
        '8 bench were given for 32 students in Government high school Thulukapatti village, Virudhunagar district',
        '5 bench were given for 20 students in R.C primary school, Ilanthaikulam village, Virudhunagar district',
        '3 bench were given for 12 students in Government high school Mathur village, Virudhunagar district',
        '32 chairs and 16 table for 32 students in Panchayat middle school, konnerikuppam village, Virudhunagar district.',
        '90 baby chairs, 3 Fan, 3 chairs for teachers donated to 3 Paalvadi / Anganwadi Schools',
      ],
    },
    {
      title:
        'Smart Digital Classroom setup in 7 Government schools in the following Districts.',
      values: [
        'Govt Higher secondary School, Thailapuram, Virudhunagar District',
        'Panchayat Primary school, Vanavaretty, Villupuram District',
        'Panchayat Union Middle school, Edayathankudi, Ariyaloor District',
        'Panchayat union primary school, Konnerikuppam, Villupuram district',
        'Panchayat union Middle school, Alliyalamangalam, Thiruvannamalai district',
        'Govt Adi Dravidar Middle School, Kottaiyur, Virudhunagar District',
        'Government Higher Secondary School, Maharajapuram, Virudhunagar District',
      ],
    },
    {
      title: 'Model School creation (50% contribution by teachers) 5 Schools',
      values: [
        'Created kitchen garden, tree plantation, Educational drawing in all the school classroom, Corridors and pavement Govt Adidravidar primary School, Sockalingapuram , Virudhunagar District ( Rs. 37,000 )',
        'Created Educational drawing in all the school classroom and painted the classrooms in R.C Primary school, Ilanthaikulam, Virudhunagar District ( Rs. 11,100 )',
        'Created Educational drawing in all the school classroom and painted the classrooms in Government high school, Thulukappati, Virudhunagar District ( Rs. 8500 )',
        'Created Educational drawing in all the school classroom and painted the classrooms in R.C high school, W. Puthupatti, Virudhunagar District ( Rs. 18,000 )',
        'Created Educational drawing in all the school classroom and painted the classrooms in Government AdiDravidar Higher Secondary School, Virudhunagar District (Work in progress)',
      ],
    },
    {
      title:
        'Dictionary & Fiction/Non Fiction Books to School students (2 Schools)',
      values: [
        'Dictionaries given to 54 students from 6 th grade and 55 students from 7 th grade Govt Middle School, Thambipatti , Virudhunagar District',
        'Panchayat union primary school, Edayathangudi , Ariyalur district',
      ],
    },
    {
      title: 'Sports kit to School students (5 schools)',
      values: [
        'Govt Middle School, Thambipatti , Virudhunagar District',
        'Panchayat Union primary school, Ayyan Karisalkulam , Virudhunagar District',
        'Panchayat union Middle school, Konnerikuppam , Villupuram district',
        'Government Higher Secondary School, Allinagaram , Theni District',
        'Panchayat union primary school, Edayathangudi , Ariyalur district',
      ],
    },
  ],
};

const SmartClassPageData = [
  {
    id: 8,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm13_1.jpg',
    title: '3 more GOVT schools installed with SMART DIGITAL BOARDS',
    subTitle: 'Smart Class Setup',
    village: 'Maharajapuram',
    district: 'Virudhunagar',
    completed: true,
    description:
      'We are extremely happy to share with you all that now we have installed “SMART DIGITAL BOARD CLASSROOM “ in 10 government schools in Tamilnadu',
    htmlContent:
      '<h5>Yesterday we installed “SMART DIGITAL BOARDS” in 3 government schools in Virudhunagar district</h5><ul class="list-group"><li class="list-group-item">Pups Maharajapuram</li><li class="list-group-item">Pups Ayan Karisalkulam</li><li class="list-group-item">Valayapatti School</li></ul>',
    subSection: {
      heading:
        'We would like to thank SWFTRUST & this is a project which is being funded by State Government of Tamilnadu through "SELF SUFFICIENCY SCHEME"',
    },
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm13_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm13_2.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm13_3.jpg',
        ],
      },
    ],
  },
  {
    id: 7,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm12_1.jpg',
    title: 'Panchayat Union Middle School',
    subTitle: 'Smart Class Setup',
    village: 'Alliyalamangalam',
    district: 'Thiruvannamalai',
    completed: true,
    description:
      'Smart Class Room installed in Panchayat Union Middle School, Alliyalamangalam, Thiruvannamalai District.',
    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm12_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm12_2.jpg',
        ],
      },
    ],
  },
  {
    id: 6,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm10_1.jpg',
    title: 'Government School',
    subTitle: 'Smart Class Setup',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    completed: true,
    description:
      'Smart Class Room installed in Government School, Konnerikuppam, Villupuram District.',

    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm10_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm10_2.jpg',
        ],
      },
    ],
  },
  {
    id: 5,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm9_1.jpg',
    title: 'Govt Adi Dravidar Middle School',
    subTitle: 'Smart Class Setup',
    village: 'Kottaiyur',
    district: 'Virudhunagar',
    completed: true,
    description:
      'Smart Class Room installed in Govt Adi Dravidar Middle School with the help of Tamilnadu Govt and Kottaiyur Villagers.',
    subSection: {
      heading: 'Sponsors',
      keyValueData: [
        {
          key: 'Government of Tamilnadu',
          value: '2/3rd of Fund',
        },
        {
          key: 'Kottaiyur Villagers',
          value: '1/3rd of Fund',
        },
      ],
    },

    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm9_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm9_2.jpg',
        ],
      },
    ],
  },
  {
    id: 4,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm8_1.JPG',
    title: 'Government Higer Secondary School',
    subTitle: 'Smart Class Setup',
    village: 'Maharajapuram',
    district: 'Virudhunagar',
    completed: true,
    description:
      'Smart Class Room installed in Govt Higher Secondary School with the help of Tamilnadu Govt and School Alumini.',
    subSection: {
      heading: 'Sponsors',
      keyValueData: [
        {
          key: 'Government of Tamilnadu',
          value: '2/3rd of Fund',
        },
        {
          key: 'School Alumini',
          value: '1/3rd of Fund',
        },
      ],
    },

    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm8_1.JPG',
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm8_2.JPG',
        ],
      },
    ],
  },
  {
    id: 3,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa4_1.jpg',
    title: 'Government Middle School',
    subTitle: 'Smart Class Setup',
    village: 'Edayathankudi',
    district: 'Ariyaloor',
    completed: true,
    description:
      'Our Team member Dr. Hema, in association with Emelda Queen & Annapurna accomplished the Set up of Smart Class, for students.',

    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa4_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa4_2.jpg',
        ],
      },
    ],
  },
  {
    id: 2,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa3_1.jpg',
    title: 'Government School',
    subTitle: 'Smart Class Setup',
    village: 'Vanaveretty',
    district: 'Villupuram',
    completed: true,
    description:
      'Our Team member Dr. Hema, Mani in association with Annapurna accomplished the Set up of Smart Class, Restoration of Classroom along with furniture for students @ Total expense of Rs. 2,30,000',
    subSection: {
      heading: 'Sponsors',
      keyValueData: [
        {
          key: 'Funded by',
          value:
            'Mani, Village youngsters Rs. 1,50,000 for all the work, labor & furniture',
        },
        {
          key: 'Funded by',
          value: 'Hema Rs. 80,000 for Smart class',
        },
        {
          key: 'Project Start Date',
          value: '9.9.17',
        },
        {
          key: 'Project End Date',
          value: '25.9.17',
        },
      ],
    },

    commonImages: [
      {
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa3_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa3_2.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm11_1.jpg',
        ],
      },
    ],
  },
  {
    id: 1,
    url: 'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa2_1.jpg',
    title: 'Government Higher Secondary School',
    subTitle: 'Smart class inaugurated by MLA Chandra Prabha',
    village: 'Thailapuram',
    district: 'Virudhunagar',
    completed: true,
    mainListSection: {
      heading: 'Expenses Details',
      keyValueData: [
        {
          key: '1.5 Lakhs',
          value:
            'Smart board, Projector, Mount kit, Keyboard, Mouse, Speaker, PC, UPS, Greenboard',
        },
        {
          key: '21,600',
          value: 'Tiles',
        },

        {
          key: '38,173',
          value: 'Painting, flex, white wash, labor charges etc',
        },
        {
          key: '28,000',
          value: 'For doodle / thiruvalluvar painting',
        },
      ],
    },

    subSection: {
      keyValueData: [
        {
          key: 'Total Expenses',
          value: 'Rs. 2,37,773',
        },
        {
          key: 'Funded by',
          value: 'Kavitha K Pandian',
        },

        {
          key: 'Project Start Date',
          value: '23.5.17',
        },
        {
          key: 'Project End Date',
          value: '13.6.17',
        },
      ],
    },

    commonImages: [
      {
        title: 'Class Room Inauguration',
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/smartclasses/sm6.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa2_1.jpg',
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa2_2.jpg',
        ],
      },
      {
        title: 'Appreciation letter from Thailapuram HM',
        otherImages: [
          'https://ovor.s3-us-west-2.amazonaws.com/schoolActivities/sa2_3.JPG',
        ],
      },
    ],
  },
];
