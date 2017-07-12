    // let login = require('home:widget/login/login.vjs');
    // let repertory = require('home:widget/repertory/repertory.vjs');

    import home from './widget/home/home.vjs';
    import config from './widget/config/config.vjs';
    import configedit from './widget/config/edit.vjs';
    import jenkins from './widget/jenkins/jenkins.vjs';
    import build from './widget/build/build.vjs';

    const routes = [{
        path: '/jenkins',
        name: 'jenkins',
        component: jenkins
    }, {
        path: '/jenkins/:id',
        name: 'jenkins/edit',
        component: jenkins
    }, {
        path: '/build/:path+@:branch(\\w+)',
        name: 'build',
        component: build
    }, {
        path: '/config/:id',
        name: 'configedit',
        component: configedit
    }, {
        path: '/config',
        name: 'config',
        component: config
    }, {
        path: '/home',
        name: 'home',
        component: home
    }];

    exports.routes = routes;
