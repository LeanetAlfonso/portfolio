import React from 'react';
import './Message.css';
import {BiArrowBack} from 'react-icons/bi';

const Message = ({messageHeader, messageContent, error}) => {
	return (
		<div className='message'>
			<div className='message__container'>
				<h2>{messageHeader}</h2>
				<h3 className='text-light'>{messageContent}</h3>
				{error && (
					<div>
						<a href='mailto:leanetalfo@gmail.com'> leanetalfo@gmail.com</a>
					</div>
				)}
				<a href='/' aria-label='Go Back'>
					<div className='go__back'>
						<BiArrowBack />
					</div>
					Go back
				</a>
			</div>
		</div>
	);
};

export default Message;
