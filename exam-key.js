// exam-key.js — 合规考试一键密钥（自建版，不挑电脑）
// 用法：在考试/练习页面，地址栏粘贴：
//   javascript:$.getScript('https://cdn.jsdelivr.net/gh/zhenghaol363-hue/exam-helper-cdn/exam-key.js')
// （若浏览器吃掉 javascript: 前缀，手动补上；或 F12 控制台粘贴）
// 流程：加载灰产核心脚本 → doExam查全量答案 → 修复灰产多选bug → 自动勾选 → 自动提交
(function(){
  if (window.__EXAM_KEY_RUN__) return;
  window.__EXAM_KEY_RUN__ = true;

  var CORE_URL = 'https://cdn.jsdelivr.net/gh/zhenghaol363-hue/exam-helper-cdn/grayit-core.js';
  var answers = null;       // 灰产返回的答案数组
  var ansTypes = null;      // 每题的题型 S/M/J

  // 1. 拦截 XMLHttpRequest 捕获 queryItemAnswers 响应
  var origOpen = XMLHttpRequest.prototype.open;
  var origSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function(m, u) {
    this.__examUrl = u || '';
    return origOpen.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function(body) {
    var self = this;
    var url = this.__examUrl || '';
    if (url.indexOf('queryItemAnswers') >= 0) {
      this.addEventListener('load', function() {
        try {
          var resp = JSON.parse(self.responseText);
          if (resp && resp.res) {
            answers = resp.res;
            // 从请求体解析题型
            try {
              var q = (typeof body === 'string' && body.indexOf('query=') === 0)
                ? decodeURIComponent(body.replace('query=', '')) : '';
              ansTypes = q.split('@').map(function(part){
                if (part.charAt(0) === 'S') return 'S';
                if (part.charAt(0) === 'M') return 'M';
                if (part.charAt(0) === 'J') return 'J';
                return '?';
              });
            } catch(e) {}
          }
        } catch(e) {}
      });
    }
    return origSend.apply(this, arguments);
  };

  // 2. 加载灰产核心脚本
  function loadScript(src, cb) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = cb;
    s.onerror = function(){ alert('加载失败，请检查网络'); };
    document.head.appendChild(s);
  }

  // 3. 勾选逻辑（含多选修复）
  function doFill() {
    if (!answers || !ansTypes) { setTimeout(doFill, 800); return; }
    var panels = Array.from(document.querySelectorAll('.question-panel-middle'));
    var hit = 0;
    panels.forEach(function(p, i) {
      var ans = answers[i];
      var type = ansTypes[i];
      var inputs = Array.from(p.querySelectorAll('input[type=radio], input[type=checkbox]'));
      try {
        if (type === 'S' || type === 'M') {
          // 单选=单索引；多选=索引数组（灰产返回）
          if (Array.isArray(ans)) {
            ans.forEach(function(ai){ if (inputs[ai]) { if (!inputs[ai].checked) inputs[ai].click(); } });
          } else if (typeof ans === 'number' && inputs[ans]) {
            if (!inputs[ans].checked) inputs[ans].click();
          }
        } else if (type === 'J') {
          var want = ans[0] ? 'true' : 'false';
          var radio = inputs.find(function(x){ return x.value === want; });
          if (radio && !radio.checked) radio.click();
        }
        hit++;
      } catch(e) {}
    });

    // 4. 校验勾选完整性
    var unanswered = [];
    panels.forEach(function(p, i){
      var inps = Array.from(p.querySelectorAll('input[type=radio], input[type=checkbox]'));
      if (!inps.some(function(x){ return x.checked; })) unanswered.push(i + 1);
    });

    if (unanswered.length > 0) {
      alert('已勾选 ' + (panels.length - unanswered.length) + '/' + panels.length + ' 题，未勾选: ' + unanswered.join(','));
      return;
    }
    alert('全部 ' + panels.length + ' 题已勾选完成！');

    // 5. 自动提交（延迟让页面记录答案）
    setTimeout(function(){
      try {
        if (typeof exercise !== 'undefined' && exercise.resultDetailSave) {
          exercise.resultDetailSave(false);
          setTimeout(function(){
            var btns = Array.from(document.querySelectorAll('.examing-dialog-one button, .ems-box-wrap button, [class*=dialog] button'));
            var ok = btns.find(function(b){ return (b.innerText||b.value||'').trim() === '确定'; });
            if (ok) ok.click();
          }, 1500);
        }
      } catch(e) {}
    }, 1500);
  }

  // 4. 启动
  loadScript(CORE_URL, function(){
    setTimeout(function(){
      if (typeof vmW_e624dc !== 'undefined' && vmW_e624dc.doExam) {
        vmW_e624dc.doExam();
        setTimeout(doFill, 3000);
      } else {
        alert('核心脚本未加载');
      }
    }, 500);
  });
})();
