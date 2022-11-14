import React from "react";
import { Card } from 'flowbite-react';

export default function SectionNews({ news = [], title = 'Lastest News' }) {
    return (
        <section className="bg-gray-900 flex flex-col p-10 content-center">
            <h2 className="col-start-2 col-span-2 text-3xl text-black dark:text-white container m-auto mb-5">{title}</h2>
            <div className="col-start-2 col-span-2 self-center flex">
                {news.map((news, index) => (
                    <Card
                        key={index}
                        horizontal={true}
                        imgSrc={news.image || null}
                        href={`/news/${news.id}`}
                        className='max-w-2xl mx-10'
                    >
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {news.title}
                        </h3>
                        <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {news.subtitle}
                        </h4>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {news.content}
                        </p>
                    </Card>
                ))}
            </div>
        </section>
    )
}