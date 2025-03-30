'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

import Link from 'next/link'
import Image from 'next/image'

const projects = [
	{
		num: '01',
		category: 'frontend',
		title: 'project 1',
		description: 'description 1',
		stack: [
			{
				name: 'Html 5',
			},
			{
				name: 'Css 3',
			},
			{
				name: 'Javascript',
			},
		],
		image: '/assets/work/thumb1.png',
		live: '',
		github: '',
	},
	{
		num: '02',
		category: 'fullstack',
		title: 'project 2',
		description: 'description 2',
		stack: [
			{
				name: 'Html 5',
			},
			{
				name: 'Typescript',
			},
			{
				name: 'React',
			},
		],
		image: '/assets/work/thumb2.png',
		live: '',
		github: '',
	},
	{
		num: '03',
		category: 'fullstack',
		title: 'project 3',
		description: 'description 3',
		stack: [
			{
				name: 'Html 5',
			},
			{
				name: 'Next.js',
			},
		],
		image: '/assets/work/thumb3.png',
		live: '',
		github: '',
	},
]

const Work = () => {
	const [project, setProject] = useState(projects[0])

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}
			className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
		>
			<div className='container mx-auto'>
				<div className='flex flex-col xl:flex-row xl:gap-[30px]'>
					<div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
						<div>
							{/* outline num */}
							<div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
								{project.num}
							</div>
						</div>
					</div>
					<div className='w-full xl:w-[50%]'>slider</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Work
