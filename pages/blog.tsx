import Head from 'next/head';
import { PostData, loadBlogPosts, loadMarkdownFile } from '../loader';
import { PostCard } from '../components/PostCard';
import styles from '../styles/BlogPage.module.css'

const Home = (props: {
  introduction: string;
  features: string;
  readme: string;
  posts: PostData[];
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Burrow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <p className={styles.heading}>I write about programming, web-dev, tech and some other general ideas that I have. Do give them a read!</p>
        <div className={styles.postContainer}>
          {props.posts.map((post, j) => {
            return <PostCard post={post} key={j} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation during build step.

  const props = {
    posts,
  };

  return { props };
};
