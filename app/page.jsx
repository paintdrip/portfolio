import { Photo } from '@/components/modules/Photo'
import Socials from '@/components/modules/Socials'
import { Stats } from '@/components/modules/Stats'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

export default function Home() {
	return (
		<section className='h-full'>
			<div className='container mx-auto'>
				<div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
					<div className='text-center xl:text-left order-2 xl:order-none'>
						<span className='text-xl'>Frontend-разработчик</span>
						<h1 className='h1 mb-6'>
							Привет, я <br /> <span className='text-accent'>капитошник</span>
						</h1>
						<p className='max-w-[500px] mb-9 text-white/80'>В текущий момент работаю в компании kvokka</p>
						{/* кнопки и ссылки */}
						<div className='flex flex-col xl:flex-row items-center gap-8'>
							<Button variant='outline' className='uppercase flex items-center gap-2 select-none' size='lg'>
								<FiDownload className='text-xl' />
								<span>Скачать резюме</span>
							</Button>
							<div className='mb-8 xl:mb-0'>
								<Socials containerStyles='flex gap-4' iconStyles='flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 w-10 h-10 border border-accent rounded-full' />
							</div>
						</div>
					</div>
					<div className='order-1 xl:order-none mb-8 xl:mb-0'>
						<Photo />
					</div>
				</div>
			</div>
			<Stats />
		</section>
	)
}
