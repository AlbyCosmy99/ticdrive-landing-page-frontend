import React, { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress";

const RegistrationConfirmation: React.FC<{ setProgressIsVisible: (loading: boolean) => void }> = ({ setProgressIsVisible }) => {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        if (progress > 0) {
            const timer = setInterval(() => {
                setProgress((prevProgress) => Math.max(prevProgress - 0.6, 0));
            }, 100);

            return () => clearInterval(timer);
        } else {
            setProgressIsVisible(false);
        }
    }, [progress, setProgressIsVisible]);

    return (
        progress !== 0 && (
            <div style={{ padding: '1em', textAlign: 'center', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
                <p style={{ fontSize: '1.2em', color: '#00BF63', fontWeight: 'bold' }}>
                    Iscrizione avvenuta con successo!
                </p>
                <p style={{ fontSize: '1em', color: '#737373' }}>
                    Conferma la tua email per ricevere lo sconto del 15% e rimanere sempre aggiornato.
                </p>
                <div className='mt-2'>
                    <Progress value={progress} />
                </div>
            </div>
        )
    );
};

export default RegistrationConfirmation;
