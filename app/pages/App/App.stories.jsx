import React from 'react';

import App from './App';

export default {
	component: App,
	title: 'Pages/App',
	argTypes: {
		variant: {
			options: ['primary', 'secondary'],
			control: { type: 'radio' },
		},
	},
};

export const Primary = () => <App />;
