import logo from './logo.svg';
import './App.css';
import { BsHammer } from "react-icons/bs";
import JobList from './JobList';
import { useState } from 'react';

function App() {

  const initialJobs = [
    { id: 1, description: "Fix toilet", isComplete: true, creationDateTime: "01-01-2022 11:00", clientName: "Margit the Fell Omen", contact: "0217845983" }, 
    { id: 2, description: "Fix electrical", isComplete: false, creationDateTime: "12-08-2022 19:47", clientName: "Mohg Lord of Blood", contact: "0800247863" }, 
    { id: 3, description: "Fix sink", isComplete: true, creationDateTime: "31-06-2022 08:03", clientName: "Malenia Blade of Miquella", contact: "0278943612" }
  ];

  const [jobs, setJobs] = useState(initialJobs);

  function handleJobStatusChanged(index, isComplete) {
    const newJobs = [...jobs];
    newJobs[index] = { ...jobs[index], isComplete };
    setJobs(newJobs);
  }

  function handleAddJob(description) {
    setJobs([
      ...jobs, 
      {
        description,
        isComplete: false
      }
    ]);
  }

  function handleRemoveJob(index) {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    setJobs(newJobs);
  }

  return (
    <div className="App">
      <header className="App-header">
        <BsHammer className='App-logo' alt="hammer"/>
        <p>
          Tradie Hub
        </p>
        
      </header>
      <div className="box">
        <h1>My Jobs</h1>
        <JobList items={jobs}
        onJobStatusChanged={handleJobStatusChanged} 
        onRemove={handleRemoveJob} />
      </div>
    </div>
  );
}

export default App;
