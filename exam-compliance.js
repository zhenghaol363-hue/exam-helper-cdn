// exam-compliance.js — 合规知识测试 题库密钥（本地哈希表，FNV-1a）
// 用法：练习页地址栏粘贴：
//   javascript:$.getScript('https://cdn.jsdelivr.net/gh/zhenghaol363-hue/exam-helper-cdn/exam-compliance.js')
// 流程：FNV-1a哈希匹配本地题库 → 勾选答案 → 静默提交
(function(){
  if (window.__COMPLIANCE_RUN__) return;
  window.__COMPLIANCE_RUN__ = true;

  var BANK = {"f5f8fa9b":["B","SINGLE"],"ae349523":["B","SINGLE"],"6830ae45":["B","SINGLE"],"bace0b54":["C","SINGLE"],"542cdc8d":["B","SINGLE"],"16aab653":["B","SINGLE"],"6449fd04":["B","SINGLE"],"e65a013f":["A","SINGLE"],"2c6de2a7":["A","SINGLE"],"df322701":["A","SINGLE"],"e747a40e":["A","SINGLE"],"678a00de":["B","SINGLE"],"ee546f1d":["A","SINGLE"],"72cd85c3":["B","SINGLE"],"83bec4f5":["B","SINGLE"],"745b1805":["B","SINGLE"],"c0fcd244":["B","SINGLE"],"0728ada1":["C","SINGLE"],"de0812b6":["A","SINGLE"],"2191c206":["A","SINGLE"],"18d920f0":["B","SINGLE"],"feaecc82":["B","SINGLE"],"73c3c169":["A","SINGLE"],"c407d8d0":["B","SINGLE"],"5fa0c83c":["D","SINGLE"],"91236e09":["D","SINGLE"],"abb2b3f9":["D","SINGLE"],"6f052e98":["A","SINGLE"],"2d9d826a":["A","SINGLE"],"af42338f":["B","SINGLE"],"af6c3da0":["A","SINGLE"],"ca36cdda":["A","SINGLE"],"50905dcb":["B","SINGLE"],"d766ecd9":["B","SINGLE"],"4bcb1b76":["A","SINGLE"],"eea6c710":["A","SINGLE"],"4e99f7aa":["A","SINGLE"],"bad0e541":["A,B,C","MULTIPLE"],"e28271d6":["A,B,C","MULTIPLE"],"007c0592":["A,B,C","MULTIPLE"],"4695d1e9":["A,B,C,D","MULTIPLE"],"bd81f4ad":["A,B,C","MULTIPLE"],"c7495f87":["A,B,C,D","MULTIPLE"],"73f165a0":["A,B,C","MULTIPLE"],"3e9815e7":["A,B,C","MULTIPLE"],"e71849fe":["A,B,C,D","MULTIPLE"],"85344f69":["A,B,C,D","MULTIPLE"],"93b58c69":["A,B,C,D","MULTIPLE"],"bbb2137b":["A,B,C,D","MULTIPLE"],"8eb4c805":["A,B,C,D","MULTIPLE"],"b3e7af34":["A,B,C","MULTIPLE"],"a67767d3":["A,B,C,D","MULTIPLE"],"22833e13":["A,B,C","MULTIPLE"],"796940a3":["A,B,C,D","MULTIPLE"],"daf73aac":["A,B,C","MULTIPLE"],"cc30d2ff":["A,B,C,D","MULTIPLE"],"9e4f9138":["A,B,C,D","MULTIPLE"],"7eb972c4":["A,B,C","MULTIPLE"],"3dcbe5b6":["A,B,C,D","MULTIPLE"],"9853c306":["A,B,C,D","MULTIPLE"],"bf8c4806":["A,B,C,D","MULTIPLE"],"a317ab8f":["A,B","MULTIPLE"],"8fa2004a":["A,B,C","MULTIPLE"],"f7ba9f57":["A,B,C","MULTIPLE"],"a4f27990":["A,B,C","MULTIPLE"],"6d986649":["A,B,C","MULTIPLE"],"e2655dc7":["true","JUDGMENT"],"59e06080":["true","JUDGMENT"],"d810af02":["false","JUDGMENT"],"19ca6a49":["false","JUDGMENT"],"6e5a0164":["true","JUDGMENT"],"513a267a":["true","JUDGMENT"],"f07a0a98":["false","JUDGMENT"],"66afebb4":["true","JUDGMENT"],"19cf5cb5":["false","JUDGMENT"],"00433f34":["true","JUDGMENT"],"892129bb":["true","JUDGMENT"],"93d09afa":["false","JUDGMENT"],"3b973848":["true","JUDGMENT"],"2972ab9e":["false","JUDGMENT"],"eee831e7":["true","JUDGMENT"],"3a9c70a6":["false","JUDGMENT"],"e21f99f4":["false","JUDGMENT"],"2744558d":["true","JUDGMENT"],"e0633006":["false","JUDGMENT"],"d0509be6":["true","JUDGMENT"],"9dd0a13f":["true","JUDGMENT"],"ead55b1c":["true","JUDGMENT"],"a57b9208":["false","JUDGMENT"],"4d236224":["false","JUDGMENT"],"97820275":["false","JUDGMENT"],"5acb56bd":["true","JUDGMENT"],"7a470b5b":["true","JUDGMENT"],"ea6af811":["false","JUDGMENT"],"1fc55cd2":["true","JUDGMENT"],"5c83b248":["true","JUDGMENT"],"fff1f842":["A","SINGLE"],"2b920f1d":["B","SINGLE"],"b5765a70":["A","SINGLE"],"9caa6a06":["C","SINGLE"],"28b2e29f":["B","SINGLE"],"e8f6b512":["A","SINGLE"],"4dd1dfed":["B","SINGLE"],"c6ea90c2":["C","SINGLE"],"dfbe3566":["A","SINGLE"],"f239b648":["B","SINGLE"],"3b734452":["C","SINGLE"],"4e7d3ad8":["A","SINGLE"],"95a62867":["A","SINGLE"],"da2eda2d":["A","SINGLE"],"2f947d34":["B","SINGLE"],"2ad21712":["A","SINGLE"],"7b7a6159":["A","SINGLE"],"011fcc7b":["A","SINGLE"],"57d48a71":["A","SINGLE"],"839b8fd1":["A","SINGLE"],"2d6a6108":["A","SINGLE"],"2c385029":["A","SINGLE"],"c526d2c0":["A","SINGLE"],"9996a43d":["B","SINGLE"],"ac6300a6":["A","SINGLE"],"d196fe79":["A","SINGLE"],"6e38bf6d":["A","SINGLE"],"fd2f62d0":["A","SINGLE"],"81d68584":["A","SINGLE"],"2fbc47a7":["D","SINGLE"],"6dde8f8c":["D","SINGLE"],"4d17e0c1":["A","SINGLE"],"28bbf391":["A","SINGLE"],"d7b92dd6":["A","SINGLE"],"0dae66fd":["A","SINGLE"],"c5e271a0":["A","SINGLE"],"7bf213c4":["A","SINGLE"],"9ab462a8":["A","SINGLE"],"061ce1d8":["B","SINGLE"],"80741d13":["A","SINGLE"],"1cb4caa3":["B","SINGLE"],"ae0b6b3f":["C","SINGLE"],"721451ed":["D","SINGLE"],"df393c8b":["A","SINGLE"],"3485242a":["A","SINGLE"],"40f9af8d":["D","SINGLE"],"74882e93":["A","SINGLE"],"3275870a":["A","SINGLE"],"734e055a":["A","SINGLE"],"713d589b":["A","SINGLE"],"8a63ef91":["A","SINGLE"],"2d6bfbbd":["A","SINGLE"],"f60114ea":["A","SINGLE"],"9719eef9":["A","SINGLE"],"6a861372":["A","SINGLE"],"8a4713c5":["A","SINGLE"],"2e05eee5":["A,B,C,D","MULTIPLE"],"1385ccfb":["A,B,C,D","MULTIPLE"],"c799d8c3":["A,B,C,D","MULTIPLE"],"c633505e":["A,B,C,D","MULTIPLE"],"2ade4eef":["A,B,C,D","MULTIPLE"],"d800ba75":["A,B,C,D","MULTIPLE"],"09c797cc":["A,B,C","MULTIPLE"],"d8a2b119":["A,B,C,D","MULTIPLE"],"d596b351":["A,B,C,D","MULTIPLE"],"374d88cd":["A,B,C,D","MULTIPLE"],"9814613e":["A,B,C,D","MULTIPLE"],"2371bb83":["A,B,C,D","MULTIPLE"],"7b503a41":["A,B,C,D","MULTIPLE"],"2cdde1f7":["A,B,C,D,E","MULTIPLE"],"9e3a03fc":["A,B,C,E","MULTIPLE"],"c078b7ec":["A,B,C","MULTIPLE"],"a95adb15":["A,B,C,D,E","MULTIPLE"],"5e00d635":["A,B,C,E","MULTIPLE"],"4bbea8d8":["A,B","MULTIPLE"],"692ea34a":["A,B,C","MULTIPLE"],"19830a12":["A,B,C,D","MULTIPLE"],"b2e1fa71":["A,B,C","MULTIPLE"],"59dbef4f":["A,B,C,D","MULTIPLE"],"ab614d2b":["A,B,C","MULTIPLE"],"3e0fa49b":["A,B,C,D","MULTIPLE"],"7fae87bb":["A,B,C,D","MULTIPLE"],"3625c775":["A,B,C,D","MULTIPLE"],"94e52f39":["A,B,C","MULTIPLE"],"67e8f3fa":["A,B,C,E","MULTIPLE"],"500b6674":["true","JUDGMENT"],"1af2e72c":["true","JUDGMENT"],"65e327b7":["false","JUDGMENT"],"b70c5e27":["false","JUDGMENT"],"91a94a81":["true","JUDGMENT"],"1eb555ca":["false","JUDGMENT"],"abd348cb":["true","JUDGMENT"],"5b679f9c":["false","JUDGMENT"],"25a98685":["true","JUDGMENT"],"69bca3b4":["true","JUDGMENT"],"de448dab":["false","JUDGMENT"],"3e9a5f25":["true","JUDGMENT"],"b6a0da86":["false","JUDGMENT"],"34de76c9":["false","JUDGMENT"],"cd700d5d":["false","JUDGMENT"],"894dba4f":["true","JUDGMENT"],"bb09c3c7":["true","JUDGMENT"],"135839ff":["false","JUDGMENT"],"3a4bec41":["false","JUDGMENT"],"890a0207":["true","JUDGMENT"],"c8c44a0a":["true","JUDGMENT"],"da60165a":["false","JUDGMENT"],"42a88166":["true","JUDGMENT"],"abc532be":["false","JUDGMENT"],"a980bf80":["false","JUDGMENT"],"a53a2a63":["true","JUDGMENT"],"4d9f5a14":["false","JUDGMENT"],"9f0d1d8c":["true","JUDGMENT"],"b1233070":["A","SINGLE"],"19ec529d":["C","SINGLE"],"e963b15e":["A","SINGLE"],"f6761f66":["C","SINGLE"],"9c933eef":["B","SINGLE"],"06ac3f04":["A","SINGLE"],"16c050f0":["B","SINGLE"],"2239b615":["B","SINGLE"],"b1660ed0":["C","SINGLE"],"c0b731af":["B","SINGLE"],"8d0ea4a2":["B","SINGLE"],"05157e5c":["C","SINGLE"],"0a4d340e":["C","SINGLE"],"8ec3d449":["D","SINGLE"],"57ed1853":["C","SINGLE"],"40d85f5e":["D","SINGLE"],"2e413605":["D","SINGLE"],"66f84774":["B","SINGLE"],"c592fa47":["C","SINGLE"],"2d49099a":["D","SINGLE"],"63e5bc7d":["B","SINGLE"],"1742ed56":["B","SINGLE"],"fbc828ec":["A","SINGLE"],"9fa5c3f5":["D","SINGLE"],"b86a3f7b":["A","SINGLE"],"26d61a96":["A","SINGLE"],"b563ad18":["D","SINGLE"],"843c2c07":["A","SINGLE"],"79579726":["A","SINGLE"],"aa549c07":["A","SINGLE"],"6cff2125":["A","SINGLE"],"45fcc5a9":["B","SINGLE"],"ef4c1917":["D","SINGLE"],"7764fd3d":["A","SINGLE"],"2d0228e6":["A","SINGLE"],"beb6d7c5":["C","SINGLE"],"a19dde95":["D","SINGLE"],"e1069d91":["C","SINGLE"],"f8b9e969":["A","SINGLE"],"abdcff24":["A","SINGLE"],"78bec01c":["A","SINGLE"],"86f65d5b":["D","SINGLE"],"8c82cf33":["B","SINGLE"],"02d88171":["C","SINGLE"],"e33aa9b2":["D","SINGLE"],"f38eddb5":["A","SINGLE"],"b04bda50":["D","SINGLE"],"9834e88a":["D","SINGLE"],"1dfe92ac":["B","SINGLE"],"6091ad2d":["D","SINGLE"],"e6daea79":["C","SINGLE"],"90ea24eb":["C","SINGLE"],"3d699c9f":["A","SINGLE"],"5cbfafc6":["A","SINGLE"],"c3e2903d":["C","SINGLE"],"b4f515c3":["D","SINGLE"],"97f6af41":["A","SINGLE"],"726dba7f":["D","SINGLE"],"d311eacb":["A","SINGLE"],"3a7bf175":["D","SINGLE"],"c2254b63":["A","SINGLE"],"0a402590":["D","SINGLE"],"7c2286f2":["A,B,C,D","MULTIPLE"],"7eb81197":["A,B,C,D","MULTIPLE"],"addddab5":["A,B,C,D","MULTIPLE"],"06b6c2a3":["A,B,C,E","MULTIPLE"],"886991d4":["A,B,C,D","MULTIPLE"],"22eb6e2a":["A,B,C,D","MULTIPLE"],"7ce748c6":["A,B,C,D","MULTIPLE"],"c726096f":["A,B,C,D","MULTIPLE"],"09d75bed":["A,B","MULTIPLE"],"b9318439":["A,B,C,D","MULTIPLE"],"841ca78b":["A,B,C,D","MULTIPLE"],"1483bd4d":["A,B,C","MULTIPLE"],"0558a731":["A,B,C","MULTIPLE"],"763f30d5":["A,B,C,D","MULTIPLE"],"17c3efe3":["A,B,C,D","MULTIPLE"],"3b2b47b2":["A,B,C,D","MULTIPLE"],"f759c0e9":["A,B,C","MULTIPLE"],"a924069f":["A,B,C,D","MULTIPLE"],"31d8d4ee":["A,B,C","MULTIPLE"],"2fd38d01":["A,B,C,D","MULTIPLE"],"cbf59b40":["A,B,C,D","MULTIPLE"],"05ecdf49":["A,B,C,D","MULTIPLE"],"0eb24594":["A,B,C,D","MULTIPLE"],"fba90951":["A,B,C,D","MULTIPLE"],"9a574fe4":["A,B,C,D","MULTIPLE"],"1d93abfb":["A,B,C,D","MULTIPLE"],"fc0360e1":["A,B,C,E","MULTIPLE"],"5946e0ba":["A,B,C,E","MULTIPLE"],"12e8daa5":["A,B,C,D","MULTIPLE"],"61e1c4f2":["A,B,C,D","MULTIPLE"],"904747bb":["true","JUDGMENT"],"56c74f05":["false","JUDGMENT"],"35bc0d5d":["true","JUDGMENT"],"fc2ad055":["true","JUDGMENT"],"9954d19e":["true","JUDGMENT"],"34c1fbd2":["false","JUDGMENT"],"498f3400":["true","JUDGMENT"],"cb08f233":["false","JUDGMENT"],"d6fa9607":["true","JUDGMENT"],"f311835e":["false","JUDGMENT"],"0a44bf0b":["true","JUDGMENT"],"95dd5bfb":["true","JUDGMENT"],"4692e2a1":["false","JUDGMENT"],"c0010897":["false","JUDGMENT"],"9a6347a6":["true","JUDGMENT"],"b8f0f15f":["true","JUDGMENT"],"91097d91":["false","JUDGMENT"],"fab6e2ea":["true","JUDGMENT"],"9521f694":["true","JUDGMENT"],"dd8edb26":["false","JUDGMENT"],"60d18e0a":["true","JUDGMENT"],"b0f21274":["false","JUDGMENT"],"ded896cf":["true","JUDGMENT"],"a64b80f9":["true","JUDGMENT"],"cd0902b8":["true","JUDGMENT"],"58588bcf":["true","JUDGMENT"],"2b7d9f2a":["false","JUDGMENT"],"ece97b8a":["true","JUDGMENT"],"c8ba2f87":["true","JUDGMENT"],"3e91cc3a":["false","JUDGMENT"],"e5b5b0c6":["C","SINGLE"],"bf4927d3":["D","SINGLE"],"43415eff":["D","SINGLE"],"8b3ad2ca":["B","SINGLE"],"3baef08b":["D","SINGLE"],"b1f4562d":["D","SINGLE"],"ad5a79dd":["D","SINGLE"],"21423d24":["D","SINGLE"],"b3257d4b":["D","SINGLE"],"64dd9bcf":["D","SINGLE"],"fd29a953":["D","SINGLE"],"42d58c38":["D","SINGLE"],"25affa5e":["A","SINGLE"],"9cad41bd":["D","SINGLE"],"105534a4":["C","SINGLE"],"454c67b2":["A","SINGLE"],"a6da8d33":["B","SINGLE"],"b13301c3":["A","SINGLE"],"515ee5d2":["D","SINGLE"],"b6fd228e":["D","SINGLE"],"166de2d5":["D","SINGLE"],"649f5b99":["D","SINGLE"],"18f54c11":["D","SINGLE"],"386f6e6b":["D","SINGLE"],"b02b297f":["D","SINGLE"],"dbd7e476":["B","SINGLE"],"f4db0cf2":["D","SINGLE"],"885cccce":["C","SINGLE"],"454e22e7":["D","SINGLE"],"c903574f":["D","SINGLE"],"64a58e1e":["D","SINGLE"],"8318d7dc":["C","SINGLE"],"6f5f8dd6":["C","SINGLE"],"dff028e5":["D","SINGLE"],"397a1dbf":["D","SINGLE"],"e89bc677":["A,B,C,D,E","MULTIPLE"],"8b7c937c":["A,B,C,D,E","MULTIPLE"],"925828c2":["A,B,C,D","MULTIPLE"],"261f4e07":["A,B,C,D","MULTIPLE"],"2c58b7b4":["A,B,C,D","MULTIPLE"],"08b1ba8d":["A,B,C,D,E","MULTIPLE"],"0869844e":["A,B,C,D","MULTIPLE"],"35268c02":["A,B,C,D,E","MULTIPLE"],"0b3696df":["A,B,C","MULTIPLE"],"ace459c8":["A,B,C,D,E","MULTIPLE"],"11b3c46f":["A,B,C,E","MULTIPLE"],"53e5ff18":["A,B,C,E","MULTIPLE"],"ea0e3172":["A,B,C,D,E","MULTIPLE"],"9af8fad0":["A,B,C,D","MULTIPLE"],"89789b44":["A,B,C,D","MULTIPLE"],"7e714bd5":["A,B,C,D,E","MULTIPLE"],"282656f2":["A,B,C,D,E","MULTIPLE"],"7d3219f5":["A,B,C,D","MULTIPLE"],"ca47c91f":["A,B,C,D","MULTIPLE"],"2b61836a":["A,B,C,D,E","MULTIPLE"],"d4288f7a":["A,B,C,D","MULTIPLE"],"e6b37758":["A,B,C,E","MULTIPLE"],"e5b76713":["A,B,C,D","MULTIPLE"],"56e66aa1":["A,B,C,D","MULTIPLE"],"e2f1b1aa":["A,B,C,E","MULTIPLE"],"0049d967":["A,C","MULTIPLE"],"030ac7a4":["A,B,C,D","MULTIPLE"],"e9663d11":["A,B,C","MULTIPLE"],"0f57d397":["true","JUDGMENT"],"06466e8c":["false","JUDGMENT"],"330e8d8c":["true","JUDGMENT"],"6e6aed72":["false","JUDGMENT"],"0f431959":["false","JUDGMENT"],"dfdc0adc":["true","JUDGMENT"],"6c1cda5c":["true","JUDGMENT"],"80b69c44":["false","JUDGMENT"],"724ba69f":["true","JUDGMENT"],"5a8130cd":["true","JUDGMENT"],"00315d96":["true","JUDGMENT"],"721efabd":["false","JUDGMENT"],"34da27ba":["true","JUDGMENT"],"131bea38":["false","JUDGMENT"],"a7b928bf":["false","JUDGMENT"],"0c9c35ee":["true","JUDGMENT"],"f91119c0":["false","JUDGMENT"],"500a6691":["true","JUDGMENT"],"82dca52e":["false","JUDGMENT"],"b2834fd2":["false","JUDGMENT"],"2ebc7ced":["true","JUDGMENT"],"de04a672":["false","JUDGMENT"],"9dd71549":["true","JUDGMENT"],"c9e0a55e":["false","JUDGMENT"],"33201267":["true","JUDGMENT"],"b31d6458":["false","JUDGMENT"]};

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

  function clean(s){ return (s||'').replace(/[^\u4e00-\u9fa5a-zA-Z0-9_]/g,''); }

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
      stem = stem.replace(/参考答案\s*[：:]?\s*[A-H](?:\s*,\s*[A-H])*(?:对|错|正确|错误)?$/, '');
      stem = stem.replace(/参考答案\s*[：:]?\s*[A-H](?:\s*,\s*[A-H])*$/, '');
      stem = stem.replace(/参考答案\s*[：:]?\s*(对|错|正确|错误)$/, '');
      stem = stem.replace(/^\s*\d+\s*[.．、]?\s*/, '');
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
              var idx = letter.charCodeAt(0) - 65;
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
          setTimeout(function(){
            var btns = Array.from(document.querySelectorAll('.examing-dialog-one button, .ems-box-wrap button, [class*=dialog] button'));
            var ok = btns.find(function(b){ return (b.innerText||b.value||'').trim() === '确定'; });
            if (ok) ok.click();
          }, 1500);
        }
      } catch(e) {}
    }, 1500);
  }, 1000);
})();
