import { Router } from'express';
import api from'./helpers/api';


const routes = new Router();

routes.get('/', (req, res) => {
  return res.render('index');
});

routes.get('/clientes', (req, res) => {
  return res.render('clientes');
});

routes.get('/portifolio', (req, res) => {

  const { search } = req.query;

  api.get('/', {
      params: {
          user_id: '17841407894545225',
          q: search
      }
  }).then(({ data }) => res.render('portifolio', { img: data.data }))
});

routes.get('/contato', (req, res) => {
  return res.render('contato');
});

export default routes;
