import React from 'react';
import './Contact.css';
import Caption from '../Caption/Caption';
import {useNavigate} from 'react-router-dom';

const encode = (data) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
};

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name: '', email: '', message: ''};
	}

	handleSubmit = (e) => {
		let navigate = useNavigate();
		fetch('/', {
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: encode({'form-name': 'contact', ...this.state}),
		})
			.then(() => navigate('/thank-you/'))
			.catch((error) => alert(error));

		e.preventDefault();
	};

	handleChange = (e) => this.setState({[e.target.name]: e.target.value});

	render() {
		const {name, email, message} = this.state;

		return (
			<section id='contact'>
				<div className='container content__container about__container contact__container'>
					<Caption caption='Get In Touch' icon='contact' />
					<h3 className='text-light'>Let's work together!</h3>
					<form
						onSubmit={this.handleSubmit}
						data-netlify='true'
						name='contactv1'
						method='POST'
						netlify-honeypot='bot-field'
					>
						<input type='hidden' name='form-name' value='contactv1' />
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
									value={name}
									onChange={this.handleChange}
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
									value={email}
									onChange={this.handleChange}
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
									value={message}
									onChange={this.handleChange}
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
	}
}
export default Contact;
