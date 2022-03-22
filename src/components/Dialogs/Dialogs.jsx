import cl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogITem';
import MessageItem from './MessageItem/MessageItem';
import AddMessage from './AddMessage/AddMessage';

const Dialogs = (props) => {

	let dialogElements = props.dialogsData.map(dialog=> <DialogItem img={dialog.img} name={dialog.name} id={dialog.id}/>);

	let messageElements = props.messagesData.map(messageItem=> <MessageItem img={messageItem.img} message={messageItem.message}/>);
		
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
			<AddMessage onAddMessage = {props.onAddMessage}
							updateNewMessageText={props.updateNewMessageText}/>
		</div>
	);
}

export default Dialogs;
