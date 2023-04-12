/*
 * @Author: yaohengfeng 1921934563@qq.com
 * @Date: 2023-04-12 10:07:54
 * @LastEditors: yaohengfeng 1921934563@qq.com
 * @LastEditTime: 2023-04-12 10:08:17
 * @FilePath: \crash-report\app.js
 * @Description: app.js
 */
// qz
const qz = require("qiao-z");

// app
const app = qz({
  upload: require("qiao-z-upload"),
});

// listen
app.listen(9001);