import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import config from './webpack.config.dev';

const port = 3003;
const app = express();
const compiler = webpack(config);

// Express
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.json({'foo': 'bar'});
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

app.listen(port, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
