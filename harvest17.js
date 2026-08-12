// 17任职资格考试 - 全自动收割循环
(function(){
  var bank=JSON.parse(localStorage.h17b||'{}');
  var round=parseInt(localStorage.h17r||'1');
  
  function save(){localStorage.h17b=JSON.stringify(bank);localStorage.h17r=round}
  
  // Show status bar
  var bar=document.getElementById('h17s')||(function(){
    var b=document.createElement('div');
    b.id='h17s';
    b.style='position:fixed;bottom:10px;right:10px;background:#1a1a2e;color:#0f0;padding:10px 15px;border-radius:8px;font:13px monospace;z-index:99999;border:1px solid #0f0';
    document.body.appendChild(b);
    return b;
  })();
  
  function updateBar(msg){bar.textContent=msg||('🔄 R'+round+' | 题库:'+Object.keys(bank).length+'题')}
  
  updateBar('🚀 17任职收割器启动 | 已有:'+Object.keys(bank).length+'题');
  console.log('🚀 17任职收割器 v2 | 第'+round+'轮 | 题库:'+Object.keys(bank).length+'题');
  
  // Check page type and act
  var txt=document.body.innerText||'';
  
  if(txt.includes('参考答案')){
    // RESULT PAGE - harvest
    console.log('🏁 R'+round+' 结果页 收割...');
    var oldCount=Object.keys(bank).length;
    var matches=[...txt.matchAll(/(\d+)\s*\n\s*\.\s*([\s\S]*?)参考答案\s*[：:]\s*([A-D对错正确错误]+)/g)];
    var harvested=0;
    
    matches.forEach(function(m){
      var q=m[2].replace(/\n/g,' ').replace(/\s+/g,' ').trim().substring(0,300);
      var a=m[3].trim();
      var type='single';
      if(a==='正确'||a==='错误'||a==='对'||a==='错') type='judge';
      else if(a.length>1&&a.match(/^[A-D,，、]+$/)) type='multi';
      
      var key=q.substring(0,150);
      var hash='';
      for(var i=0;i<key.length;i++)hash+=key.charCodeAt(i).toString(16);
      
      if(!bank[hash]){bank[hash]={q:q,a:a,type:type,time:new Date().toISOString()};harvested++}
    });
    
    save();
    console.log('✅ R'+round+' +'+harvested+' 新题 | 总计:'+Object.keys(bank).length);
    updateBar('📦 R'+round+' +'+harvested+' | 题库:'+Object.keys(bank).length+'题');
    
    // Click 再来一次
    setTimeout(function(){
      var btns=document.querySelectorAll('a');
      for(var i=0;i<btns.length;i++){
        if((btns[i].textContent||'').includes('再来')){btns[i].click();round++;save();return}
      }
    },1000);
    
  } else if(document.querySelectorAll('input[type=radio]').length>0){
    // PRACTICE PAGE - random answer and submit
    console.log('📝 R'+round+' 练习页 随机答题...');
    updateBar('📝 R'+round+' 答题中...');
    
    // Random select radios
    var radios=document.querySelectorAll('input[type=radio]');
    var groups={};
    radios.forEach(function(r){
      if(!groups[r.name])groups[r.name]=[];
      groups[r.name].push(r);
    });
    for(var k in groups){
      groups[k][Math.floor(Math.random()*groups[k].length)].checked=true;
    }
    
    // Random checkboxes
    document.querySelectorAll('input[type=checkbox]').forEach(function(c){
      if(Math.random()>0.5)c.checked=true;
    });
    
    console.log('  ✔ 已选 '+Object.keys(groups).length+'题');
    
    // Handle confirm dialog + submit
    setTimeout(function(){
      // Check for confirm dialog
      var ok=document.querySelector('.exam-dailog-ok-btn,.btn-blue');
      if(ok){ok.click();console.log('  📋 确认弹窗');}
      
      // Submit
      setTimeout(function(){
        var subm=document.querySelector('#submitBtn,.submit_btn');
        if(!subm){
          var bs=document.querySelectorAll('button');
          for(var i=0;i<bs.length;i++){
            if((bs[i].textContent||'').includes('提交')){subm=bs[i];break}
          }
        }
        if(subm){subm.click();console.log('  🚀 已提交');updateBar('⏳ R'+round+' 等待结果...')}
        else console.log('  ⚠️ 无提交按钮');
      },300);
    },500);
    
  } else {
    console.log('⏳ 未知页面，等待...');
    updateBar('⏳ 等待页面加载...');
  }
})();
