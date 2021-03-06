"use strict";
/* global describe it */
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("./index");
describe('flattenkeys', function () {
    it('can flatten object to get keys successfully', function () {
        var successfulCases = [
            {
                expected: [
                    'a',
                    'b.c',
                    'b.e.f',
                    'b.e.g',
                    'b.e.h.i',
                    'd'
                ],
                obj: { a: 'a', b: { c: 'c', e: { f: 'f', g: 'g', h: { i: 'i' } } }, d: 'd' }
            },
            {
                expected: [
                    'a',
                    'b.c',
                    'b.e.f',
                    'b.e.g',
                    'd'
                ],
                obj: { a: 'a', b: { c: 'c', e: { f: 'f', g: 'g' } }, d: 'd' }
            },
            {
                expected: [
                    'a',
                    'b.c',
                    'b.e.f',
                    'd'
                ],
                obj: { a: 'a', b: { c: 'c', e: { f: 'f' } }, d: 'd' }
            },
            {
                expected: [
                    'a',
                    'b.c',
                    'd'
                ],
                obj: { a: 'a', b: { c: 'c' }, d: 'd' }
            }
        ];
        successfulCases.map(function (testCase) {
            var actual = index_1.flattenkeys(testCase.obj);
            chai_1.expect(actual).to.deep.equal(testCase.expected);
        });
    });
});
//# sourceMappingURL=index.spec.js.map