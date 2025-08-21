import React, { useEffect, useState } from 'react'
import './Casemanage.css'
const Casemanage = () => {
  const [cases, setCases] = useState([]);
  useEffect(() => {
    const fetchCases = async () => {
        const lawyerCases = [
            { id: 1, title: 'Case 1', description: 'Details about case 1' },
            { id: 2, title: 'Case 2', description: 'Details about case 2' },
            { id: 3, title: 'Case 3', description: 'Details about case 3' }
        ];
        setCases(lawyerCases);
    };

    fetchCases();
}, []); 

const numberOfCases = cases.length;
  return (
    <section className='Casemanage'>
         <h2>List of Cases</h2> 
         <p>You have { numberOfCases } cases.</p>
         <ul>
                    {cases.map((caseItem) => (
                        <li key={caseItem.id}>
                            <h3>{caseItem.title}</h3>
                            <p>{caseItem.description}</p>
                        </li>
                    ))}
                </ul>
    </section>
  )
}

export default Casemanage