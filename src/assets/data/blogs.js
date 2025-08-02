import maasaiMara from "../images/tour-img01.jpg";
import dianiBeach from "../images/tour-img02.jpg";
import mountKenya from "../images/tour-img03.jpg";
import lamuIsland from "../images/tour-img04.jpg";
import greatRiftValley from "../images/tour-img05.jpg";
import amboseli from "../images/tour-img06.jpg";
import lakeNakuru from "../images/tour-img07.jpg";

const blogs = [
  {
    id: "01",
    title: "The Great Wildebeest Migration - Nature's Greatest Spectacle",
    content: `Experience one of the most incredible natural events on Earth - the Great Wildebeest Migration in Kenya's Maasai Mara. Each year, over two million wildebeest, zebras, and gazelles traverse the vast savannas in search of fresh grazing grounds, facing treacherous river crossings where crocodiles lie in wait. The best time to witness this awe-inspiring event is between July and October, when the herds cross the Mara River in dramatic fashion. Our expert guides will take you to prime viewing spots where you can witness nature's raw power and beauty up close. This is truly a bucket-list experience that showcases Kenya's incredible wildlife diversity.`,
    author: "SafariExpert",
    date: "2023-07-29",
    photo: maasaiMara,
    comments: [
      {
        name: "James Wilson",
        comment: "Saw the migration last year - absolutely breathtaking!",
      },
      {
        name: "Sarah Johnson",
        comment: "The river crossings are a must-see. Great article!",
      },
    ],
    featured: true,
  },
  {
    id: "02",
    title: "Diani Beach - Kenya's Pristine Coastal Paradise",
    content: `Discover the powder-soft white sands and crystal-clear turquoise waters of Diani Beach, consistently ranked among Africa's best beaches. Located on Kenya's south coast, Diani offers the perfect blend of relaxation and adventure. Spend your days snorkeling in the coral reefs, taking a sunset dhow cruise, or simply unwinding in a hammock under the swaying palm trees. The beach is lined with world-class resorts and vibrant beach bars where you can sample delicious Swahili cuisine. Don't miss the opportunity to visit the nearby Shimba Hills National Reserve for a different perspective of Kenya's diverse landscapes.`,
    author: "BeachLover",
    date: "2023-07-28",
    photo: dianiBeach,
    comments: [],
    featured: true,
  },
  {
    id: "03",
    title: "Mount Kenya - Conquering Africa's Second Highest Peak",
    content: `Challenge yourself with an unforgettable trek up Mount Kenya, Africa's second-highest peak at 5,199 meters. The mountain offers some of the most spectacular high-altitude trekking in Africa, with diverse vegetation zones ranging from rainforest to alpine meadows and glacial valleys. The Point Lenana summit is accessible to fit hikers with proper acclimatization, rewarding you with breathtaking sunrise views. The mountain is also a UNESCO World Heritage Site and home to unique wildlife including elephants, buffalo, and the rare bongo antelope. Whether you're an experienced mountaineer or a first-time trekker, Mount Kenya offers an adventure of a lifetime.`,
    author: "MountainExplorer",
    date: "2023-07-27",
    photo: mountKenya,
    comments: [
      {
        name: "David Kim",
        comment: "Summited last year - the views are indescribable!",
      },
    ],
    featured: false,
  },
  {
    id: "04",
    title: "Lamu Archipelago - A Step Back in Time",
    content: `Step into a world frozen in time in the Lamu Archipelago, where donkeys outnumber cars and ancient Swahili culture thrives. This UNESCO World Heritage Site is Kenya's oldest continuously inhabited town, with architecture and traditions dating back to the 14th century. Wander through narrow alleyways lined with intricately carved wooden doors, visit historic mosques, and enjoy the slow pace of island life. The archipelago is also home to some of the most pristine beaches in the Indian Ocean, perfect for dhow sailing and snorkeling. Lamu's unique blend of African, Arab, and Indian influences creates a cultural experience unlike any other.`,
    author: "CultureSeeker",
    date: "2023-07-26",
    photo: lamuIsland,
    comments: [],
    featured: false,
  },
  {
    id: "05",
    title: "The Great Rift Valley - Kenya's Geological Wonder",
    content: `Explore the dramatic landscapes of Kenya's Great Rift Valley, a geological wonder that stretches over 6,000 kilometers from the Middle East to Mozambique. The Kenyan section features stunning lakes, towering escarpments, and volcanic formations. Lake Nakuru is famous for its flamingo populations, while Lake Bogoria offers hot springs and geysers. The valley is also home to several Maasai communities where you can learn about traditional pastoralist lifestyles. Whether you're a geology enthusiast, bird watcher, or cultural explorer, the Great Rift Valley offers endless opportunities for discovery.`,
    author: "GeoExplorer",
    date: "2023-07-25",
    photo: greatRiftValley,
    comments: [
      {
        name: "Emma Thompson",
        comment: "The flamingo spectacle at Lake Nakuru is unreal!",
      },
    ],
    featured: true,
  },
  {
    id: "06",
    title: "Amboseli National Park - Where Giants Roam",
    content: `Witness the majestic beauty of Amboseli National Park, where large herds of elephants roam against the breathtaking backdrop of Mount Kilimanjaro. Known for having some of the largest elephant tusks in Africa, Amboseli offers incredible wildlife viewing opportunities. The park's swamps provide a permanent water source that attracts diverse wildlife, including lions, cheetahs, and over 400 bird species. The local Maasai communities offer cultural experiences that provide insight into their traditional way of life. For photographers, the combination of wildlife and Africa's highest peak creates endless magical moments, especially at sunrise and sunset.`,
    author: "WildlifePhotographer",
    date: "2023-07-24",
    photo: amboseli,
    comments: [
      {
        name: "Carlos Mendez",
        comment: "The views of Kilimanjaro at dawn are worth the early wake-up call!",
      },
    ],
    featured: true,
  },
  {
    id: "07",
    title: "Lake Nakuru - A Birdwatcher's Paradise",
    content: `Discover the incredible biodiversity of Lake Nakuru National Park, a haven for bird enthusiasts and wildlife lovers. The lake's alkaline waters support massive flocks of flamingos that turn the shoreline pink, creating one of Africa's most iconic wildlife spectacles. Beyond the flamingos, the park is home to both black and white rhinos, making it one of the best places in Kenya to see these endangered species. The surrounding acacia forests host leopards, lions, and rare Rothschild's giraffes. A game drive through the park offers diverse landscapes ranging from rocky cliffs to waterfalls, ensuring every visit is unique.`,
    author: "BirdWatchingPro",
    date: "2023-07-23",
    photo: lakeNakuru,
    comments: [
      {
        name: "Aisha Mohammed",
        comment: "The flamingo numbers are incredible - like a pink carpet over the lake!",
      },
    ],
    featured: true,
  },
];

export default blogs;
