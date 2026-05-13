# 化州话字典

微信小程序，查询化州方言（粤语分支）的汉字读音。

[English Version →](README_EN.md)

---

## 功能

- 支持**简体字**和**繁体字**输入
- 自动**简繁转换**，处理一字多繁体
- 同时给出**广州音**、**上江音**和**下江音**三种读音
- 完全离线，无需网络

## 关于读音

提供三种读音：

| 音系 | 说明 | 显示颜色 |
|------|------|----------|
| **广州音** | 标准粤语（香港语言学学会粤拼方案） | <span style="color:#e67e22">■ 橙色</span> |
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
  显示：繁体字 + 广州音 + 上江音 + 下江音
```

## 项目结构

```
├── data/
│   ├── dict_data.js       # 方言字典（4310字条，含广州音/上江/下江）
│   └── s2t_dict.js        # 简繁转换字典（~4000条映射）
├── pages/
│   └── index/             # 主页 — 字典搜索
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
- 广州音采用香港语言学学会粤语拼音方案（Jyutping），上江/下江采用化州话罗马化拼写

---

[English Version →](README_EN.md)
