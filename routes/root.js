import { Router } from 'express';
import { rootControllers } from '../controllers';
import { AsyncWrapper } from '../utils';

const rootRouter = Router();

rootRouter.get('/', AsyncWrapper(rootControllers.getRoot));

rootRouter.post('/', AsyncWrapper(rootControllers.postRoot));

export { rootRouter };