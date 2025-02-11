export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  // clientReviews needs to be tailored after I have those reviews.
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'University Library',
      desc: 'A user-friendly university library website.',
      subdesc:
        'A website featuring PostgreSQL as database, a sign-up/sign-in system, and ratelimit for sign in to prevent ddox attack. Create an account to sign in. Admin side currently under construction 🚧.',
      href: 'https://university-library-mocha-five.vercel.app',
      github: 'https://github.com/QuantumMarttY-tape2/university-library',
      texture: '/assets/project-pics/university-library.mp4',
      logo: '/assets/project-pics/university-library-logo.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/tools-logo/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/assets/tools-logo/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/tools-logo/typescript.png',
        },
        {
          id: 4,
          name: 'Next.js',
          path: '/assets/tools-logo/next-js.svg',
        },
      ],
    },
    {
      title: 'Zentry Clone',
      desc: 'The website clone of zentry.com.',
      subdesc:
        'A website clone made by React.js, Tailwindcss, JavaScript, and GSAP.',
      href: 'https://lightsteelblue-wasp-470426.hostingersite.com',
      github: 'https://github.com/QuantumMarttY-tape2/zentry-clone',
      texture: '/assets/project-pics/zentry-clone.mp4',
      logo: '/assets/project-pics/zentry-clone-logo.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/tools-logo/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/assets/tools-logo/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/tools-logo/javascript.png',
        },
        {
          id: 4,
          name: 'GSAP',
          path: '/assets/tools-logo/gsap.jpeg',
        },
      ],
    },
    {
      title: 'Xora',
      desc: 'Xora is a website that allows you to check information regarding a hypothetical app named Xora.',
      subdesc:
        'Built using React.js, Tailwindcss, and JavaScript, Xora is designed to show a user friendly interface about its payment plan, user reviews, and preview of the Xora app.',
      href: 'https://floralwhite-guanaco-593048.hostingersite.com',
      github: 'https://github.com/QuantumMarttY-tape2/Xora',
      texture: '/assets/project-pics/xora.mp4',
      logo: '/assets/project-pics/xora-logo.ico',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/tools-logo/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/assets/tools-logo/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/tools-logo/javascript.png',
        },
      ],
    },
    {
      title: 'YC Directory',
      desc: 'YC Directory is a website that allows you to check information about startup companies, and to post them after logging in using your GitHub account.',
      subdesc:
        'Built using React.js, Next.js 15, Tailwindcss, and TypeScript, as well as shadcn, YC Directory is designed for people to have fun with creating out-of-context startup posts.',
      href: 'https://yc-directory-beige-kappa.vercel.app',
      github: 'https://github.com/QuantumMarttY-tape2/yc_directory',
      texture: '/assets/project-pics/yc-directory.mp4',
      logo: '/assets/project-pics/yc-directory-logo.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/tools-logo/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/assets/tools-logo/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/tools-logo/typescript.png',
        },
        {
          id: 4,
          name: 'Next.js 15',
          path: '/assets/tools-logo/next-js.svg',
        },
      ],
    },
    {
      title: 'Old E-Portfolio',
      desc: 'This is my older version of my E-Portfolio.',
      subdesc:
        'Built using React.js, Html5, Css3, and JavaScript, as an early showcase. You can also see the link on my resume.',
      href: 'https://fukunyun.dev',
      github: 'https://github.com/QuantumMarttY-tape2/E-portfolio-alt',
      texture: '/assets/project-pics/old-portfolio.mp4',
      logo: '/assets/project-pics/old-portfolio-logo.jpeg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/tools-logo/react.svg',
        },
        {
          id: 2,
          name: 'Html5',
          path: '/assets/tools-logo/html5.svg',
        },
        {
          id: 3,
          name: 'Css3',
          path: '/assets/tools-logo/css3.png',
        },
        {
          id: 4,
          name: 'JavaScript',
          path: '/assets/tools-logo/javascript.png',
        },
      ],
    },
    {
      title: 'Film Browser',
      desc: 'This custom-made film browser lets you search any movie in the database, and get all the information you need to know about it.',
      subdesc:
        'Built using React.js, Html5, Css3, and JavaScript, Film Browser enables film search, add film to watchlist, and as well remove them from the watchlist.',
      href: 'https://film-browser.vercel.app',
      github: 'https://github.com/QuantumMarttY-tape2/Film-Browser',
      texture: '/assets/project-pics/film-browser.mp4',
      logo: '/assets/project-pics/film-browser-logo.jpeg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/tools-logo/react.svg',
        },
        {
          id: 2,
          name: 'Html5',
          path: '/assets/tools-logo/html5.svg',
        },
        {
          id: 3,
          name: 'Css3',
          path: '/assets/tools-logo/css3.png',
        },
        {
          id: 4,
          name: 'JavaScript',
          path: '/assets/tools-logo/javascript.png',
        },
      ],
    },
    {
      title: 'Library',
      desc: 'This is my earliest project, a library where you can see a selection of books, check their price, and put them in your cart.',
      subdesc:
        'Built using the most basic React.js, Html5, Css3, and JavaScript.',
      href: 'https://example-library-lyart.vercel.app',
      github: 'https://github.com/QuantumMarttY-tape2/React-Preparation',
      texture: '/assets/project-pics/library.mp4',
      logo: '/assets/project-pics/library-logo.svg',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/tools-logo/react.svg',
        },
        {
          id: 2,
          name: 'Html5',
          path: '/assets/tools-logo/html5.svg',
        },
        {
          id: 3,
          name: 'Css3',
          path: '/assets/tools-logo/css3.png',
        },
        {
          id: 4,
          name: 'JavaScript',
          path: '/assets/tools-logo/javascript.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'GWU',
      pos: 'Research Assistant & Frontend Developer',
      duration: 'Jun 2023 - Dec 2023',
      title: "Using Python, I developed an algorithm to detect and predict potential interactions in gene Hi-C interaction maps, enhancing the accuracy of existing algorithms in feature detection.",
      icon: '/assets/experience-pics/GWU-logo.jpeg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'UCI',
      pos: 'Research Assistant',
      duration: 'Sep 2021 - Feb 2022',
      title: "I categorized Tokamak simulation data to enhance the performance of real Tokamaks and bring their development closer to practical application.",
      icon: '/assets/experience-pics/UCI-logo.png',
      animation: 'clapping',
    },
  ];