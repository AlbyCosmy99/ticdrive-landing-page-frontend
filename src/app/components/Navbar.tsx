import Link from 'next/link'
import Logo from '../../../assets/logo.svg'
import SignUpButton from '../components/SignUpButton'
const NavBar = () => {
    return (
        <div className="bg-white flex justify-between items-center my-6 pr-6 pl-5 lg:px-20">
            <Link className='m-1' href='/' passHref>
                <Logo /> 
            </Link>
            <Link href='#registrati' passHref><SignUpButton /></Link>
        </div>
    )
}

export default NavBar