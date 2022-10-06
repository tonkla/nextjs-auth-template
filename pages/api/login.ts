import { SignJWT } from 'jose'
import { NextApiRequest, NextApiResponse } from 'next'

import { apiConfigs } from 'src/configs'
import { ACCESS_TOKEN } from 'src/consts'
import { setCookie } from 'src/utils/cookies'

async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { username, password } = req.body

	if (
		!username?.trim() ||
		!password?.trim() ||
		username !== apiConfigs.username ||
		password !== apiConfigs.password
	) {
		return res.status(400).json({})
	}

	const jwt = await new SignJWT({ username })
		.setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
		.setExpirationTime(Math.round(Date.now() / 1000) + apiConfigs.jwtAgeSeconds)
		.sign(new TextEncoder().encode(apiConfigs.jwtSecret))

	setCookie(res, ACCESS_TOKEN, jwt, {
		httpOnly: true,
		secure: true,
		sameSite: 'strict',
		path: '/',
		maxAge: apiConfigs.jwtAgeSeconds,
	})
	return res.json({})
}

export default handler
