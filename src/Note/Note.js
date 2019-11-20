import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Note.css'
import UserContext from '../Contexts'

export default function Note(props) {
  return (
    <UserContext.Consumer>
      {({notes}) => (
    <div className='Note'>
      <h2 className='Note__title'>
        <Link to={`/note/${notes.id}`}>
          {notes.name}
        </Link>
      </h2>
      <button className='Note__delete' type='button'>
        <FontAwesomeIcon icon='trash-alt' />
        {' '}
        remove
      </button>
      <div className='Note__dates'>
        <div className='Note__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
            {format(notes.modified, 'Do MMM YYYY')}
          </span>
        </div>
      </div>
    </div>
    )}
    </UserContext.Consumer>
  )
}
