# Huazhou Dialect Dictionary

A WeChat Mini Program for looking up character pronunciations in the Huazhou dialect (a branch of Cantonese / Yue Chinese).

[← 中文版](README.md)

---

## Features

- Supports both **Simplified** and **Traditional** Chinese characters
- Automatic **Simplified-to-Traditional** conversion, handling one-to-many mappings
- Displays **Guangzhou** (Cantonese), **Shangjiang** (上江), and **Xiajiang** (下江) pronunciations
- Fully offline — no network required

## About the Pronunciations

Three pronunciation systems are provided:

| System | Description | Display Color |
|--------|-------------|---------------|
| **Guangzhou** (广州音) | Standard Cantonese (LSHK Jyutping) | <span style="color:#e67e22">■ Orange</span> |
| **Shangjiang** (上江音) | Most towns and streets in Huazhou | <span style="color:#06ad56">■ Green</span> |
| **Xiajiang** (下江音) | Yangmei, Tongqing, Changqi towns | <span style="color:#1890ff">■ Blue</span> |

## How It Works

```
User inputs a character (Simplified or Traditional)
       │
       ▼
  s2t_dict.js          ← Convert to Traditional form(s)
       │
       ▼
  dict_data.js         ← Look up pronunciation in dialect dictionary
       │
       ▼
  Display: Traditional character + Guangzhou + Shangjiang + Xiajiang pinyin
```

## Project Structure

```
├── data/
│   ├── dict_data.js       # Dialect dictionary (4,310 entries)
│   └── s2t_dict.js        # Simplified-to-Traditional map (~4,000 mappings)
├── pages/
│   └── index/             # Main page — dictionary search
├── app.js / app.json / app.wxss
├── project.config.json
└── sitemap.json
```

## Getting Started

1. Download [WeChat DevTools](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. Import the project directory
3. Use AppID `wxbc0a13dca2f0a7ca` or replace with your own
4. Compile and preview

## Tech Stack

- WeChat Mini Program native framework (glass-easel)
- Base library 3.15.0+
- Fully client-side, no cloud dependencies
- Romanization follows Huazhou dialect pinyin conventions

---

[← 中文版](README.md)
