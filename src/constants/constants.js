export const projects = [
  {
    title: "Mima Online Poker",
    description:
      "Online gambling platform, with slots, live casino and roulette",
    image: "/images/mima.png",
    tags: ["React", "NextJS", "Socket.io", "Payment"],
    source: "",
    visit: "https://mima.games/en",
    id: 5,
  },
  {
    title: "MyClothe | Full-stack E-Commercre CRM Demo",
    description:
      "Simple yet pragmatic full stack application, you can visi click buy or create products and check my code.",
    image: "/images/myclothe-1.png",
    tags: ["React", "Nest", "TypeScript", "REST/CRUD"],
    source: "https://github.com/gukanozadze/myclothe-front",
    visit: "https://www.myclothe.club/",
    id: 1,
  },
  {
    title: "Reverbrap",
    description:
      "Responsive Music Web App that let's you add artists and music",
    image: "/images/reverbrap.png",
    tags: ["React", "Node", "MongoDB", "Youtube API"],
    source: "",
    visit: "https://reverbrap.com",
    id: 11,
  },

  {
    title: "Custom CRM",
    description: "Interconnecting tables, users, support, pdf and details",
    image: "/images/customcrm.png",
    tags: ["React", "Redux", "Node", "Tailwind"],
    source: "",
    visit: "",
    id: 2,
  },
  {
    title: "Scholarsite",
    description: "Platform for students",
    image: "/images/scholarsite.png",
    tags: ["React", "NestJS", "Typescript", "GatsbyJS"],
    source: "",
    visit: "https://scholarsite.io",
    id: 3,
  },
  {
    title: "OnsightPRO",
    description:
      "Private real estate Manager, with strong encryption and security.",
    image: "/images/onsightpro.png",
    tags: ["React", "NextJS", "Node", "MongoDB"],
    source: "",
    visit: "https://www.onsightpros.com/",
    id: 4,
  },


];

export const TimeLineData = [
  { year: 2015, text: 'Wrote first "hello world" project in C++' },
  { year: 2016, text: "Discovered javascript and web development" },
  { year: 2017, text: "Started working as a javascript developer" },
  { year: 2018, text: 'Worked as a Junior React/NodeJS Web developer' },
  { year: 2019, text: "Started freelancing career" },
  { year: 2020, text: "Completed 30+ projects, learning advanced techniques to manage big projects" },
  { year: 2021, text: "Developed online live poker as a Middle Full-stack Developer" },
  { year: 2022, text: "Well... it's time to do something extraordinary" },
];

export const slickSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};