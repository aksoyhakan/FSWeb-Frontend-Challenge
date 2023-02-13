const initialState = {
  firstInfo: {
    greeting: "Hi!",
    introParagph:
      "I am Hakan. I'm a full-stack developer. I can craft solid and scable frontend products. Let's meet!",
    email: "aksoyhakan1990@gmail.com",
    photo:
      "https://media.licdn.com/dms/image/C4E03AQFrTYm4T5wICA/profile-displayphoto-shrink_800_800/0/1633277698785?e=2147483647&v=beta&t=ayW7esTmb_FhFa7KsLXFd1Oaq8YbJ_j49CCw7ZYEcgg",
  },
  programs: [
    {
      name: "JAVASCRIPT",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      page: "https://www.javascript.com/",
    },
    {
      name: "REACT",
      url: "https://pluspng.com/img-png/react-logo-png-react-logo-png-transparent-amp-svg-vector-pluspng-2400x2400.png",
      page: "https://reactjs.org/",
    },
    {
      name: "REDUX",
      url: "https://uploads-ssl.webflow.com/5eacc8815c6b73d93d13b2f5/5ed819a41bec6275eade8334_Redux-p-800.jpeg",
      page: "https://redux.js.org/",
    },
    {
      name: "NODE",
      url: "https://yt3.ggpht.com/ytc/AMLnZu97o0JASuPaUs0CwT_aVwrt9JZzbnyNvr6IGAZQ=s900-c-k-c0x00ffffff-no-rj",
      page: "https://nodejs.org/en/",
    },
    {
      name: "VS CODE",
      url: "https://camo.githubusercontent.com/4facbe200b31135c3e8adc1c42a20f242f76910ffb094c82d5a7a8af384f619d/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f392f39612f56697375616c5f53747564696f5f436f64655f312e33355f69636f6e2e7376672f3230343870782d56697375616c5f53747564696f5f436f64655f312e33355f69636f6e2e7376672e706e67",
      page: "https://code.visualstudio.com/",
    },
    {
      name: "FIGMA",
      url: "https://s3-alpha.figma.com/hub/file/787485773/66821c0b-fb29-4ece-a775-195db0a7fc2e-cover.png",
      page: "https://www.figma.com",
    },
  ],
  basicInfoKey: ["Birth Day", "City", "Education", "Prefered Position"],
  basicInfoValue: [
    "09.12.1990",
    "Istanbul",
    "ITU, Industrial Eng.",
    "Frontend-UI",
  ],
  about: [
    "I was born in 1990, Istanbul. I reached a decision that I had realized an ability to understand software programming after I had been working different sectors for almost 10 years",
    "After 10 years which were lasted during working in manufacturing sectors, I would like to try my chance which Workintech proposed to me.",
  ],
  project: [
    {
      name: "Random Jokes",
      explanation:
        "In this project; user select random jokes from UI. In case that user likes the joke, her or she could select favorite one and can store jokes in local storage.",
      tools: ["react", "redux", "vercel", "router", "axios"],
      url: "https://brightlineit.com/wp-content/uploads/2017/03/170309-update-hardware.jpg",
      gitHubPage: "https://github.com/aksoyhakan/fsweb-s10g4-thunk-and-apis",
      vercel: "https://jokestoofun.vercel.app/",
    },
    {
      name: "Prototype Food Order",
      explanation:
        "It could be seen that there are system which you can select food supplier and give the food order depending on use choise.",
      tools: [
        "react",
        "vercel",
        "router",
        "axios",
        "tailwind",
        "cypress",
        "form-hook",
      ],
      url: "https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_pc.jpg",
      gitHubPage: "https://github.com/aksoyhakan/FSWeb-S7-Challenge-2",
      vercel: "https://jokestoofun.vercel.app/",
    },
    {
      name: "Calculator with Memory",
      explanation:
        "In this study, react-reducer is used to combine all data and function only one reducer",
      tools: ["react", "vercel", "tailwind", "reducer"],
      url: "https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/technology/computing/computerjargon.jpg",
      gitHubPage:
        "https://github.com/aksoyhakan/fwseb-s10g1-reducer-calculator---2",
      vercel: "https://scical.vercel.app/",
    },
    {
      name: "Watchlist",
      explanation:
        "In the project, UI shows lots of movies data which are obtanied from backend service. User could add selected movie to watchlist which all data stored in localstroge.",
      tools: ["react", "vercel", "router", "axios", "tailwind", "redux"],
      url: "https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_desktop_computers.jpg",
      gitHubPage: "https://github.com/aksoyhakan/fsweb-s10g3-redux-watchlist",
      vercel: "https://redux-watchlist.vercel.app/",
    },
    {
      name: "Advanced ToDo List",
      explanation:
        "Thanks to redux technology, user could enter all data with related to task and assign personel or add new person. In addtion to this, there is a feedback system which shows info simultenously.",
      tools: [
        "react",
        "vercel",
        "router",
        "axios",
        "tailwind",
        "reduction",
        "toastify",
      ],
      url: "https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png",
      gitHubPage: "https://github.com/aksoyhakan/fsweb-s9g1-task-yonetimi",
      vercel: "https://advancedtodo.vercel.app/",
    },
    {
      name: "Book Shopping Cart",
      explanation:
        "In this project, user could select book which she/he would like to buy. In the shopping cart, user could see which book user will buy and total cost in the UI.",
      tools: ["react", "vercel", "router", "context api", "tailwind"],
      url: "https://www.oneeducation.org.uk/wp-content/uploads/2018/09/08.Diploma-in-Computer-Programming-1.jpg",
      gitHubPage: "https://github.com/aksoyhakan/fsweb-s11g1-shopping-cart",
      vercel: "https://bookshoping.vercel.app/",
    },
  ],
  foot: {
    header: "Send me a message!",
    paragraph:
      "Got a question or proposal, or just want to say hello? Do not stop, go head!!!",
    email: "aksoyhakan1990@gmail.com",
  },
  form: {
    company: "",
    expectation: "",
    salary: "",
    workingType: "",
  },
  formError: {
    company: "",
    expectation: "",
    salary: "",
    workingType: "",
  },
  submitButtonDisabled: true,
  registedForms: [],
};

export default initialState;
