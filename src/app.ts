import * as express from 'express';
let app = express();
app.get('/', (req, res) => {
    res.status(200).send('hello, dbxiaoqiang');
});
app.listen(8080);