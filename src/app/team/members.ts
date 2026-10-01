interface TeamMember {
  name: string;
  roles: string[];
  year?: string;
  imageSrc: string;
}

const exec: TeamMember[] = [
  {
    name: "Samantha Shih",
    roles: ["Co-President", "Frontend Engineer", "Backend Engineer"],
    year: "2028",
    imageSrc: "/people/samantha-shih.jpg",
  },
  {
    name: "Amy Lin",
    roles: ["Co-President"],
    year: "2029",
    imageSrc: "/people/amy-lin.png",
  },
  {
    name: "Nicole Zheng",
    roles: ["Marketing Chair", "Webmaster", "ML Engineer", "UI/UX Designer"],
    year: "2029",
    imageSrc: "/people/nicole-zheng.jpg",
  },
  {
    name: "Rebecca Xiong",
    roles: ["Finance Chair", "Outreach Chair"],
    year: "2028",
    imageSrc: "/people/rebecca-xiong.jpg",
  },
  {
    name: "Bridget Jiang",
    roles: ["Outreach Chair"],
    year: "2028",
    imageSrc: "/people/bridget-jiang.jpg",
  },
  {
    name: "Jany Zhang",
    year: "2030",
    roles: ["Outreach Chair"],
    imageSrc: "/people/temp-pic.jpg",
  },
  {
    name: "Sanchali Banerjee",
    roles: ["Events Chair"],
    year: "2029",
    imageSrc: "/people/sanchali-banerjee.jpeg",
  },
  {
    name: "Nyan Lin Htet",
    roles: ["Team Lead"],
    year: "2028",
    imageSrc: "/people/nyan-lin-htet.png",
  },
  {
    name: "Fela Ralte",
    roles: ["Team Lead"],
    year: "2028",
    imageSrc: "/people/fela-ralte.png",
  },
  {
    name: "Elisa Zhang",
    roles: ["Team Lead"],
    year: "2029",
    imageSrc: "/people/elisa-zhang.png",
  },
  {
    name: "Sophia Chen",
    roles: ["Team Lead"],
    year: "2030",
    imageSrc: "/people/sophia-chen.png",
  },
  {
    name: "Kaemyn Brown",
    roles: ["Team Lead"],
    year: "2030",
    imageSrc: "/people/kaemyn-brown.png",
  },
  {
    name: "Pedro Villafranco",
    roles: ["Team Lead"],
    year: "2030",
    imageSrc: "/people/pedro-villafranco.png",
  },
  {
    name: "Aryan Raj",
    roles: ["Team Lead"],
    year: "2030",
    imageSrc: "/people/aryan-raj.png",
  },
  {
    name: "Said Azaizah",
    roles: ["Team Lead"],
    year: "2030",
    imageSrc: "/people/said-azaizah.png",
  },
  {
    name: "Angelina Li",
    roles: ["Team Lead"],
    year: "2030",
    imageSrc: "/people/angelina-li.png",
  },
  {
    name: "Hailey Pan",
    roles: ["Advisor"],
    year: "2027",
    imageSrc: "/people/hailey-pan.jpg",
  },
];

const developers: string[] = [
  "Adrian Johnson",
  "Alyssa Chu",
  "Carys Chan",
  "Claire Mao",
  "Connie Chen",
  "Jerry Chen",
  "Kelvin La",
  "Nicole Zheng",
];

interface AlumniGroup {
  semester: string;
  members: string[];
}

const alumni: AlumniGroup[] = [
  {
    semester: "Fall 2025 & Spring 2026",
    members: [
      "Akpandu Ekezie",
      "An Dinh",
      "Andy Yu",
      "April Kovacs",
      "Calista Huang",
      "Cindy Lin",
      "Daniel Jiang",
      "David Sevilla",
      "Ellie Feng",
      "Emma Li",
      "Eric Zhan",
      "Harrison Liang",
      "Isabelle Chan",
      "Jada Ogueh",
      "Jerry Zhang",
      "Jieruei Chang",
      "Joanna Liu",
      "Josie Wang",
      "Katherine Wang",
      "Leena Dudi",
      "Lucy Sun",
      "Maria Taveras",
      "Michelle Han",
      "Mohamed Algraiw",
      "Peter Lin",
      "Rahsun Komatsuzaki-Fields",
      "Robert Chondro",
      "Shelly Yang",
      "Thinh Pham",
      "Victoria Ou",
      "Yolanda Hu",
    ],
  },
  {
    semester: "Spring 2025",
    members: [
      "Alexander Liang",
      "Andrew Yuan",
      "Andrew Zhang",
      "Angelina Ning",
      "Anna Li",
      "Bhadra Rupesh",
      "Elaine Jiang",
      "Fiona Lu",
      "Grant Hu",
      "Jack MarionSims",
      "Jennet Zamanova",
      "Jensen Coonradt",
      "Jity Woldemichael",
      "Jocelyn Zhao",
      "Jocelyn Zheng",
      "Justin Le",
      "Kao Anchaleenukoon",
      "Kara Chou",
      "Kathryn Le",
      "Khushi Parikh",
      "Lauren Yoo",
      "Michelle Sotelo",
      "Natalie Tan",
      "Nicole Shen",
      "Owen Coulter",
      "Peter Lin",
      "Rachel Onwu",
      "Sejal Rathi",
      "Smruti Patil",
      "Srilekha Mamidala",
      "Stephen Hong",
      "Tolu Ojo-Osagie",
      "Victoria Park",
      "Vy Pham",
    ],
  },
];

export { developers, exec, alumni };
