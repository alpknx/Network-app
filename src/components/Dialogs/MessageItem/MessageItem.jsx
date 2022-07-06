import cl from './MessageItem.module.css';

const MessageItem = (props) => {
  return (
    <li className={cl.message_item}>
      <div className={cl.left_menu_icon}>
        <img src={props.img} alt='menu_icon' />
      </div>
      {props.message}
    </li>
  );
};

export default MessageItem;
