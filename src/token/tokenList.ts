export interface Token {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI?: string;
  chainId: number;
}

export const SUPPORTED_TOKENS: Token[] = [
  {
    address: '0x0000000000000000000000000000000000000000',
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    logoURI: '/tokens/eth.png',
    chainId: 1
  },
  {
    address: '0xA0b86a33E6441E6C7C5c8c8c8c8c8c8c8c8c8c8c',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: '/tokens/usdc.png',
    chainId: 1
  },
  {
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    name: 'Tether USD',
    symbol: 'USDT',
    decimals: 6,
    logoURI: '/tokens/usdt.png',
    chainId: 1
  },
  {
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    name: 'Dai Stablecoin',
    symbol: 'DAI',
    decimals: 18,
    logoURI: '/tokens/dai.png',
    chainId: 1
  }
];

export const getTokenByAddress = (address: string): Token | undefined => {
  return SUPPORTED_TOKENS.find(token => 
    token.address.toLowerCase() === address.toLowerCase()
  );
};

export const getTokenBySymbol = (symbol: string): Token | undefined => {
  return SUPPORTED_TOKENS.find(token => 
    token.symbol.toLowerCase() === symbol.toLowerCase()
  );
};