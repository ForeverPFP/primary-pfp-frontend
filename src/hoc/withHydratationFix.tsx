import React from "react";
import { useIsMounted } from "@/hooks/useIsMounted";

export function withHydratationFix<T extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<T>
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const ComponentWithTheme = (
    props: Omit<T, keyof Record<string, unknown>>
  ) => {
    const mounted = useIsMounted();

    if (!mounted) {
      return null;
    }

    // props comes afterwards so the can override the default ones.
    return <WrappedComponent {...(props as T)} />;
  };

  ComponentWithTheme.displayName = `withTheme(${displayName})`;

  return ComponentWithTheme;
}
