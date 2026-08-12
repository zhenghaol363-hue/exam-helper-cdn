// exam-compliance.js — 合规知识测试 题库密钥（网站收割版，FNV-1a）
// 来源：2026年平邑合规知识测试 实际练习页面收割
// 用法：javascript:$.getScript('https://cdn.jsdelivr.net/gh/zhenghaol363-hue/exam-helper-cdn/exam-compliance.js')
(function(){
  if (window.__COMPLIANCE_RUN__) return;
  window.__COMPLIANCE_RUN__ = true;

  var BANK = {"6d569c9f":["D","SINGLE"],"4ce2420a":["A","SINGLE"],"603e1e23":["B","SINGLE"],"5d084a8b":["D","SINGLE"],"7d74a052":["C","SINGLE"],"bcc4c0c8":["B","SINGLE"],"1fb368ec":["C","SINGLE"],"c77ed708":["B","SINGLE"],"b78fbe32":["A","SINGLE"],"0efb5fe0":["A","SINGLE"],"84a54d4c":["D","SINGLE"],"b39ac38e":["B","SINGLE"],"9bc87c77":["A","SINGLE"],"6a33440e":["D","SINGLE"],"eedad4e2":["C","SINGLE"],"5bc69d5b":["A","SINGLE"],"1082338c":["B","SINGLE"],"85c34986":["C","SINGLE"],"503e21ab":["A","SINGLE"],"ac548e0e":["D","SINGLE"],"c269ba65":["A","SINGLE"],"b470cea3":["D","SINGLE"],"86e9de07":["A","SINGLE"],"6f90608b":["D","SINGLE"],"c98ef01f":["B","SINGLE"],"284f812c":["D","SINGLE"],"0154ef16":["B","SINGLE"],"6c08e64e":["D","SINGLE"],"8fdbce86":["A","SINGLE"],"809537e1":["A","SINGLE"],"844d33cc":["B","SINGLE"],"edeb64d8":["A","SINGLE"],"97672bf6":["A","SINGLE"],"8398c7b1":["A","SINGLE"],"bf287336":["A","SINGLE"],"dcab09d5":["A","SINGLE"],"2a9690c3":["D","SINGLE"],"a6f34ade":["B","SINGLE"],"f904e93c":["C","SINGLE"],"12b77c38":["D","SINGLE"],"dbf5b8e1":["A, B, C, D","MULTIPLE"],"cde7d690":["A, B, C, D","MULTIPLE"],"56a3088b":["A, B, C, D","MULTIPLE"],"0e66ce48":["A, B, C, D","MULTIPLE"],"3af2d288":["A, B, C, D","MULTIPLE"],"2cbc8179":["A, B, C, D","MULTIPLE"],"715d356a":["A, B, C, D","MULTIPLE"],"d4f7e71b":["A, B, C","MULTIPLE"],"7b20e55c":["A, B, C","MULTIPLE"],"82793fc7":["A, B, C","MULTIPLE"],"92ee3f7e":["A, B, C, D","MULTIPLE"],"c91ebcd1":["A, B, C, D","MULTIPLE"],"c14674cb":["A, B, C","MULTIPLE"],"f2c0bac4":["A, B, C, D","MULTIPLE"],"671bfeb9":["A, B, C, D","MULTIPLE"],"bedc3663":["A, B, C, D","MULTIPLE"],"929e8de8":["A, B, C, E","MULTIPLE"],"d63eaee8":["A, B, C, D","MULTIPLE"],"b6e6c3af":["A, B, C, E","MULTIPLE"],"b4b77db0":["A, B, C","MULTIPLE"],"058de05e":["false","JUDGMENT"],"ce4e959d":["true","JUDGMENT"],"82faba53":["true","JUDGMENT"],"47e3accf":["false","JUDGMENT"],"4b1cd214":["true","JUDGMENT"],"f783ed66":["true","JUDGMENT"],"30e14883":["true","JUDGMENT"],"2427928d":["false","JUDGMENT"],"a09ed6ce":["true","JUDGMENT"],"cef78a23":["true","JUDGMENT"],"7a0a106b":["true","JUDGMENT"],"31e9b96f":["false","JUDGMENT"],"b2b24efa":["true","JUDGMENT"],"fe3eab6c":["true","JUDGMENT"],"43966fdf":["true","JUDGMENT"],"d1b06c5e":["true","JUDGMENT"],"29f96684":["true","JUDGMENT"],"756469c9":["false","JUDGMENT"],"ea4a25bc":["false","JUDGMENT"],"e3ed58fd":["true","JUDGMENT"],"fe121ffb":["false","JUDGMENT"],"0eed6626":["false","JUDGMENT"],"976b0ab2":["false","JUDGMENT"],"94aaa199":["false","JUDGMENT"],"c2f4e36e":["false","JUDGMENT"],"291aeb83":["true","JUDGMENT"],"e3357050":["true","JUDGMENT"],"689e5ab3":["true","JUDGMENT"],"f6a1aa8f":["false","JUDGMENT"],"3e67c3d3":["false","JUDGMENT"]};

  function mul32(x, y) {
    var xl = x & 0xffff, xh = (x >>> 16) & 0xffff;
    var yl = y & 0xffff, yh = (y >>> 16) & 0xffff;
    var lo = xl * yl;
    var mid = xl * yh + xh * yl;
    return ((lo + ((mid & 0xffff) << 16)) & 0xFFFFFFFF) >>> 0;
  }
  function h(s){
    var r = 0x811c9dc5;
    for (var i = 0; i < s.length; i++) {
      var x = (r ^ s.charCodeAt(i)) >>> 0;
      r = mul32(x, 0x01000193);
    }
    var hex = (r >>> 0).toString(16);
    while (hex.length < 8) hex = '0' + hex;
    return hex;
  }

  function clean(s){ return (s||'').replace(/[^\u4e00-\u9fa5a-zA-Z0-9_\u2160-\u217F]/g,''); }

  function lookup(stem){
    var c = clean(stem);
    if (!c) return null;
    return BANK[h(c)] || null;
  }

  function doFill(){
    var panels = Array.from(document.querySelectorAll('.question-panel-middle'));
    if (!panels.length) panels = Array.from(document.querySelectorAll('.question-panel'));
    var hit = 0, miss = 0;
    panels.forEach(function(p){
      var stem = (p.innerText || '');
      // Strip "参考答案 ：X" suffix
      stem = stem.replace(/参考答案[\s\S]*$/, '').trim();
      var item = lookup(stem);
      var inputs = Array.from(p.querySelectorAll('input[type=radio], input[type=checkbox]'));
      if (!inputs.length) return;
      if (item) {
        var ans = item[0], type = item[1];
        try {
          if (type === 'JUDGMENT') {
            var want = ans === 'true' ? 'true' : 'false';
            var radio = inputs.find(function(x){ return String(x.value).toLowerCase() === want; });
            if (radio && !radio.checked) radio.click();
          } else if (type === 'MULTIPLE') {
            var list = ans.split(',');
            list.forEach(function(letter){
              var idx = letter.trim().charCodeAt(0) - 65;
              if (inputs[idx] && !inputs[idx].checked) inputs[idx].click();
            });
          } else {
            var idx2 = ans.charCodeAt(0) - 65;
            if (inputs[idx2] && !inputs[idx2].checked) inputs[idx2].click();
          }
          hit++;
        } catch(e){ miss++; }
      } else {
        miss++;
      }
    });
    panels.forEach(function(p){
      var inputs = Array.from(p.querySelectorAll('input[type=radio], input[type=checkbox]'));
      if (inputs.length && !inputs.some(function(x){ return x.checked; })) inputs[0].click();
    });
    return {hit: hit, miss: miss, total: panels.length};
  }

  setTimeout(function(){
    var r = doFill();
    console.log('[合规] 命中', r.hit, '/', r.total, '未命中', r.miss);
    setTimeout(function(){
      try {
        if (typeof exercise !== 'undefined' && exercise.resultDetailSave) {
          exercise.resultDetailSave(false);
        }
      } catch(e) {}
    }, 1500);
  }, 1000);
})();
