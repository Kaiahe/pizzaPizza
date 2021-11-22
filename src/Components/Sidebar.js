import React from 'react';
import '../App.css';
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

export const Sidebar = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        className: 'nav-text'
    },
    {
        title: 'Menu',
        path: '/Menu',
        icon: <MdIcons.MdRestaurantMenu/>,
        className: 'nav-text'
    },
    {
        title: 'Cart',
        path: '/Shoppingcart',
        icon: <AiIcons.AiOutlineShoppingCart/>,
        className: 'nav-text'
    },
]
