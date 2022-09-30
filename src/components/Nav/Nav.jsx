import React, {useState} from 'react';
import './Nav.css';
import logo from '../../assets/logo.png';
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import CV from '../../assets/cv.pdf';

const Nav = () => {
	const [sidebar, setSidebar] = useState(false);

	const toggleSidebar = () => {
		setSidebar(!sidebar);
	};

	return (
		<nav>
			<div className='nav__left'>
				<a href='/' aria-label='Home'>
					<img src={logo} alt='LAA' className='logo' />
				</a>
			</div>
			<div className='nav__right'>
				<div className='btn__menu'>
					<BiMenuAltRight onClick={toggleSidebar} />
				</div>
				<div className={`${sidebar ? 'side__bar active' : 'side__bar'} `}>
					<div className='btn__close__bar' onClick={toggleSidebar}>
						<AiOutlineClose />
					</div>
					<a aria-label='About' href='#about' onClick={toggleSidebar}>
						About
					</a>
					<a aria-label='Tools' href='#tools' onClick={toggleSidebar}>
						Tools
					</a>
					<a aria-label='Work' href='#work' onClick={toggleSidebar}>
						Work
					</a>
					<a aria-label='Contact' href='#contact' onClick={toggleSidebar}>
						Contact
					</a>
					<a
						aria-label='Download CV'
						download='leanet-alfonso-azcona-resume.pdf'
						href={CV}
						className='btn'
						myfilename='leanet-alfonso-azcona-resume.pdf'
						onClick={toggleSidebar}
					>
						Download CV
					</a>
				</div>

				<div className='menu__items'>
					<a aria-label='About' href='#about'>
						About
					</a>
					<a aria-label='Tools' href='#tools'>
						Tools
					</a>
					<a aria-label='Work' href='#work'>
						Work
					</a>
					<a aria-label='Contact' href='#contact'>
						Contact
					</a>
					<a
						aria-label='Download CV'
						download='leanet-alfonso-azcona-resume.pdf'
						href={CV}
						className='btn btn-nav'
						myfilename='leanet-alfonso-azcona-resume.pdf'
					>
						Download CV
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
