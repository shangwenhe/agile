/**
 * @file: schema.jes
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-22
 * @description: this is a <jes> file
 */
/* eslint-disable */


/**
 * @desc  http://wiki.xiaodutv.com/pages/viewpage.action?pageId=12521044
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * The following option keys are available:
 * db      - passed to the connection db instance
 * server  - passed to the connection server instance(s)
 * replset - passed to the connection ReplSet instance
 * user    - username for authentication (if not specified in uri)
 * pass    - password for authentication (if not specified in uri)
 * auth    - options for authentication
 * mongos  - Boolean - if true, enables High Availability support for mongos
 */


let HOOKSCHEMA = {
    username: {
        type: String,
        required: 'username is required!'
    },
    time: {
        type: Date,
        default: (new Date()).valueOf()
    },
    branch_name: {
        type: String,
        required: true
    },
    name_space: {
        type: String,
        required: true
    },
    commit_id: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    detail: {
        type: Buffer,
        required: true
    }
};

let modelHookSchema = Schema(HOOKSCHEMA);
try {
    var hook = mongoose.model('hook', modelHookSchema);
} catch(e) {
    var hook = mongoose.model('hook');
}

export default{ hook };


/* eslint-enable */
