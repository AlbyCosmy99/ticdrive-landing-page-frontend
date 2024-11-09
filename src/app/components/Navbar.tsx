import Logo from '../../../assets/logo.svg'
import SignUpButton from '../components/SignUpButton'
const NavBar = () => {
    return (
        <div className="bg-white flex justify-between items-center m-6 rounded-full px-6 lg:mx-24 mx-10">
            <div className='m-1'>
                <Logo /> 
            </div>
            <a href='#registrati'><SignUpButton /></a>
        </div>
    )
}

export default NavBar