// 17任职自动收割脚本 - 在Edge练习页粘贴到地址栏执行
// 格式: javascript:$.getScript('https://cdn.jsdelivr.net/gh/zhenghaol363-hue/exam-helper-cdn@main/harvest17.js')

(function() {
  'use strict';
  
  // === FNV-1a 32-bit hash ===
  function mul32(x, y) {
    var xl = x & 0xffff, xh = (x >>> 16) & 0xffff;
    var yl = y & 0xffff, yh = (y >>> 16) & 0xffff;
    var lo = xl * yl, mid = xl * yh + xh * yl;
    return ((lo + ((mid & 0xffff) << 16)) & 0xFFFFFFFF) >>> 0;
  }
  function h(s) {
    var r = 0x811c9dc5;
    for (var i = 0; i < s.length; i++)
      r = mul32(r ^ s.charCodeAt(i), 0x01000193);
    var hex = (r >>> 0).toString(16);
    while (hex.length < 8) hex = '0' + hex;
    return hex;
  }
  function clean(s) {
    return (s||'').replace(/[^\u4e00-\u9fa5a-zA-Z0-9_\u2160-\u217F]/g,'');
  }
  
  // === State management via localStorage ===
  function loadBank() {
    try { return JSON.parse(localStorage.__harvest17_bank || '{}'); }
    catch(e) { return {}; }
  }
  function saveBank(bank) {
    localStorage.__harvest17_bank = JSON.stringify(bank);
  }
  
  var ROUND = parseInt(localStorage.__harvest17_round || '0');
  var bank = loadBank();
  var TOTAL_TARGET = 1050; // ~943 unique + buffer
  
  console.log('%c🔫 17任职收割器 v1.0 %c| 已有 %c' + Object.keys(bank).length + '%c 题 | 第 %c' + (ROUND+1) + '%c 轮',
    'color:#ff0','','color:#0f0','','color:#ff0','');
  
  // === Detect page type ===
  var isPractice = document.body.innerText.includes('提交练习') && !document.body.innerText.includes('再来一次');
  var isResults = !!document.body.innerText.includes('再来一次');
  
  console.log('Page type:', isPractice ? 'PRACTICE' : isResults ? 'RESULTS' : 'UNKNOWN');
  
  // === PRACTICE MODE: Random answer + submit ===
  if (isPractice) {
    console.log('🎯 Answering all questions randomly...');
    
    // Find all input groups
    var allInputs = document.querySelectorAll('input[type=radio], input[type=checkbox]');
    var groups = {};
    
    allInputs.forEach(function(inp) {
      var name = inp.name;
      if (!name) return;
      if (!groups[name]) groups[name] = {radios:[], checks:[]};
      if (inp.type === 'radio') groups[name].radios.push(inp);
      else groups[name].checks.push(inp);
    });
    
    // Answer each group
    Object.keys(groups).forEach(function(name) {
      var g = groups[name];
      if (g.radios.length > 0) {
        var pick = g.radios[Math.floor(Math.random() * g.radios.length)];
        pick.checked = true;
      }
      if (g.checks.length > 0) {
        // Multiple choice: pick 1-3 random
        var n = 1 + Math.floor(Math.random() * Math.min(g.checks.length, 3));
        for (var i = 0; i < n; i++) {
          var idx = Math.floor(Math.random() * g.checks.length);
          g.checks[idx].checked = true;
        }
      }
    });
    
    var answered = document.querySelectorAll('input:checked').length;
    console.log('✅ Answered ' + answered + ' items. Submitting...');
    
    // Submit
    if (typeof exercise !== 'undefined' && exercise.resultDetailSave) {
      exercise.resultDetailSave(false);
    } else {
      var btns = document.querySelectorAll('button');
      for (var i = 0; i < btns.length; i++) {
        if (btns[i].textContent.includes('提交')) { btns[i].click(); break; }
      }
    }
    
    // Auto-click confirm dialog
    setTimeout(function() {
      var dlg = document.querySelector('.vfdialog, [class*=dialog]');
      if (dlg) {
        var btns = dlg.querySelectorAll('button');
        for (var i = 0; i < btns.length; i++) {
          if (btns[i].textContent.trim() === '确定') { btns[i].click(); break; }
        }
      }
    }, 800);
    
    return;
  }
  
  // === RESULTS MODE: Harvest + loop ===
  if (isResults) {
    console.log('📥 Harvesting answers...');
    var harvested = 0;
    
    // Strategy: find all elements that have innerText containing "参考答案"
    var allEls = document.querySelectorAll('*');
    var seenTexts = {};
    
    allEls.forEach(function(el) {
      var txt = el.innerText;
      if (!txt || !txt.includes('参考答案')) return;
      if (seenTexts[txt]) return;
      seenTexts[txt] = true;
      
      // Extract stem (before 参考答案)
      var stem = txt.replace(/参考答案[\s\S]*$/, '').trim();
      stem = stem.replace(/^\s*\d+\s*[.、．]?\s*/, '').trim();
      
      // Extract answer
      var ansMatch = txt.match(/参考答案\s*[：:]\s*(.+)/);
      if (!ansMatch) return;
      var answer = ansMatch[1].trim();
      
      // Determine type
      var qType = 'SINGLE';
      if (txt.includes('多选题')) qType = 'MULTIPLE';
      else if (txt.includes('判断题')) qType = 'JUDGMENT';
      
      if (qType === 'JUDGMENT') {
        answer = answer.includes('对') || answer.includes('正确') ? 'true' : 'false';
      }
      
      var key = h(clean(stem));
      if (!bank[key]) {
        bank[key] = [answer, qType];
        harvested++;
      }
    });
    
    ROUND++;
    saveBank(bank);
    localStorage.__harvest17_round = ROUND;
    
    var total = Object.keys(bank).length;
    var pct = (total / TOTAL_TARGET * 100).toFixed(1);
    console.log('%c✅ ROUND ' + ROUND + ' 完成！+%c' + harvested + '%c 新题 | 总计: %c' + total + '%c/' + TOTAL_TARGET + ' (%c' + pct + '%%c)',
      'color:#0f0','color:#ff0','color:#0f0','color:#ff0','','color:#0f0','');
    
    if (total >= TOTAL_TARGET) {
      console.log('%c🎉 收割完成！全部 ' + total + ' 题已覆盖！', 'color:#ff0;font-size:16px');
      console.log('导出命令: copy(JSON.stringify(bank))');
      return;
    }
    
    // Click 再来一次
    console.log('🔄 2秒后自动进入下一轮...');
    setTimeout(function() {
      var links = document.querySelectorAll('a');
      for (var i = 0; i < links.length; i++) {
        if (links[i].textContent.trim() === '再来一次') {
          links[i].click();
          break;
        }
      }
    }, 2000);
    
    return;
  }
  
  console.log('⚠️ 无法识别页面类型，请确认在练习页或结果页执行');
})();
