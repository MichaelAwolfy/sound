
# Sound

轻流前端团队利用业余时间研发的一款应�? 基于Angular+Electron实现�? 主页仿照网易�? 做了三个功能�?在侧边栏可以切换).

## 作者列�?按模块顺�?



| [<img src="https://avatars1.githubusercontent.com/u/30228406?v=4" width="150px;"/><br /><sub>Eve</sub>](https://github.com/Mr-Eve) | [<img src="https://avatars1.githubusercontent.com/u/25194505?s=60&v=4" width="150px;"/><br /><sub>artemisXiao</sub>](https://github.com/artemisXiao) | [<img src="https://avatars1.githubusercontent.com/u/20921324?s=60&v=4" width="150px;"/><br /><sub>tirelyl</sub>](https://github.com/tirelyl)
| :---: | :---: | :---: |


## 模块介绍

### 听歌识曲

#### 基本介绍

布局照抄PC端网易云, 每首歌曲处于『冻结』状�? 通过双击歌曲(或点击红�?可以试听歌曲, 输入歌曲名后回车即可『解锁』歌�?

处于冻结状态的歌曲有以下限�?

 * 仅能听副歌部�?
 * 无法看清歌曲信息
 * 进度条拖拽不能超过副歌部�?

#### 特色玩法

 * 等级机制, 答对歌曲可以积累经验用于升级
 * 钥匙道具, 点击『获取钥匙�? 猜对特殊歌曲可以用于解锁歌曲
 * 一键解�? 用户达到6级即可一键解锁全部歌�?

### qing-form

#### 基本介绍

QingForm 是一个用�?Angular 动态创建表单的库，JSON配置，支持字段间的灵活联�?GitHub 地址：https://github.com/tirelyl/qing-form
希望解决表格间复杂的联动问题�?

#### Feature
- JSON 格式快速配置表�?
- 支持公式表达式给字段赋�?
- 自定义字段之间的显隐
  
  [demo 地址](https://tirelyl.github.io/qing-form/docs)

## 如何使用

#### web

[https://qingflow.github.io/sound/](https://qingflow.github.io/sound/)

#### 国内镜像�?

[https://eve.weishour.com/guess-song](https://eve.weishour.com/guess-song)

#### 桌面app

下载链接(仅支持windows): [sound.exe](https://file.qingflow.com/uploads/file/0432ce66-4437-4aba-883c-fd480c6113f0.exe)

#### 本地运行

直接三连运行.(**git clone, npm i, npm start**)

在安装依赖时可能会遇到『install.js安装卡着不动』的情况, 请参考这篇[博文](https://www.jianshu.com/p/eac8f37d6992)或自行Google


#### 声明

除了第三方依赖库之外, 100%为自主编写的代码, 未曾使用正版网易云音乐的任何代码与API接口. 本作品仅用于学习与研�? 任何个人或组织不得用作商业用途或用任何非法手段以此营�?发生任何后果由该个人或组织承担一切责�?
WZ add