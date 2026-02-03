"use client";

import { useEffect, useState, type ComponentProps } from "react";
import type { ReactNode } from "react";
import type { PostHog as PostHogType } from "posthog-js";

type PostHogProviderProps = ComponentProps<
  typeof import("posthog-js/react").PostHogProvider
>;
type PostHogProviderComponent = React.ComponentType<PostHogProviderProps>;

export function Providers({ children }: { children: ReactNode }) {
  const [providerClient, setProviderClient] = useState<{
    Provider?: PostHogProviderComponent;
    posthog?: PostHogType;
  } | null>(null);

  useEffect(() => {
    let mounted = true;

    // Only run on the client and if a PostHog key is provided
    if (typeof window === "undefined") return;
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    (async () => {
      const posthogModule = await import("posthog-js");
      const reactModule = await import("posthog-js/react");
      const posthog = posthogModule?.default ?? posthogModule;
      const PostHogProvider =
        reactModule?.PostHogProvider ?? reactModule?.default;

      posthog.init(key, {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
      });

      if (mounted) setProviderClient({ Provider: PostHogProvider, posthog });
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (providerClient?.Provider && providerClient?.posthog) {
    const Provider = providerClient.Provider;
    return <Provider client={providerClient.posthog}>{children}</Provider>;
  }

  // Fallback: render children without PostHog during prerender or when key is missing
  return <>{children}</>;
}
