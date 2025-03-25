import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'

const about = {
	title: 'Обо мне',
	description: 'description',
	info: [
		{
			fieldName: 'Имя',
			fieldValue: 'Антон Кульбицкий',
		},
		{
			fieldName: 'Телефон',
			fieldValue: '8 (952) 490-65-40',
		},
		{
			fieldName: 'Опыт',
			fieldValue: '100+ лет',
		},
		{
			fieldName: 'Email',
			fieldValue: 'akulbitskiy@yandex.ru',
		},
	],
}

const experience = {
	icon: '/assets/resume/badge.svg',
	title: 'My experience',
	description: 'description',
	items: [
		{
			company: 'Kvokka',
			position: 'Front-end Development',
			duration: '2024 - now',
		},
		{
			company: 'RENDER.RUS',
			position: 'Full Stack Development',
			duration: '2022 - 2024',
		},
	],
}

const education = {
	icon: '/assets/resume/cap.svg',
	title: 'My education',
	description: 'description',
	items: [
		{
			institution: 'SWSU',
			degree: 'Информатика и вычислительная техника (Бакалавриат)',
			duration: '2020-2024',
		},
	],
}

const skills = {
	title: 'Навыки',
	description: 'description',
	skillList: [
		{
			icon: <FaHtml5 />,
			name: 'html 5',
		},
		{
			icon: <FaCss3 />,
			name: 'css 3',
		},
		{
			icon: <FaJs />,
			name: 'js',
		},
		{
			icon: <FaReact />,
			name: 'react',
		},
		{
			icon: <FaFigma />,
			name: 'figma',
		},
		{
			icon: <SiTailwindcss />,
			name: 'tailwind',
		},
		{
			icon: <SiNextdotjs />,
			name: 'nextjs',
		},
	],
}

const Resume = () => {
	return (
		<div className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
			<div className='container mx-auto'>
				<Tabs
					defaultValue='experience'
					className='flex flex-col xl:flex-row gap-[60px]'
				>
					<TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
						<TabsTrigger value='experience'>Experience</TabsTrigger>
						<TabsTrigger value='education'>Education</TabsTrigger>
						<TabsTrigger value='skills'>Skills</TabsTrigger>
						<TabsTrigger value='about'>About me</TabsTrigger>
					</TabsList>

					<div className='min-h-[70px] w-full'>
						{/* experience */}
						<TabsContent value='experience' className='w-full'>
							<div className='flex flex-col gap-[30px] text-center xl:text-left'>
								<h3 className='text-4xl font-bold'>{experience.title}</h3>
								<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
									{experience.description}
								</p>
								<ScrollArea className='h-[400px]'>
									<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
										{experience.items.map((item, index) => {
											return (
												<li
													key={index}
													className='bg-[#232329] h-[184px] py-6 px-10 rounded-[12px] flex flex-col justify-center items-center lg:items-start gap-1'
												>
													<span className='text-accent'>{item.duration}</span>
													<h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
														{item.position}
													</h3>
													<div className='flex items-center gap-3'>
														<span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
														<p className='text-white/60'>{item.company}</p>
													</div>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* education */}
						<TabsContent value='education' className='w-full'>
							<div className='flex flex-col gap-[30px] text-center xl:text-left'>
								<h3 className='text-4xl font-bold'>{education.title}</h3>
								<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
									{education.description}
								</p>
								<ScrollArea className='h-[400px]'>
									<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className='bg-[#232329] h-[184px] py-6 px-10 rounded-[12px] flex flex-col justify-center items-center lg:items-start gap-1'
												>
													<span className='text-accent'>{item.duration}</span>
													<h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
														{item.degree}
													</h3>
													<div className='flex items-center gap-3'>
														<span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
														<p className='text-white/60'>{item.institution}</p>
													</div>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* skills */}
						<TabsContent value='skills' className='w-full h-full'>
							<div className='flex flex-col gap-[30px]'>
								<div className='flex flex-col gap-[30px] text-center xl:text-left'>
									<h3 className='text-4xl font-bold'>{skills.title}</h3>
									<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
										{skills.description}
									</p>
								</div>
								<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
									{skills.skillList.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider></TooltipProvider>
											</li>
										)
									})}
								</ul>
							</div>
						</TabsContent>
						{/* about */}
						<TabsContent value='about' className='w-full'>
							about
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</div>
	)
}

export default Resume
