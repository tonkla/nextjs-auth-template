import { ComponentProps, forwardRef } from 'react'

const Footer = forwardRef<HTMLElement, ComponentProps<'footer'>>(function Footer(_, ref) {
	return <footer className="container mx-auto" ref={ref}></footer>
})

export default Footer
