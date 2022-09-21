import { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EnrollShow = ({ id, course_id, user_id }) => {
  const [user, setUser] = useState({ first_name: '' , last_name: '' })
  const { courseId } = useParams()

  useEffect( () => {
    axios.get(`/api/users/${user_id}`)
      .then( res => setUser( res.data ))
      .catch( err => console.log(err))
  }, [])

  const { first_name, last_name } = user
  const fullName = first_name + ' ' + last_name
  return (
    <>
      <ListGroup.Item>
        {fullName}
        <Button variant='warning'>Edit</Button>
        <Button variant='danger'>Delete</Button>
      </ListGroup.Item>
    </>
  )
}

export default EnrollShow;