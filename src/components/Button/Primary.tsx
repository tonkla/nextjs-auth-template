import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react'

interface Props
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(props, ref) {
	const p = { ...props }
	p.disabled = !!p.isLoading
	delete p.isLoading
	return (
		<button
			{...p}
			ref={ref}
			className="transform rounded-md bg-blue-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
		/>
	)
})

export default Button
