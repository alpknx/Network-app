import cl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogITem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

	let dialogElelments = props.dialogsData.map(dialog=> <DialogItem name={Dialogs.name} id={dialog.id}/>);

	let messageElements = props.messagesData.map(messageItem=> <MessageItem message={messageItem.message}/>);
		
	return (
		<div className={cl.dialogs_page}>
			<div className={cl.header_page}>
				<h2>Dialogs</h2>
			</div>
			<div className={cl.message_section}>
				<ul className={cl.dialogs_list}>
					{dialogElelments}
				</ul>
				<ul className={cl.messages_list}>
				{messageElements}
				</ul>
			</div>
		</div>
	);
}

export default Dialogs;
