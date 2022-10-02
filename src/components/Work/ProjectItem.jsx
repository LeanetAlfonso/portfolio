import React, {useState} from 'react';
import {useEffect} from 'react';
import {BiLinkExternal} from 'react-icons/bi';
import {FiGithub} from 'react-icons/fi';
import {AiOutlineYoutube} from 'react-icons/ai';

const ProjectItem = ({
	image,
	gif,
	title,
	technologies,
	description,
	site,
	repo,
	demo,
	alignment,
	orientation,
	name,
	reference,
	inview,
}) => {
	const [previewSrc, setPreviewSrc] = useState(image);
	const [previewClass, setPreviewClass] = useState('static');
	const [smallScreen, setSmallScreen] = useState(window.innerWidth < '1240');

	useEffect(() => {
		const handleWidth = () => {
			if (window.innerWidth < '1240') {
				setSmallScreen(true);
			} else {
				setSmallScreen(false);
			}
		};
		window.addEventListener('resize', handleWidth);
		return () => {
			window.removeEventListener('resize', handleWidth);
		};
	}, []);

	const onMouseEnterHandler = () => {
		setPreviewSrc(gif);
		setPreviewClass('active');
	};

	const onMouseLeaveHandler = () => {
		setPreviewSrc(image);
		setPreviewClass('static');
	};

	const ConditionalWrapper = ({condition, wrapper, children}) =>
		condition ? wrapper(children) : children;

	return (
		<div className={`project__item ${alignment === 'right' && 'sub__right'}`}>
			<div
				ref={reference}
				className={`project__item__top subsection ${
					alignment === 'right' && 'sub__right'
				}  fadeup-enter ${inview && 'fadeup-enter-active'}`}
			>
				{site ? (
					<a
						aria-label={title}
						href={site}
						target='_blank'
						rel='noopener noreferrer'
					>
						<div
							className={`${orientation}__project__image project__image`}
							onMouseEnter={smallScreen ? () => false : onMouseEnterHandler}
							onMouseLeave={smallScreen ? () => false : onMouseLeaveHandler}
						>
							<img
								className={previewClass}
								id={name}
								src={previewSrc}
								alt={title}
							/>
						</div>
					</a>
				) : (
					<div
						className={`${orientation}__project__image project__image`}
						onMouseEnter={smallScreen ? () => false : onMouseEnterHandler}
						onMouseLeave={smallScreen ? () => false : onMouseLeaveHandler}
					>
						<img
							className={previewClass}
							id={name}
							src={previewSrc}
							alt={title}
						/>
					</div>
				)}
				<div className='project__description project__item__right'>
					<div className={`subsection header ${site && 'valid'}`}>
						<h2>
							<ConditionalWrapper
								condition={site}
								wrapper={(children) => (
									<a
										aria-label={title}
										href={site}
										target='_blank'
										rel='noopener noreferrer'
									>
										{children}
									</a>
								)}
							>
								{title}
							</ConditionalWrapper>
						</h2>

						<div className='description__content'>{description}</div>
					</div>
					<div className='subsection'>
						<div className='flex__container stack'>
							{technologies.map((tech) => (
								<div key={tech} className='stack__item flex__container__link'>
									{tech}
								</div>
							))}
						</div>
					</div>

					<div className='flex__links flex__container'>
						{site && (
							<a
								aria-label='Visit site'
								href={site}
								target='_blank'
								rel='noopener noreferrer'
							>
								<div className='flex__container flex__container__link'>
									<p>Visit site</p>
									<BiLinkExternal />
								</div>
							</a>
						)}
						{repo && (
							<a
								aria-label='See code'
								href={repo}
								target='_blank'
								rel='noopener noreferrer'
							>
								<div className='flex__container flex__container__link'>
									<p>See code</p>
									<FiGithub />
								</div>
							</a>
						)}
						{demo && (
							<a
								aria-label='Watch demo'
								href={demo}
								target='_blank'
								rel='noopener noreferrer'
							>
								<div className='flex__container flex__container__link'>
									<p>Watch demo</p>
									<div className='scale__up'>
										<AiOutlineYoutube />
									</div>
								</div>
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
