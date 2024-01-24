// index.js
import { Metadata } from 'next'
import styles from "./page.module.css";
import prisma from "../lib/prisma";


// this query grabs the data!
async function getPosts() {
  const posts_res = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      description: true,
    },
  });
  //const posts = await posts_res.json();
  return posts_res;
}

export const metadata = {
  title: 'My Page Title',
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>Amplify + Prisma!</h1>
        <div className={styles.grid}>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.card}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}