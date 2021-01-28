import { Router } from 'express';
import appointmentsRouter from './Appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/Appointments', appointmentsRouter);
routes.use('/users', usersRouter);
export default routes;
