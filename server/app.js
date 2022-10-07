const express = require("express");

const PORT = 3000;

const app = express();

const server = app.listen(PORT, () => {
  console.log(`${PORT} 번 포트 열림.`);
});
