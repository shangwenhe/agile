/**
 * @file: index.jes
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-21
 * @description: this is a <jes> file
 */
/* eslint-disable */
'use strict';

function get(req, res){
    res.json({
        msg: 'hook all ready'
    })
}
function post(req, res){
}
export default {
    get, 
    post
}
/* eslint-enable */
