'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const LoadPage = ({ children }) => {
	const pathname = usePathname()

	return (
		<AnimatePresence>
			<div key={pathname}>
				<motion.div
					initial={{ opacity: 1 }}
					animate={{
						opacity: 0,
						transition: { delay: 1, duration: 0.4, ease: 'easeInOut' },
					}}
					className='fixed top-0 pointer-events-none h-screen w-screen bg-primary'
				/>
				{children}
			</div>
		</AnimatePresence>
	)
}

export default LoadPage
