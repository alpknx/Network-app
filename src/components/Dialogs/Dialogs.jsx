import cl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogITem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

	let dialogsData = [
		{id: 1, name: 'Alexander'},
		{id: 2, name: 'Sergey'},
		{id: 3, name: 'Sveta'},
		{id: 4, name: 'Julia'},
		{id: 5, name: 'Stepan'}
	];

	let messagesData = [
		{id: 1, message: 'Hello'},
		{id: 2, message: 'Check this linnk'},
		{id: 3, message: 'Once upon a time'},
		{id: 4, message: 'I missed about you'},
		{id: 5, message: 'Once upon a time'}
	];

	let dialogElelments = dialogsData.map(dialog=> <DialogItem name={Dialogs.name} id={dialog.id}/>);

	let messageElements = messagesData.map(messageItem=> <MessageItem message={messageItem.message}/>);
		
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
