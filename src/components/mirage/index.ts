import { createServer, Factory, Model } from "miragejs";
import {faker} from '@faker-js/faker';

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

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `Usuário ${i + 1}`
        },
        emial() { 
          return faker.internet.email().toLowerCase();
        },
        createAt() { 
          return faker.date.recent(10);
        },
      })
    },

    seeds(server){
      server.createList('user', 30);
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