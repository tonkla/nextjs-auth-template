interface ApiConfigurations {
	username: string
	password: string
	jwtAgeSeconds: number
	jwtSecret: string
}

interface WebConfigurations {
	siteTitle: string
}

export const apiConfigs: ApiConfigurations = {
	username: process.env.API_ADMIN_USERNAME ?? '',
	password: process.env.API_ADMIN_PASSWORD ?? '',
	jwtAgeSeconds: Number(process.env.API_JWT_AGE_SECONDS ?? ''),
	jwtSecret: process.env.API_JWT_SECRET ?? '',
}

export const webConfigs: WebConfigurations = {
	siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE || 'My Site',
}
