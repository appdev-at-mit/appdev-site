interface TeamMember {
  name: string;
  roles: string[];
  year: string;
  imageSrc: string;
}

const exec: TeamMember[] = [
  {
    name: "Josie Wang",
    roles: ["Co-President", "Backend Engineer", "Frontend Engineer"],
    year: "2027",
    imageSrc: "/people/josie-wang.jpg",
  },
  {
    name: "Eric Zhan",
    roles: ["Co-President", "Backend Engineer", "Frontend Engineer"],
    year: "2028",
    imageSrc: "/people/eric-zhan.jpg",
  },
  {
    name: "Rebecca Xiong",
    roles: ["Finance Chair", "Business/Marketing"],
    year: "2028",
    imageSrc: "/people/rebecca-xiong.jpg",
  },
  {
    name: "Jieruei Chang",
    roles: ["Webmaster", "Team Lead", "Backend Engineer", "Frontend Engineer"],
    year: "2028",
    imageSrc: "/people/jieruei-chang.png",
  },
  {
    name: "Michelle Han",
    roles: ["Outreach Chair"],
    year: "2029",
    imageSrc: "/people/michelle-han.jpg",
  },
  {
    name: "Sanchali Banerjee",
    roles: ["Events Chair"],
    year: "2029",
    imageSrc: "/people/sanchali-banerjee.jpeg",
  },
  {
    name: "Leena Dudi",
    roles: ["Marketing Chair"],
    year: "2029",
    imageSrc: "/people/leena-dudi.png",
  },
  {
    name: "Nicole Zheng",
    roles: ["Marketing Chair"],
    year: "2029",
    imageSrc: "/people/nicole-zheng.jpg",
  },
  {
    name: "An Dinh",
    roles: ["Team Lead", "Backend Engineer", "Frontend Engineer"],
    year: "2027",
    imageSrc: "/people/an-dinh.jpeg",
  },
  {
    name: "Samantha Shih",
    roles: ["Team Lead", "Frontend Engineer"],
    year: "2028",
    imageSrc: "/people/samantha-shih.jpg",
  },
  {
    name: "Bridget Jiang",
    roles: ["Team Lead"],
    year: "2028",
    imageSrc: "/people/bridget-jiang.jpg",
  },
  {
    name: "Hailey Pan",
    roles: ["Advisor"],
    year: "2027",
    imageSrc: "/people/hailey-pan.jpg",
  },
];

const developers: string[] = [
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
  "Rahsun Komatsuzaki-Fields",
  "Sejal Rathi",
  "Smruti Patil",
  "Srilekha Mamidala",
  "Stephen Hong",
  "Tolu Ojo-Osagie",
  "Victoria Park",
  "Vy Pham",
];

export { developers, exec };
