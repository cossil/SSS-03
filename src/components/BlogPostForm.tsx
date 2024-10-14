import React, { useState, useEffect } from 'react';
import { BlogPost } from '../utils/blogStorage';

interface BlogPostFormProps {
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
  initialData?: BlogPost | null;
}

const BlogPostForm: React.FC<BlogPostFormProps> = ({ onSave, onCancel, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [author, setAuthor] = useState(initialData?.author || '');
  const [image, setImage] = useState(initialData?.image || '');
  const [categories, setCategories] = useState(initialData?.categories.join(', ') || '');
  const [tags, setTags] = useState(initialData?.tags.join(', ') || '');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
      setExcerpt(initialData.excerpt);
      setAuthor(initialData.author);
      setImage(initialData.image);
      setCategories(initialData.categories.join(', '));
      setTags(initialData.tags.join(', '));
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: initialData?.id || Date.now().toString(),
      title,
      content,
      excerpt,
      author,
      image,
      date: initialData?.date || new Date().toLocaleDateString(),
      categories: categories.split(',').map(cat => cat.trim()),
      tags: tags.split(',').map(tag => tag.trim()),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">{initialData ? 'Edit Post' : 'Create New Post'}</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block mb-1 font-medium">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          rows={6}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="excerpt" className="block mb-1 font-medium">Excerpt</label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          rows={2}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block mb-1 font-medium">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block mb-1 font-medium">Image URL</label>
        <input
          type="url"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="categories" className="block mb-1 font-medium">Categories (comma-separated)</label>
        <input
          type="text"
          id="categories"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tags" className="block mb-1 font-medium">Tags (comma-separated)</label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded-md hover:bg-gray-100 transition duration-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          {initialData ? 'Update Post' : 'Create Post'}
        </button>
      </div>
    </form>
  );
};

export default BlogPostForm;