import React from 'react';

const RegistrationConfirmation: React.FC = () => {
  return (
    <div style={{ padding: '1em', textAlign: 'center', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
      <p style={{ fontSize: '1.2em', color: '#333', fontWeight: 'bold' }}>
        Iscrizione avvenuta con successo!
      </p>
      <p style={{ fontSize: '1em', color: '#555' }}>
        Conferma la tua email per ricevere lo sconto del 15% e rimanere sempre aggiornato.
      </p>
    </div>
  );
};

export default RegistrationConfirmation;
