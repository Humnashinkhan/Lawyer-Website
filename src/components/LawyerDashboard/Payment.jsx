import React, { useState } from 'react'
import './Payment.css'
const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const payments = [
    { id: 1, clientName: 'Humnashi', date: '2024-09-01', amount: 500, paymentMethod: 'Credit Card', status: 'Completed' },
    { id: 2, clientName: 'Aaira ', date: '2024-09-02', amount: 300, paymentMethod: 'Bank Transfer', status: 'Pending' },
  ];
        const selectPayment = (payment) => {
        setSelectedPayment(payment);
  };
  return (
    <div className='payment-container'>
        <h2>Payment Details</h2>
        <div className="payment-list">
        <table>
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} onClick={() => selectPayment(payment)}>
                <td>{payment.clientName}</td>
                <td>{payment.date}</td>
                <td>${payment.amount}</td>
                <td>{payment.paymentMethod}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedPayment && (
        <div className="payment-details">
          <h3>Payment Details</h3>
          <p><strong>Client Name:</strong> {selectedPayment.clientName}</p>
          <p><strong>Date:</strong> {selectedPayment.date}</p>
          <p><strong>Amount:</strong> ${selectedPayment.amount}</p>
          <p><strong>Payment Method:</strong> {selectedPayment.paymentMethod}</p>
          <p><strong>Status:</strong> {selectedPayment.status}</p>
        </div>
      )}

    </div>
  )
}

export default Payment