const express = require("express");
const app = express();
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const routes = require("./router");

app.use(express.json());

app.use(morgan("dev"));

const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

app.use("/bfhl", routes);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
