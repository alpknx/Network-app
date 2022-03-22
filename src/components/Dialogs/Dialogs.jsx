import cl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogITem';
import MessageItem from './MessageItem/MessageItem';
import AddMessage from './AddMessage/AddMessage';
import AddMessageContainer from './AddMessage/AddMessageContainer';

const Dialogs = (props) => {
	let state = props.messagesPage;

	let dialogElements = state.dialogsData.map(dialog=> <DialogItem img={dialog.img} name={dialog.name} id={dialog.id}/>);

	let messageElements = state.messagesData.map(messageItem=> <MessageItem img={messageItem.img} message={messageItem.message}/>);
		
	return (
		<div className={cl.dialogs_page}>
			<div className={cl.header_page}>
				<h2>Dialogs</h2>
			</div>
			<div className={cl.message_section}>
				<ul className={cl.dialogs_list}>
					{dialogElements}
				</ul>
				<ul className={cl.messages_list}>
				{messageElements}
				</ul>
			</div>
			<AddMessageContainer reduxStore={props.reduxStore}/>
		</div>
	);
}

export default Dialogs;
