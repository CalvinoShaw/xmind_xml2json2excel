var fs = require("fs");
var parser = require('basic-xml2json');
var Decoder = require('string_decoder').StringDecoder;

function test(){
    console.log("--- 开始 ---");
    fs.exists("/inputfile/inputxml.xml", function(fileok){
      if(fileok)fs.readFileSync("/inputfile/inputxml.xml", 'utf8', function(error, data){
          // 这时候由 readFileSync() 读到的是一个 buffer
          // 再由 string_decoder 这个模块对其进行转换，得到一个 string
          // 应用 basic-xml2json 解析成 json
          var json = parser.parse(new Decoder().write(data));
          // 写入文件
          // 如果直接写入，会是一个 json 对象，但是看不到子节点
          // 所以用 JSON 接口直接对其进行序列化
          fs.writeFile('/outputfile/outputjson.json', JSON.stringify(json), function (err){
            if(err){
              console.error(err);
            }else{
              console.log('--- 写入成功 ---');
            }
          });
      });
      else console.log("--- xml文件未找到 ---");
    });
}

function easy(input_xmlfile, output_jsonfile){
  var sourcexml = fs.readFileSync("inputfile/"+input_xmlfile, "utf8");
  var decxml = new Decoder().write(sourcexml);
  var json = parser.parse(decxml);
  var detailjson = JSON.stringify(json,["root","children","attributes","TEXT"]);
  fs.writeFile("outputfile/"+output_jsonfile, detailjson, function(err){
    if(err){
      console.log(err);
    }else{
      console.log("write as json successfully");
    }
  })
}

// test()

easy("inputxml.xml","outputjson.json");