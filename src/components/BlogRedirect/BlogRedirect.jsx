






import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import config from "../../services/config"; // Adjust the path to your config file

const BlogRedirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const blogId = searchParams.get("id");

    if (blogId) {
      // Fetch the blog slug from the backend using the blog ID
      fetch(`${config.apiUrl}/api/blogs/slug/${blogId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Blog not found");
          }
          return response.json();
        })
        .then((data) => {
          const slug = `${data.urlTitle}-${blogId}`;
          navigate(`/blogs/${slug}`, { replace: true });
        })
        .catch(() => {
          navigate("/404", { replace: true });
        });
    } else {
      navigate("/", { replace: true });
    }
  }, [searchParams, navigate]);

  return null;
};

export default BlogRedirect;
