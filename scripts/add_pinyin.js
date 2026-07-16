// 一次性脚本：为 dict_data.js 中所有条目添加普通话拼音 (pu 字段)
// 用法：cd scripts && npm install && node add_pinyin.js

const fs = require('fs');
const path = require('path');
const { pinyin } = require('pinyin-pro');

const DICT_PATH = path.join(__dirname, '..', 'data', 'dict_data.js');
const BACKUP_PATH = DICT_PATH + '.backup';

// Step 1: 加载现有词典
const dialectDict = require(DICT_PATH).dialectDict;

// Step 2: 为每个汉字生成普通话拼音
let added = 0;
let empty = 0;
const chars = Object.keys(dialectDict);

for (const char of chars) {
  try {
    const result = pinyin(char, { toneType: 'symbol', type: 'array' });
    if (result && result.length > 0 && result[0]) {
      dialectDict[char].pu = result[0];
      added++;
    } else {
      dialectDict[char].pu = '';
      empty++;
    }
  } catch (e) {
    dialectDict[char].pu = '';
    empty++;
    console.warn(`Pinyin 失败: ${char} (U+${char.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')})`);
  }
}

// Step 3: 备份原文件
fs.copyFileSync(DICT_PATH, BACKUP_PATH);
console.log(`已备份: ${BACKUP_PATH}`);

// Step 4: 写回更新后的文件（保持条目顺序）
const entries = Object.entries(dialectDict);
let output = '// 将转换好的JSON数据暴露出去\nconst dialectDict = {\n';
for (let i = 0; i < entries.length; i++) {
  const [char, e] = entries[i];
  const comma = i < entries.length - 1 ? ',' : '';
  output += `  "${char}": { guang: "${e.guang}", shang: "${e.shang}", xia: "${e.xia}", pu: "${e.pu}" }${comma}\n`;
}
output += '};\n\nmodule.exports = {\n  dialectDict: dialectDict\n};\n';

fs.writeFileSync(DICT_PATH, output, 'utf-8');
console.log(`完成。总计: ${entries.length} 条, 成功生成拼音: ${added} 条, 空值: ${empty} 条`);
