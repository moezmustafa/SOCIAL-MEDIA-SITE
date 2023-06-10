
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
// this will be used to get the current directory name
import path from "path";
import { fileURLToPath } from "url";

import authRoute from "./routes/auth.js"; // this is the route for the auth

import userRoutes from "./routes/users.js";

// video tag 1:13:09 


import { register } from "./controllers/auth.js";

import { createPost } from "./controllers/posts.js";

import { verifyToken } from "./middleware/auth.js";

import postRoutes from "./routes/posts.js";

//after 1:36:00

import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";






// CONFIG for middleware

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE CONFIG */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });

  /* ROUTES WITH FILES*/
   app.post("/auth/register", upload.single("picture"), register);
   app.post("/posts", verifyToken, upload.single("picture"), createPost);
 

// ROUTES
app.use("/users", userRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);




// MONGOOSE SETUP
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));



    // the lines below will manually add the data to the firebase data base
    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  
    // the lines below will manually add the data to the firebase data base



  })
  .catch((error) => console.log(`${error} did not connect`));


