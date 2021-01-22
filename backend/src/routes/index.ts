import { Router } from 'express';
import appointmentsRouter from './Appointments.routes';

const routes = Router();

routes.use('/Appointments', appointmentsRouter);

export default routes;
