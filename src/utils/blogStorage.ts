export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  categories: string[];
  tags: string[];
}

const STORAGE_KEY = 'blog_posts';

export const getStoredPosts = (): BlogPost[] => {
  const storedPosts = localStorage.getItem(STORAGE_KEY);
  return storedPosts ? JSON.parse(storedPosts) : [];
};

export const storePosts = (posts: BlogPost[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

// Initialize with some sample posts if storage is empty
const initializeSamplePosts = () => {
  const samplePosts: BlogPost[] = [
    {
      id: '1',
      title: "The Future of Solar Energy in Florida",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      excerpt: "Exploring the latest trends and innovations in solar technology and their impact on the Sunshine State.",
      author: "John Doe",
      date: "May 15, 2024",
      image: "solar panels florida",
      categories: ["Technology", "Sustainability"],
      tags: ["solar", "florida", "innovation"]
    },
    {
      id: '2',
      title: "Maximizing Energy Efficiency in Your Home",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      excerpt: "Practical tips and strategies to reduce your energy consumption and lower your utility bills.",
      author: "Jane Smith",
      date: "May 1, 2024",
      image: "energy efficient home",
      categories: ["Home Improvement", "Energy Saving"],
      tags: ["efficiency", "home", "tips"]
    },
    {
      id: '3',
      title: "Solar Myths Debunked",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      excerpt: "Separating fact from fiction: addressing common misconceptions about solar energy systems.",
      author: "Mike Johnson",
      date: "April 20, 2024",
      image: "solar energy myths",
      categories: ["Education", "Solar Energy"],
      tags: ["myths", "facts", "solar energy"]
    }
  ];

  if (getStoredPosts().length === 0) {
    storePosts(samplePosts);
  }
};

initializeSamplePosts();