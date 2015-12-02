var express = require('express');
var router = express.Router();
var root=process.cwd();
var markdown = require( "markdown" ).markdown;
var fs = require( "fs" );
var pageConfig=require(root+'/pageConfig');


var menus=pageConfig.menus;

/* 主页路由. */
router.get('/', function(req, res, next) {
  //取消主页菜单选中状态
  for(var i=0; i<menus.length; i++){
    menus[i].activeClass="";
  }
  //渲染主页
  res.render('index', {
    pageConfig: pageConfig,
    pageName: 'homepage',
    readme: markdown.toHTML(fs.readFileSync(root+'/README.md','utf-8'))
  });
});

module.exports = router;
