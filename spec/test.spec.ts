///<reference path="../typings/jasmine/jasmine.d.ts" />
import * as target from '../src/app';
let supertest = require('supertest');
describe('this is a test', () => {
    it('this is a test', (done) => {
        expect(true).toBe(true);
        done();
    });
    it('this is a test', (done) => {
        expect(target.test(1)).toBe(2);
        expect(target.test(0)).toBe(-1);
        done();
    });
    it('this is a test', (done) => {
        supertest(target.app)
        .get('/')
        .end(() => {
            done();
        })
    })
});