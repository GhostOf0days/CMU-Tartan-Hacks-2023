import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EventPage from './component/eventsPage/eventPage';
import LocalPage from './component/eventsPage/localIssues';
import IdeaPage from './component/eventsPage/ideaPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/eventPage',
		element: <EventPage />,
	},
	{
		path: '/localPage',
		element: <LocalPage />,
	},
	{
		path: '/ideaPage',
		element: <IdeaPage />,
	},
]);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);

reportWebVitals();
