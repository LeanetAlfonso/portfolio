import React from 'react';
import './Tools.css';
import Caption from '../Caption/Caption';
import {useInView} from 'react-intersection-observer';

const Tools = () => {
	const {ref: toolsRef, inView: toolsInView} = useInView();
	const TOOLS = {
		backend: [
			'NodeJS',
			'ExpressJS',
			'MongoDB',
			'Firebase',
			'PostgreSQL',
			'Java',
		],
		frontend: [
			'ReactJS (ES6)',
			'Redux',
			'HTML5',
			'CSS/Sass',
			'React Testing Library',
		],
		other: ['Git', 'VSCode', 'Xcode', 'Netlify', 'Heroku'],
	};

	return (
		<section id='tools'>
			<div
				ref={toolsRef}
				className={`container content__container tools__container fade-enter ${
					toolsInView && 'fade-enter-active'
				}`}
			>
				<Caption caption='Tools' icon='tools' />
				<p className='text-light'>
					Here are a few tools I've been working with:
				</p>
				<div className='tools__list'>
					<div className='column'>
						<p className='row text-primary'>Back-End Technology</p>
						{TOOLS.backend.map((tool) => (
							<p key={tool}>{tool}</p>
						))}
					</div>
					<div className='column'>
						<p className='row text-primary'>Front-End Technology</p>
						{TOOLS.frontend.map((tool) => (
							<p key={tool}>{tool}</p>
						))}
					</div>
					<div className='column'>
						<p className='row text-primary'>Other Tools</p>
						{TOOLS.other.map((tool) => (
							<p key={tool}>{tool}</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tools;
