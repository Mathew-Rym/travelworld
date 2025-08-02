const mockTours = [
  {
    _id: '1',
    title: 'Maasai Mara Safari Adventure',
    city: 'Maasai Mara',
    address: 'Narok County, Kenya',
    price: 1200,
    maxGroupSize: 6,
    desc: 'Experience the thrill of the African savanna with our 3-day Maasai Mara safari. Witness the Big Five in their natural habitat.',
    reviews: [
      { username: 'safari_lover', review: 'Amazing experience! Saw all the Big Five.' }
    ],
    avgRating: 4.8,
    photo: 'https://images.unsplash.com/photo-1523805009345-7448405a9f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: true,
    distance: 270,
    duration: 3
  },
  {
    _id: '2',
    title: 'Diani Beach Getaway',
    city: 'Diani',
    address: 'Kwale County, Kenya',
    price: 850,
    maxGroupSize: 4,
    desc: 'Relax on the pristine white sands of Diani Beach with our 5-day beach package. Includes water sports and island excursions.',
    reviews: [
      { username: 'beach_bum', review: 'Paradise on earth! The water is crystal clear.' }
    ],
    avgRating: 4.9,
    photo: 'https://images.unsplash.com/photo-1583422409513-5b4e47493f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    featured: true,
    distance: 30,
    duration: 5
  },
  {
    _id: '3',
    title: 'Mount Kenya Trek',
    city: 'Nanyuki',
    address: 'Mount Kenya National Park',
    price: 1500,
    maxGroupSize: 8,
    desc: 'Challenge yourself with a 5-day trek to Point Lenana, the third highest peak of Mount Kenya. Experience diverse ecosystems and stunning views.',
    reviews: [
      { username: 'mountain_climber', review: 'Tough but rewarding. The guides were excellent!' }
    ],
    avgRating: 4.7,
    photo: 'https://images.unsplash.com/photo-1581433079987-179a75d1a928?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: true,
    distance: 175,
    duration: 5
  },
  {
    _id: '4',
    title: 'Lamu Cultural Tour',
    city: 'Lamu',
    address: 'Lamu Archipelago',
    price: 950,
    maxGroupSize: 6,
    desc: 'Immerse yourself in Swahili culture with our 4-day tour of Lamu Island. Explore the old town, enjoy dhow rides, and experience local traditions.',
    reviews: [
      { username: 'culture_explorer', review: 'A step back in time. The Swahili culture is fascinating.' }
    ],
    avgRating: 4.8,
    photo: 'https://images.unsplash.com/photo-1577738072362-5d32c9603823?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: true,
    distance: 480,
    duration: 4
  }
];

export default mockTours;
