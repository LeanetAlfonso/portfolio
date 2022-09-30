import React from 'react';
import ProjectItem from './ProjectItem';
import './Work.css';
import geekTextImg from '../../assets/geek-text.png';
import geekTextGif from '../../assets/geek-text.gif';
import sudokuImg from '../../assets/sudoku.png';
import sudokuGif from '../../assets/sudoku.gif';
import mastermindImg from '../../assets/mastermind.png';
import mastermindGif from '../../assets/mastermind.gif';
import pemNowImg from '../../assets/pem-now.png';
import pemNowGif from '../../assets/pem-now.gif';
import Caption from '../Caption/Caption';
const Work = () => {
	const PROJECTS = [
		{
			name: 'geek-text',
			title: 'Geek Text',
			technologies: [
				'REACT',
				'REDUX',
				'NODE',
				'EXPRESS',
				'MONGODB',
				'HEROKU',
				'NETLIFY',
			],
			description: (
				<div className='text-light'>
					<p>
						An online bookstore built using the MERN stack as a group project
						for CEN 4010 Software Engineering.
					</p>
					<p>
						The back-end is hosted on a Heroku free-tier and may take a few
						seconds to load!
					</p>
				</div>
			),
			site: 'https://geek-text.ga/',
			repo: 'https://github.com/LeanetAlfonso/geek-text-frontend',
			demo: 'https://www.youtube.com/watch?v=2v4gouzU3YQ',

			image: geekTextImg,
			gif: geekTextGif,
			orientation: 'landscape',
		},
		{
			name: 'sudoku',
			title: 'Sudoku App',
			technologies: ['REACT', 'MATERIAL UI', 'i18next', 'NETLIFY'],
			description: (
				<div className='text-light'>
					<p>
						A sudoku app built in React that generates puzzles of different
						difficulties. Includes timer, auto-check, and "challenge your
						friend" features, dark mode support, multiple-language support, and
						a solver implemented using a recursive backtracking algorithm.
					</p>
				</div>
			),
			site: 'https://sudokupuzzle.ga/',
			repo: 'https://github.com/LeanetAlfonso/sudoku',
			demo: 'https://www.youtube.com/watch?v=P0NB0V0bk5E',
			image: sudokuImg,
			gif: sudokuGif,
			alignment: 'right',
			orientation: 'square',
		},
		{
			name: 'mastermind',
			title: 'Mastermind',
			technologies: ['SWIFT', 'SWIFTUI', 'XCODE', 'EXPO'],
			description: (
				<div className='text-light'>
					<p>
						A code-breaking game whose objective is to guess the secret code in
						the fewest tries possible. I built this to learn some mobile
						development concepts and implement an algorithm to provide feedback
						on every guess in constant time.
					</p>
				</div>
			),
			repo: 'https://github.com/LeanetAlfonso/mastermind',
			demo: 'https://www.youtube.com/watch?v=X1mF5avTLlo',
			image: mastermindImg,
			gif: mastermindGif,
			orientation: 'portrait',
		},
		{
			name: 'pem-now',
			title: 'PEM-NOW',
			technologies: ['REACT', 'REDUX', 'NODE', 'FIREBASE', 'HEROKU', 'NETLIFY'],
			description: (
				<div className='text-light'>
					<p>
						A full-stack pediatric emergency medicine web application that
						provides health workers easy data access and manipulation about
						common pediatric emergencies built for Capstone II.
					</p>
				</div>
			),
			demo: 'https://www.youtube.com/watch?v=Kk_Ug3Loj8c',
			alignment: 'right',
			image: pemNowImg,
			gif: pemNowGif,
			orientation: 'landscape',
		},
	];

	return (
		<section className='work__section' id='work'>
			<div className='container content__container'>
				<Caption
					caption="Some Things I've Built"
					className='work__header'
					icon='work'
				/>
				{PROJECTS.map((project) => (
					<ProjectItem
						key={project.name}
						title={project.title}
						image={project.image}
						gif={project.gif}
						technologies={project.technologies}
						description={project.description}
						site={project.site}
						repo={project.repo}
						demo={project.demo}
						alignment={project.alignment}
						orientation={project.orientation}
						name={project.name}
					/>
				))}
			</div>
		</section>
	);
};

export default Work;
