/* 
脚本功能：解锁酷我音乐会员歌曲➕听书
脚本作者： By king
[rewrite_local]
# 解锁酷我音乐会员➕听书
^http://(.+).kuwo.cn(/v2/api/user/info|/a.p|/vip/v2/user/vip) url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/quantumultx/JS/King/kuwo.js
[mitm] 
hostname = *.kuwo.cn
********************************
*/



;var encode_version = 'jsjiami.com.v5', tmekg = '__0xe7144',  __0xe7144=['VBhOP3NhwrHCoEZrw6LCk23Cuw==','5Yqt6ZmM54iv5p625Y+d77yow6dq5L+k5a+v5pyG5b2G56ib','KsOWdTk=','Wgwuw5TDiGF+w6k=','w75YC8OzXg==','woLCpnVPXcKl','w7RIwqBFTcK3w4I=','w6M5BcK1w4U=','w6h9wqFfYg==','MAzCgQ==','w7XCrzbCtsOjwrNwd8Op','wonDlxTDpcKf','QGnCnQ==','54mg5p+U5YyW77+jwoFr5LyP5a6q5p655b6G56ml77yc6Lyh6K6z5pem5o6U5omx5LmX55mO5bSl5L6q','asK8Cg==','BMO0wp/DocOMa2nDjsOx','aTYtMCLCmDsswoVyw4VZwrlT','5Yqm6ZmJ54qY5pyF5Y+b77+Yw43DoOS8teWtm+aco+W+teerjQ==','woVXw6Q=','A8O1UyfCjQ==','RsK5YcOdCg==','AcKpZcKCEQ==','BVXCs8O3OQ==','UxR1bBs=','w7DDpiwEwp8=','w5fCtRzCpsOH','HSgY','an/DpA==','VwVAM2pDwr4=','wp/CrALCmcOrwqPCiMOrFHPDn8Kkc0hibcKg','XsKRwpHCqsKTaHxCw4PDjMOQKsONcMO+wqNWwo7Dv8Ozw4Rg','O0jDhw==','woDCqxbCucOrwpzChw==','woXDk28R','w5XCoMKywoVuw71NwrBwwos8w7xfBRzDs8O6w5Y8CcOtAm9ZQV/CgMKvw4nCpyPDn8Klw6jDk8KFw63DuCDCosOIwp/DlmbDvEvCoxDCh8OLVw==','w4gyw7XCnMKhCz/DjMKQwpbDnsKFwpEcwq7CncKxw6F4VnfCq8O1U8K1NAohwo8xO8K+w7XDkFPDnsK9PsO8','wpvCsXc=','wpcfEw8IP8Kxwo3DqcKpVS/DniIow5w=','wqzDlWjDj8OIw4kpwrYpwqnDkMOHwqLCqx/DqH07w6rCgnhlwr8rw5HDuztPwpTClsOrQMKSw4FCw6XDocKiQ8K4w6ddNW1oa3fDrmzDj8Odw4xywoDDisO7bRHDo3FeZmlMw5/CpzrDv8O3F8KgGMKsFcOQw4XDrGTDlQHCgBdZbcOYb8KRWcKFw69mGsObwqwLwpvCoMOTecOFIhlWw4FeJH5mwoNww65Ow7TCicK6JQolw4jDkMOdwobDiVVRKsOFwrUowp5kw6tjRFjDhxrDpRTDpMOVesKgBMKvwoc8PcOpw6wOw7sJBzzDkETCtFEJwqNzw748wqM=','wqzDlWjDj8OIw4kpwrYpwqnDkMOHw43DgQrCg2BOwqnDmDo8w4pjwpHDkj9Dw4bDgcKMY8K8woptwqvCg8OuCMO8wpwcZikOOyXCrx3Ch8KdwpVAwpPCgcKxADzDmCFQKEhJw7PCr3nDk8O9AsOrUMOrA8Oew5DCgQzDgmnCmGUIJcKYOsKjRsKJw7E2OsOmwqQSwoDCt8KUYcOdNHY/w5U1Ogsjw5g0wpILwrzCvMKtJD84w4rDkMOKwo3CiAo2CcOrw74Hw5AGwrgyKQnCkV7ChlLCtMKUasKuFsOEw6leFsKrw5wxw7gYAgfDim7CogNaw7M4w7Y5wqPDjcKww6doaw/CvSleb2EOBl9UwrVzO8O+w7BCwqrDvVIEMkXCt8OMwrXCmSVww5FoF8OCw6PDr3PCnsOJf3vCmETDiUpSNSM0AAfDhcKvwp8HWTDDknXDisKBW0ZnwqVxwqUXHMOxwr/Dm2RGUcOcAMO7w5bDnWrCgcK3acONwp9JRDNbwqlvKcOqw5Yn','wpF4Zg==','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','w67CnMK4'];(function(_0x881b3,_0x434277){var _0x661d11=function(_0xa123a1){while(--_0xa123a1){_0x881b3['push'](_0x881b3['shift']());}};_0x661d11(++_0x434277);}(__0xe7144,0x173));var _0x1795=function(_0x4e23e3,_0x7ecebe){_0x4e23e3=_0x4e23e3-0x0;var _0x8b9769=__0xe7144[_0x4e23e3];if(_0x1795['initialized']===undefined){(function(){var _0x45c417=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4278c6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x45c417['atob']||(_0x45c417['atob']=function(_0x1b7588){var _0x1f965d=String(_0x1b7588)['replace'](/=+$/,'');for(var _0x2c993f=0x0,_0x3b6002,_0x4a0298,_0x36fdef=0x0,_0x25dfbc='';_0x4a0298=_0x1f965d['charAt'](_0x36fdef++);~_0x4a0298&&(_0x3b6002=_0x2c993f%0x4?_0x3b6002*0x40+_0x4a0298:_0x4a0298,_0x2c993f++%0x4)?_0x25dfbc+=String['fromCharCode'](0xff&_0x3b6002>>(-0x2*_0x2c993f&0x6)):0x0){_0x4a0298=_0x4278c6['indexOf'](_0x4a0298);}return _0x25dfbc;});}());var _0x57a316=function(_0x47a6e4,_0x620f3a){var _0x736ba3=[],_0x5e8f2d=0x0,_0x4ae00d,_0x489d83='',_0x3dde41='';_0x47a6e4=atob(_0x47a6e4);for(var _0x2321b1=0x0,_0xaa3cf7=_0x47a6e4['length'];_0x2321b1<_0xaa3cf7;_0x2321b1++){_0x3dde41+='%'+('00'+_0x47a6e4['charCodeAt'](_0x2321b1)['toString'](0x10))['slice'](-0x2);}_0x47a6e4=decodeURIComponent(_0x3dde41);for(var _0x937c7e=0x0;_0x937c7e<0x100;_0x937c7e++){_0x736ba3[_0x937c7e]=_0x937c7e;}for(_0x937c7e=0x0;_0x937c7e<0x100;_0x937c7e++){_0x5e8f2d=(_0x5e8f2d+_0x736ba3[_0x937c7e]+_0x620f3a['charCodeAt'](_0x937c7e%_0x620f3a['length']))%0x100;_0x4ae00d=_0x736ba3[_0x937c7e];_0x736ba3[_0x937c7e]=_0x736ba3[_0x5e8f2d];_0x736ba3[_0x5e8f2d]=_0x4ae00d;}_0x937c7e=0x0;_0x5e8f2d=0x0;for(var _0x2de467=0x0;_0x2de467<_0x47a6e4['length'];_0x2de467++){_0x937c7e=(_0x937c7e+0x1)%0x100;_0x5e8f2d=(_0x5e8f2d+_0x736ba3[_0x937c7e])%0x100;_0x4ae00d=_0x736ba3[_0x937c7e];_0x736ba3[_0x937c7e]=_0x736ba3[_0x5e8f2d];_0x736ba3[_0x5e8f2d]=_0x4ae00d;_0x489d83+=String['fromCharCode'](_0x47a6e4['charCodeAt'](_0x2de467)^_0x736ba3[(_0x736ba3[_0x937c7e]+_0x736ba3[_0x5e8f2d])%0x100]);}return _0x489d83;};_0x1795['rc4']=_0x57a316;_0x1795['data']={};_0x1795['initialized']=!![];}var _0x12faba=_0x1795['data'][_0x4e23e3];if(_0x12faba===undefined){if(_0x1795['once']===undefined){_0x1795['once']=!![];}_0x8b9769=_0x1795['rc4'](_0x8b9769,_0x7ecebe);_0x1795['data'][_0x4e23e3]=_0x8b9769;}else{_0x8b9769=_0x12faba;}return _0x8b9769;};if($request[_0x1795('0x0',']AN$')][_0x1795('0x1','kgp6')]('/v2/api/user/info')!=-0x1){re(_0x1795('0x2','X#y^'),_0x1795('0x3','U76$'));}if($request[_0x1795('0x4','5typ')][_0x1795('0x5','X#y^')](_0x1795('0x6','s%Cw'))!=-0x1){re(_0x1795('0x7','hKoF'),_0x1795('0x8','pSkE'));}if($request[_0x1795('0x9','gOe2')]['indexOf'](_0x1795('0xa','nOFm'))!=-0x1){re(_0x1795('0xb','rEfP'),_0x1795('0xc','rEfP'));}if($request[_0x1795('0xd','efL[')]['indexOf']('/vip/enc/user/vip')!=-0x1){re('.+',_0x1795('0xe','X#y^'));}function re(){var _0x4dc12b={'rESan':function _0x302217(_0x21141e,_0x3ae673){return _0x21141e<_0x3ae673;},'sadHm':function _0x11bc19(_0x442240,_0x2c873b){return _0x442240!==_0x2c873b;},'nPqvN':_0x1795('0xf','hKoF'),'WzDPU':function _0x3ab114(_0x532219,_0x5abb37){return _0x532219!==_0x5abb37;},'uPrBa':function _0x1c40c9(_0x285a8a,_0x118225){return _0x285a8a===_0x118225;},'MmzZF':_0x1795('0x10','kgp6'),'WgNja':function _0x32be42(_0x1110d0,_0x301b8c){return _0x1110d0+_0x301b8c;},'RCRQG':_0x1795('0x11','^DEY'),'ixDDz':function _0x3573a5(_0x4fa0a3,_0x2aadaf){return _0x4fa0a3(_0x2aadaf);}};var _0x29581a=$response[_0x1795('0x12','e*94')];if(arguments[0x0][_0x1795('0x13','W!^F')]('@')){var _0x4cf5c0=arguments[0x0][_0x1795('0x14','^DEY')]('@');var _0x2c231d=arguments[0x1]['split']('@');for(i=0x0;_0x4dc12b['rESan'](i,_0x4cf5c0[_0x1795('0x15','gOe2')]);i++){var _0x3892bb=new RegExp(_0x4cf5c0[i],'g');_0x29581a=_0x29581a[_0x1795('0x16','7Ri0')](_0x3892bb,_0x2c231d[i]);}}else{if(_0x4dc12b[_0x1795('0x17','929S')](_0x4dc12b[_0x1795('0x18','7Ri0')],_0x4dc12b[_0x1795('0x18','7Ri0')])){c='al';try{c+=_0x1795('0x19','ejd^');b=encode_version;if(!(_0x4dc12b['WzDPU'](typeof b,_0x1795('0x1a','IAfp'))&&_0x4dc12b['uPrBa'](b,_0x4dc12b['MmzZF']))){w[c](_0x4dc12b['WgNja']('删除','版本号，js会定期弹窗，还请支持我们的工作'));}}catch(_0x3d008f){w[c](_0x4dc12b['RCRQG']);}}else{var _0x48da3e=new RegExp(arguments[0x0],'g');_0x29581a=_0x29581a['replace'](_0x48da3e,arguments[0x1]);}}_0x4dc12b[_0x1795('0x1b','1@Ld')]($done,_0x29581a);};(function(_0x575b48,_0x39ee5a,_0x5a67e7){var _0x4b2d4f={'ofOWf':_0x1795('0x1c','Vn2H'),'KLBgz':function _0x2ded42(_0x9c0e4,_0x296462){return _0x9c0e4+_0x296462;},'FnxJb':_0x1795('0x1d','U76$'),'einVY':_0x1795('0x1e','x9YJ'),'VNSWl':function _0x159594(_0x41436d,_0x5ead41){return _0x41436d!==_0x5ead41;},'EYzUm':_0x1795('0x1f',']au!'),'ZTmeE':_0x1795('0x20','^SHm'),'WtNuB':function _0x587042(_0x8aafe9,_0xa3f9b1){return _0x8aafe9!==_0xa3f9b1;},'RCEqC':function _0x74feda(_0x14557b,_0x541903,_0x171ad0){return _0x14557b(_0x541903,_0x171ad0);},'tyqBO':'playright\x22:[^,]+@downright\x22:[^,]+@policytype\x22:[^,]+','XPlvb':'playright\x22:1@downright\x22:1@policytype\x22:3','JkEtB':_0x1795('0x21','7Ri0')};_0x5a67e7='al';try{if(_0x4b2d4f['ofOWf']===_0x1795('0x22','m@Fc')){_0x575b48[_0x5a67e7](_0x4b2d4f[_0x1795('0x23','e*94')]('删除',_0x4b2d4f[_0x1795('0x24','AlP2')]));}else{_0x5a67e7+=_0x4b2d4f[_0x1795('0x25','tESz')];_0x39ee5a=encode_version;if(!(_0x4b2d4f[_0x1795('0x26','AkS*')](typeof _0x39ee5a,_0x4b2d4f[_0x1795('0x27','PO[J')])&&_0x39ee5a===_0x4b2d4f[_0x1795('0x28','s%Cw')])){if(_0x4b2d4f[_0x1795('0x29','IAfp')]('Gns',_0x1795('0x2a','k9Ut'))){_0x575b48[_0x5a67e7]('删除'+_0x4b2d4f['FnxJb']);}else{_0x4b2d4f['RCEqC'](re,_0x4b2d4f['tyqBO'],_0x4b2d4f['XPlvb']);}}}}catch(_0x47ac10){_0x575b48[_0x5a67e7](_0x4b2d4f['JkEtB']);}}(window));;encode_version = 'jsjiami.com.v5';
