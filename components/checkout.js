import React, { useContext, useEffect } from 'react';
import { Navbar as NavbarFlowBite, Button } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/cart';
import { useRouter } from 'next/router'
import { useFlagship, useFsFlag } from '@flagship.io/react-sdk';

export default function Checkout() {
    let { items, setItem } = useContext(CartContext)
    const router = useRouter()
    console.log(JSON.stringify([...items.values()]))

    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg border-gray-700 m-auto basis-1/3 my-3">
            <h1>Cart</h1>
            <h2>{([...items.values()])}</h2>
            <div className='bg-gradient-to-r from-lime-200 to-green-400 text-blue-900' label={items.size}>
            </div>
        </div>
   
    )
}