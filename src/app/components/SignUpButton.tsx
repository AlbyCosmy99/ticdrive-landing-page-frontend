import ArrowUp from '../../../assets/arrowUp.svg';

interface SignUpButtonProps {
  revertStyle?: boolean;
  onClick?: () => void;
}

const SignUpButton: React.FC<SignUpButtonProps> = ({revertStyle = false, onClick}) => {
  return (
    <button
      className={`flex gap-2 justify-center items-center h-fit p-3 px-5 rounded-full ${revertStyle ? 'bg-white' : 'bg-drive'}`}
      onClick={onClick}
    >
      <h2 className={`${revertStyle ? 'text-drive' : 'text-white'} lg:text-xl`}>
        Iscriviti ora
      </h2>
      <ArrowUp
        fill={`${revertStyle ? '#00bf63' : '#00bf63'}`}
        stroke={`${revertStyle ? '#00bf63' : ''}`}
      />
    </button>
  );
};

export default SignUpButton;
