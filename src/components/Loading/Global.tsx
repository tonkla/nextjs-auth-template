import Image from 'next/image'

function Loading() {
	return (
		<div className="fixed inset-0 flex items-center justify-center">
			<Image src="/icons/three-dots.svg" width={40} height={10} alt="loading" />
		</div>
	)
}

export default Loading
