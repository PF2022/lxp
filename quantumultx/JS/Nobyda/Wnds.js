/*
网易蜗牛读书 解锁特权
原作者: yxiaocai & JO2EY

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/quantumultx/JS/Nobyda/Wnds.js

[mitm]
hostname = p.du.163.com

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/quantumultx/JS/Nobyda/Wnds.js

[MITM]
hostname = p.du.163.com

**************************/
var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 1860685290000;
body = JSON.stringify(obj);
$done({body});
