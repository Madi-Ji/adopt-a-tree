import React, { useContext } from 'react';
import { CartContext } from '../context/cart';

export default function ListItem({ id, slug, image, title, subtitle: Subtitle, stars, price, currency, link }) {
    let { setItem } = useContext(CartContext);

    let _stars = Math.floor(stars);
    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg border-gray-700 m-auto basis-1/3 my-3">
            <a href={link}>
                <img className="p-8 rounded-t-lg h-80 m-auto" src={image} alt={`${title} image`} />
            </a>
            <div className="px-5 pb-5">
                <a href={link}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{title}</h5>
                    <h6 className="text-sm font-semibold tracking-tight text-gray-700"><Subtitle /></h6>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    {[...Array(5).keys()].map((index) => (
                        <svg key={index} aria-hidden="true" className={`w-5 h-5 text-${index < _stars ? 'green' : 'gray'}-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>{`Star N°${index}`}</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    ))}
                    <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-lime-200 text-blue-800 ml-3">{stars}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900">{`${price} ${currency}`}</span>
                    <div className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer" onClick={() => setItem({ name: slug, id })}>Add to cart</div>
                </div>
            </div>
        </div>
    )
}