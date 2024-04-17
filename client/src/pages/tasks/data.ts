export type Task = {
  id: number;
  title: string;
  descr: string;
  isCompleted: boolean;
  createdAt: Date;
};

export const data = [
  {
    id: 1,
    title: "задача",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: true,
    createdAt: new Date(2023, 5, 23),
  },
  {
    id: 2,
    title: "задача",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: true,
    createdAt: new Date(2021, 5, 23),
  },
  {
    id: 3,
    title: "ура",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
    createdAt: new Date(2024, 5, 23),
  },
  {
    id: 4,
    title: "осень",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: true,
    createdAt: new Date(2019, 5, 23),
  },
  {
    id: 5,
    title: "лето",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
    createdAt: new Date(2006, 5, 23),
  },
  {
    id: 6,
    title: "зима",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
    createdAt: new Date(2010, 5, 23),
  },
  {
    id: 7,
    title: "март",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
    createdAt: new Date(2019, 5, 23),
  },
  {
    id: 8,
    title: "апрель",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
    createdAt: new Date(2015, 5, 23),
  },
  {
    id: 9,
    title: "май",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
    createdAt: new Date(2016, 5, 23),
  },

  {
    id: 10,
    title: "июнь",
    descr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    isCompleted: false,
    createdAt: new Date(2015, 5, 23),
  },
];