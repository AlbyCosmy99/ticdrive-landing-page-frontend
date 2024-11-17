const handleGAInputMailClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'email_input_click', {
        event_category: 'Email Input',
        event_label: 'Clicked on email input',
        iat: new Date()
      });
    } else {
      console.warn("Google Analytics 'gtag' not initialized.");
    }
};  

export default handleGAInputMailClick