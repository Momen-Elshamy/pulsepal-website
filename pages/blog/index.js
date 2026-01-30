import Head from 'next/head';
import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';
import styles from '@/styles/Blog.module.css';
import Link from 'next/link';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const POSTS_QUERY = gql`
  query Posts($first: Int!) {
    posts(first: $first) {
      nodes {
        id
        slug
        title
        date
        excerpt
      }
    }
  }
`;

export default function BlogIndex() {
  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;
  const { data, loading, error } = useQuery(POSTS_QUERY, {
    variables: { first: 20 },
    skip: !endpoint,
  });

  const posts = data?.posts?.nodes || [];

  return (
    <>
      <Head>
        <title>PulsePal Blog</title>
        <meta name="description" content="Insights on touring, booking, and AI-powered offer analysis." />
      </Head>

      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>Blog</h1>
            <p className={styles.subtitle}>
              Practical insights for artists, agents, and teams using AI to make better booking decisions.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            {!endpoint && (
              <div className={styles.notice}>
                WordPress endpoint not configured yet. Set <code>NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT</code>.
              </div>
            )}

            {endpoint && loading && <div className={styles.notice}>Loading posts…</div>}
            {endpoint && error && (
              <div className={styles.notice}>
                Couldn’t load posts. Please check the WPGraphQL endpoint.
              </div>
            )}

            <div className={styles.grid}>
              {posts.map((post) => (
                <article key={post.id} className={styles.card}>
                  <div className={styles.cardInner}>
                    <div className={styles.meta}>
                      {post.date ? new Date(post.date).toLocaleDateString() : ''}
                    </div>
                    <h2 className={styles.cardTitle}>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <div
                      className={styles.excerpt}
                      dangerouslySetInnerHTML={{ __html: post.excerpt || '' }}
                    />
                    <div className={styles.readMore}>
                      <Link href={`/blog/${post.slug}`}>Read article →</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
