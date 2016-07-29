/// <reference path="../typings/tsd.d.ts" />
'use strict';
import * as express from 'express';
export let app = express();
app.get('/', (req, res) => {
    res.status(200).send('hello, dbxiaoqiang');
});
app.listen(8080);
export function test(value: number) {
    if (value) {
        return ++value;
    } else {
        return --value;
    }
}