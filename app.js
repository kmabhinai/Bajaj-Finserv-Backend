const express = require("express");
const app = express();
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const routes = require("./router");
const cors = require("cors");

app.use(express.json());

app.use(morgan("dev"));
app.use(cors());
const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);
app.use("/bfhl", routes);

app.use("/", (req, res) => {
	res.send("Welcome to the API\n Please use /bfhl in post or get method");
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
