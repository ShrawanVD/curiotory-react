// // components/BlogRedirect/BlogRedirect.jsx
// import { useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import slugify from "slugify"; // To create slugs from titles (optional if you have predefined slugs)

// const BlogRedirect = () => {
//   const [searchParams] = useSearchParams(); // To get the URL parameters
//   const navigate = useNavigate();

//   useEffect(() => {
//     const blogId = searchParams.get("id"); // Extract the id from the old URL

//     if (blogId) {
//       // Example of mapping id to slug (can be fetched from backend or hardcoded)
//       const blogTitle = getBlogTitleById(blogId); // Function to get blog title by ID
//       if (blogTitle) {
//         // Create slug from title and id
//         const slug = `${slugify(blogTitle)}-${blogId}`;
//         // Redirect to the new URL structure
//         navigate(`/blogs/${slug}`, { replace: true });
//       } else {
//         // Handle case where the blog ID is not found (optional)
//         navigate("/404", { replace: true });
//       }
//     } else {
//       // Redirect to home or 404 if no ID is found in the query
//       navigate("/", { replace: true });
//     }
//   }, [searchParams, navigate]);

//   return null; // No UI needed for the redirect component
// };

// // Function to map blog ID to blog title
// const getBlogTitleById = (id) => {
//   // In a real scenario, you might fetch this data from the backend
//   // For simplicity, you can hardcode the mapping between blog IDs and titles here
//   const blogMap = {
//     "66fba8d85a9ba08eb9ba8799": "let's explore topik exams in india",
//     "66deb5d508a1d6d7402cc0dc": "a1 to c2 in german",
//   };

//   return blogMap[id];
// };

// export default BlogRedirect;


// // https://qurocity.ai/blogsId?id=66deb5d508a1d6d7402cc0dc














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
