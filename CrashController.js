/*
 * @Author: yaohengfeng 1921934563@qq.com
 * @Date: 2023-04-12 10:09:21
 * @LastEditors: yaohengfeng 1921934563@qq.com
 * @LastEditTime: 2023-04-12 10:24:00
 * @FilePath: \crash-report\CrashController.js
 * @Description: CashController.js
 */
// fs
const { renameSync, copyFileSync } = require('fs');

// path
const { resolve } = require('path');

/**
 * crash controller
 */
module.exports = (app) => {
  // crash
  app.post("/crash", async (req, res) => {
    try {
      // fields
      const fields = req.body.fields;
    //   console.info("接收请求：", req.query);
      console.log('fields: ', fields);

      // file info
      const fileInfo = req.body.files.upload_file_minidump;
      const tmpPath = fileInfo.filepath;
      console.info("tmpPath: ", tmpPath);
      const destPath = resolve(__dirname, 'report', fileInfo.originalFilename);
      console.info("destPath: ", destPath);
      copyFileSync(tmpPath, destPath);

      // return
      res.send('crash success');
    } catch (e) {
      console.log(e);
      res.send('crash failed');
    }
  });
};