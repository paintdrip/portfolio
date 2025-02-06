import Link from 'next/link'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

const Header = () => {
	return (
		<header className='py-8 xl:py-12 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link href='/' className='select-none'>
					<h1 className='text-4xl font-semibold'>
						пимпирим<span className='text-accent'>.</span>
					</h1>
				</Link>
				{/* десктопная навигация */}
				<div className='hidden xl:flex gap-8 items-center'>
					<Nav />
					<Link href='/contact' className='select-none'>
						<Button>Связаться</Button>
					</Link>
				</div>
				{/* мобильная навигация */}
				<div className='xl:hidden'>
					<MobileNav />
				</div>
			</div>
		</header>
	)
}

export default Header
