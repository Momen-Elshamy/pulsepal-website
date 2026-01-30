import Head from 'next/head';
import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';
import styles from '@/styles/BlogPost.module.css';
import Link from 'next/link';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { useRouter } from 'next/router';

const POST_QUERY = gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      date
      content
      excerpt
    }
  }
`;

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;

  const { data, loading, error } = useQuery(POST_QUERY, {
    variables: { slug },
    skip: !endpoint || !slug,
  });

  const post = data?.post;

  const title = post?.title ? `${post.title} — PulsePal Blog` : 'PulsePal Blog';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={
            post?.excerpt?.replace(/<[^>]+>/g, '').slice(0, 160) ||
            'PulsePal blog article.'
          }
        />
      </Head>

      <Header />

      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <Link href="/blog">← Back to Blog</Link>
          </div>

          {!endpoint && (
            <div className={styles.notice}>
              WordPress endpoint not configured yet. Set{' '}
              <code>NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT</code>.
            </div>
          )}

          {endpoint && loading && (
            <div className={styles.notice}>Loading article…</div>
          )}
          {endpoint && error && (
            <div className={styles.notice}>
              Couldn’t load article. Check endpoint + slug.
            </div>
          )}

          {post && (
            <article className={styles.article}>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.meta}>
                {post.date ? new Date(post.date).toLocaleDateString() : ''}
              </div>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />
            </article>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
