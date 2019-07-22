# protobufjs
### 一. 背景介绍

为了支持在ccc中使用protobufjs, 需要下载以下3个JS，进行合并。

https://github.com/protobufjs/protobuf.js

https://github.com/protobufjs/bytebuffer.js

https://travis-ci.org/dcodeIO/long.js


合并完成为一个protobuf_all.js。


### 二. 安装说明:

1. 把protobuf_all.js 放入ccc工程的asset/Script 某个目录
2. ccc会自动识别并提示是否导入为插件脚本，勾选上是即可

### 三. 使用说明:

1. 使用protobuf.js提供的命令行工具pbjs.js把我们的协议文件proto转换成json

node_modules\.bin\pbjs -t json data.proto >data.json

2. 把data.json文件放入ccc工程的asset/resources/目录下

3. 加载协议文件并编译之的代码示例:

```javascript
cc.loader.loadRes("data", function(err, jsonAsset) {
    var root = protobuf.Root.fromJSON(jsonAsset.json);
    //把这个root保存起来后面用来进行对协议解码和编码
}

```

4. 编码示例：

```javascript
var AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");

var payload = { awesomeField: "AwesomeString", longnum: l};

var errMsg = AwesomeMessage.verify(payload);
if (errMsg)
throw Error(errMsg);

// Create a new message
var message = AwesomeMessage.create(payload); // or use .fromObject if conversion is necessary

// Encode a message to an Uint8Array (browser) or Buffer (node)
var buffer = AwesomeMessage.encode(message).finish();

//buffer可以用来发送出去
```

5. 解码示例：

```javascript
var AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");

var message = AwesomeMessage.decode(buffer);

// Maybe convert the message back to a plain object
var object = AwesomeMessage.toObject(message, {
                longs: String,
                enums: String,
                bytes: String,
                // see ConversionOptions
});

```

### 四. 关于uint64:

js跟lua一样是使用double保存数字的，也就是js本身是不支持uint64的，probobuf在编码转码过程中使用了long.js的自定义类型Long来处理大数字, 为了方便使用， 我们项目里`统一使用字符串来表示uint64数字`, 

在编码成Message的时候，使用Long.fromString()把字符串转成long, 

在解码Message的时候， toObject(message, {longs:String})  会把long转回来string
