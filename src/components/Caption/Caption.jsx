import React from 'react';
import {FiUser} from 'react-icons/fi';
import {BsLightningCharge} from 'react-icons/bs';
import {RiSpaceShipLine} from 'react-icons/ri';
import {TiContacts} from 'react-icons/ti';

import './Caption.css';

const Caption = ({caption, className, icon}) => {
	const ICONS = {
		about: <FiUser />,
		tools: <BsLightningCharge />,
		work: <RiSpaceShipLine />,
		contact: <TiContacts />,
	};

	return (
		<div className={`caption ${className && className}`}>
			<div className='caption__icon'>{ICONS[icon]}</div>
			<h2>{caption}</h2>
		</div>
	);
};

export default Caption;
