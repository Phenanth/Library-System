# Library-System
图书管理系统原型设计

## 项目说明

登录可以连接数据库。

其余页面都是静态页面

## 人员分配

- 宋奕

- 陈文菲

- 贺文涵

- 高志丹

## 项目进度

### 12.11 - CWF

- 基础页面设计
- 路由设计

### 12.12 - CWF

- 加入之前的demo页面，完成路由跳转关系

### 12.15 - CWF

- 首页排版设计

### 12.21 - HWH

- 图书管理模块页面设计

### 12.22 - sy

- 图书搜索功能及图书详情页面
- 首页设计

### 12.22 - CWF

- 数据库表导入
- 服务器登录模块设计
- 用户信息页面设计
    + 信息展示页面
    + 密码修改页面

#### 解决问题

MySQL：
```
{ Error: ER_BAD_HOST_ERROR: Can't get hostname for your address
    at Handshake.Sequence._packetToError (D:\study\大三第一学期\软件工程\Library-System\node_modules\mysql\lib\protocol\sequences\Sequence.js:47:14)
    at Handshake.ErrorPacket (D:\study\大三第一学期\软件工程\Library-System\node_modules\mysql\lib\protocol\sequences\Handshake.js:124:18)
    at Protocol._parsePacket (D:\study\大三第一学期\软件工程\Library-System\node_modules\mysql\lib\protocol\Protocol.js:278:23)
    at Parser.write (D:\study\大三第一学期\软件工程\Library-System\node_modules\mysql\lib\protocol\Parser.js:76:12)
    at Protocol.write (D:\study\大三第一学期\软件工程\Library-System\node_modules\mysql\lib\protocol\Protocol.js:38:16)
    at Socket.<anonymous> (D:\study\大三第一学期\软件工程\Library-System\node_modules\mysql\lib\Connection.js:91:28)
    at Socket.<anonymous> (D:\study\大三第一学期\软件工程\Library-System\node_modules\mysql\lib\Connection.js:502:10)
    at Socket.emit (events.js:182:13)
    at addChunk (_stream_readable.js:283:12)
    at readableAddChunk (_stream_readable.js:264:11)
    --------------------
    at Protocol._enqueue (D:\study\大三第一学期\软件工程\Library-System\node_modules\mysql\lib\protocol\Protocol.js:144:48)
    at Protocol.handshake (D:\study\大三第一学期\软件工程\Library-System\node_modules\mysql\lib\protocol\Protocol.js:51:23)
    at Connection.connect (D:\study\大三第一学期\软件工程\Library-System\node_modules\mysql\lib\Connection.js:118:18)
    at Connection._implyConnect (D:\study\大三第一学期\软件工程\Library-System\node_modules\mysql\lib\Connection.js:453:10)
    at Connection.query (D:\study\大三第一学期\软件工程\Library-System\node_modules\mysql\lib\Connection.js:198:8)
    at Login (D:\study\大三第一学期\软件工程\Library-System\server\db\dbHelper.js:24:5)
    at Layer.handle [as handle_request] (D:\study\大三第一学期\软件工程\Library-System\node_modules\express\lib\router\layer.js:95:5)
    at next (D:\study\大三第一学期\软件工程\Library-System\node_modules\express\lib\router\route.js:137:13)
    at Route.dispatch (D:\study\大三第一学期\软件工程\Library-System\node_modules\express\lib\router\route.js:112:3)
    at Layer.handle [as handle_request] (D:\study\大三第一学期\软件工程\Library-System\node_modules\express\lib\router\layer.js:95:5)
  code: 'ER_BAD_HOST_ERROR',
  errno: 1042,
  sqlMessage: 'Can\'t get hostname for your address',
  sqlState: undefined,
  fatal: true }
```

参考[解决方法](https://blog.csdn.net/zzti_erlie/article/details/53227343)，把MySQL80改为本地服务即可。
