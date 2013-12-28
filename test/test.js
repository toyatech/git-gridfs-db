var platform = require('git-node-platform');
var jsGit = require('js-git')(platform);

var GridFSDB = require('../')(platform);
var db = GridFSDB("./repo.git");


