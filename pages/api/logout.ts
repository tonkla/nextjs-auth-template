import { NextApiRequest, NextApiResponse } from 'next'

import { ACCESS_TOKEN } from 'src/consts'
import { setCookie } from 'src/utils/cookies'

function handler(_req: NextApiRequest, res: NextApiResponse) {
	setCookie(res, ACCESS_TOKEN, '', {
		httpOnly: true,
		secure: true,
		sameSite: 'strict',
		path: '/',
		maxAge: -1,
	})
	return res.json({})
}

export default handler
