import { Router } from 'express';
import { getVelogPosts, getYozmPosts, getSpiceWorksPosts } from './posts.service';

const router = Router();

router.get('/velog', getVelogPosts);
router.get('/yozma', getYozmPosts);
router.get('/spiceworks', getSpiceWorksPosts);

export default router;
