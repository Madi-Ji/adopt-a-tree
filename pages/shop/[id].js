import data from "../../data"

export async function getStaticPaths() {
    let items = [...data.shop.items]
        .filter(item => item !== null)
        .map(item => ({ params: { ...item } }))

    return {
        paths: items,
        fallback: false,
    }
}

export async function getStaticProps({ params: item }) {
    return {
        props: {
            post: item
        },
    }
}

export default function Post({ post }) {
    return (
        <>
            <h1 className="text-white">{post.id}</h1>
        </>
    )
}