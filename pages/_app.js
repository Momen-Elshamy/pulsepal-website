import "@/styles/globals.css";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize PostHog
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: 'identified_only',
      capture_pageview: false, // We'll capture manually for SPA
      cross_subdomain_cookie: true, // Enable cross-domain tracking with ai.pulsepal.de
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug();
      }
    });

    // Track pageviews on route change
    const handleRouteChange = () => posthog.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);

    // Initial pageview
    posthog.capture('$pageview');

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <PostHogProvider client={posthog}>
      <AnimatePresence mode="wait">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </PostHogProvider>
  );
}
