// 引入你的两个字典
const dictData = require('../../data/dict_data.js'); // 你的方言字典（繁体->拼音）
const s2tData = require('../../data/s2t_dict.js');   // 简繁字典（简体->[繁体数组]）

Page({
  data: {
    inputValue: '',
    targetChar: '',
    results: [], // 改为数组，因为可能有多个结果
    hasSearched: false
  },

  onInput(e) {
    this.setData({ inputValue: e.detail.value.trim() });
  },

  onSearch() {
    const char = this.data.inputValue;
    if (!char) {
      wx.showToast({ title: '请输入单字', icon: 'none' });
      return;
    }

    // 1. 先查简繁字典，获取繁体字数组。
    // 如果字典里没有这个字（说明它本身没有繁体，或者用户直接输入了繁体），就把它本身作为一个数组返回。
    let tradCharsArray = s2tData.s2t[char] || [char]; 

    // 2. 遍历繁体字数组，去你的方言字典里查拼音
    let finalResults = [];
    for (let i = 0; i < tradCharsArray.length; i++) {
      let tradChar = tradCharsArray[i];
      let dictEntry = dictData.dialectDict[tradChar];
      
      // 如果在方言字典里找到了这个字的数据
      if (dictEntry) {
        finalResults.push({
          char: tradChar,
          guangPinyin: dictEntry.guang || '暂无',
          shangPinyin: dictEntry.shang || '暂无',
          xiaPinyin: dictEntry.xia || '暂无'
        });
      }
    }

    // 3. 把结果更新到页面上
    this.setData({
      targetChar: char,
      results: finalResults,
      hasSearched: true
    });

    this.setData({ inputValue: '' })
  }
})