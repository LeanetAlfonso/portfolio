import React from 'react';
import Message from '../components/Message/Message';

const SuccessPage = () => {
	return (
		<Message
			messageHeader='Thank you!'
			messageContent='Your message was sent.'
		/>
	);
};

export default SuccessPage;
