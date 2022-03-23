import React from 'react';

const StoreContext = React.createContext(null);

export const Provider = (props) => {
	return(
		<StoreContext.Provider value={props.reduxStore}>
				{props.children}
			</StoreContext.Provider>
	);
}

export default StoreContext;