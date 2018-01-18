
var fs = require('fs');
//var YAML = require('json2yaml');
//var util = require('util');
var yaml = require('write-yaml');
var obj, ymlText, dObj;


    obj = JSON.parse(fs.readFileSync('file.json', 'utf8'));    
    var length = JSON.stringify(obj).length;
    obj.newsize = length;
    //ymlText = YAML.stringify(obj);   
    //obj = util.inspect(obj); 
    //console.log(obj);
    //console.log(JSON.stringify(obj,null,4));
    

    fs.writeFileSync('dt.json', JSON.stringify(obj,null,4) , 'utf-8');
    //dObj = JSON.parse(fs.readFileSync('data.json', 'utf8')); 

    yaml('dat.yml', obj, function(err) {  });



