/**
 * @file: index.jes
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-21
 * @description: this is a <jes> file
 */
/* eslint-disable */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function get(req, res) {
    res.json({
        msg: 'hook all ready'
    });
}
function post(req, res) {}
exports.get = get;
exports.post = post;

/* eslint-enable */