import { useEffect, useState } from 'react';
import Group1 from '../../../../assets/mainGroup.svg';
import HalfServicesGroup from '../../../../assets/halfServicesGroup.svg';
import MiddleScreensGroup from '../../../../assets/middleScreensGroup.svg';

const Section1: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [messagesShown, setMessagesShown] = useState<number[]>([]);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  const messages: string[] = [
    "...che trovare un'officina dovrebbe essere più semplice?",
    "...che tutto questo possa essere fatto più velocemente?",
    "...che dovresti spendere meno per avere il servizio migliore?",
    "...che il tuo tempo è prezioso e non andrebbe sprecato?",
    "...che sarebbe fantastico trovare tutto in un unico posto?",
    "...che non dovresti avere stress per organizzare la manutenzione?",
    "...che prenotare dovrebbe richiedere solo pochi click?",
    "...che vedere subito le migliori offerte farebbe la differenza?",
    "...che leggere le recensioni ti aiuterebbe a scegliere meglio?",
    "...che prenotare in modo trasparente e sicuro dovrebbe essere la norma?"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        let index: number;
        do {
          index = Math.floor(Math.random() * messages.length);
        } while (messagesShown.includes(index));

        setMessageIndex(index);
        setMessagesShown((prev) => {
          const newShown = [...prev, index];
          return newShown.length === messages.length ? [] : newShown;
        });

        setIsFadingOut(false);
      }, 500); // Durata dell'uscita
    }, 4000);
    return () => clearInterval(interval);
  }, [messagesShown]);

  return (
    <section
      id="top"
      className="h-full flex flex-col rounded-b-3xl min-h-screen"
      style={{ backgroundColor: '#00BF63' }}
    >
      <main className="flex flex-col justify-between items-center gap-4 lg:gap-2 flex-1 text-center text-white text-lg p-8 pb-0">
        <div>
          <h2 className="text-2xl lg:text-3xl">Hai mai pensato...</h2>
          <p
            className={`text-xl lg:text-2xl font-medium transition-opacity duration-500 ease-in-out ${
              isFadingOut ? "opacity-0" : "opacity-100"
            }`}
          >
            {messages[messageIndex]}
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight lg:flex lg:justify-center lg:items-center lg:flex-col lg:gap-2 mt-4">
            <span>Trova la Migliore Officina</span>{' '}
            <span>Vicino a Te in Pochi Click</span>
          </h1>
        </div>
        <div className="flex justify-center items-center mt-4 mx-4 lg:mt-14 lg:mx-20 lg:mb-0">
          <div className="hidden lg:block max-lg:hidden">
            <Group1 />
          </div>
          <div className="hidden max-lg:block max-md:hidden">
            <MiddleScreensGroup />
          </div>
          <div className="hidden max-md:block">
            <HalfServicesGroup />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Section1;
