// 1.	编写代码实现读文件功能；自己新建一个1.txt文本文档，并任意写入内容。通过读文件的方法实现读取文件里的内容并打印。

const fs = require('fs')

fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
})

