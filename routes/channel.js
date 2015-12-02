var express = require('express');
var router = express.Router();
var root=process.cwd();
var fs = require( "fs" );
var pageConfig=require(root+'/pageConfig');
var menus=pageConfig.menus;

/* 模块路由. */
for(var i=0; i<menus.length; i++){
  (function(i){
    var menu=menus[i],
        label=menu.label,
        moduleName=menu.name;
    router.get('/'+moduleName, function(req, res, next) {
      //设置菜单状态
      for(var j=0; j<menus.length; j++){
        if(moduleName==menus[j].name){
          menus[j].activeClass="active";
        }else {
          menus[j].activeClass="";
        }
      }
      //渲染模块页面
      res.render('module/'+moduleName, {
        pageConfig: pageConfig,
        pageName: moduleName,
        title: pageConfig.title,
      	moduleNameLabel: label
      });
    });
  })(i);
}

module.exports = router;
