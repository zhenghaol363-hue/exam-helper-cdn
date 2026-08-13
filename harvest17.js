// harvest17.js v2 — 17任职资格考试自动收割器（单步状态机）
// 用法：练习页或结果页，地址栏粘贴：
//   javascript:$.getScript('https://cdn.jsdelivr.net/gh/zhenghaol363-hue/exam-helper-cdn@main/harvest17.js')
// 逻辑：练习页→随机答题+提交；结果页→收割参考答案+再来一次
(function(){
  'use strict';
  function mul32(x,y){var xl=x&0xffff,xh=(x>>>16)&0xffff,yl=y&0xffff,yh=(y>>>16)&0xffff,lo=xl*yl,mid=xl*yh+xh*yl;return((lo+((mid&0xffff)<<16))&0xFFFFFFFF)>>>0;}
  function h(s){var r=0x811c9dc5;for(var i=0;i<s.length;i++){var x=(r^s.charCodeAt(i))>>>0;r=mul32(x,0x01000193);}var H=(r>>>0).toString(16);while(H.length<8)H='0'+H;return H;}
  function clean(s){return(s||'').replace(/[^\u4e00-\u9fa5a-zA-Z0-9_\u2160-\u217F]/g,'');}
  function load(){try{return JSON.parse(localStorage.__harvest17_bank||'{}');}catch(e){return{};}}
  function save(b){localStorage.__harvest17_bank=JSON.stringify(b);}
  function tip(msg){
    var d=document.getElementById('__harvest17_tip__');
    if(!d){d=document.createElement('div');d.id='__harvest17_tip__';d.style.cssText='position:fixed;right:16px;bottom:16px;background:#1a1a2e;color:#fff;padding:14px 20px;border-radius:12px;font-size:15px;z-index:999999;box-shadow:0 4px 18px rgba(0,0,0,.35);font-family:-apple-system,sans-serif;line-height:1.5;';document.body.appendChild(d);}
    d.textContent=msg;
  }

  var bank=load();
  var body=document.body.innerText;
  var isResults=body.indexOf('再来一次')>=0;
  var isPractice=body.indexOf('提交练习')>=0 && !isResults;

  // ===== 练习页：随机答题 + 提交 =====
  if(isPractice){
    var panels=document.querySelectorAll('.question-panel-middle');
    var answered=0;
    panels.forEach(function(p){
      var inputs=p.querySelectorAll('input[type=radio],input[type=checkbox]');
      var radios=[],checks=[];
      Array.prototype.forEach.call(inputs,function(x){if(x.type==='radio')radios.push(x);else checks.push(x);});
      if(checks.length>0){
        // 多选：随机勾 1 个（大概率错，结果页才会显示答案）
        var c=checks[Math.floor(Math.random()*checks.length)];
        if(c&&!c.checked){c.click();answered++;}
      } else if(radios.length>0){
        var r=radios[Math.floor(Math.random()*radios.length)];
        if(r&&!r.checked){r.click();answered++;}
      }
    });
    tip('随机勾选 '+answered+' 题，准备提交...');
    setTimeout(function(){
      var btn=document.querySelector('.sub-exam')||document.querySelector('button.btn-blue');
      if(btn)btn.click();
      setTimeout(function(){
        var bs=document.querySelectorAll('button,input[type=button]');
        for(var i=0;i<bs.length;i++){if((bs[i].innerText||bs[i].value||'').trim()==='确定'){bs[i].click();break;}}
      },1500);
    },800);
    return;
  }

  // ===== 结果页：收割参考答案 =====
  if(isResults){
    var ps=document.querySelectorAll('.question-panel-middle');
    var harvested=0;
    ps.forEach(function(p){
      var full=p.innerText||'';
      var idx=full.indexOf('参考答案');
      if(idx<0)return;
      var stem=full.substring(0,idx);
      stem=stem.replace(/^\s*\d+\s*[.．、]?\s*/,'');
      var tail=full.substring(idx);
      var am=tail.match(/参考答案\s*[：:]\s*(.+)/);
      if(!am)return;
      var answer=am[1].trim();
      var qType=(p.getAttribute('questtype')||'').trim();
      if(!qType||qType==='null'){
        if(/对|错|正确|错误/.test(answer))qType='JUDGMENT';
        else if(answer.indexOf(',')>=0)qType='MULTIPLE';
        else qType='SINGLE';
      }
      if(qType==='JUDGMENT'){answer=/对|正确/.test(answer)?'true':'false';}
      else{answer=answer.replace(/\s/g,'');}
      var key=h(clean(stem));
      if(!bank[key]){bank[key]=[answer,qType];harvested++;}
    });
    save(bank);
    var total=Object.keys(bank).length;
    tip('✅ 本轮 +'+harvested+' 新题 | 累计 '+total+' 题');
    setTimeout(function(){
      var links=document.querySelectorAll('a');
      for(var i=0;i<links.length;i++){if((links[i].innerText||'').trim()==='再来一次'){links[i].click();break;}}
    },1500);
    return;
  }

  tip('⚠️ 未识别页面（请确认在练习页或结果页）');
})();
