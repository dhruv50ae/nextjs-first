import React from "react";
import { useRouter } from "next/dist/client/router";

const BlogPostsPage = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>The Blog Posts Page</div>;
};

export default BlogPostsPage;
