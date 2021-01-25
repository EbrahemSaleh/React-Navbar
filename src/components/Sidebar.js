import React from 'react';
import * as FaIcon from 'react-icons/fa';
import * as AiIcon from 'react-icons/ai';
import * as IoIcon from 'react-icons/io';


export const SidebarData = [
  {
    title: "Home",
    path: '/',
    icon: <AiIcon.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: "Reports",
    path: '/reports',
    icon: <IoIcon.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: "Products",
    path: '/products',
    icon: <FaIcon.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: "Contacts",
    path: '/contacts',
    icon: <AiIcon.AiFillContacts />,
    cName: 'nav-text'
  }

]

