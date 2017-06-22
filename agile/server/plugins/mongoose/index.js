/**
 * @file: index.jes
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-22
 * @description: this is a <jes> file
 */
/* eslint-disable */
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

export default {
    mongoose(app, conf) {
        let { uri, options} = conf;
        mongoose.connect(uri, options);
        var conn = mongoose.connection;
        conn.on('error', function(err) {
            yog.log.fatal({
                stack: err,
                errno: 601,
                msg: 'connect mongo database error'
            });
        });
        conn.once('open', function() {
            console.log('database `%s` connection open', conf.uri);
        });


    }
}
/* eslint-enable */
