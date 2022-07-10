import { createServer, Model } from "miragejs";

type User = {
  name: string,
  emial: string,
  created_at: string,
};

export function makeServer() {
  const server = createServer({
    models: { // São os tipos dos dados que ficarão dentro do banco de dados fake 
      user: Model.extend<Partial<User>>({})
    },

    routes() { // Shorthands do mirage para controlar rotas
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    }

  });

  return server;

};