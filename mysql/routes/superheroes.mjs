import express from 'express';

const router = express.Router();

router.get('/heroes/get', async(_, res) => {
    res.send("Not yet implemented");

});
router.post('/heroes/add', async({body}, res) => {
    res.send("Not yet implemented");
});
router.get('/powers/get', async(_, res) => {
    res.send("Not yet implemented");
});
router.post('/powers/add', async({body}, res) => {
    res.send("Not yet implemented");
});

export default router;