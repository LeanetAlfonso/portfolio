import React from 'react';
import './Tools.css';
import Caption from '../Caption/Caption';

const Tools = () => {
	return (
		<section id='tools'>
			<div className='container content__container tools__container'>
				<Caption caption='Tools' icon='tools' />

				<p className='text-light'>
					Here are a few tools I've been working with recently:
				</p>
				<div className='tools__list'>
					<div className='column'>
						<p className='row text-primary'>Back-End Technology</p>
						<p>NodeJS</p>
						<p>ExpressJS</p>
						<p>MongoDB</p>
						<p>Firebase</p>
						<p>Java</p>
						<p>PostgreSQL</p>
					</div>
					<div className='column'>
						<p className='row text-primary'>Front-End Technology</p>
						<p>ReactJS</p>
						<p>Redux</p>
						<p>HTML</p>
						<p>CSS</p>
						<p>React Testing Library</p>
					</div>
					<div className='column'>
						<p className='row text-primary'>Other Tools</p>
						<p>Git</p>
						<p>VSCode</p>
						<p>Xcode</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tools;
