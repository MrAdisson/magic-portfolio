const createI18nContent = (t) => {
  const person = {
    firstName: 'Cédric',
    lastName: 'Adisson',
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: t('person.role'),
    avatar: '/images/avatar.jpg',
    location: 'Europe/Paris', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['French', 'English'], // optional: Leave the array empty if you don't want to display languages
  };

  const newsletter = {
    display: false,
    title: <>{t('newsletter.title', { firstName: person.firstName })}</>,
    description: <>{t('newsletter.description')}</>,
  };

  const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/MrAdisson',
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/c%C3%A9dric-adisson-a6a54797/',
    },
    {
      name: 'X',
      icon: 'x',
      link: '',
    },
    {
      name: 'Email',
      icon: 'email',
      link: 'mailto:cedric.adisson@gmail.com',
    },
  ];

  const home = {
    label: t('home.label'),
    title: t('home.title', { name: person.name }),
    description: t('home.description', { role: person.role }),
    headline: <>{t('home.headline')}</>,
    subline: <>{t('home.subline')}</>,
  };

  const about = {
    label: t('about.label'),
    title: t('about.label'),
    description: t('about.description', { name: person.name, role: person.role, location: person.location }),
    tableOfContent: {
      display: true,
      subItems: true,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: true,
      link: 'https://cal.com',
      scheduleCall: t('about.calendar.scheduleCall'),
    },
    intro: {
      display: true,
      title: t('about.intro.title'),
      description: <>{t('about.intro.description')}</>,
    },
    work: {
      display: true, // set to false to hide this section
      title: t('about.work.title'),
      experiences: [
        {
          company: 'ANKAMA',
          timeframe: t('about.work.experiences.ANKAMA.timeframe'),
          role: t('about.work.experiences.ANKAMA.role'),
          achievements: t('about.work.experiences.ANKAMA.achievements').split(';'),
          images: [
            // optional: leave the array empty if you don't want to display images
            {
              src: '/images/projects/project-01/krosmoz02.png',
              alt: 'Once UI Project',
              width: 16,
              height: 9,
            },
            {
              src: '/images/projects/project-01/allskreen2.png',
              alt: 'Once UI Project',
              width: 16,
              height: 9,
            },
          ],
        },
        {
          company: 'Harfang Automobile',
          timeframe: t('about.work.experiences.HARFANG.timeframe'),
          role: t('about.work.experiences.HARFANG.role'),
          achievements: t('about.work.experiences.HARFANG.achievements').split(';'),
          images: [
            {
              src: '/images/projects/project-01/harfang02.png',
              alt: 'Once UI Project',
              width: 16,
              height: 9,
            },
          ],
        },
        {
          company: 'Safebear',
          timeframe: t('about.work.experiences.SAFEBEAR.timeframe'),
          role: t('about.work.experiences.SAFEBEAR.role'),
          achievements: t('about.work.experiences.SAFEBEAR.achievements').split(';'),
          images: [],
        },
      ],
    },
    studies: {
      display: false, // set to false to hide this section
      title: 'Studies',
      institutions: [
        {
          name: 'University of Jakarta',
          description: <>{t(`about.studies.institutions.University of Jakarta.description`)}</>,
        },
        {
          name: 'Build the Future',
          description: <>{t('about.studies.institutions.Build the Future.description')}</>,
        },
      ],
    },
    technical: {
      display: true, // set to false to hide this section
      title: t('about.technical.title'),
      skills: [
        {
          title: 'Javascript Typescript React Node',
          description: <>{t('about.technical.skills.Javascript.description')}</>,
          images: [
            {
              src: '/images/skills/javascript/react.png',
              alt: 'React image',
              width: 16,
              height: 9,
            },
            {
              src: '/images/skills/javascript/vite.png',
              alt: 'Vite image',
              width: 16,
              height: 9,
            },
            {
              src: '/images/skills/javascript/node.png',
              alt: 'Node JS image',
              width: 16,
              height: 9,
            },
            {
              src: '/images/skills/javascript/threejs.png',
              alt: 'Three JS image',
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: 'Développement Mobile avec React Native',
          description: <>{t('about.technical.skills.ReactNative.description')}</>,
          images: [
            {
              src: '/images/skills/javascript/reactnative.png',
              alt: 'React Native image',
              width: 16,
              height: 9,
            },
          ],
        },
        {
          title: 'Développement Créatif',
          description: <>{t('about.technical.skills.CreativeDevelopment.description')}</>,
          images: [],
        },
      ],
    },
  };

  const blog = {
    label: t('blog.label'),
    title: t('blog.title'),
    description: t('blog.description', { name: person.name }),
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
  };

  const work = {
    label: t('work.label'),
    title: t('work.title'),
    description: t('work.description', { name: person.name }),
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
  };

  const gallery = {
    label: t('gallery.label'),
    title: t('gallery.title'),
    description: t('gallery.description', { name: person.name }),
    // Images from https://pexels.com
    images: [
      {
        src: '/images/gallery/img-01.jpg',
        alt: 'image',
        orientation: 'vertical',
      },
      {
        src: '/images/gallery/img-02.jpg',
        alt: 'image',
        orientation: 'horizontal',
      },
      {
        src: '/images/gallery/img-03.jpg',
        alt: 'image',
        orientation: 'vertical',
      },
      {
        src: '/images/gallery/img-04.jpg',
        alt: 'image',
        orientation: 'horizontal',
      },
      {
        src: '/images/gallery/img-05.jpg',
        alt: 'image',
        orientation: 'horizontal',
      },
      {
        src: '/images/gallery/img-06.jpg',
        alt: 'image',
        orientation: 'vertical',
      },
      {
        src: '/images/gallery/img-07.jpg',
        alt: 'image',
        orientation: 'horizontal',
      },
      {
        src: '/images/gallery/img-08.jpg',
        alt: 'image',
        orientation: 'vertical',
      },
      {
        src: '/images/gallery/img-09.jpg',
        alt: 'image',
        orientation: 'horizontal',
      },
      {
        src: '/images/gallery/img-10.jpg',
        alt: 'image',
        orientation: 'horizontal',
      },
      {
        src: '/images/gallery/img-11.jpg',
        alt: 'image',
        orientation: 'vertical',
      },
      {
        src: '/images/gallery/img-12.jpg',
        alt: 'image',
        orientation: 'horizontal',
      },
      {
        src: '/images/gallery/img-13.jpg',
        alt: 'image',
        orientation: 'horizontal',
      },
      {
        src: '/images/gallery/img-14.jpg',
        alt: 'image',
        orientation: 'horizontal',
      },
    ],
  };
  return {
    person,
    social,
    newsletter,
    home,
    about,
    blog,
    work,
    gallery,
  };
};

export { createI18nContent };
