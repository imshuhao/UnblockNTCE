# UnblockNTCE
一个解除中小学教师资格考试网报名的IE浏览器限制的 Chrome 插件

### UPDATE: 此项目js代码同样适用于 Tampermonkey，[安装链接](https://greasyfork.org/zh-CN/scripts/450806-unblockntce)。

### 此项目只针对 [该链接内](https://ntce.neea.edu.cn/html1/folder/16013/15-1.htm) 列出的报名系统测试通过，其他系统请自行测试。

---

## 原理
教资报名网判断浏览器的 ```window.ActiveXObject``` 对象决定是否跳转至提示使用IE浏览器的网页，本插件通过覆盖此对象值的方式来绕过跳转。


## 使用方法
下载并解压本项目，在 ```Chrome -> 管理扩展程序``` 中开启开发者模式，点击 ```加载已解压的扩展程序``` 后选择解压后的文件夹。

## 免责声明

Use at your own risk.
