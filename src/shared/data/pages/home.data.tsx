import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconDualScreen,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
  IconShoppingCart,
  IconSpeakerphone,
  IconTarget,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/cash_counter_display.jpeg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import displayImg from '~/assets/images/display_in_supermarket.jpeg';
import lalit from '~/assets/images/lalit.jpeg';
import akash from '~/assets/images/akash.jpeg';
import manav from '~/assets/images/manav.jpeg';
import tanishq from '~/assets/images/tanishq.jpeg';
import hafeez from '~/assets/images/hafeez.jpeg';
import display2Img from '~/assets/images/people_watching_display.jpg';
import gasImg from '~/assets/images/gas.jpg';


// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Change your way of <span className="hidden md:inline">marketing using</span> <span>BAMS</span> <span className="sm:whitespace-nowrap">India</span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          BAMS
        </span>{' '}
        is a game-changer in the advertising industry, poised to disrupt the landscape. Unlike traditional TV ads, which often fall short in delivering satisfactory returns on investment,
      </span>{' '}
      BAMS offers a fresh and innovative approach. Our platform maximizes ROI for FMCG companies, setting a new standard in advertising effectiveness.
    </>
  ),
  callToAction: {
    text: 'Get A Demo',
    href: '#contact-on-home',
    icon: IconPhoneCall,
    targetBlank: true,
  },
  // callToAction2: {
  //   text: 'Learn more',
  //   href: '/',
  // },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        Why youshould Partner with <span className="whitespace-nowrap">BAMS ?</span>
      </>
    ),
    subtitle:
      "BAMS: Revolutionizing Your Advertising Strategy. Unlock the Power of Seamless Integration and Open Collaboration to Maximize Your Digital Presence.",
    tagline: 'Features',
  },
  items: [
    {
      title: 'Strategic Placement',
      description:
        'Displays in grocery stores are strategically placed in high-traffic areas, such as near the entrance, aisles, or checkout counters, to maximize visibility and exposure to shoppers.',
      icon: IconTarget,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Promotional Messaging',
      description:
        'Displays often include promotional messaging, such as discounts, special offers, or new product launches, to entice shoppers and encourage impulse purchases.',
      icon: IconSpeakerphone,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Influence on Purchase Decisions',
      description:
        'Studies have shown that displays in grocery stores can significantly influence shoppers\' purchase decisions. ',
      icon: IconShoppingCart,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Reinforcement of Brand Awareness',
      description:
        'Well-executed displays not only promote products but also enhance brand recall, leaving a lasting impression and boosting future purchases.',
      icon: IconRocket,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Tailored Display ',
      description:
        "Utilize 32-inch to 55-inch ad displays customized to fit each outlet seamlessly, enhancing visual appeal of your ad.",
      icon: IconDualScreen,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Demographic Insights',
      description:
        'Integrated cameras and sensors gather valuable demographic data on viewers, enabling precise targeting and optimization of ad campaigns',
      icon: IconBulb,
      callToAction: {
        text: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'How it works',
    subtitle: 'Utilizing strategic placement, targeted campaigns, seamless integration, data-driven insights, collaborative customization, flexible options, continuous innovation, and transparent reporting to optimize advertising effectiveness.',
    tagline: 'Content',
  },
  content:
    'Unlock the power of real-time insights with our BAMS solution, driving efficiency and informed decision-making in your business.',
  items: [
    {
      title: 'Book no of screen for advertisement',
      description:
        'Ad will be run for 15 sec in a loop of 4 mins everyday 10 hours in store.',
    },
    {
      title: 'publish your advertisement',
      description:
        'Several engagement ads will create brand awareness.',
    },
    {
      title: 'Insights on advertisement',
      description:
        'Ad analysis to address more category expansion.',
    },
    {
      title: 'Re-new Service',
      description:
        'Booking further advertisement slot as per the availability.',
    },
  ],
  image: {
    src: displayImg,
    alt: 'Supermarket Display Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  content:
    'We offer a myriad of benefits, each designed to enhance your advertising experience. From strategic placement in high-traffic areas to targeted campaigns tailored to specific demographics and locations, we ensure maximum visibility and impact for your brand.',
  items: [
    {
      title: 'Strategic placement in high-traffic areas',
    },
    {
      title: 'Targeted campaigns tailored to specific demographics and locations',
    },
    {
      title: 'Seamless integration with existing advertising infrastructure',
    },
    {
      title: 'Real-time optimization of strategies through data-driven insights',
    },
    {
      title: 'Collaborative customization to align with brand objectives',
    },
    {
      title: 'Flexible options for businesses of all sizes',
    },
  ],
  image: {
    src: display2Img,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: 'Start hosting your ads effortlessly with us today!',
  },
  items: [
    {
      title: 'Step 1',
      description:
        'Contact our sales team to kick-start your advertising journey. Our team will promptly reach out to gather the necessary details and get you started.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        'Choose a subscription plan and get started. Your account will be created promptly to begin your advertising journey.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'Now you \'re ready to start hosting your ads! Select your zones, choose the number of displays, and more to customize your advertising campaign.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
    },
  ],
};

// // Testimonials data on Home page *******************
// export const testimonialsHome: TestimonialsProps = {
//   id: 'testimonials-on-home',
//   hasBackground: true,
//   header: {
//     title: 'What our shopkeepers and customers say about us',
//     subtitle:
//       'Customer Testimonials: Hear What Our Clients Have to Say!',
//   },
//   testimonials: [
//     {
//       name: 'Rajesh Patel',
//       job: 'Marketing ManagerStore Owner - Smart Supermarket',
//       testimonial: `Since partnering with BAMS, I've seen a significant increase in foot traffic and sales at my store. Their displays strategically placed near checkout counters have caught the attention of shoppers, resulting in higher impulse purchases.`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Rajesh Patel',
//       },
//       href: '/',
//     },
//     {
//       name: 'Priya Sharma',
//       job: 'Store Owner - Ratnadeep Supermarket',
//       testimonial: `BAMS has been a game-changer for my business. Their digital displays have transformed the shopping experience for my customers, driving brand awareness and boosting sales.`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Priya Sharma',
//       },
//       href: '/',
//     },
//     {
//       name: 'Amit Kumar',
//       job: 'Marketing Manager - Unilever',
//       testimonial: `Partnering with BAMS has allowed us to reach our target audience effectively. Their innovative approach to advertising has strengthened our brand presence in the market.`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Amit Kumar',
//       },
//       href: '/',
//     },
//     {
//       name: 'Rahul Singh',
//       job: 'Marketing Manager - Milton',
//       testimonial: `We've seen a remarkable increase in brand visibility and product sales since partnering with BAMS. Their displays have effectively communicated our brand message to our customers.`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Rahul Singh',
//       },
//       href: '/',
//     },
//     {
//       name: 'Sainath',
//       job: 'Rajiv Kirana Store',
//       testimonial: `BAMS' displays have been instrumental in driving brand engagement for Dove. Their strategic placement and captivating content have resonated well with our target customers.`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Sainath',
//       },
//       href: '/',
//     },
//     {
//       name: 'Neha Gupta',
//       job: 'Marketing Manager - Dove',
//       testimonial: `BAMS' displays have been instrumental in driving brand engagement for Dove. Their strategic placement and captivating content have resonated well with our target customers.`,
//       image: {
//         src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
//         alt: 'Neha Gupta',
//       },
//       href: '/',
//     },
//   ],
// };

// // FAQS data on Home page *******************
// export const faqs2Home: FAQsProps = {
//   id: 'faqsTwo-on-home',
//   hasBackground: false,
//   header: {
//     title: 'Frequently Asked Questions',
//     subtitle:
//       'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
//     tagline: 'FAQS',
//   },
//   items: [
//     {
//       title: 'What do I need to start?',
//       description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
//     },
//     {
//       title: 'How to install the NextJS + Tailwind CSS template?',
//       description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
//     },
//     {
//       title: "What's something that you completely don't understand?",
//       description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
//     },
//     {
//       title: "What's an example of when you changed your mind?",
//       description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
//     },
//     {
//       title: 'What is something that you would really like to try again?',
//       description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
//     },
//     {
//       title: 'If you could only ask one question to each person you meet, what would that question be?',
//       description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
//     },
//   ],
// };

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      price: 1.25,
      period: 'Lakh per Month',
      items: [
        {
          description: '1 Creative Per Month',
        },
        {
          description: 'Demographic Information',
        },
        {
          description: 'ad\'s over 50" to 60" inch FHD Displays',
        },
        {
          description: 'Access to 50 Display',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Subscribe Now',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 1.75,
      period: 'lakh per month',
      items: [
        {
          description: '3 Creative Per Month',
        },
        {
          description: 'Demographic Information',
        },
        {
          description: 'ad\'s over 50" to 60" inch FHD Displays',
        },
        {
          description: 'Access to 50 Display',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Subscribe Now',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 2.25,
      period: 'per month',
      items: [
        {
          description: '5 Creative Per Month',
        },
        {
          description: 'Demographic Information',
        },
        {
          description: 'ad\'s over 50" to 60" inch FHD Displays',
        },
        {
          description: 'Access to 50 Display',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Subscribe Now',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Get to know the passionate individuals driving BAMS success below.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Lalit Raj',
      occupation: 'Co-Founder',
      image: {
        src: lalit,
        alt: 'Lalit Raj',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Akash Bubna',
      occupation: 'Co-Founder',
      image: {
        src: akash,
        alt: 'Akash Bubna',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Manav Malaviya',
      occupation: 'Tech Team',
      image: {
        src: manav,
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Tanishq Kumar',
      occupation: 'Tech Team',
      image: {
        src: tanishq,
        alt: 'Tanisq Kumar',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Shaik Abdul Hafeez',
      occupation: 'Tech Team',
      image: {
        src: hafeez,
        alt: 'Shaik Abdul Hafeez',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  id: 'contact-on-home',
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'Are you ready to level up your business ? Join Us Now',
    tagline: 'Contact',
  },
  content:
    'Ready to revolutionize your advertising strategy? Get in touch with our team today to explore how BAMS can elevate your brand\'s visibility and drive results.',
  items: [
    {
      title: 'Our Address',
      description: ['530032 Gachibowli', 'Hyderabad, India'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +91 9954953008', 'Mail: bamsadvmedia@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// // CallToAction data *******************
// export const callToAction2Home: CallToActionProps = {
//   title: 'Next.js + Tailwind CSS',
//   subtitle:
//     'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
//   callToAction: {
//     text: 'Get template',
//     href: 'https://github.com/onwidget/tailnext',
//     icon: IconDownload,
//   },
//   items: [
//     {
//       title: 'Get template',
//       description: 'Aliquam sodales est lectus, quis.',
//       href: 'https://github.com/onwidget/tailnext',
//     },
//     {
//       title: 'Learn more',
//       description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
//       href: '/',
//     },
//     {
//       title: 'Subscribe',
//       description: 'Morbi orci nunc, euismod ac dui id, convallis.',
//       form: {
//         icon: IconMail,
//         input: {
//           type: 'email',
//           name: 'email',
//           autocomplete: 'email',
//           placeholder: 'Enter your email address',
//         },
//         btn: {
//           title: 'Subscribe',
//           type: 'submit',
//         },
//       },
//     },
//   ],
// };
