import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

import Header from '../Header.jsx';
import { useState } from 'react';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const params = useParams();
  const navigate = useNavigate()

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['event', params.id],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
  })

  const { mutate, isPending: isPendingDeletion, isError: isErrorDeleting, error: deleteError } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'], refetchType: 'none' });
      navigate('/events')
    }
  })

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

  function handleDelete() {
    mutate({ id: params.id });
  }

  let content;

  if (isPending) {
    content = <div id="event-details-content" className="center">
      <p>Loading event...</p>
    </div>
  }

  if (isError) {
    content = <div id="event-details-content" className="center">
      <ErrorBlock title='Failed to load event' message={error.info?.message || 'Failed to fetch data'} />
    </div>
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    content = (<>
      <header>
        <h1>{data.title}</h1>
        <nav>
          <button onClick={handleStartDelete}>Delete</button>
          <Link to="edit">Edit</Link>
        </nav>
      </header>
      <div id="event-details-content">
        <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
        <div id="event-details-info">
          <div>
            <p id="event-details-location">{data.location}</p>
            <time dateTime={`${data.date}T${data.time}`}>{formattedDate} @ {data.time}</time>
          </div>
          <p id="event-details-description">{data.description}</p>
        </div>
      </div>
    </>)
  }

  return (
    <>
      {isDeleting &&
        <Modal onClose={handleStopDelete}>
          <h2> Are you sure?</h2>
          <p>Do you want to delete this event? This action cannot be undone.</p>

          {isPendingDeletion && <p>Deleting, please wait...</p>}
          {!isPendingDeletion && (
            <div className="form-actions">
              <button className="button-text" onClick={handleStopDelete}>Cancel</button>
              <button className="button" onClick={handleDelete}>Delete</button>
            </div>
          )}
          {isErrorDeleting && <ErrorBlock title='Failed to delete event' message={deleteError.info?.message || 'Failed to delete event'} />}
        </Modal>
      }
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {content}
      </article>
    </>
  );
}
