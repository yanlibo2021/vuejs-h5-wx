/**
 * Created by cristian.jora on 04.11.2016.
 */
const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'distH5')));
const port = process.env.PORT || 80;
app.listen(port);