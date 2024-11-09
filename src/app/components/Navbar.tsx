import Logo from '../../../assets/logo.svg'
import SignUpButton from '../components/SignUpButton'
const NavBar = () => {
    return (
        <div className="bg-white flex justify-between items-center m-6 rounded-full px-10" style={{marginRight: '6rem', marginLeft: '6rem'}}>
            <div className='m-1'>
                <Logo /> 
            </div>
            <a href='#section3'><SignUpButton /></a>
        </div>
    )
}

export default NavBar