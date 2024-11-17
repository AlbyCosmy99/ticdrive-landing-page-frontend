const handleGABannerClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'banner_promo', {
        event_category: 'Banner',
        event_label: '15% Discount Banner',
        iat: new Date()
      });
    } else {
      console.warn("Google Analytics 'gtag' not initialized.");
    }
};

export default handleGABannerClick