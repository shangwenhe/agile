/**
 * @file: hook.jes
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-22
 * @description: this is a <jes> file
 */
/* eslint-disable */
import { hook }  from './schema';

class ModelHook{
    find(sql, callback){
        console.log(sql, '===');
        // callback(null, {mk: 'eee;'})
        // let user = new hook({
        //     username: 'shangwenhe' ,
        //     branch_name: 'branch_name',
        //     name_space: 'name_space',
        //     commit_id: 'commit_id',
        //     path: 'path',
        //     detail: 'detail',
        // });
        // user.save();
        hook.find({username:'shangwenhe'},callback)
    }
    async save(data, callback){
       let addhook = new hook(data);
       addhook.save(callback);
    }
}
export default ModelHook;
/* eslint-enable */
