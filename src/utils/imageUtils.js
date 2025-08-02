// Default fallback images
const defaultImages = {
  blog: require('../assets/images/tour-img06.jpg').default,
  tour: require('../assets/images/tour-img01.jpg').default,
  user: require('../assets/images/user.png').default,
  logo: require('../assets/images/logo.png').default,
  hero: require('../assets/images/hero-img01.jpg').default
};

/**
 * Get a fallback image based on type
 * @param {string} type - The type of fallback image needed (blog, tour, user, logo, hero)
 * @returns {string} Path to the fallback image
 */
export const getFallbackImage = (type = 'tour') => {
  return defaultImages[type] || defaultImages.tour;
};

/**
 * Handle image loading errors by replacing with a fallback
 * @param {Event} e - The error event
 * @param {string} fallbackType - Type of fallback image to use
 */
export const handleImageError = (e, fallbackType = 'tour') => {
  if (!e.target) return;
  
  // Prevent infinite loop if fallback also fails
  if (e.target.getAttribute('data-fallback') === 'true') return;
  
  try {
    const fallback = getFallbackImage(fallbackType);
    e.target.onerror = null;
    e.target.src = fallback;
    e.target.alt = 'Travel World Image';
    e.target.setAttribute('data-fallback', 'true');
  } catch (error) {
    console.error('Error loading fallback image:', error);
  }
};
