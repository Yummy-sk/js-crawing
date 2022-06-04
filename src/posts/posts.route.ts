import { Router } from 'express';
import { getVelogPosts, getYozmPosts } from './posts.service';

const router = Router();

router.get('/vlog', getVelogPosts);
router.get('/yozma', getYozmPosts);

export default router;
