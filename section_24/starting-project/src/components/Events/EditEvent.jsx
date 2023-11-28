import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';

import { fetchEvent } from '../../util/http.js';

export default function EditEvent() {
  const navigate = useNavigate();

  const params = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['event', params.id],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
  })

  function handleSubmit(formData) { }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isPending) {
    content = <div className="center">
      <LoadingIndicator />
    </div>
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock title='Failed to load event' message={error.info?.message || 'Failed to fetch data'} />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    )
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    )
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}
