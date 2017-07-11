
本例是对于xmind 8 非专业版（穷人版）无法导出为 excel 文件的解决办法

### 简单的思路是：

- 先用 xmind 导出为 freemind 格式
- freemind 可以直接查看其 xml 源文件，这个 xml 就是我们所有东西的来源，思维导图只是可视化了而已
- xml 文件经过各种转换变成 excel 文件

### 目前的进度：

- 实现 xml 转 json
- json 序列化指定节点
- 勉强借助工具把 json 转到 csv

### 用到的模块

- fs
- basic-xml2json
- string_decoder

### json 转 csv 的网址

网上有比较多这样的网址，可以直接用，但是没有找到满意的，大部分都是下面这种非表格形式的

```
children/0/children/0/children/0/attributes/TEXT,children/0/children/0/children/1/attributes/TEXT,children/0/children/0/attributes/TEXT,children/0/children/1/children/0/attributes/TEXT,children/0/children/1/children/1/attributes/TEXT,children/0/children/1/children/2/attributes/TEXT,children/0/children/1/children/3/children/0/children/0/attributes/TEXT,children/0/children/1/children/3/children/0/children/1/children/0/attributes/TEXT,children/0/children/1/children/3/children/0/children/1/children/1/attributes/TEXT,children/0/children/1/children/3/children/0/children/1/attributes/TEXT,children/0/children/1/children/3/children/0/children/2/children/0/attributes/TEXT,children/0/children/1/children/3/children/0/children/2/children/1/attributes/TEXT,children/0/children/1/children/3/children/0/children/2/attributes/TEXT,children/0/children/1/children/3/children/0/attributes/TEXT,children/0/children/1/children/3/children/1/children/0/children/0/attributes/TEXT,children/0/children/1/children/3/children/1/children/0/children/1/attributes/TEXT,children/0/children/1/children/3/children/1/children/0/children/2/attributes/TEXT,children/0/children/1/children/3/children/1/children/0/children/3/attributes/TEXT,children/0/children/1/children/3/children/1/children/0/children/4/attributes/TEXT,children/0/children/1/children/3/children/1/children/0/children/5/attributes/TEXT,children/0/children/1/children/3/children/1/children/0/children/6/attributes/TEXT,children/0/children/1/children/3/children/1/children/0/children/7/attributes/TEXT,children/0/children/1/children/3/children/1/children/0/children/8/attributes/TEXT,children/0/children/1/children/3/children/1/children/0/children/9/attributes/TEXT,children/0/children/1/children/3/children/1/children/0/attributes/TEXT,children/0/children/1/children/3/children/1/children/1/attributes/TEXT,children/0/children/1/children/3/children/1/children/2/attributes/TEXT,children/0/children/1/children/3/children/1/attributes/TEXT,children/0/children/1/children/3/attributes/TEXT,children/0/children/1/children/4/children/0/attributes/TEXT,children/0/children/1/children/4/children/1/attributes/TEXT,children/0/children/1/children/4/children/2/attributes/TEXT,children/0/children/1/children/4/attributes/TEXT,children/0/children/1/children/5/children/0/attributes/TEXT,children/0/children/1/children/5/children/1/attributes/TEXT,children/0/children/1/children/5/attributes/TEXT,children/0/children/1/children/6/children/0/attributes/TEXT,children/0/children/1/children/6/children/1/attributes/TEXT,children/0/children/1/children/6/children/2/attributes/TEXT,children/0/children/1/children/6/children/3/attributes/TEXT,children/0/children/1/children/6/children/4/attributes/TEXT,children/0/children/1/children/6/children/5/attributes/TEXT,children/0/children/1/children/6/attributes/TEXT,children/0/children/1/children/7/attributes/TEXT,children/0/children/1/attributes/TEXT,children/0/children/2/children/0/attributes/TEXT,children/0/children/2/children/1/children/0/attributes/TEXT,children/0/children/2/children/1/attributes/TEXT,children/0/children/2/children/2/children/0/children/0/attributes/TEXT,children/0/children/2/children/2/children/0/children/1/attributes/TEXT,children/0/children/2/children/2/children/0/children/2/attributes/TEXT,children/0/children/2/children/2/children/0/children/3/attributes/TEXT,children/0/children/2/children/2/children/0/children/4/attributes/TEXT,children/0/children/2/children/2/children/0/children/5/attributes/TEXT,children/0/children/2/children/2/children/0/children/6/attributes/TEXT,children/0/children/2/children/2/children/0/children/7/attributes/TEXT,children/0/children/2/children/2/children/0/children/8/attributes/TEXT,children/0/children/2/children/2/children/0/children/9/attributes/TEXT,children/0/children/2/children/2/children/0/children/10/attributes/TEXT,children/0/children/2/children/2/children/0/children/11/attributes/TEXT,children/0/children/2/children/2/children/0/attributes/TEXT,children/0/children/2/children/2/children/1/attributes/TEXT,children/0/children/2/children/2/children/2/children/0/children/0/attributes/TEXT,children/0/children/2/children/2/children/2/children/0/children/1/attributes/TEXT,children/0/children/2/children/2/children/2/children/0/children/2/attributes/TEXT,children/0/children/2/children/2/children/2/children/0/children/3/attributes/TEXT,children/0/children/2/children/2/children/2/children/0/children/4/attributes/TEXT,children/0/children/2/children/2/children/2/children/0/children/5/attributes/TEXT,children/0/children/2/children/2/children/2/children/0/attributes/TEXT,children/0/children/2/children/2/children/2/children/1/children/0/attributes/TEXT,children/0/children/2/children/2/children/2/children/1/children/1/attributes/TEXT,children/0/children/2/children/2/children/2/children/1/children/2/attributes/TEXT,children/0/children/2/children/2/children/2/children/1/children/3/attributes/TEXT,children/0/children/2/children/2/children/2/children/1/children/4/attributes/TEXT,children/0/children/2/children/2/children/2/children/1/children/5/attributes/TEXT,children/0/children/2/children/2/children/2/children/1/attributes/TEXT,children/0/children/2/children/2/children/2/children/2/attributes/TEXT,children/0/children/2/children/2/children/2/children/3/attributes/TEXT,children/0/children/2/children/2/children/2/children/4/attributes/TEXT,children/0/children/2/children/2/children/2/children/5/attributes/TEXT,children/0/children/2/children/2/children/2/children/6/attributes/TEXT,children/0/children/2/children/2/children/2/children/7/attributes/TEXT,children/0/children/2/children/2/children/2/attributes/TEXT,children/0/children/2/children/2/children/3/attributes/TEXT,children/0/children/2/children/2/attributes/TEXT,children/0/children/2/attributes/TEXT,children/0/children/3/attributes/TEXT,children/0/attributes/TEXT,children/1/attributes/TEXT,children/2/attributes/TEXT,attributes/TEXT
在职人员档案,离职人员档案,标签组,资料信息,电子档案,筛选,返回,加载草稿,保存草稿,草稿,上一步,下一步,流程,操作,基本信息,头像上传,通讯信息,健康情况,内推信息,家庭成员,教育经历,培训经历,职称信息,职业资格证,必填信息,补充信息,帐号生成,表格填写,添加员工,批量维护,批量添加,导表添加,批量操作,导出选中项,导出全部,导出列表,发送通知,部门调整,职位调整,卡色调整,类型调整,离职,人事操作,搜索框,操作栏,字段设置,字段排序,表格展示,编辑,部门调整,职位调整,卡色调整,类型调整,转正,子主题 7,结束实习,面谈,发送通知,离职,设为绝密,操作,主要信息,基本信息,通讯信息,家庭成员,健康状况,教育信息,培训经历,档案信息,在职信息,离职信息,内推信息,合同信息,实习期信息,试用期信息,工作信息,人事变动,薪资信息,考勤信息,资格资质,简历信息,电子附件,档案标签,信息内容展示,资料详情,表格,页码,人员档案,公司架构,人事变动,员工管理

```


最靠近表格形式的一个：https://json-csv.com/，但是它的节点顺序是反的，子孙节点排在第一列 = =

其他：http://www.convertcsv.com/json-to-csv.htm

## 全世界最尴尬的情况：

在写到一半的时候，发现其实只要直接在 xmind 中点选最顶层的那个节点，直接复制，然后到 excel 中粘贴就实现了本例子做这么多事情想要实现的东西，这就非常的尴尬了


