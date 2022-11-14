import React from 'react';
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {IconContext} from 'react-icons';

const FooterSocials = () => {
	return (
		<div className='footer__socials'>
			<IconContext.Provider value={{size: 20}}>
				<a
					className='github'
					aria-label='GitHub'
					href='https://github.com/LeanetAlfonso'
					target='_blank'
					rel='noreferrer'
				>
					<BsGithub />
				</a>
				<a
					aria-label='LinkedIn'
					href='https://www.linkedin.com/in/LeanetAlfonso'
					target='_blank'
					rel='noreferrer'
				>
					<BsLinkedin />
				</a>
			</IconContext.Provider>
		</div>
	);
};

export default FooterSocials;
