import data from "../../../data"

export default function handler(req, res) {
    const {
        query,
        method,
    } = req

    let itemLookup = data.shop.items.find((item) => item.id === query.id)

    switch (method) {
        case 'GET':
            res.status(200).json({ ...itemLookup });
            break;

        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).json({ reason: `Method ${method} Not Allowed` }).end()
    }
}