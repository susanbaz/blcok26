import React, { useEffect, useState } from 'react';

export default function SelectedContact({ contactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${contactId}`);
        const result = await response.json();
        console.log(result); // Test the response
        setContact(result); // Update the contact state
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, [contactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Selected Contact View</h2>
      <button onClick={() => setSelectedContactId(null)}>Go back to Contact List</button>
      <div>
        <strong>ID:</strong> {contact.id}
      </div>
      <div>
        <strong>Name:</strong> {contact.name}
      </div>
      <div>
        <strong>Email:</strong> {contact.email}
      </div>
      <div>
        <strong>Phone:</strong> {contact.phone}
      </div>
      {/* Render additional contact details here */}
    </div>
  );
}
