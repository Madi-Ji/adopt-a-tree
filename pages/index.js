import React, { useContext } from 'react';
import { CartContext } from '../context/cart';
import { useFsFlag } from '@flagship.io/react-sdk';
import Heading from '../components/heading';
import SectionNews from '../components/sectionNews';
import data from '../data';

export default function Home({ news }) {
  let { items, setItem } = useContext(CartContext); // setItem({ id: Math.floor(Math.random() * 150), name: 'Plant' })}

  return (
    <>
      <Heading className={'bg-white/30 bg-tree bg-cover bg-center'} blur />
      <SectionNews news={news} />
    </>
  )
}

export async function getStaticProps(context) {

  return {
    props: {
      news: data.news
    },
  }
}