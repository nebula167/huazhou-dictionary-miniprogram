# 化州话字典

微信小程序，查询化州方言（粤语分支）的汉字读音。

[English Version →](README_EN.md)

---

## 功能

- 支持**简体字**和**繁体字**输入
- 自动**简繁转换**，处理一字多繁体
- 同时给出**上江音**和**下江音**两种读音
- 完全离线，无需网络

## 关于读音

化州话根据地域分为两种口音：

| 音系 | 分布区域 | 显示颜色 |
|------|----------|----------|
| **上江音** | 化州大部分镇街 | <span style="color:#06ad56">■ 绿色</span> |
| **下江音** | 杨梅镇、同庆镇、长岐镇及其附近 | <span style="color:#1890ff">■ 蓝色</span> |

## 查找流程

```
用户输入汉字（简体或繁体）
       │
       ▼
  s2t_dict.js          ← 简繁转换，获取繁体字数组
       │
       ▼
  dict_data.js         ← 在方言字典中查找拼音
       │
       ▼
  显示：繁体字 + 上江音 + 下江音
```

## 项目结构

```
├── data/
│   ├── dict_data.js       # 方言字典（~3400字条，繁体→拼音）
│   └── s2t_dict.js        # 简繁转换字典（~9000映射）
├── pages/
│   ├── index/             # 主页 — 字典搜索
│   └── logs/              # 日志页 — 使用记录
├── utils/
│   └── util.js            # 时间格式化工具
├── app.js / app.json / app.wxss
├── project.config.json
└── sitemap.json
```

## 运行

1. 下载[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 导入项目目录
3. AppID 使用 `wxbc0a13dca2f0a7ca` 或替换为自己的
4. 点击编译预览

## 技术栈

- 微信小程序原生框架 (glass-easel)
- 基础库 3.15.0+
- 纯客户端，无云开发依赖
- 拼音方案采用化州话罗马化拼写

---

[English Version →](README_EN.md)
