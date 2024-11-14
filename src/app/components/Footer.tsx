const Footer = () => {
    return (
        <footer className="bg-drive flex flex-col justify-center items-center pt-2">
            <div className=' flex flex-col lg:flex-row justify-center items-center gap-4 text-white'>
                <a href="https://www.iubenda.com/privacy-policy/25498782/legal">Privacy Policy</a>
                <a href="https://www.iubenda.com/privacy-policy/25498782/cookie-policy">Cookie Policy</a>
                <a href="https://www.iubenda.com/termini-e-condizioni/25498782">Terms and Conditions</a>
            </div>
            <hr className="bg-white w-full my-1" />
            <p className="text-white text-center p-2 text-sm">
                &copy; Copyright - All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer