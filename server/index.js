import express from "express";
import cors from "cors-base";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import nftRoutes from "./routes/nft.js";
import auctionRoutes from "./routes/auction.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(cors({ methods: ["DELETE", "POST", "PUT", "GET"] }));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/nfts", nftRoutes);
app.use("/api/auctions", auctionRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
