import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();





app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

//Conf
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

export default app;