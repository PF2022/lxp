/***
 脚本功能：蜗牛睡眠 Unlock Vip音频 
 脚本作者：Crazy-Z7
 更新时间：22.10.03
 使用声明：⚠️仅供学习交流，🈲️商业用途
 脚本致谢：感谢作者的无私付出-Thanks👍
 **********************
 QX
 [rewrite_local]
 ^https:\/\/music\.snailsleep\.net url script-response-body
 
 **********************
 hostname = music.snailsleep.net
 **********************
 
 Surge&loon
 [Scrip]
 http-response ^https:\/\/music\.snailsleep\.net requires-body=1,max-size=0,script-path=
 
 ***/

function _0x1d14(_0x195af4,_0x5dc5e8){var _0x57f685=_0x193d();return _0x1d14=function(_0x5d2930,_0x4d70a5){_0x5d2930=_0x5d2930-(0x37e+0x88+0x6f*-0x5);var _0xd0f83d=_0x57f685[_0x5d2930];return _0xd0f83d;},_0x1d14(_0x195af4,_0x5dc5e8);}var _0x5115e4=_0x1d14;(function(_0x3ad3f0,_0x1e3a17){var _0x38f70c=_0x1d14,_0x1f7b81=_0x3ad3f0();while(!![]){try{var _0x563555=-parseInt(_0x38f70c(0x1e6))/(-0x16*0x2+0x565+-0x538)+-parseInt(_0x38f70c(0x1df))/(0x31a*0xc+0x1501+0x1*-0x3a37)*(parseInt(_0x38f70c(0x1eb))/(0x19e3+0x15a0+-0x2f80))+-parseInt(_0x38f70c(0x1ea))/(-0xc+0x1e48+-0x1*0x1e38)+-parseInt(_0x38f70c(0x1e7))/(-0x60a*0x1+-0x214b+-0x92*-0x45)+parseInt(_0x38f70c(0x1e4))/(-0x1685+0x2588*0x1+0x1*-0xefd)+parseInt(_0x38f70c(0x1e0))/(-0x133e+-0x5*0x74+-0x95*-0x25)*(-parseInt(_0x38f70c(0x1e8))/(0xab3+0x2*0x11cd+-0x2e45))+parseInt(_0x38f70c(0x1ec))/(0xe46+-0xc0b+0x2*-0x119)*(parseInt(_0x38f70c(0x1db))/(0x13b7+0x16bc+-0x3db*0xb));if(_0x563555===_0x1e3a17)break;else _0x1f7b81['push'](_0x1f7b81['shift']());}catch(_0x56c1d0){_0x1f7b81['push'](_0x1f7b81['shift']());}}}(_0x193d,-0x7*-0xf4ae+-0x7af78+0xdac05));function _0x193d(){var _0x3e8510=['vipFree\x22:0','1206772QivxUw','1934520Xcjpoi','8VlcSys','true','4669232UeXJbU','3yuXLXd','18neJslP','23570390RhfUBt','vip\x22:1','6532261400','expire\x22:26','1226378PrtJSS','8533497SfNvxz','body','buy\x22:1','replace','4259790WemqDj'];_0x193d=function(){return _0x3e8510;};return _0x193d();}var body=$response[_0x5115e4(0x1e1)];body=body[_0x5115e4(0x1e3)](/vip\":\d/g,_0x5115e4(0x1dc)),body=body[_0x5115e4(0x1e3)](/vipFree\":\d/g,_0x5115e4(0x1e5)),body=body[_0x5115e4(0x1e3)](/buy\":\d/g,_0x5115e4(0x1e2)),body=body[_0x5115e4(0x1e3)](/expire\":\d+/g,_0x5115e4(0x1de)+_0x5115e4(0x1dd)+'0'),body=body[_0x5115e4(0x1e3)](/false/g,_0x5115e4(0x1e9)),$done(body);
