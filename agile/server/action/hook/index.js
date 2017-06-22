/**
 * @file: index.jes
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-21
 * @description: this is a <jes> file
 */
/* eslint-disable */

// import regeneratorRuntime from "regenerator-runtime";

'use strict'; 

import servicehook from '../../service/hook/';

function get(req, res){
    servicehook.find(null, function(err, data){
        res.json({
            err, 
            data
        })
    })    
}


function post(req, res){

}
export default {
    get, 
    post
}
/* eslint-enable */
