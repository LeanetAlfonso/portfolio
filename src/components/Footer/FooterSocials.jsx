import React from 'react';
import {BsGithub} from 'react-icons/bs';
// import {BsLinkedin} from 'react-icons/bs';
import {IconContext} from 'react-icons';

const FooterSocials = () => {
	const SOCIALS_ITEMS = [
		{
			title: 'GitHub',
			link: 'https://github.com/LeanetAlfonso',
			icon: <BsGithub />,
		},
		// {
		// 	title: 'LinkedIn',
		// 	link: 'https://www.linkedin.com/in/<username>',
		// 	icon: <BsLinkedin />,
		// },
	];

	return (
		<div className='footer__socials'>
			<IconContext.Provider value={{size: 20}}>
				{SOCIALS_ITEMS.map((item) => (
					<a
						key={item.title}
						aria-label={item.title}
						href={item.link}
						target='_blank'
						rel='noreferrer'
					>
						{item.icon}
					</a>
				))}
			</IconContext.Provider>
		</div>
	);
};

export default FooterSocials;
