import { useAuth, useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  // Custom Quill modules configuration
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      [{ 'align': [] }],
      ['link'],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'blockquote', 'code-block',
    'align',
    'link'
  ];

  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

  const navigate = useNavigate();
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="flex items-center justify-center h-screen">You should login!</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };

    mutation.mutate(data);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] p-4 md:p-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <h1 className="text-2xl md:text-3xl font-light text-gray-800">Create Your Story</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Cover Image Section */}
          <div className="relative">
            {cover?.url ? (
              <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden group">
                <img 
                  src={cover.url} 
                  alt="Cover" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Upload type="image" setProgress={setProgress} setData={setCover}>
                    <button className="px-4 py-2 bg-white rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                      Change Cover
                    </button>
                  </Upload>
                </div>
              </div>
            ) : (
              <Upload type="image" setProgress={setProgress} setData={setCover}>
                <div className="w-full h-48 md:h-64 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-gray-500">Add a cover image</p>
                  </div>
                </div>
              </Upload>
            )}
          </div>

          {/* Title Input */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600 font-medium">Title</label>
            <input
              className="w-full text-2xl md:text-4xl font-semibold outline-none border-b border-gray-200 py-2 focus:border-blue-500 transition-colors"
              type="text"
              placeholder="Enter an eye-catching title..."
              name="title"
            />
          </div>

          {/* Category Selection */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <label htmlFor="category" className="text-sm font-medium text-gray-700">
              Category:
            </label>
            <select
              name="category"
              id="category"
              className="p-2 rounded-lg shadow-sm border border-gray-200 focus:border-blue-500 outline-none"
            >
              <option value="general">General</option>
              <option value="fashion-trends">Fashion Trends</option>
              <option value="styling-tips">Styling Tips</option>
              <option value="product-guides">Product Guides</option>
              <option value="deals-offers">Deals & Offers</option>
              <option value="lifestyle-content">Lifestyle Content</option>
            </select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600 font-medium">Description</label>
            <textarea
              className="w-full p-4 rounded-lg shadow-sm border border-gray-200 focus:border-blue-500 outline-none min-h-[100px]"
              name="desc"
              placeholder="Write a brief summary of your story..."
            />
          </div>

          {/* Enhanced Editor Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-600 font-medium">Content</label>
              <div className="flex items-center gap-2">
                <Upload type="image" setProgress={setProgress} setData={setImg}>
                  <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <span>🌆</span>
                    <span className="text-sm text-gray-600">Add Image</span>
                  </button>
                </Upload>
                <Upload type="video" setProgress={setProgress} setData={setVideo}>
                  <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <span>▶️</span>
                    <span className="text-sm text-gray-600">Add Video</span>
                  </button>
                </Upload>
              </div>
            </div>
            <div className="border border-gray-200 bg-white rounded-lg overflow-hidden">
              <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                value={value}
                onChange={setValue}
                readOnly={0 < progress && progress < 100}
                placeholder="Start writing your story... Use the toolbar above to format your content."
                className="h-[400px] md:h-[500px]"
              />
            </div>
          </div>

          {/* Submit Button and Status */}
          <div className="flex flex-col gap-2">
            <button
              disabled={mutation.isPending || (0 < progress && progress < 100)}
              className="bg-blue-800 text-white font-medium rounded-lg py-3 px-6 w-full md:w-36 
                disabled:bg-blue-400 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
            >
              {mutation.isPending ? "Loading..." : "Publish"}
            </button>
            
            {progress > 0 && progress < 100 && (
              <div className="text-sm text-gray-500">
                Uploading: {progress}%
              </div>
            )}
            
            {mutation.isError && (
              <div className="text-red-500 text-sm">
                {mutation.error.message}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Write;