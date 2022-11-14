import data from "../../data"

export async function getStaticPaths() {
    let news = [...data.news]
        .filter(article => article !== null)
        .map(article => ({ params: article }))

    return {
        paths: news,
        fallback: false,
    }
}

export async function getStaticProps({ params: { id } }) {
    return {
        props: {
            article: data.news.find((article) => article.id === id)
        },
    }
}

export default function News({ article }) {
    return (
        <div className="text-white">
            <h1>{article.title}</h1>
            <h2 >{article.subtitle}</h2>
            <article>{article.content}</article>
        </div>
    )
}