
本例是对于xmind 8 非专业版（穷人版）无法导出为 excel 文件的解决办法

### 简单的思路是：

- 先用 xmind 导出为 freemind 格式
- freemind 可以直接查看其 xml 源文件，这个 xml 就是我们所有东西的来源，思维导图只是可视化了而已
- xml 文件经过各种转换变成 excel 文件

### 目前的进度：

- 实现 xml 转 json

### 等待实现的：

- json 转 excel
- 考虑是否可能 xml 直接转到 excel

### 用到的模块

- fs
- basic-xml2json
- string_decoder

## 全世界最尴尬的情况：

在写到一半的时候，发现其实只要直接在 xmind 中点选最顶层的那个节点，直接复制，然后到 excel 中粘贴就实现了本例子做这么多事情想要实现的东西，这就非常的尴尬了


