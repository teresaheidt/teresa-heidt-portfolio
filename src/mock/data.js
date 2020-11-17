import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'TH Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! My Name Is',
  name: 'Teresa Heidt',
  subtitle: 'Im A Web Developer And Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profileblackdress.jpeg',
  paragraphOne:
    'Welcome to my website! Being creative and designing captivating content is my focus. I am always thinking outside the box and bringing new ideas to the table. This is why I want to help YOU create, design and implement your projects.',
  paragraphTwo:
    'I have passion, drive and I am self-motivated. My solid work ethic enables me to give my all on any project I work on. In 2020, I graduated with a certificate from Southern Methodist University in Full Stack Web Developement. In 2016, I was the recipient of the NMG Best award for oustanding service at the Neiman Marcus Group.',
  paragraphThree:
    'Born and raised in England, I have lived in the U.S. for the past twenty years. I love helping people, solving problems and performing my very best. One of my passions is writing and in 2018, I published a book called Personal Appearances Are Everything. There are two more books in the pipeline for release, in late 2020 and 2021. In my spare time I love; running, reading, writing, coding and spending time with my Shar-pei pug 🐶.',
  resume: 'web.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bracketeers.png',
    title: 'Bracketeers',
    info:
      'Never has there been a more compelling game! Play country vs. country in the ultimate playoff.',
    info2:
      'Technologies used: HTML5, CSS, Javascript, Bootstrap, Node.js, Heroku, Handlebars, Bulma, Sequelize',
    url: 'https://bracketeers.herokuapp.com/',
    repo: 'https://github.com/prabin544/Bracketeers.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'map.jpg',
    title: 'Middle Point',
    info:
      'Going somewhere far? Meeting someone close? Middle point finds a convenient location for all occasions!',
    info2: 'Technologies used: HTML5, CSS, Javascript, Bootstrap, W3Schools framework',
    url: 'https://xtreme6007.github.io/Middle-Point-TAPS/',
    repo: 'https://github.com/xtreme6007/Middle-Point-TAPS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'burger.jpg',
    title: 'Burger Logger',
    info:
      'Yummy! A delicious burger app that allows you to pick the burgers and demolish them in one sitting!',
    info2: 'Technologies used: HTML5, CSS, Javascript',
    url: 'https://burgertdelicious.herokuapp.com/',
    repo: 'https://github.com/teresaheidt/Burger-Logger', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'scheduler.jpg',
    title: 'Daily Planner',
    info:
      'Never be late to a meeting ever again. This color coded 9 to 5 weekday scheduler aligns with the current time!',
    info2: 'Technologies used: HTML5, CSS, Javascript',
    url: 'https://teresaheidt.github.io/Scheduler/',
    repo: 'https://github.com/teresaheidt/Scheduler', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'look.png',
    title: 'Team Profile Generator',
    info:
      'Built a Node CLI that takes in information and generates an HTML webpage, displaying summaries of all the employees with quick and easy access to emails and Github profiles.',
    info2: 'Technologies used: Node CLI, Bootstrap.',
    url: 'https://burgertdelicious.herokuapp.com/',
    repo: 'https://github.com/teresaheidt/Team-Profile-Generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.jpg',
    title: 'Weather Dashboard',
    info:
      'See the what the weather is like doing in any city! Great for planning your travel and knowing what to expect.',
    info2: 'Technologies used: HTML5, CSS, Bootstrap, Javascript, WeatherAPI',
    url: 'https://teresaheidt.github.io/Weather-Dashboard/',
    repo: 'https://github.com/teresaheidt/Weather-Dashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'codequiz.png',
    title: 'Code Quiz',
    info: 'So you think you can code? is a timed code quiz with 8 questions.',
    info2: 'Technologies used: HTML5, CSS, Bootstrap, Javascript',
    url: 'https://teresaheidt.github.io/Timed-Code-Quiz/',
    repo: 'https://github.com/teresaheidt/Timed-Code-Quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'password.jpg',
    title: 'Password Generator',
    info:
      'This is a simple password generator designed to produce a password with upper case, lower case, numbers and special characters.',
    info2: 'Technologies used: HTML5, CSS, Javascript',
    url: 'https://teresaheidt.github.io/Password-Generator/',
    repo: 'https://github.com/teresaheidt/Password-Generator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'teresaheidt@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/teresa-heidt-a2a4641/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/teresaheidt',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
