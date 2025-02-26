import Link from 'next/link'

import { FaGithub, FaGitlab, FaTelegram, FaMailBulk } from 'react-icons/fa'

const socials = [
	{ icon: <FaTelegram />, path: 'https://t.me/paintdrippin' },
	{ icon: <FaGithub />, path: 'https://github.com/paintdrip' },
	{ icon: <FaGitlab />, path: 'https://gitlab.com/paintdrip1' },
	{ icon: <FaMailBulk />, path: 'mailto:akulbitskiy@yandex.ru' },
]

const Socials = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<Link key={index} href={item.path} className={iconStyles} target='_blank' rel='noopener noreferrer'>
						{item.icon}
					</Link>
				)
			})}
		</div>
	)
}

export default Socials
