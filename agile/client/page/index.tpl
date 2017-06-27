<!doctype html>
{% html lang="en" framework="agile:static/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="/static/favicon.ico">
        <title>{{ title }}</title>
        {% require "agile:static/lib/ivue/iview.css" %}
        {% require "agile:static/lib/vue/vue.min.js" %}
        {% require "agile:static/lib/vue/vue-router.min.js" %}
    {% endhead %}
    {% body %}
        <div id="app">
            <layout> 
                <router-view class='layout-content' slot='content'></router-view>
            </layout> 
        </div>
        {% script %}
        require.async(["vue", "agile:static/lib/vue/vue-router.min.js", 'agile:router.js'], function(Vue,VueRouter,routes){
            // iView 模块库
            let iView = require("agile:static/lib/ivue/iview.min.js");
            Vue.use(iView);

            Vue.use(VueRouter)

            let layout = require("agile:widget/layout/layout.vjs");
            Vue.component('layout', layout.default);

            const router = new VueRouter( routes)
            const app = new Vue({
              router
            }).$mount('#app');

        })

        {% endscript %}
    {% endbody %}
{% endhtml %}
