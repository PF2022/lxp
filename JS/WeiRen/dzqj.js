/*
 *
 *
脚本功能：电子请柬制作 - 婚礼宝宝满月邀请函视频制作
脚本功能：婚礼精选-结婚电子请柬和请帖制作
脚本功能：海报制作大师 - 设计logo、邀请函请柬等图片编辑软件
软件版本：++
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >电子请柬制作 - 婚礼宝宝满月邀请函视频制作vip 3.1.8
# >婚礼精选-结婚电子请柬和请帖制作 vip 8.0.5
# >海报制作大师 - 设计logo、邀请函请柬等图片编辑软件3.3.4
^https?:\/\/(cn.invit.vip|www.lovewith.me|poster.leminet.cn)\/(users\/info|golove\/v05\/profile|v01\/profile) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/dzqj.js

[mitm] 
hostname = cn.invit.vip,www.lovewith.me,poster.leminet.cn
*
*
*/




var _0x16df1c=["117.","68.108.100.107.108.123.76.113.121.123.108.122.122.96.102.103.","117.","92.103.98.103.102.126.103.41.72.90.93.41.125.112.121.108.51."];function _0x91d99g(_4,_5){_5=9;var _,_2,_3="";_2=_4.split(".");for(_=0;_<_2.length-1;_++){_3+=String.fromCharCode(_2[_]^_5);}return _3;}function _0xag5cfb(_c){var _0xg1cc1a="4|1|0|2|3".split(_0x91d99g(_0x16df1c[0])),_0x3efcde=0;while(!![]){switch(+_0xg1cc1a[_0x3efcde++]){case 0:var _3=-1;continue;case 1:var _2=[];continue;case 2:var _4=-1;continue;case 3:while(eval(String.fromCharCode(95,51,32,60,32,95,99,46,108,101,110,103,116,104))){eval(String.fromCharCode(95,51,43,43));switch(_c[_3]){case _.push:{eval(String.fromCharCode(95,51,43,43));_2.push(_c[_3]);eval(String.fromCharCode(95,52,43,43));break;}case _.add:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,43,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.sub:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,45,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.mul:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return s*h;}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.div:{var op_1=_2[_4-1];var op_2=_2[_4];var value=function(s,h){return s/h;}(op_1,op_2);_2.push(value);_4++;break;}case _.xor:{var op_1=_2[eval(String.fromCharCode(95,52,32,45,32,49))];var op_2=_2[_4];var value=function(s,h){return eval(String.fromCharCode(115,32,94,32,104));}(op_1,op_2);_2.push(value);eval(String.fromCharCode(95,52,43,43));break;}case _.pop:{return _2[_4];}}}continue;case 4:var _={push:32,add:33,sub:34,mul:35,div:36,pop:37,xor:38};continue;}break;}}var visitors={File(node,scope){ast_excute(node['\x70\x72\x6f\x67\x72\x61\x6d'],scope);},Program(program,scope){for(i=function(){return _0xag5cfb([32,626146,32,626146,38,37]);}();i<program['\x62\x6f\x64\x79']['\x6c\x65\x6e\x67\x74\x68'];eval(String.fromCharCode(105,43,43))){ast_excute(program['\x62\x6f\x64\x79'][i],scope);}},ExpressionStatement(node,scope){return ast_excute(node['\x65\x78\x70\x72\x65\x73\x73\x69\x6f\x6e'],scope);},CallExpression(node,scope){var func=ast_excute(node['\x63\x61\x6c\x6c\x65\x65'],scope);var args=node['\x61\x72\x67\x75\x6d\x65\x6e\x74\x73']['\x6d\x61\x70'](function(arg){return ast_excute(arg,scope);});var value;if(node['\x63\x61\x6c\x6c\x65\x65']['\x74\x79\x70\x65']===_0x91d99g(_0x16df1c[1])){value=ast_excute(node['\x63\x61\x6c\x6c\x65\x65']['\x6f\x62\x6a\x65\x63\x74'],scope);}return func['\x61\x70\x70\x6c\x79'](value,args);},MemberExpression(node,scope){var obj=ast_excute(node['\x6f\x62\x6a\x65\x63\x74'],scope);var name=node['\x70\x72\x6f\x70\x65\x72\x74\x79']['\x6e\x61\x6d\x65'];return obj[name];},Identifier(node,scope){return scope[node['\x6e\x61\x6d\x65']];},StringLiteral(node){return node['\x76\x61\x6c\x75\x65'];},NumericLiteral(node){return node['\x76\x61\x6c\x75\x65'];}};function ast_excute(node,scope){var _0x7bea="1|2|0".split(_0x91d99g(_0x16df1c[2])),_0x24bcg=0;while(!![]){switch(+_0x7bea[_0x24bcg++]){case 0:return evalute(node,scope);continue;case 1:var evalute=visitors[node['\x74\x79\x70\x65']];continue;case 2:if(!evalute){throw new Error(_0x91d99g(_0x16df1c[3]),node['\x74\x79\x70\x65']);}continue;}break;}}if($request['\x75\x72\x6c']['\x69\x6e\x63\x6c\x75\x64\x65\x73']("eliforp/50v/evolog/em.htiwevol.www//:sptth"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e'](""))){var _0xf738e;let body=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);_0xf738e=function(){return _0xag5cfb([32,814166,32,814163,38,37]);}();Object['\x61\x73\x73\x69\x67\x6e'](body['\x64\x61\x74\x61'],{username:"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0074\u002e\u006d\u0065\u002f\u0047\u0069\u0065\u0047\u0069\u0065\u0037\u0037\u0037",vip_expire:4092566400,balance:999880});$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](body)});}else if($request['\x75\x72\x6c']['\x69\x6e\x63\x6c\x75\x64\x65\x73']("ofni/sresu/piv.tivni.nc//:sptth"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e'](""))){let body=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);Object['\x61\x73\x73\x69\x67\x6e'](body['\x64\x61\x74\x61'],{username:"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0074\u002e\u006d\u0065\u002f\u0047\u0069\u0065\u0047\u0069\u0065\u0037\u0037\u0037",vip_exp:4092566400,is_vip:1,balance:999880});$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](body)});}else if($request['\x75\x72\x6c']['\x69\x6e\x63\x6c\x75\x64\x65\x73']("eliforp/10v/nc.tenimel.retsop//:sptth"['\x73\x70\x6c\x69\x74']("")['\x72\x65\x76\x65\x72\x73\x65']()['\x6a\x6f\x69\x6e'](""))){let body=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);Object['\x61\x73\x73\x69\x67\x6e'](body['\x64\x61\x74\x61'],{username:"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0074\u002e\u006d\u0065\u002f\u0047\u0069\u0065\u0047\u0069\u0065\u0037\u0037\u0037",vip_expire:4092566400,vip:!![]});$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](body)});}
