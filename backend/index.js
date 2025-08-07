const path = "path";
const express = "express";
const dotenv = "dotenv";
const cookieParser = "cookie-parser";
const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

const connectDB = "./config/db.js";
const userRoutes = "./routes/userRoutes.js";
const categoryRoutes = "./routes/categoryRoutes.js";
const productRoutes = "./routes/productRoutes.js";
const uploadRoutes = "./routes/uploadRoutes.js";
const orderRoutes = "./routes/orderRoutes.js";

dotenv.config({ path: path.resolve(dirname, "../env") });
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.listen(port, () => console.log(`Server running on port: ${port}`));
