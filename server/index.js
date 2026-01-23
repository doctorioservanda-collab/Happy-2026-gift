import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from './utils/logger.js';
import userRoutes from './routes/user.js';
import nftRoutes from './routes/nft.js';
import auctionRoutes from './routes/auction.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger.logRequest);
// Routes
app.use('/api/users', userRoutes);
app.use('/api/nfts', nftRoutes);
app.use('/api/auctions', auctionRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});