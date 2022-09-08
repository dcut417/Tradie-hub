import React from 'react'
import styles from './JobList.module.css';
import NoteList from './NoteList';
import { useState } from 'react';

export default function JobList({jobs, onJobStatusChanged, onRemove}) {
    if (jobs && jobs.length > 0) {
        return jobs.map((job, index) => 
            <JobItem key={index}
            job={job} 
            onChange={e => onJobStatusChanged(index, e.target.checked)} 
            onRemove={() => onRemove(index)} />);
    }
}

function JobItem({ job, onChange, onRemove }) {
    const initialNotes = [ "Big job" ];

    const [notes, setNotes] = useState(initialNotes);
  
    function handleAddNote(description) {
      setNotes([
        ...notes, 
        {
          description
        }
      ]);
    }
  
    function handleRemoveNote(index) {
      const newNotes = [...notes];
      newNotes.splice(index, 1);
      setNotes(newNotes);
    }

    return (
        <div className={styles.job}>
            <label className={job.isComplete ? styles.done : undefined}>
                <input type="checkbox"
                    checked={job.isComplete}
                    onChange={onChange} />
                {job.description}
                {job.isComplete && <span> (Completed!)</span>}
            </label>
            <NoteList notes={notes} onRemove={handleRemoveNote}/>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
}

function expand({ job, onChange, onRemove }) {

}