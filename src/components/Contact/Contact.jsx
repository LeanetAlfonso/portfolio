import React from 'react';
import './Contact.css';
import Caption from '../Caption/Caption';

const Contact = () => {
	return (
		<section id='contact'>
			<div className='container content__container about__container contact__container'>
				<Caption caption='Get In Touch' icon='contact' />
				<h3 className='text-light'>Let's work together!</h3>
				<form
					data-netlify='true'
					name='contactv1'
					method='POST'
					netlify-honeypot='bot-field'
				>
					<input type='hidden' name='form-name' value='contactv1' />

					<div className='fields'>
						<div className='field'>
							<input
								title='your name'
								type='text'
								name='name'
								id='name'
								placeholder='Name'
							/>
						</div>
						<div className='field'>
							<input
								title='your email'
								type='email'
								name='email'
								id='email'
								placeholder='Email'
							/>
						</div>
						<div className='field'>
							<textarea
								title='your message'
								name='message'
								id='message'
								placeholder='Message'
								rows='6'
							/>
						</div>
					</div>
					<button className='btn btn-primary btn-submit' type='submit'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
