import React, { useState } from 'react'
import './CaseTracking.css'
const CaseTracking = () => {
  const [cases, setCases] = useState([
    {
        caseId: 1,
        title: 'ABC vs XYZ Corp',
        status: 'In Progress',
        nextHearingDate: '2024-09-15',
        timeline: [
            { date: '2024-07-01', event: 'Case Filed' },
            { date: '2024-07-15', event: 'First Hearing' },
            { date: '2024-08-01', event: 'Evidence Submitted' },
        ],
    },
]);

const [selectedCase, setSelectedCase] = useState(null);

const selectCase = (caseId) => {
    const selected = cases.find((c) => c.caseId === caseId);
    setSelectedCase(selected);
};

  return (
    <div className="Case-Container">
      <h2>Case Tracking</h2>
      <div className="case-list">
                {cases.map((caseItem) => (
                    <div 
                        key={caseItem.caseId} 
                        className="case-item" 
                        onClick={() => selectCase(caseItem.caseId)}
                    >
                        <h3>{caseItem.title}</h3>
                        <p>Status: {caseItem.status}</p>
                        <p>Next Hearing: {caseItem.nextHearingDate}</p>
                    </div>
                ))}
            </div>

            {selectedCase && (
                <div className="case-details">
                    <h3>Case Details: {selectedCase.title}</h3>
                    <p>Status: {selectedCase.status}</p>
                    <p>Next Hearing Date: {selectedCase.nextHearingDate}</p>
                    <h4>Timeline</h4>
                    <ul>
                        {selectedCase.timeline.map((event, index) => (
                            <li key={index}>
                                <strong>{event.date}</strong>: {event.event}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

  )
}

export default CaseTracking