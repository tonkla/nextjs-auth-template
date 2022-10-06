import { ComponentProps, forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(function Input(props, ref) {
	return (
		<input
			{...props}
			ref={ref}
			className="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
		/>
	)
})

export default Input
