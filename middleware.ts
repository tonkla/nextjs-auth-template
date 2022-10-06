import { jwtVerify } from 'jose'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { apiConfigs } from 'src/configs'
import { ACCESS_TOKEN } from 'src/consts'

const publicRoutes = ['/api/login']

export async function middleware(req: NextRequest) {
	if (!publicRoutes.includes(req.nextUrl.pathname)) {
		let isValid = false
		try {
			await jwtVerify(
				req.cookies.get(ACCESS_TOKEN) || '',
				new TextEncoder().encode(apiConfigs.jwtSecret)
			)
			isValid = true
		} catch {}
		if (!isValid) {
			return NextResponse.rewrite(new URL('/', req.url), { status: 401 })
		}
	}
	return NextResponse.next()
}

export const config = {
	matcher: '/api/:path*',
}
