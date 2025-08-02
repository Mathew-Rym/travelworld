// Import local images from assets for reliable offline usage
import tourImg01 from '../assets/images/tour-img01.jpg';
import tourImg02 from '../assets/images/tour-img02.jpg';
import tourImg03 from '../assets/images/tour-img03.jpg';
import tourImg04 from '../assets/images/tour-img04.jpg';

const mockBlogs = [
  {
    _id: 'blog-1',
    title: 'The Great Wildebeest Migration',
    description: 'Witness the greatest wildlife spectacle on earth as over a million wildebeest cross the Mara River in Kenya. This annual migration between Tanzania and Kenya is one of the most incredible natural events on the planet.',
    photo: tourImg01,
    featured: true,
    createdAt: '2023-07-15T10:00:00Z',
    author: 'Travel World Team',
    readTime: '5 min read',
    tags: ['Wildlife', 'Kenya', 'Safari']
  },
  {
    _id: 'blog-2',
    title: 'Diani Beach: Kenya\'s Coastal Paradise',
    description: 'Discover the pristine white sands and turquoise waters of Diani Beach, a true tropical paradise on Kenya\'s south coast. Perfect for relaxation, water sports, and experiencing Swahili culture.',
    photo: tourImg02,
    featured: true,
    createdAt: '2023-07-20T14:30:00Z',
    author: 'Travel World Team',
    readTime: '4 min read',
    tags: ['Beach', 'Coast', 'Relaxation']
  },
  {
    _id: 'blog-3',
    title: 'Climbing Mount Kenya',
    description: 'A comprehensive guide to trekking Africa\'s second highest peak. Mount Kenya offers diverse ecosystems, from rainforest to alpine meadows, and stunning glacial peaks at Point Lenana.',
    photo: tourImg03,
    featured: false,
    createdAt: '2023-07-25T09:15:00Z',
    author: 'Travel World Team',
    readTime: '7 min read',
    tags: ['Hiking', 'Mountains', 'Adventure']
  },
  {
    _id: 'blog-4',
    title: 'The Magic of Lamu Island',
    description: 'Step back in time in Lamu, where donkeys outnumber cars and Swahili culture thrives in the narrow streets of this UNESCO World Heritage site. Experience the unique blend of African, Arab, and Indian influences.',
    photo: tourImg04,
    featured: true,
    createdAt: '2023-08-01T16:45:00Z',
    author: 'Travel World Team',
    readTime: '6 min read',
    tags: ['Culture', 'History', 'Island']
  }
];

export default mockBlogs;
