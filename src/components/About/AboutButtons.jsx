import React from 'react';
import ResumeButton from '../ResumeButton/ResumeButton';

const AboutButtons = () => {
	return (
		<div className='about_buttons'>
			<ResumeButton />
			<a aria-label='Contact' href='#contact' className='btn btn-primary'>
				Let's Talk
			</a>
		</div>
	);
};

export default AboutButtons;
