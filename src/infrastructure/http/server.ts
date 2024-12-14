import express, { Application } from 'express';
import router from '@/infrastructure/http/routes/routes';
import env from "../env";

const app: Application = express();
app.use(router);

app.listen(env.PORT , () => {
    console.log('Server running on port', env.PORT);
});
