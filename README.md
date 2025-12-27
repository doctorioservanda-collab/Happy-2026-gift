# Happy 2026

A full-stack crypto staking and exchange platform with NFT marketplace functionality.

## Project Structure

```
├── src/                    # Frontend React app
│   ├── pages/             # Home (staking) & Exchange pages
│   ├── component/         # React components
│   ├── layout/            # Layout wrapper components
│   ├── abi/               # Smart contract ABIs
│   ├── hook/              # Custom React hooks
│   └── token/             # Token list configuration
├── server/                # Backend Express server
│   ├── modules/           # Feature modules (user, nft, auction, etc.)
│   ├── routes/            # API routes
│   └── helper/            # Utility functions
└── public/                # Static assets
```

## Installation

Install dependencies for both frontend and backend:

```bash
npm install
```

This will automatically install dependencies for both the root project and the server thanks to the `postinstall` script.

Alternatively, you can run:

```bash
npm run install:all
```

## Development

Start both frontend and backend development servers:

```bash
npm run start:dev
```

This will start:
- Frontend on http://localhost:8080 (automatically opens in browser)
- Backend on http://localhost:3003

Or start production servers:

```bash
npm start
```

This will also automatically open your browser to the frontend.

### Individual Commands

- Frontend only: `npm run dev` (opens browser automatically)
- Backend only: `npm run server:dev`
- Backend production: `npm run server`

### API Health Check

Test the backend API:
```bash
curl http://localhost:3003/health
```

## Features

- **Staking Platform**: Stake tokens and earn rewards
- **Token Exchange**: Swap between different cryptocurrencies
- **NFT Marketplace**: Create, buy, and sell NFTs
- **Auction System**: Bid on NFTs in real-time auctions
- **User Profiles**: Manage your crypto portfolio

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- Ethers.js for blockchain interaction
- React Router for navigation
- Tanstack Query for state management

### Backend
- Node.js with Express
- ES Modules
- RESTful API architecture
- Blockchain integration utilities

## API Endpoints

- `GET /api/users/:address` - Get user profile
- `PUT /api/users/:address` - Update user profile
- `GET /api/nfts` - List all NFTs
- `POST /api/nfts` - Create new NFT
- `GET /api/auctions` - List all auctions
- `POST /api/auctions` - Create new auction
- `POST /api/auctions/:id/bid` - Place bid on auction

## Smart Contracts

The project includes ABI definitions for:
- Staking Contract: Handle token staking and rewards
- Exchange Contract: Facilitate token swaps

## Development Guidelines

1. Frontend components go in `src/component/`
2. Custom hooks go in `src/hook/`
3. Smart contract ABIs go in `src/abi/`
4. Backend business logic goes in `server/modules/`
5. API routes go in `server/routes/`
6. Utility functions go in `server/helper/`

## Original Lovable Project

**URL**: https://lovable.dev/projects/0cf65ebe-411a-4471-a58b-11613edc6c31

This project was originally created with Lovable and has been restructured for full-stack development.