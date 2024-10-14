import axios from 'axios';

const PEXELS_API_KEY = 'MZTvQlA0hgaBVLIkl7JRtASWEaXJ8aHiD4CoAInrU7hhtaK8o6yFIVwV'; // Replace with your actual Pexels API key

export const getImageUrl = async (query: string): Promise<string> => {
  try {
    const response = await axios.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    });

    if (response.data.photos && response.data.photos.length > 0) {
      return response.data.photos[0].src.medium;
    } else {
      // Return a default image URL if no image is found
      return 'https://via.placeholder.com/400x300?text=No+Image+Found';
    }
  } catch (error) {
    console.error('Error fetching image:', error);
    // Return a default image URL in case of an error
    return 'https://via.placeholder.com/400x300?text=Error+Loading+Image';
  }
};