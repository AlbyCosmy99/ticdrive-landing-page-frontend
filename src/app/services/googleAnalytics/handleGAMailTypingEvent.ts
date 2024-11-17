const handleGAMailTypingEvent = (typing: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'email_typing', {
        event_category: 'Email Typing',
        event_label: 'Typing on email input',
        typing,
        iat: new Date()
      });
    } else {
      console.warn("Google Analytics 'gtag' not initialized.");
    }
}; 

export default handleGAMailTypingEvent