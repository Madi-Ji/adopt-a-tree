import React, { useEffect } from 'react';
import ListItem from '../../components/item';
import data from '../../data';
import { useRouter } from 'next/router';
import { useFlagship } from '@flagship.io/react-sdk';
import useSWR from 'swr'

const currency = '€';
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Shop() {
    const { data, error } = useSWR('/api/shop', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    let items = data.items.map((item) => {
        return {
            ...item,
            subtitle: () => (
                <>
                    <i>{item.subtitle?.name}</i> {item.subtitle?.details ? `- ${item.subtitle?.details}` : null}
                </>
            ),
            link: `/shop/${item.id}`
        }
    })

    return (
        <div className="p-12 w-4/5 m-auto text-white">
            <h1 className="text-4xl">Our Shop</h1>
            <h3 className="text-xl pb-10">Meet your new friend :</h3>
            <section className="h-1/2 flex flex-row flex-wrap">
                {items.map((item) => (
                    <ListItem key={item.id} {...item} currency={currency} />
                ))}
            </section>
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            items: data.shop.items
        },
    }
}