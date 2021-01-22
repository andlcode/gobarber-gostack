import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});
app.listen(6666, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 6666!');
});

app.use(routes);
