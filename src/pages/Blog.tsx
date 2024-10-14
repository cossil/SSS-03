import React, { useState, useEffect } from 'react';
import { Calendar, User, Search, Plus, Edit, Trash2, Facebook, Twitter, Link } from 'lucide-react';
import BlogPostForm from '../components/BlogPostForm';
import { BlogPost as BlogPostType, getStoredPosts, storePosts } from '../utils/blogStorage';
import { getImageUrl } from '../utils/imageService';

const BlogPost: React.FC<{ post: BlogPostType; onEdit: () => void; onDelete: () => void }> = ({ post, onEdit, onDelete }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getImageUrl(post.title).then(setImageUrl);
  }, [post.title]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={imageUrl || 'https://via.placeholder.com/400x300?text=Loading...'}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <div className="flex items-center text-gray-600 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="mr-4">{post.date}</span>
          <User className="w-4 h-4 mr-2" />
          <span>{post.author}</span>
        </div>
        <p className="mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button onClick={onEdit} className="text-blue-600 hover:text-blue-800">
              <Edit className="w-5 h-5" />
            </button>
            <button onClick={onDelete} className="text-red-600 hover:text-red-800">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="text-blue-600 hover:text-blue-800">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="text-blue-400 hover:text-blue-600">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <Link className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPostType | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setPosts(getStoredPosts());
  }, []);

  const handleSavePost = (post: BlogPostType) => {
    if (editingPost) {
      const updatedPosts = posts.map(p => p.id === post.id ? post : p);
      setPosts(updatedPosts);
      storePosts(updatedPosts);
    } else {
      const newPosts = [...posts, post];
      setPosts(newPosts);
      storePosts(newPosts);
    }
    setShowForm(false);
    setEditingPost(null);
  };

  const handleDeletePost = (id: string) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    storePosts(updatedPosts);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl">Stay updated with the latest in solar energy and sustainability</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-md"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" /> New Post
            </button>
          </div>

          {showForm && (
            <BlogPostForm
              onSave={handleSavePost}
              onCancel={() => {
                setShowForm(false);
                setEditingPost(null);
              }}
              initialData={editingPost}
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <BlogPost
                key={post.id}
                post={post}
                onEdit={() => {
                  setEditingPost(post);
                  setShowForm(true);
                }}
                onDelete={() => handleDeletePost(post.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;