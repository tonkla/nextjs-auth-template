import { NextApiRequest, NextApiResponse } from 'next'

function handler(_req: NextApiRequest, res: NextApiResponse) {
	return res.json({ time: Date.now() })
}

export default handler
