interface HowItWorksCardProps {
    title: string;
    description: string;
    svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({title,description,svg: SvgIcon}) => {
    return (
        <div className='text-center flex flex-col justify-center items-center gap-2 flex-1'>
            <h3 className='font-bold text-tic text-2xl'>{title}</h3>
            <p className='text-tic mb-6 three-line-text'>{description}</p>
            <SvgIcon className='mb-4' />
        </div>
    )
}

export default HowItWorksCard