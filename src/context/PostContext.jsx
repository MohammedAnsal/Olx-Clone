import { createContext, useState } from "react";

export const PostContext = createContext()

function SinglePostContext({ children }) {
  const [postProduct, setPostProduct] = useState(() => {
    const post = localStorage.getItem("post");
    return post ? JSON.parse(localStorage.getItem("post")) : "";
  });

  return (
    <PostContext.Provider value={{ postProduct, setPostProduct }}>
      {children}
    </PostContext.Provider>
  );
}

export default SinglePostContext