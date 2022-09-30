import React from 'react';
import CV from '../../assets/cv.pdf';
const CTA = () => {
	return (
		<div className='cta'>
			<a
				aria-label='Download CV'
				download='leanet-alfonso-azcona-resume.pdf'
				href={CV}
				className='btn'
				myfilename='leanet-alfonso-azcona-resume.pdf'
			>
				Download CV
			</a>
			<a aria-label='Contact' href='#contact' className='btn btn-primary'>
				Let's Talk
			</a>
		</div>
	);
};

export default CTA;
