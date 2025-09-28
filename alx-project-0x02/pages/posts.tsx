import { GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";

type PostsPageProps = {
  posts: PostProps[];
};

export default function PostsPage({ posts }: PostsPageProps) {

  return (
    <>
    <Header />
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.title} 
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </div>
    </>
  );

}


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    userId: post.userId,
    title: post.title,
    content: post.body, 
  }));

  return {
    props: { posts },
  };
};
