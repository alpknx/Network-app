import React from 'react';
import cl from './AddMessage.module.css'
import {Formik, Form, Field} from 'formik';

const AddMessage = (props) => {

	let newMessageElement = React.createRef();
	return(
		<div className={cl.add_message}>
			<AddMessageForm sendMessage={props.sendMessage}/>
		</div>
	);

}

const AddMessageForm = (props) => {
	return (
			<Formik initialValues={{newMessageBody: ""}}
					onSubmit={(values) => {
							props.sendMessage(values.newMessageBody);
					}
					}>
				{() => (
					<Form>
							<div className = {cl.message_textarea}>
								<Field component={'textarea'}
										name={'newMessageBody'}
										placeholder={'Enter your message'}/>
							</div>
	
							<div className={cl.add_message_button}>
								<button type={'submit'}>Send</button>
							</div>
					</Form>
				)}
			</Formik>
		)
	}

export default AddMessage;
