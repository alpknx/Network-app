import cl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogITem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
	return (
		<div className={cl.dialogs_page}>
			<div className={cl.header_page}>
				<h2>Dialogs</h2>
			</div>
			<div className={cl.message_section}>
				<ul className={cl.dialogs_list}>
					<DialogItem name="Alexander" id="1"/>
					<DialogItem name="Sergey" id="2"/>
					<DialogItem name="Sveta" id="3"/>
					<DialogItem name="Julia" id="4"/>
					<DialogItem name="Stepan" id="5"/>
				</ul>
				<ul className={cl.messages_list}>
				<MessageItem message="Hello"/>
				<MessageItem message="Check this linnk"/>
				<MessageItem message="Once upon a time"/>
				<MessageItem message="I missed about you"/>
				<MessageItem message="Once upon a time"/>
				</ul>
			</div>
		</div>
	);
}

export default Dialogs;
