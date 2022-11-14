import data from "../../../data"

export default function handler(req, res) {
    const {
        query,
        method,
    } = req

    let shop = data.shop;

    if (query._limit) {
        shop.items.length = query._limit;
    }

    shop.items.at(0).latest = true

    switch (method) {
        case 'GET':
            // Get data from your database
            res.status(200).json({ ...shop })
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).json({ reason: `Method ${method} Not Allowed` }).end()
    }
}