
var fs = require('fs');
const yamlconv = require('json2yaml');
const jsonToYaml = require('json2yaml');
var obj, ymlText;


    obj = JSON.parse(fs.readFileSync('file.json', 'utf8'));    
    obj.forEach(obj => {
        obj["objsize"] = JSON.stringify(obj).length;
    });
    var ymlText = yamlconv.stringify(obj);
    fs.writeFileSync("yaml.yaml", ymlText);
    

