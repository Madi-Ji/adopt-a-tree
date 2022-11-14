import { Button } from "flowbite-react"

export default function Heading({ className = `bg-white dark:bg-gray-900`, blur = false }) {
    return (
        <section className={`${className}`}>
            <div className={`w-screen py-8 px-4 mx-auto text-center lg:py-16 lg:px-12 ${blur ? 'backdrop-blur-sm' : ''}`}>
                <a href={'/shop/125'} className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                    <span className="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">🎄 Felix is out! See our newcommer</span>
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Discover the Hidden Power of <br /> Trees</h1>
                <p className="mb-2 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">Here at Adopt-A-Tree we focus on high quality plants and trees, grow ethically & in the respect our Nature.</p>
                <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">Get your new friend, before Christmas, now !</p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Button href="/shop" outline={true} gradientDuoTone="greenToBlue" size="md" className="text-base font-medium">
                        Learn more
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Button>
                    <Button href="#" size="md" color="gray" className="text-black font-medium">
                        <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                        Watch video
                    </Button>
                </div>
            </div>
        </section>
    )
}