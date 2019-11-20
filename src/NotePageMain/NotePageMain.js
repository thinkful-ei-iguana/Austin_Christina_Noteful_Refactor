import React from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import UserContext from '../Contexts'

export default function NotePageMain(UserContext) {
  return (
    <UserContext.Consumer>
    <section className='NotePageMain'>
      
      <Note
        id={this.note.id}
        name={this.note.name}
        modified={this.note.modified}
      />
      
     
      <div className='NotePageMain__content'>
        {this.note.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
    </section>
    </UserContext.Consumer>
  )
}

NotePageMain.defaultProps = {
  note: {
    content: '',
  }
}
