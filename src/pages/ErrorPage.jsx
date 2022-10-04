import React from 'react';
import Message from '../components/Message/Message';

const ErrorPage = () => {
	return (
		<Message
			messageHeader='Sorry!'
			messageContent='There was an error with your submission. Please email me using the
			address below.'
			error
		/>
	);
};

export default ErrorPage;
