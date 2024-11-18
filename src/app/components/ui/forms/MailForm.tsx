"use client"

import handleGAInputMailClick from "@/app/services/googleAnalytics/handleGAInputMailClick";
import RegistrationConfirmation from "../../RegistrationConfirmation";
import SignUpButton from "../../SignUpButton";
import handleGAMailTypingEvent from "@/app/services/googleAnalytics/handleGAMailTypingEvent";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MailForm = () => {
    const [email, setEmail] = useState("");
    const [progressIsVisible, setProgressIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [,setPrivacyAccepted] = useState(false);

    const router = useRouter();
    
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        handleGAMailTypingEvent(e.target.value);
    };

    const sendEmail = async () => {
        setLoading(true);
        try {
          const res = await fetch(`https://landing-page-users-ticdrive-backend.onrender.com/api/mail/confirmation`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
          });
    
          const data = await res.json();
          setLoading(false);
          
          if (data.confirmed) {
            setProgressIsVisible(true);
            sessionStorage.setItem('token', data.token);
          } else {
            router.replace('mail/subscription-sent');
          }
        } catch (error) {
          console.error("Failed to send email confirmation:", error);
          setLoading(false);
        }
      };
    return (
        <>
            <div className='w-full bg-white' style={{height: '5rem'}}></div>
            <section
            id="registrati"
            aria-labelledby="signup-heading"
            >
                <div className={`bg-drive w-full h-100 flex flex-col justify-center items-center p-8 ${progressIsVisible && 'lg:pb-10'} lg:p-20 lg:pr-80 gap-6 lg:pl-40`}>
                    <h3 className="text-2xl lg:text-4xl pt-2 text-white bg-drive self-start uppercase animate-bounce">
                        🎉 Oltre <span className="font-bold text-yellow-400">1000</span> iscritti! 🎉
                    </h3>
                    <h2 id="signup-heading" className="text-white text-2xl lg:text-4xl font-bold lg:pr-40">
                        Iscriviti gratuitamente alla nostra lista d&apos; attesa per rimanere aggiornato e ottenere uno <span className='underline'>sconto speciale del 15%</span> sulla tua prima prenotazione!
                    </h2>
                    <div className="text-white self-start">
                        <h3 className="text-xl">Sconto valido per un servizio qualsiasi. Tagliando, allineamento gomme, cambio olio, ecc. <span className="underline">Scegli tu</span>!</h3>
                    </div>
                    <div>
                        <h4>
                            Hai dubbi? Scrivici su{" "}
                            <a href="mailto:infoticdrive@gmail.com" className="underline underline-offset-2">
                                infoticdrive@gmail.com
                            </a>
                            !
                        </h4>
                        <h4>Rispondiamo all&apos; istante!</h4>
                    </div>
                    <form
                        className="flex flex-col items-start self-start gap-3"
                        onSubmit={(event) => {
                        event.preventDefault();
                        sendEmail();
                        setEmail("");
                        setPrivacyAccepted(false);
                        }}
                        aria-live="polite"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center gap-2 items-start self-start">
                        <label htmlFor="email" className="sr-only">Inserisci la tua email</label>
                        <input
                            id="email"
                            placeholder="email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="h-fit w-80 p-4 rounded-3xl h-full"
                            required
                            aria-required="true"
                            onClick={handleGAInputMailClick}
                        />
                        <SignUpButton revertStyle={true} aria-label="Iscriviti gratuitamente alla newsletter" />
                        </div>
                    </form>

                    {loading && !progressIsVisible && (
                        <div role="status" className="flex w-full">
                        <div className="flex-1 flex justify-center items-center">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#737373"/>
                            </svg>
                        </div>
                        <div className="flex-1 hidden lg:block"></div>
                        </div>
                    )}

                    {progressIsVisible && (
                        <div className="relative w-full">
                        <div aria-live="assertive" aria-label="Registration Confirmation">
                            <RegistrationConfirmation setProgressIsVisible={setProgressIsVisible}/>
                        </div>
                        <button className="absolute top-2 right-3 text-tic cursor-pointer" onClick={() => setProgressIsVisible(false)} aria-label="Close confirmation">
                            X
                        </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default MailForm