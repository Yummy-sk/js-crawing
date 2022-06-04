import { Router } from 'express';
import { getVelogPosts } from './posts.service';

const router = Router();

router.get('/vlog', getVelogPosts);

export default router;
