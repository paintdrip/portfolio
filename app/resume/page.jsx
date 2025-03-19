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
						<TabsContent value='experience' className='w-full'>
							experience
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</div>
	)
}

export default Resume
