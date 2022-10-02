import React, {useState, useEffect} from 'react';
import './Contact.css';
import Caption from '../Caption/Caption';
import {useNavigate} from 'react-router-dom';
import {useInView} from 'react-intersection-observer';

const encode = (data) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
};

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
		'bot-field': '',
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const {ref: contactRef, inView: contactInView} = useInView();

	let navigate = useNavigate();

	const handleSubmit = (e) => {
		setIsSubmitted(true);
		e.preventDefault();
	};
	useEffect(() => {
		const isValid = formData['bot-field'] === '';
		if (!isValid) {
			alert('Are you sure you are a human?');
		} else if (isSubmitted) {
			fetch('/', {
				method: 'POST',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				body: encode({'form-name': 'contact', ...formData}),
			})
				.then(() => {
					navigate('/thank-you');
				})
				.then(() => setIsSubmitted(false))
				.then(() =>
					setFormData({name: '', email: '', message: '', 'bot-field': ''})
				)
				.catch(() => navigate('/sorry'));
		}
	}, [formData, isSubmitted, navigate]);

	const handleChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};

	return (
		<section id='contact'>
			<div
				ref={contactRef}
				className={`container content__container about__container contact__container fade-enter ${
					contactInView && 'fade-enter-active'
				}`}
			>
				<Caption caption='Get In Touch' icon='contact' />
				<h3 className='text-light'>Let's work together!</h3>
				<form
					id='contact-form'
					onSubmit={handleSubmit}
					data-netlify='true'
					name='contact'
					method='POST'
					action='/thank-you'
					netlify-honeypot='bot-field'
				>
					<div hidden>
						<input name='bot-field' value='' readOnly />
					</div>

					<input type='hidden' name='form-name' value='contact' />
					<div hidden>
						<input name='bot-field' value='' readOnly />
					</div>

					<div className='fields'>
						<div className='field'>
							<input
								title='your name'
								type='text'
								name='name'
								id='name'
								placeholder='Name *'
								required
								value={formData.name}
								onChange={handleChange}
							/>
						</div>
						<div className='field'>
							<input
								title='your email'
								type='email'
								name='email'
								id='email'
								placeholder='Email *'
								required
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<div className='field'>
							<textarea
								title='your message'
								name='message'
								id='message'
								placeholder='Message *'
								rows='6'
								required
								value={formData.message}
								onChange={handleChange}
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
