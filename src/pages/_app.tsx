import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";

import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { env } from "@/config";
import { locales } from "@/locales";
import { publicProvider } from "wagmi/providers/public";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const network = [mainnet, goerli];

const { chains, provider } = configureChains(network, [
  alchemyProvider({ apiKey: env.ALCHEMY_API_KEY }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: locales.name,
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${fontSans.variable}`}>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}
