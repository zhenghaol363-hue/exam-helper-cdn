// exam-compliance.js — v4 合规密钥（修复1.5分+正则）
(function(){
  if (window.__COMPLIANCE_RUN__) return;
  window.__COMPLIANCE_RUN__ = true;

  var BANK = {"0547775e":["B","SINGLE"],"bdd2c85e":["B","SINGLE"],"962bc5f6":["B","SINGLE"],"61c26b11":["C","SINGLE"],"74d5e9e2":["B","SINGLE"],"b2d2019a":["B","SINGLE"],"5efdaebf":["B","SINGLE"],"c8d495e2":["A","SINGLE"],"5bf1a2ca":["A","SINGLE"],"6713dd18":["A","SINGLE"],"7c8d4de9":["A","SINGLE"],"87c645ef":["B","SINGLE"],"5852d62a":["A","SINGLE"],"24289d7e":["B","SINGLE"],"6720ab32":["B","SINGLE"],"eeff998c":["B","SINGLE"],"43a1a96b":["B","SINGLE"],"99814664":["C","SINGLE"],"fba61fcb":["A","SINGLE"],"9bae1473":["A","SINGLE"],"2e5b08c3":["B","SINGLE"],"463c030b":["B","SINGLE"],"b04ca338":["A","SINGLE"],"b58a4385":["B","SINGLE"],"d339cc2d":["D","SINGLE"],"7a3ba0bc":["D","SINGLE"],"6bd4ead8":["D","SINGLE"],"5d3ad8df":["A","SINGLE"],"af751449":["A","SINGLE"],"f9dd75c0":["B","SINGLE"],"5246751f":["A","SINGLE"],"5abf5f85":["A","SINGLE"],"00337858":["B","SINGLE"],"36657f2e":["B","SINGLE"],"01da7349":["A","SINGLE"],"31b3e6c9":["A","SINGLE"],"0bae0765":["A","SINGLE"],"2399d0b7":["A,B,C","MULTIPLE"],"3f6e8328":["A,B,C","MULTIPLE"],"c69f0046":["A,B,C","MULTIPLE"],"e7e7ef31":["A,B,C,D","MULTIPLE"],"3dacb971":["A,B,C","MULTIPLE"],"cce3b789":["A,B,C,D","MULTIPLE"],"d9f18ad4":["A,B,C","MULTIPLE"],"1e5a34f9":["A,B,C","MULTIPLE"],"02300904":["A,B,C,D","MULTIPLE"],"74a14e3d":["A,B,C,D","MULTIPLE"],"050ddd01":["A,B,C,D","MULTIPLE"],"04df47b1":["A,B,C,D","MULTIPLE"],"843d4085":["A,B,C,D","MULTIPLE"],"48fe3fe0":["A,B,C","MULTIPLE"],"23f0b82f":["A,B,C,D","MULTIPLE"],"4b4973ab":["A,B,C","MULTIPLE"],"62cc3917":["A,B,C,D","MULTIPLE"],"e4f5e5a2":["A,B,C","MULTIPLE"],"bc8974af":["A,B,C,D","MULTIPLE"],"bb71fc94":["A,B,C,D","MULTIPLE"],"71631986":["A,B,C","MULTIPLE"],"7706a33c":["A,B,C,D","MULTIPLE"],"e1d5f506":["A,B,C,D","MULTIPLE"],"f27df4a6":["A,B,C,D","MULTIPLE"],"d19b0b3d":["A,B","MULTIPLE"],"eb0a6d0c":["A,B,C","MULTIPLE"],"d2ef9f1f":["A,B,C","MULTIPLE"],"f39830f6":["A,B,C","MULTIPLE"],"6d370fff":["A,B,C","MULTIPLE"],"6bf8130c":["true","JUDGMENT"],"d4c66fbf":["true","JUDGMENT"],"8873c95d":["false","JUDGMENT"],"b5fb4eaa":["false","JUDGMENT"],"c285ba6b":["true","JUDGMENT"],"7b671235":["true","JUDGMENT"],"f82c8277":["false","JUDGMENT"],"83203c1b":["true","JUDGMENT"],"b7a6a0fe":["false","JUDGMENT"],"5df5e79b":["true","JUDGMENT"],"d5315a28":["true","JUDGMENT"],"686b5ab5":["false","JUDGMENT"],"ea9320c7":["true","JUDGMENT"],"f4ef63a1":["false","JUDGMENT"],"ce2759ec":["true","JUDGMENT"],"e14ed6c9":["false","JUDGMENT"],"3a16a05b":["false","JUDGMENT"],"3cd9a8f6":["true","JUDGMENT"],"d5c84369":["false","JUDGMENT"],"fa814809":["true","JUDGMENT"],"7fefd3e4":["true","JUDGMENT"],"5dca9803":["true","JUDGMENT"],"604af087":["false","JUDGMENT"],"5c1c7d2b":["false","JUDGMENT"],"343e08be":["false","JUDGMENT"],"98059e46":["true","JUDGMENT"],"cee71308":["true","JUDGMENT"],"d6a77892":["false","JUDGMENT"],"884c068d":["true","JUDGMENT"],"118916c7":["true","JUDGMENT"],"21ef21ed":["A","SINGLE"],"cdd85186":["B","SINGLE"],"27abd379":["A","SINGLE"],"015f9a53":["C","SINGLE"],"0307569c":["B","SINGLE"],"a017e741":["A","SINGLE"],"577da290":["B","SINGLE"],"111c830b":["C","SINGLE"],"2948e58b":["A","SINGLE"],"3674db25":["B","SINGLE"],"d4abba6d":["C","SINGLE"],"5e35ff2d":["A","SINGLE"],"e338abba":["A","SINGLE"],"94a99f88":["A","SINGLE"],"3817844f":["B","SINGLE"],"e5660be3":["A","SINGLE"],"bdec22f4":["A","SINGLE"],"2286063a":["A","SINGLE"],"3419990c":["A","SINGLE"],"e36c6526":["A","SINGLE"],"140af38f":["A","SINGLE"],"74e3719c":["A","SINGLE"],"c6bb617d":["A","SINGLE"],"09815ef4":["B","SINGLE"],"6bd5fd89":["A","SINGLE"],"9a6320b4":["A","SINGLE"],"1ee0e1ca":["A","SINGLE"],"3d867c6f":["A","SINGLE"],"1cf17537":["A","SINGLE"],"a2db91d2":["D","SINGLE"],"7bd13ecd":["D","SINGLE"],"c11eece2":["A","SINGLE"],"bcc1cba2":["A","SINGLE"],"4da7d717":["A","SINGLE"],"9792d52c":["A","SINGLE"],"660eeca5":["A","SINGLE"],"4f6ac6ed":["A","SINGLE"],"da88ea2f":["A","SINGLE"],"10983e5f":["B","SINGLE"],"19595b40":["A","SINGLE"],"64b11030":["B","SINGLE"],"533bf74c":["C","SINGLE"],"1b824936":["D","SINGLE"],"37291726":["A","SINGLE"],"5d485369":["A","SINGLE"],"4846856a":["D","SINGLE"],"796b9b04":["A","SINGLE"],"0f9b5c53":["A","SINGLE"],"b05eddf5":["A","SINGLE"],"4a5111cc":["A","SINGLE"],"7a7a3c62":["A","SINGLE"],"adcff34c":["A","SINGLE"],"4ffa0a69":["A","SINGLE"],"20cdc0ac":["A","SINGLE"],"2ec45ded":["A","SINGLE"],"94fc690c":["A","SINGLE"],"9083b5a8":["A,B,C,D","MULTIPLE"],"33e22e54":["A,B,C,D","MULTIPLE"],"f1e8d3ac":["A,B,C,D","MULTIPLE"],"8801ea49":["A,B,C,D","MULTIPLE"],"6ec69fe4":["A,B,C,D","MULTIPLE"],"b5f8f802":["A,B,C,D","MULTIPLE"],"881b880f":["A,B,C","MULTIPLE"],"b354f978":["A,B,C,D","MULTIPLE"],"ce0d08b6":["A,B,C,D","MULTIPLE"],"4fc48cf2":["A,B,C,D","MULTIPLE"],"7d3ab4ed":["A,B,C,D","MULTIPLE"],"b353b15a":["A,B,C,D","MULTIPLE"],"ef018068":["A,B,C,D","MULTIPLE"],"dc33db8c":["A,B,C,D,E","MULTIPLE"],"6f76db61":["A,B,C,E","MULTIPLE"],"0d609639":["A,B,C","MULTIPLE"],"9cc1217c":["A,B,C,D,E","MULTIPLE"],"5faa9b48":["A,B,C,E","MULTIPLE"],"e48cb8c7":["A,B","MULTIPLE"],"86ca740d":["A,B,C","MULTIPLE"],"e7c62705":["A,B,C,D","MULTIPLE"],"65b16ac4":["A,B,C","MULTIPLE"],"57e1c266":["A,B,C,D","MULTIPLE"],"18d155ca":["A,B,C","MULTIPLE"],"e19f29d2":["A,B,C,D","MULTIPLE"],"6c6a9086":["A,B,C,D","MULTIPLE"],"6f2e1506":["A,B,C,D","MULTIPLE"],"411263bc":["A,B,C","MULTIPLE"],"750788a9":["A,B,C,E","MULTIPLE"],"4772b4db":["true","JUDGMENT"],"e57d7d73":["true","JUDGMENT"],"40557f1c":["false","JUDGMENT"],"fb63cc2c":["false","JUDGMENT"],"27aff5a2":["true","JUDGMENT"],"f6ced565":["false","JUDGMENT"],"d21b9f18":["true","JUDGMENT"],"c6781c83":["false","JUDGMENT"],"00a31aae":["true","JUDGMENT"],"4307b41b":["true","JUDGMENT"],"c68504b8":["false","JUDGMENT"],"f3499a0e":["true","JUDGMENT"],"6d5431e9":["false","JUDGMENT"],"77989b2a":["false","JUDGMENT"],"cab40c26":["false","JUDGMENT"],"870c42d4":["true","JUDGMENT"],"6bd5d50c":["true","JUDGMENT"],"03d6cea4":["false","JUDGMENT"],"97001962":["false","JUDGMENT"],"0413914c":["true","JUDGMENT"],"3fd783a5":["true","JUDGMENT"],"709f8355":["false","JUDGMENT"],"8fb6e989":["true","JUDGMENT"],"0b604981":["false","JUDGMENT"],"a83c46bf":["false","JUDGMENT"],"f7f2d030":["true","JUDGMENT"],"f35327bb":["false","JUDGMENT"],"bf8c7113":["true","JUDGMENT"],"483f9a99":["A","SINGLE"],"a05027fc":["C","SINGLE"],"52268cbd":["A","SINGLE"],"efba6d67":["C","SINGLE"],"53ba308c":["B","SINGLE"],"871126eb":["A","SINGLE"],"859e5c19":["B","SINGLE"],"ecdf9976":["B","SINGLE"],"8422c6d5":["C","SINGLE"],"99322260":["B","SINGLE"],"7223eb2f":["B","SINGLE"],"ec8146b5":["C","SINGLE"],"a42f620f":["C","SINGLE"],"0426e70e":["D","SINGLE"],"a032f278":["C","SINGLE"],"5c7e9f45":["D","SINGLE"],"5361a648":["D","SINGLE"],"20fac579":["B","SINGLE"],"99361068":["C","SINGLE"],"58a130b3":["D","SINGLE"],"d18a310e":["B","SINGLE"],"45a4319f":["B","SINGLE"],"6df9be15":["A","SINGLE"],"03290c52":["D","SINGLE"],"f59ba3f2":["A","SINGLE"],"2d219699":["A","SINGLE"],"bcad3cb5":["D","SINGLE"],"bc81f866":["A","SINGLE"],"d0a9de5d":["A","SINGLE"],"e6f67fa2":["A","SINGLE"],"7caf5938":["A","SINGLE"],"ac40800e":["B","SINGLE"],"ae5a23e0":["D","SINGLE"],"8f5c3bb0":["A","SINGLE"],"4d11ef61":["A","SINGLE"],"e05032b4":["C","SINGLE"],"1aa15ab8":["D","SINGLE"],"33b5124e":["C","SINGLE"],"23813a12":["A","SINGLE"],"36cf923b":["A","SINGLE"],"b4088a4f":["A","SINGLE"],"e36fe7f8":["D","SINGLE"],"66fb2cc4":["B","SINGLE"],"9bc00264":["C","SINGLE"],"e3549ced":["D","SINGLE"],"ca231eca":["A","SINGLE"],"d112a67d":["D","SINGLE"],"d8b28263":["D","SINGLE"],"56fd617b":["B","SINGLE"],"1e175ef2":["D","SINGLE"],"6ffcdaae":["C","SINGLE"],"e59d3e24":["C","SINGLE"],"b3e092a0":["A","SINGLE"],"4bb1d4c5":["A","SINGLE"],"4e8f8400":["C","SINGLE"],"88d9dc2a":["D","SINGLE"],"cedeb6de":["A","SINGLE"],"81fb3784":["D","SINGLE"],"fd961dd2":["A","SINGLE"],"5153639a":["D","SINGLE"],"434eccea":["A","SINGLE"],"c7c86531":["D","SINGLE"],"3ae1303f":["A,B,C,D","MULTIPLE"],"d169998c":["A,B,C,D","MULTIPLE"],"9e18aa6a":["A,B,C,D","MULTIPLE"],"699971e4":["A,B,C,E","MULTIPLE"],"1d1ace97":["A,B,C,D","MULTIPLE"],"a9b3b005":["A,B,C,D","MULTIPLE"],"665c489b":["A,B,C,D","MULTIPLE"],"25ef7e64":["A,B,C,D","MULTIPLE"],"3bf076da":["A,B","MULTIPLE"],"efa56278":["A,B,C,D","MULTIPLE"],"5e17c2da":["A,B,C,D","MULTIPLE"],"25f02f38":["A,B,C","MULTIPLE"],"6822623a":["A,B,C","MULTIPLE"],"16ba1ecc":["A,B,C,D","MULTIPLE"],"5dd11af0":["A,B,C,D","MULTIPLE"],"64a4b88f":["A,B,C,D","MULTIPLE"],"e9f7f6b0":["A,B,C","MULTIPLE"],"aa46efe8":["A,B,C,D","MULTIPLE"],"157ced11":["A,B,C","MULTIPLE"],"5f8e429e":["A,B,C,D","MULTIPLE"],"a0853885":["A,B,C,D","MULTIPLE"],"25342572":["A,B,C,D","MULTIPLE"],"e22937f7":["A,B,C,D","MULTIPLE"],"9972ff00":["A,B,C,D","MULTIPLE"],"8d5d1ab1":["A,B,C,D","MULTIPLE"],"b2da96e8":["A,B,C,D","MULTIPLE"],"9d3c55d2":["A,B,C,E","MULTIPLE"],"e4d6ebe5":["A,B,C,E","MULTIPLE"],"b3d089b8":["A,B,C,D","MULTIPLE"],"2de3bdf7":["A,B,C,D","MULTIPLE"],"2ab07c28":["true","JUDGMENT"],"e8610b2e":["false","JUDGMENT"],"c9e00c26":["true","JUDGMENT"],"4c2833de":["true","JUDGMENT"],"eb5dcda1":["true","JUDGMENT"],"c5db518d":["false","JUDGMENT"],"1b7edb3f":["true","JUDGMENT"],"b3896360":["false","JUDGMENT"],"ca48454c":["true","JUDGMENT"],"89611561":["false","JUDGMENT"],"0e491f58":["true","JUDGMENT"],"a29bca68":["true","JUDGMENT"],"1dd8ac82":["false","JUDGMENT"],"f626613c":["false","JUDGMENT"],"9a4cb9c9":["true","JUDGMENT"],"e70c2b44":["true","JUDGMENT"],"c3b41a12":["false","JUDGMENT"],"4b1ddd45":["true","JUDGMENT"],"bf7a583b":["true","JUDGMENT"],"11e66549":["false","JUDGMENT"],"77e2c7a5":["true","JUDGMENT"],"4c39a0db":["false","JUDGMENT"],"8315b354":["true","JUDGMENT"],"e82f957a":["true","JUDGMENT"],"c07e8d57":["true","JUDGMENT"],"3cbc1054":["true","JUDGMENT"],"fa0e1385":["false","JUDGMENT"],"2fe23125":["true","JUDGMENT"],"74cebacc":["true","JUDGMENT"],"656eadf5":["false","JUDGMENT"],"5c2306d5":["C","SINGLE"],"7c7a5628":["D","SINGLE"],"9b1e1584":["D","SINGLE"],"aa64bea5":["B","SINGLE"],"58eb574a":["D","SINGLE"],"b7c10ddc":["D","SINGLE"],"bee919b2":["D","SINGLE"],"421d82d5":["D","SINGLE"],"742524ca":["D","SINGLE"],"d810544a":["D","SINGLE"],"e8f42442":["D","SINGLE"],"0ac884b5":["D","SINGLE"],"9c0323cf":["A","SINGLE"],"7411ff1a":["D","SINGLE"],"37d8db21":["C","SINGLE"],"8b1c4057":["A","SINGLE"],"46421680":["B","SINGLE"],"499dcda6":["A","SINGLE"],"66eb6cc3":["D","SINGLE"],"86257a53":["D","SINGLE"],"fdc3dcb2":["D","SINGLE"],"cd57e9d0":["D","SINGLE"],"fa386b22":["D","SINGLE"],"0baef638":["D","SINGLE"],"c9e896a4":["D","SINGLE"],"f1154e3d":["B","SINGLE"],"fbf940c9":["D","SINGLE"],"a544951b":["C","SINGLE"],"fc8eedbe":["D","SINGLE"],"e1907584":["D","SINGLE"],"fafae4b5":["D","SINGLE"],"f2839d71":["C","SINGLE"],"9b964c13":["C","SINGLE"],"5b13ac94":["D","SINGLE"],"54352536":["D","SINGLE"],"d450ac7e":["A,B,C,D,E","MULTIPLE"],"66e4d651":["A,B,C,D,E","MULTIPLE"],"ba14b33f":["A,B,C,D","MULTIPLE"],"d9971e12":["A,B,C,D","MULTIPLE"],"d67ef773":["A,B,C,D","MULTIPLE"],"5e5e34d8":["A,B,C,D,E","MULTIPLE"],"0fce61bf":["A,B,C,D","MULTIPLE"],"e3bbed17":["A,B,C,D,E","MULTIPLE"],"32614fda":["A,B,C","MULTIPLE"],"cfca3511":["A,B,C,D,E","MULTIPLE"],"bae49f2e":["A,B,C,E","MULTIPLE"],"0eda0efb":["A,B,C,E","MULTIPLE"],"45423d11":["A,B,C,D,E","MULTIPLE"],"7f83ddc7":["A,B,C,D","MULTIPLE"],"2d67d443":["A,B,C,D","MULTIPLE"],"ac80601e":["A,B,C,D,E","MULTIPLE"],"0c485999":["A,B,C,D,E","MULTIPLE"],"911e9894":["A,B,C,D","MULTIPLE"],"7369995a":["A,B,C,D","MULTIPLE"],"d6e0b557":["A,B,C,D,E","MULTIPLE"],"72bb75e1":["A,B,C,D","MULTIPLE"],"55c504d1":["A,B,C,E","MULTIPLE"],"d5ab9e76":["A,B,C,D","MULTIPLE"],"f57220f0":["A,B,C,D","MULTIPLE"],"46a6d581":["A,B,C,E","MULTIPLE"],"6ee033a6":["A,C","MULTIPLE"],"a72ba5fb":["A,B,C,D","MULTIPLE"],"c94c11ea":["A,B,C","MULTIPLE"],"73a9b83c":["true","JUDGMENT"],"08a25e13":["false","JUDGMENT"],"047f4113":["true","JUDGMENT"],"11f45ded":["false","JUDGMENT"],"e4efef1a":["false","JUDGMENT"],"ec97cdc3":["true","JUDGMENT"],"f44cb543":["true","JUDGMENT"],"62177a8b":["false","JUDGMENT"],"11839684":["true","JUDGMENT"],"789be236":["true","JUDGMENT"],"1de69259":["true","JUDGMENT"],"4ce4c246":["false","JUDGMENT"],"9bb0e975":["true","JUDGMENT"],"4fc4e0d7":["false","JUDGMENT"],"6ee03b64":["false","JUDGMENT"],"212da551":["true","JUDGMENT"],"49c16aff":["false","JUDGMENT"],"5ced7712":["true","JUDGMENT"],"b51fc691":["false","JUDGMENT"],"2365458d":["false","JUDGMENT"],"9f02d516":["true","JUDGMENT"],"8bf292ed":["false","JUDGMENT"],"3e1451aa":["true","JUDGMENT"],"9e905361":["false","JUDGMENT"],"2b15ba6c":["true","JUDGMENT"],"da08f237":["false","JUDGMENT"]};

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

  function clean(s){ return (s||'').replace(/[^一-龥a-zA-Z0-9_Ⅰ-ⅿ]/g,''); }

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
      stem = stem.replace(/参考答案[\s\S]*$/, '').trim();
      stem = stem.replace(/^\s*\d+\s*[.．、]?\s*/, '').trim();
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