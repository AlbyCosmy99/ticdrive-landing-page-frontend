import Link from 'next/link'
import Logo from '../../../assets/logo.svg'
import SignUpButton from '../components/SignUpButton'
const NavBar = () => {
    return (
        <div className="bg-white flex justify-between items-center m-6 rounded-full pr-6 pl-4 lg:mx-24 mx-6 lg:px-10 lg:mx-20">
            <Link className='m-1' href='/' passHref>
                <Logo /> 
            </Link>
            <Link href='#registrati' passHref><SignUpButton /></Link>
        </div>
    )
}

export default NavBar