// 2.	编写代码实现写文件功能；自己新建一个2.txt空白文本文档。通过写文件的方法实现内容写入2.txt中。

const fs = require('fs')

fs.writeFile('./files/2.txt', '我使用了fs模块将这段文字写入2.txt', function(err) {
  if (err) {
    return console.log('文件写入失败！' + err.message)
  }
  console.log('文件写入成功！')
})
