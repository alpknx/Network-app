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
	return (
		<div className={cl.dialogs_page}>
			<div className={cl.header_page}>
				<h2>Dialogs</h2>
			</div>
			<div className={cl.message_section}>
				<ul className={cl.dialogs_list}>
					<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
					<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
					<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
					<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
					<DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
				</ul>
				<ul className={cl.messages_list}>
				<MessageItem message={messagesData[0].message}/>
				<MessageItem message={messagesData[1].message}/>
				<MessageItem message={messagesData[2].message}/>
				<MessageItem message={messagesData[3].message}/>
				<MessageItem message={messagesData[4].message}/>
				</ul>
			</div>
		</div>
	);
}

export default Dialogs;
