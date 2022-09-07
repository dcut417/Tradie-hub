import React from 'react'
import styles from './JobList.module.css';

export default function JobList({items, onJobStatusChanged, onRemove}) {
    if (items && items.length > 0) {
        return items.map((job, index) => 
            <JobItem key={index}
            job={job} 
            onChange={e => onJobStatusChanged(index, e.target.checked)} 
            onRemove={() => onRemove(index)} />);
    }
}

function JobItem({ job, onChange, onRemove}) {
    return (
        <div className={styles.job}>
            <label className={job.isComplete ? styles.done : undefined}>
                <input type="checkbox"
                    checked={job.isComplete}
                    onChange={onChange} />
                {job.description}
                {job.isComplete && <span> (Completed!)</span>}
            </label>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
}