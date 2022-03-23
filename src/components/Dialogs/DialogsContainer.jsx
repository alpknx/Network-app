import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
	return (
		<StoreContext.Consumer>
			{(reduxStore) => {
				let state = reduxStore. getState().messagesPage;
				return(
					<Dialogs messagesPage={state}/>
				);
			}
		}
		</StoreContext.Consumer>
	);
}

export default DialogsContainer;
