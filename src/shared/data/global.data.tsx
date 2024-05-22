import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 14 using the new App Router »',
    href: 'https://nextjs.org/blog/next-14',
  },
  callToAction2: {
    text: 'Follow @onWidget on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=onwidget',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    // {
    //   label: 'Pages',
    //   icon: IconChevronDown,
    //   links: [
    //     {
    //       label: 'Services',
    //       href: '/services',
    //     },
    //     {
    //       label: 'Pricing',
    //       href: '/pricing',
    //     },
    //     {
    //       label: 'About us',
    //       href: '/about',
    //     },
    //     {
    //       label: 'Contact us',
    //       href: '/contact',
    //     },
    //     {
    //       label: 'FAQs',
    //       href: '/faqs',
    //     },
    //     {
    //       label: 'Terms & Conditions',
    //       href: '/terms',
    //     },
    //     {
    //       label: 'Privacy Policy',
    //       href: '/privacy',
    //     },
    //   ],
    // },
    {
      label: 'About us',
          href: '#',
    },
    {
      label: 'Features',
      href: '#features-on-home',
    },
    {
      label: 'How it Works',
      href: '#contentOne-on-home-one',
    },
    {
      label: 'Our Team',
      href: '#team-on-home',
    },
    {
      label: 'Pricing',
      href: '#pricing-on-home',
    },
    {
      label: 'Contact',
      href: '#contact-on-home',
    },
  ],
  // actions: [
  //   {
  //     text: 'Download',
  //     href: '#',
  //     targetBlank: true,
  //   },
  // ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
        {' '}
        onWidget
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '#',
    },
    {
      label: 'Privacy Policy',
      href: '#',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['Gachibowli', 'Hyderabad, Telangana 500032'],
    },
    {
      title: 'Phone',
      texts: ['Phone 1: +91 9954953008', 'Phone 2: +91 6290999231'],
    },
    {
      title: 'Email',
      texts: ['Office: bamsadvmedia@gmail.com', 'Site: https://bams.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
  ],
  // footNote: (
  //   <div className="mr-4 text-sm">
  //     <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
  //     Made by{' '}
  //     <a
  //       className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
  //       href="https://onwidget.com/"
  //     >
  //       {' '}
  //       onWidget
  //     </a>{' '}
  //     · All rights reserved.
  //   </div>
  // ),
};
