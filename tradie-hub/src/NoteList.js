import React from 'react'
import styles from './NoteList.module.css';

export default function NoteList({notes, onRemove}) {
    if (notes && notes.length > 0) {
        return notes.map((note, index) => 
            <NoteItem key={index}
            note={note} 
            onRemove={() => onRemove(index)} />);
    }
}

function NoteItem({ note, onRemove}) {
    return (
        <div className={styles.note}>
            <label>
                {note}
            </label>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
}