import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
 
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
 
import { publicProvider } from 'wagmi/providers/public';
import { LivepeerConfig } from '@livepeer/react';
//import LivepeerClient from '../client';
//import { LitProvider } from '../hooks/useLit';
import LivepeerClient from '../../client';
import { LitProvider } from '../../hooks/useLit';

// ... import { alchemyProvider } from 'wagmi/providers/alchemy';
// ... import { publicProvider } from 'wagmi/providers/public';
 
const { chains, provider } = configureChains([mainnet], [publicProvider()]);
const { connectors } = getDefaultWallets({
  appName: 'My Awesome App',
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }) {
  return (
    <LitProvider>
      <LivepeerConfig client={LivepeerClient}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
        </LivepeerConfig>
    </LitProvider>
  );
}
