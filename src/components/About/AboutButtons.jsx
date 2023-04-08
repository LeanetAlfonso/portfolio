import React from 'react';
import ResumeButton from '../ResumeButton/ResumeButton';

const AboutButtons = () => {
	const showResumeButton = false;
	return (
		<div className='about_buttons'>
			{showResumeButton && (
				<div className='resume'>
					<ResumeButton />
				</div>
			)}
			<a aria-label='Contact' href='#contact' className='btn btn-primary'>
				Let's Talk
			</a>
		</div>
	);
};

export default AboutButtons;
