// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

// const app = express();
// const PORT = process.env.PORT || 5000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Serve static files from React
// app.use(express.static(path.join(__dirname, "../client/build")));

// // React frontend known routes
// app.get(["/", "/about", "/contact", "/blogs/*"], (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// // ✅ For unknown routes — send 404.html with real 404 status
// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "../client/build/404.html"));
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });


import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'build')));

// Example route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'build','index.html'));
});

// 404 route
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
    console.log(✅ Server running at http://localhost:${PORT});
});