import React, { useContext, useEffect } from 'react';
import { Navbar as NavbarFlowBite, Button } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/cart';
import { useRouter } from 'next/router'
import { useFlagship, useFsFlag } from '@flagship.io/react-sdk';

export default function Navbar() {
    let { items, setItem } = useContext(CartContext)
    const router = useRouter()

    let iconName = useFsFlag('nav_mainLogo_text', '🪴'); //🌲
    let siteName = useFsFlag('nav_siteName_text', 'Adopt a Tree');

    return (
        <NavbarFlowBite fluid>
            <NavbarFlowBite.Brand href="/">
                <span className="mr-2 w-8 h-8 text-2xl">{iconName.getValue()}</span>
                <span className="ml:2 self-center whitespace-nowrap text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-green-400">
                    {siteName.getValue()}
                </span>
            </NavbarFlowBite.Brand>
            <div className="flex items-center">
                <NavbarFlowBite.Collapse className="pr-5">
                    <NavbarFlowBite.Link
                        href="/"
                        active={router.asPath === "/" ? true : false}
                    >
                        Home
                    </NavbarFlowBite.Link>
                    <NavbarFlowBite.Link
                        href="/shop"
                        active={router.asPath.includes("/shop") ? true : false}
                    >
                        Shop
                    </NavbarFlowBite.Link>
                </NavbarFlowBite.Collapse>
                <NavbarFlowBite.Toggle />
                <Button href="/shop/checkout" className='bg-gradient-to-r from-lime-200 to-green-400 text-blue-900' label={items.size}>
                    <span><FontAwesomeIcon icon={faShoppingBag} className='w-5' /></span>
                    <span className='text-red'>Take away</span>
                </Button>
            </div>
        </NavbarFlowBite>
    )
}