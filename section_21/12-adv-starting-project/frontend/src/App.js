import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import EditEventPage from './pages/EditEvent';
import EventDetailPage from './pages/EventDetail';
import EventsPage from './pages/Events';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import { loader as eventsLoader } from './pages/Events';
import { loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetail';
import { action as manipulateEventAction } from './components/EventForm';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />},
      {
        path: 'events',
        element: <EventsRootLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage />, action: deleteEventAction },
              { path: 'edit', element: <EditEventPage />, action: manipulateEventAction }
            ]
          },
          { path: 'new', element: <NewEventPage />, action: manipulateEventAction }
        ]
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} / >
  );
}

export default App;
