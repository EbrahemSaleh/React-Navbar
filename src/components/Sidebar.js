import React from 'react';
import * as FaIcon from 'react-icons/fa';
import * as AiIcon from 'react-icons/ai';
import * as IoIcon from 'react-icons/io';


export const Sidebar = [
  {
    title: "Home",
    path: '/',
    icon: <AiIcon.AiFillHome />,
    cName: 'nav-item'
  },
  {
    title: "Reports",
    path: '/reports',
    icon: <IoIcon.IoIosPaper />,
    cName: 'nav-item'
  },
  {
    title: "Products",
    path: '/products',
    icon: <FaIcon.FaCartPlus />,
    cName: 'nav-item'
  },
  {
    title: "Contacts",
    path: '/contacts',
    icon: <AiIcon.AiFillContacts />,
    cName: 'nav-item'
  }

]

