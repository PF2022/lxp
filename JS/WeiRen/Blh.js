/*

脚本功能：贝乐虎启蒙 解锁所有视频+付费课程


APP下载地址：https://apps.apple.com/cn/app/%E8%B4%9D%E4%B9%90%E8%99%8E%E5%90%AF%E8%92%99-%E5%AE%9D%E5%AE%9D%E7%9B%8A%E6%99%BA%E6%97%A9%E6%95%99%E5%A4%A7%E5%85%A8/id1478104309


软件版本：所有
脚本作者：伟人
更新时间：2022-12-12
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

[rewrite_local]

^http[s]?:\/\/.*ubestkid.*(getUserProfile|course|api/v1/featureV2|xtapi/zhuanlan|/api/v1/bv/videoV2).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/beile.js

[mitm]
hostname = *ubestkid*

*/



 
;var encode_version = 'jsjiami.com.v5', sqpbk = '__0xf1c54',  __0xf1c54=['\x77\x71\x4d\x55\x4c\x77\x3d\x3d','\x77\x70\x72\x43\x74\x4d\x4b\x6f\x43\x52\x33\x43\x68\x77\x3d\x3d','\x77\x36\x48\x44\x74\x4d\x4f\x37','\x35\x34\x71\x48\x35\x70\x32\x76\x35\x59\x79\x63\x37\x37\x2b\x52\x77\x34\x6f\x6c\x35\x4c\x2b\x76\x35\x61\x2b\x54\x35\x70\x32\x50\x35\x62\x79\x5a\x35\x36\x69\x39\x37\x37\x79\x45\x36\x4c\x32\x4d\x36\x4b\x32\x47\x35\x70\x65\x30\x35\x6f\x79\x37\x35\x6f\x69\x50\x35\x4c\x6d\x68\x35\x35\x6d\x73\x35\x62\x53\x75\x35\x4c\x79\x72','\x77\x34\x6c\x66\x77\x36\x6b\x3d','\x77\x71\x4d\x6d\x77\x6f\x58\x43\x75\x73\x4f\x55\x50\x67\x3d\x3d','\x77\x35\x68\x46\x53\x30\x42\x59','\x66\x46\x33\x44\x74\x55\x62\x43\x6e\x67\x3d\x3d','\x77\x70\x55\x57\x77\x72\x6e\x43\x6e\x4d\x4f\x59','\x77\x70\x77\x5a\x59\x4d\x4b\x6e\x55\x77\x3d\x3d','\x77\x37\x35\x30\x57\x48\x4a\x31','\x77\x72\x59\x2b\x65\x63\x4b\x30\x63\x77\x3d\x3d','\x48\x4d\x4f\x6e\x77\x70\x4d\x46\x77\x70\x6f\x3d','\x77\x70\x42\x78\x41\x57\x37\x44\x6e\x67\x3d\x3d','\x52\x4d\x4f\x4e\x77\x36\x6a\x43\x69\x42\x41\x3d','\x44\x38\x4f\x49\x49\x73\x4f\x52\x46\x51\x3d\x3d','\x77\x70\x34\x69\x65\x77\x3d\x3d','\x77\x36\x62\x43\x71\x73\x4b\x75\x48\x30\x6f\x3d','\x77\x37\x68\x6b\x64\x45\x52\x6c','\x77\x34\x76\x44\x67\x63\x4f\x2b\x4e\x68\x30\x3d','\x50\x63\x4f\x75\x77\x71\x6b\x68\x77\x72\x67\x3d','\x48\x4d\x4f\x50\x45\x63\x4f\x78\x50\x67\x3d\x3d','\x77\x36\x77\x43\x45\x56\x6c\x75','\x77\x6f\x58\x43\x6f\x38\x4f\x4f\x77\x34\x4d\x79','\x77\x36\x41\x41\x58\x63\x4b\x61\x77\x37\x6b\x3d','\x50\x6c\x34\x65\x77\x72\x76\x44\x6d\x67\x3d\x3d','\x77\x72\x2f\x43\x76\x73\x4f\x2f\x77\x35\x4d\x64','\x77\x36\x6c\x71\x77\x70\x49\x50\x77\x70\x67\x3d','\x77\x34\x6c\x47\x77\x6f\x45\x6b\x77\x6f\x63\x3d','\x77\x36\x68\x50\x77\x36\x78\x7a\x64\x41\x3d\x3d','\x77\x36\x62\x44\x75\x63\x4f\x77\x48\x79\x30\x3d','\x77\x70\x76\x44\x6c\x79\x6f\x5a\x43\x67\x3d\x3d','\x77\x71\x56\x71\x46\x73\x4b\x73\x77\x34\x55\x3d','\x4b\x43\x49\x43\x77\x35\x31\x48','\x59\x4d\x4b\x76\x41\x68\x66\x43\x6a\x41\x3d\x3d','\x77\x71\x50\x43\x6a\x73\x4f\x66\x77\x72\x50\x44\x6a\x51\x3d\x3d','\x49\x45\x6f\x36\x77\x70\x7a\x44\x67\x77\x3d\x3d','\x77\x34\x46\x37\x59\x6d\x78\x32','\x41\x44\x66\x44\x74\x4d\x4b\x6e','\x59\x63\x4b\x44\x77\x71\x51\x3d','\x59\x4d\x4f\x39\x4e\x6a\x76\x43\x68\x73\x4b\x38\x55\x41\x3d\x3d','\x42\x4d\x4b\x68\x77\x70\x68\x38\x53\x63\x4f\x77\x58\x77\x3d\x3d','\x59\x63\x4f\x6b\x77\x37\x50\x43\x74\x51\x6b\x47\x77\x35\x38\x3d','\x77\x71\x42\x33\x41\x6c\x58\x44\x6a\x73\x4f\x57\x63\x44\x4a\x75\x77\x36\x4c\x44\x6f\x54\x6b\x7a\x77\x70\x44\x43\x67\x77\x3d\x3d','\x77\x71\x30\x39\x59\x73\x4b\x37\x59\x73\x4b\x64\x51\x67\x3d\x3d','\x54\x38\x4b\x78\x4d\x6b\x59\x31\x77\x34\x70\x63\x64\x41\x30\x53\x77\x36\x37\x43\x6c\x78\x37\x44\x74\x67\x3d\x3d','\x77\x70\x72\x43\x6c\x38\x4f\x6b\x77\x36\x34\x45\x77\x34\x2f\x44\x76\x77\x3d\x3d','\x77\x72\x74\x34\x47\x6c\x50\x44\x6d\x38\x4f\x59\x63\x53\x4e\x2f\x77\x37\x6e\x44\x70\x6a\x34\x7a\x77\x70\x44\x44\x68\x6e\x30\x4f\x77\x37\x49\x3d','\x77\x35\x30\x6d\x45\x30\x56\x66\x77\x36\x2f\x44\x73\x51\x3d\x3d','\x77\x35\x72\x43\x6d\x73\x4b\x64\x45\x48\x5a\x31\x56\x6e\x30\x71\x77\x71\x62\x43\x69\x48\x68\x63\x77\x35\x7a\x6b\x76\x36\x6a\x6b\x75\x59\x41\x3d','\x5a\x33\x76\x44\x73\x47\x44\x43\x6b\x54\x31\x31','\x77\x72\x6f\x67\x59\x73\x4b\x2b\x63\x63\x4b\x62\x59\x38\x4f\x72\x42\x63\x4b\x6d\x77\x6f\x42\x50\x51\x4d\x4b\x73\x77\x34\x66\x43\x6b\x6a\x76\x43\x6c\x63\x4f\x34\x65\x63\x4b\x2b\x64\x6b\x66\x44\x69\x63\x4f\x59\x77\x71\x67\x3d','\x77\x35\x39\x41\x56\x38\x4b\x6b\x77\x70\x54\x43\x6b\x7a\x55\x59\x77\x34\x72\x44\x71\x42\x55\x75\x63\x58\x6e\x44\x68\x51\x3d\x3d','\x77\x37\x30\x41\x77\x71\x51\x3d','\x77\x36\x2f\x43\x6e\x4d\x4f\x6a\x77\x37\x4d\x6a\x77\x35\x44\x43\x70\x68\x38\x6f','\x77\x37\x42\x43\x77\x34\x70\x54\x77\x6f\x73\x35\x77\x72\x34\x66\x77\x37\x52\x66\x77\x6f\x48\x44\x6c\x38\x4b\x50\x77\x71\x77\x3d','\x35\x34\x75\x46\x35\x70\x32\x39\x35\x59\x2b\x77\x37\x37\x2b\x58\x77\x34\x54\x44\x70\x65\x53\x38\x6d\x2b\x57\x73\x73\x4f\x61\x63\x74\x75\x57\x2b\x68\x65\x65\x72\x6a\x2b\x2b\x39\x73\x75\x69\x38\x75\x4f\x69\x75\x73\x4f\x61\x55\x70\x4f\x61\x50\x72\x2b\x61\x4a\x73\x65\x53\x37\x6b\x4f\x65\x5a\x69\x2b\x57\x30\x6a\x75\x53\x39\x6b\x67\x3d\x3d','\x35\x59\x6d\x50\x36\x5a\x69\x67\x35\x34\x69\x77\x35\x70\x36\x2b\x35\x59\x2b\x64\x37\x37\x36\x4d\x65\x73\x4b\x4c\x35\x4c\x79\x30\x35\x61\x2b\x6e\x35\x70\x36\x78\x35\x62\x32\x71\x35\x36\x71\x50','\x66\x73\x4b\x50\x4b\x51\x54\x43\x69\x38\x4f\x4b','\x4d\x55\x30\x62\x77\x72\x76\x44\x6e\x73\x4b\x65\x4b\x30\x55\x3d','\x41\x73\x4f\x2b\x77\x6f\x55\x3d','\x77\x70\x66\x44\x72\x38\x4b\x79\x44\x33\x6e\x44\x75\x73\x4f\x4a\x46\x68\x35\x69\x77\x6f\x48\x43\x72\x6d\x49\x3d','\x4c\x42\x34\x70\x77\x37\x35\x74','\x77\x35\x68\x2b\x77\x37\x4a\x71\x55\x41\x3d\x3d','\x77\x72\x50\x43\x76\x4d\x4f\x75\x77\x71\x6e\x44\x6b\x41\x3d\x3d','\x77\x34\x66\x44\x6a\x38\x4f\x4e','\x77\x35\x73\x79\x4e\x48\x74\x2f','\x77\x37\x52\x50\x77\x72\x2f\x43\x69\x33\x6b\x3d','\x4e\x77\x6e\x44\x6e\x38\x4b\x55\x77\x37\x77\x3d','\x77\x72\x2f\x43\x71\x4d\x4f\x4f\x77\x71\x2f\x44\x75\x67\x3d\x3d','\x52\x63\x4b\x58\x49\x51\x72\x43\x6d\x41\x3d\x3d','\x77\x36\x6b\x61\x44\x30\x39\x32','\x48\x38\x4f\x65\x77\x6f\x54\x44\x6a\x51\x51\x3d','\x4f\x41\x73\x4c\x77\x35\x39\x45','\x77\x72\x67\x61\x77\x6f\x58\x43\x73\x38\x4f\x69','\x50\x4d\x4b\x2f\x59\x6b\x33\x43\x72\x51\x3d\x3d','\x63\x73\x4f\x65\x63\x4d\x4f\x68\x77\x70\x59\x3d','\x55\x73\x4b\x71\x44\x57\x73\x47','\x66\x63\x4b\x4b\x4d\x48\x67\x2b','\x77\x35\x41\x69\x77\x70\x59\x66\x77\x70\x41\x3d','\x77\x70\x68\x77\x41\x58\x37\x44\x6a\x67\x3d\x3d','\x77\x37\x6c\x44\x77\x34\x4e\x64\x77\x72\x73\x3d','\x77\x71\x4c\x43\x6d\x31\x6b\x54\x52\x67\x3d\x3d','\x77\x34\x77\x78\x41\x45\x35\x76','\x77\x37\x50\x43\x70\x38\x4b\x55\x4b\x55\x49\x3d','\x56\x63\x4f\x57\x53\x38\x4f\x35\x77\x6f\x38\x3d','\x41\x63\x4f\x71\x77\x70\x34\x54\x77\x70\x77\x3d','\x4b\x52\x38\x43\x77\x34\x51\x62','\x4b\x33\x6a\x43\x6b\x52\x67\x59','\x77\x36\x49\x47\x53\x41\x3d\x3d','\x77\x37\x46\x39\x77\x72\x51\x3d','\x44\x4d\x4f\x78\x58\x58\x72\x43\x6f\x73\x4b\x2b\x61\x7a\x59\x36\x55\x6d\x44\x44\x6a\x53\x6a\x43\x6d\x56\x67\x65','\x77\x34\x52\x5a\x77\x6f\x78\x65\x77\x35\x6b\x47\x41\x63\x4f\x6a\x77\x35\x66\x43\x6d\x38\x4b\x46\x77\x35\x78\x65\x63\x56\x76\x43\x70\x33\x76\x44\x71\x4d\x4b\x74\x77\x70\x4c\x44\x72\x38\x4b\x6a\x77\x71\x31\x71\x77\x70\x76\x43\x76\x31\x33\x44\x70\x69\x44\x43\x6b\x73\x4b\x62\x45\x53\x55\x4f\x77\x70\x46\x5a\x77\x6f\x48\x43\x70\x73\x4f\x6f\x77\x70\x64\x66\x4d\x6e\x44\x43\x69\x46\x66\x44\x76\x4d\x4f\x58\x77\x36\x62\x43\x6f\x4d\x4b\x48\x77\x70\x59\x66\x77\x6f\x51\x79\x77\x72\x46\x6b\x53\x63\x4f\x54\x66\x46\x4e\x38\x4d\x67\x3d\x3d','\x42\x6d\x66\x43\x72\x77\x34\x3d','\x77\x36\x66\x44\x6a\x79\x70\x6a\x77\x6f\x51\x3d','\x43\x38\x4b\x39\x77\x6f\x31\x73\x48\x77\x3d\x3d','\x35\x59\x71\x4c\x36\x5a\x6d\x71\x35\x34\x75\x57\x35\x70\x79\x76\x35\x59\x2b\x54\x37\x37\x79\x76\x77\x34\x41\x75\x35\x4c\x32\x77\x35\x61\x79\x53\x35\x70\x2b\x34\x35\x62\x32\x78\x35\x36\x69\x36','\x42\x78\x51\x78\x77\x35\x55\x71','\x77\x36\x45\x64\x55\x38\x4b\x77\x77\x37\x77\x3d','\x48\x73\x4f\x72\x77\x71\x55\x59\x77\x72\x4d\x3d','\x4b\x73\x4f\x6d\x77\x70\x30\x51\x77\x6f\x67\x3d','\x77\x36\x62\x44\x6c\x63\x4f\x65\x46\x44\x73\x3d','\x50\x38\x4b\x52\x77\x34\x6a\x43\x6c\x6d\x73\x3d','\x77\x72\x62\x43\x6d\x4d\x4f\x59\x77\x72\x62\x44\x6e\x67\x3d\x3d','\x59\x4d\x4b\x55\x77\x72\x74\x30','\x53\x73\x4f\x67\x77\x35\x66\x43\x6a\x67\x4d\x3d','\x77\x35\x33\x43\x71\x38\x4b\x5a\x44\x33\x63\x3d','\x77\x37\x6a\x44\x70\x4d\x4f\x78\x52\x67\x3d\x3d','\x4e\x6d\x6a\x43\x6b\x69\x30\x52','\x4c\x73\x4b\x33\x77\x71\x35\x31\x4b\x41\x3d\x3d','\x77\x37\x68\x4a\x77\x72\x59\x4d\x77\x6f\x63\x3d','\x77\x70\x59\x70\x77\x72\x76\x43\x75\x4d\x4f\x4c','\x4e\x56\x6e\x43\x6f\x77\x38\x34','\x48\x73\x4f\x42\x4a\x4d\x4f\x63\x4e\x41\x3d\x3d','\x77\x72\x63\x55\x77\x71\x51\x3d','\x50\x33\x30\x6c','\x63\x63\x4f\x72\x46\x68\x72\x43\x67\x67\x3d\x3d','\x47\x63\x4b\x63\x77\x35\x76\x43\x6d\x55\x45\x3d','\x65\x63\x4f\x55\x77\x37\x58\x43\x72\x67\x77\x3d','\x77\x72\x34\x6f\x59\x73\x4b\x37\x65\x67\x3d\x3d','\x77\x36\x49\x65\x61\x51\x3d\x3d','\x77\x71\x62\x43\x6b\x63\x4f\x6b\x77\x35\x63\x57','\x77\x37\x38\x70\x61\x63\x4b\x55\x77\x34\x55\x3d','\x47\x73\x4f\x44\x47\x63\x4f\x61\x45\x77\x3d\x3d','\x77\x72\x30\x4e\x47\x73\x4f\x5a\x48\x77\x3d\x3d','\x77\x72\x56\x5a\x41\x38\x4b\x61\x77\x35\x55\x3d','\x77\x37\x63\x4d\x47\x67\x3d\x3d','\x4c\x4d\x4f\x74\x77\x6f\x6b\x39\x77\x72\x73\x3d','\x77\x34\x42\x4e\x77\x70\x59\x43\x77\x72\x38\x3d','\x77\x72\x44\x43\x76\x63\x4f\x35\x77\x71\x44\x44\x67\x67\x3d\x3d','\x77\x6f\x6b\x62\x4b\x63\x4f\x67\x45\x51\x3d\x3d','\x77\x72\x52\x4f\x4e\x4d\x4b\x57\x77\x37\x59\x3d','\x55\x73\x4f\x50\x53\x63\x4f\x4b\x77\x71\x67\x3d','\x77\x34\x37\x44\x76\x6a\x46\x75\x77\x70\x67\x3d','\x43\x73\x4b\x4a\x77\x35\x37\x43\x73\x56\x30\x3d','\x77\x37\x58\x44\x6a\x73\x4f\x70\x61\x4d\x4b\x2f','\x77\x35\x72\x44\x76\x4d\x4f\x6a\x4e\x53\x55\x3d','\x49\x4d\x4f\x64\x53\x58\x33\x43\x70\x41\x3d\x3d','\x43\x63\x4f\x72\x58\x57\x72\x43\x75\x63\x4b\x37\x59\x51\x3d\x3d','\x44\x4d\x4f\x70\x77\x72\x38\x45\x77\x70\x34\x3d','\x66\x63\x4b\x37\x77\x71\x70\x6a\x59\x51\x3d\x3d','\x50\x6e\x49\x58\x77\x72\x76\x44\x6d\x51\x3d\x3d','\x77\x6f\x46\x2b\x43\x57\x72\x44\x6a\x77\x3d\x3d','\x77\x6f\x33\x43\x71\x32\x30\x70\x5a\x38\x4f\x62\x77\x6f\x76\x43\x70\x54\x76\x43\x6a\x30\x6a\x43\x67\x63\x4b\x59\x62\x68\x33\x44\x76\x41\x3d\x3d','\x42\x63\x4b\x6b\x77\x71\x42\x36\x77\x34\x6e\x44\x6c\x46\x7a\x43\x6c\x46\x54\x43\x69\x47\x58\x43\x68\x44\x46\x44\x77\x34\x6f\x35\x53\x67\x74\x2f\x77\x6f\x38\x44\x77\x37\x48\x44\x70\x38\x4b\x4e\x59\x42\x31\x37\x49\x73\x4b\x70\x77\x35\x6a\x43\x69\x38\x4b\x79\x77\x72\x78\x58\x48\x4d\x4b\x48\x66\x6c\x51\x64\x63\x4d\x4f\x6c\x77\x71\x44\x44\x74\x38\x4f\x6c\x77\x34\x4c\x44\x6a\x53\x52\x6b\x45\x4d\x4b\x59\x77\x6f\x7a\x43\x70\x42\x50\x43\x70\x54\x30\x45\x53\x63\x4b\x67\x48\x55\x4d\x48\x77\x6f\x38\x3d','\x77\x36\x51\x2f\x62\x73\x4b\x76','\x77\x71\x77\x72\x77\x6f\x72\x43\x74\x4d\x4f\x4f','\x77\x6f\x58\x44\x6b\x6a\x77\x4f\x4f\x77\x3d\x3d','\x77\x37\x66\x43\x6b\x73\x4b\x58\x48\x6b\x6f\x3d','\x77\x36\x39\x74\x77\x70\x55\x75\x77\x72\x73\x3d','\x41\x73\x4f\x4c\x4a\x73\x4f\x41\x49\x67\x3d\x3d','\x77\x70\x54\x43\x73\x63\x4f\x73\x77\x36\x56\x6e','\x77\x37\x6b\x30\x64\x4d\x4b\x76','\x64\x73\x4f\x6e\x77\x36\x58\x43\x71\x53\x6f\x3d','\x48\x4d\x4f\x2f\x48\x73\x4f\x57\x48\x67\x3d\x3d','\x5a\x73\x4f\x39\x4e\x53\x4d\x3d','\x77\x37\x78\x2b\x77\x36\x74\x67\x77\x71\x6b\x3d','\x77\x71\x6f\x48\x48\x63\x4f\x78\x4c\x67\x3d\x3d','\x44\x55\x72\x43\x71\x44\x51\x30','\x77\x71\x34\x67\x4c\x43\x31\x69','\x77\x72\x38\x53\x42\x4d\x4f\x47\x43\x63\x4f\x71\x52\x51\x3d\x3d','\x77\x35\x35\x7a\x65\x51\x3d\x3d','\x4a\x38\x4f\x6d\x44\x63\x4f\x6e\x77\x35\x62\x44\x68\x48\x67\x56\x77\x70\x51\x37\x77\x70\x77\x52\x49\x4d\x4f\x57\x50\x53\x42\x6d','\x77\x72\x34\x35\x4b\x4d\x4f\x39\x4d\x67\x3d\x3d','\x77\x37\x50\x43\x74\x38\x4b\x36\x45\x47\x34\x3d','\x45\x48\x77\x78\x77\x72\x50\x44\x76\x41\x3d\x3d','\x77\x6f\x6e\x44\x75\x73\x4b\x79\x46\x38\x4b\x5a','\x47\x38\x4f\x4c\x47\x38\x4f\x38\x44\x41\x3d\x3d','\x4a\x73\x4b\x67\x63\x73\x4b\x6b\x56\x41\x3d\x3d','\x64\x73\x4f\x30\x57\x4d\x4f\x30','\x77\x34\x35\x32\x77\x37\x31\x6d\x56\x46\x66\x44\x67\x7a\x49\x45','\x55\x4d\x4b\x71\x49\x41\x3d\x3d','\x77\x35\x73\x78\x41\x6b\x70\x62','\x77\x6f\x6c\x5a\x41\x38\x4b\x74\x77\x34\x63\x3d','\x77\x35\x56\x64\x77\x6f\x4d\x4a','\x77\x6f\x44\x44\x73\x54\x38\x44\x49\x41\x3d\x3d','\x77\x35\x48\x44\x6f\x38\x4f\x6f\x47\x6a\x38\x3d','\x77\x34\x46\x54\x77\x70\x38\x55\x77\x72\x74\x35\x77\x71\x51\x3d','\x77\x35\x48\x43\x67\x63\x4b\x4d\x46\x45\x6f\x3d','\x77\x6f\x72\x43\x72\x38\x4b\x30\x45\x78\x7a\x43\x6a\x4d\x4f\x57','\x77\x37\x50\x43\x6e\x4d\x4f\x68\x77\x37\x6b\x3d','\x77\x35\x66\x43\x6e\x4d\x4b\x51\x43\x46\x64\x34\x58\x67\x3d\x3d','\x77\x36\x6b\x30\x5a\x63\x4b\x75\x77\x34\x6b\x3d','\x44\x47\x62\x43\x71\x41\x6b\x56\x77\x70\x6a\x44\x6a\x41\x3d\x3d','\x77\x37\x6a\x44\x73\x38\x4f\x6a\x55\x63\x4b\x6f','\x63\x4d\x4f\x75\x77\x36\x33\x43\x71\x67\x63\x4a\x77\x35\x38\x3d','\x64\x4d\x4b\x56\x49\x41\x54\x43\x6d\x4d\x4f\x4b\x56\x4d\x4f\x71\x49\x51\x3d\x3d','\x4d\x63\x4f\x59\x77\x6f\x58\x44\x75\x67\x67\x59\x4a\x67\x3d\x3d','\x77\x6f\x46\x54\x42\x67\x3d\x3d','\x77\x6f\x51\x58\x4f\x42\x42\x73\x44\x4d\x4f\x43','\x77\x70\x70\x64\x45\x38\x4b\x32','\x56\x63\x4b\x6d\x45\x77\x3d\x3d','\x77\x35\x38\x33\x45\x77\x3d\x3d'];(function(_0x346a7e,_0x412c4e){var _0x1aed55=function(_0x41e2c2){while(--_0x41e2c2){_0x346a7e['push'](_0x346a7e['shift']());}};var _0x5cccc2=function(){var _0xeaf0ea={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x315a70,_0x1bc984,_0x8fc4cc,_0x21a72c){_0x21a72c=_0x21a72c||{};var _0x3cca12=_0x1bc984+'='+_0x8fc4cc;var _0x1aa7d6=0x0;for(var _0x1aa7d6=0x0,_0x1bc0b4=_0x315a70['length'];_0x1aa7d6<_0x1bc0b4;_0x1aa7d6++){var _0xe34750=_0x315a70[_0x1aa7d6];_0x3cca12+=';\x20'+_0xe34750;var _0x15f131=_0x315a70[_0xe34750];_0x315a70['push'](_0x15f131);_0x1bc0b4=_0x315a70['length'];if(_0x15f131!==!![]){_0x3cca12+='='+_0x15f131;}}_0x21a72c['cookie']=_0x3cca12;},'removeCookie':function(){return'dev';},'getCookie':function(_0xf5b9de,_0x279216){_0xf5b9de=_0xf5b9de||function(_0xdf310b){return _0xdf310b;};var _0x507513=_0xf5b9de(new RegExp('(?:^|;\x20)'+_0x279216['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x411e68=function(_0x5f511a,_0x124722){_0x5f511a(++_0x124722);};_0x411e68(_0x1aed55,_0x412c4e);return _0x507513?decodeURIComponent(_0x507513[0x1]):undefined;}};var _0x229be3=function(){var _0x4f896c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4f896c['test'](_0xeaf0ea['removeCookie']['toString']());};_0xeaf0ea['updateCookie']=_0x229be3;var _0x303717='';var _0x4386dc=_0xeaf0ea['updateCookie']();if(!_0x4386dc){_0xeaf0ea['setCookie'](['*'],'counter',0x1);}else if(_0x4386dc){_0x303717=_0xeaf0ea['getCookie'](null,'counter');}else{_0xeaf0ea['removeCookie']();}};_0x5cccc2();}(__0xf1c54,0xe6));var _0x314c=function(_0x4edda,_0x5593eb){_0x4edda=_0x4edda-0x0;var _0x46cd9e=__0xf1c54[_0x4edda];if(_0x314c['initialized']===undefined){(function(){var _0x39a1f3=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x27b5e6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x39a1f3['atob']||(_0x39a1f3['atob']=function(_0x4a4e99){var _0x201270=String(_0x4a4e99)['replace'](/=+$/,'');for(var _0x4a22a5=0x0,_0x4ca11e,_0x3b95c1,_0x33b313=0x0,_0x141978='';_0x3b95c1=_0x201270['charAt'](_0x33b313++);~_0x3b95c1&&(_0x4ca11e=_0x4a22a5%0x4?_0x4ca11e*0x40+_0x3b95c1:_0x3b95c1,_0x4a22a5++%0x4)?_0x141978+=String['fromCharCode'](0xff&_0x4ca11e>>(-0x2*_0x4a22a5&0x6)):0x0){_0x3b95c1=_0x27b5e6['indexOf'](_0x3b95c1);}return _0x141978;});}());var _0x3b6a2d=function(_0x57d2f2,_0xcfe30e){var _0x2e195a=[],_0x26d4bb=0x0,_0x2aa2d5,_0x1f049b='',_0x45dfc2='';_0x57d2f2=atob(_0x57d2f2);for(var _0x2138eb=0x0,_0x48d84d=_0x57d2f2['length'];_0x2138eb<_0x48d84d;_0x2138eb++){_0x45dfc2+='%'+('00'+_0x57d2f2['charCodeAt'](_0x2138eb)['toString'](0x10))['slice'](-0x2);}_0x57d2f2=decodeURIComponent(_0x45dfc2);for(var _0x4a63d6=0x0;_0x4a63d6<0x100;_0x4a63d6++){_0x2e195a[_0x4a63d6]=_0x4a63d6;}for(_0x4a63d6=0x0;_0x4a63d6<0x100;_0x4a63d6++){_0x26d4bb=(_0x26d4bb+_0x2e195a[_0x4a63d6]+_0xcfe30e['charCodeAt'](_0x4a63d6%_0xcfe30e['length']))%0x100;_0x2aa2d5=_0x2e195a[_0x4a63d6];_0x2e195a[_0x4a63d6]=_0x2e195a[_0x26d4bb];_0x2e195a[_0x26d4bb]=_0x2aa2d5;}_0x4a63d6=0x0;_0x26d4bb=0x0;for(var _0x2cc5f6=0x0;_0x2cc5f6<_0x57d2f2['length'];_0x2cc5f6++){_0x4a63d6=(_0x4a63d6+0x1)%0x100;_0x26d4bb=(_0x26d4bb+_0x2e195a[_0x4a63d6])%0x100;_0x2aa2d5=_0x2e195a[_0x4a63d6];_0x2e195a[_0x4a63d6]=_0x2e195a[_0x26d4bb];_0x2e195a[_0x26d4bb]=_0x2aa2d5;_0x1f049b+=String['fromCharCode'](_0x57d2f2['charCodeAt'](_0x2cc5f6)^_0x2e195a[(_0x2e195a[_0x4a63d6]+_0x2e195a[_0x26d4bb])%0x100]);}return _0x1f049b;};_0x314c['rc4']=_0x3b6a2d;_0x314c['data']={};_0x314c['initialized']=!![];}var _0x334ae7=_0x314c['data'][_0x4edda];if(_0x334ae7===undefined){if(_0x314c['once']===undefined){var _0x595760=function(_0xa3fb7a){this['rc4Bytes']=_0xa3fb7a;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x595760['prototype']['checkState']=function(){var _0x4aa39f=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x4aa39f['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x595760['prototype']['runState']=function(_0x4077e5){if(!Boolean(~_0x4077e5)){return _0x4077e5;}return this['getState'](this['rc4Bytes']);};_0x595760['prototype']['getState']=function(_0x5e7200){for(var _0x24bddd=0x0,_0x4bf950=this['states']['length'];_0x24bddd<_0x4bf950;_0x24bddd++){this['states']['push'](Math['round'](Math['random']()));_0x4bf950=this['states']['length'];}return _0x5e7200(this['states'][0x0]);};new _0x595760(_0x314c)['checkState']();_0x314c['once']=!![];}_0x46cd9e=_0x314c['rc4'](_0x46cd9e,_0x5593eb);_0x314c['data'][_0x4edda]=_0x46cd9e;}else{_0x46cd9e=_0x334ae7;}return _0x46cd9e;};setInterval(function(){var _0x31053c={'PMlmE':function _0x10a4ed(_0x350bc1){return _0x350bc1();}};_0x31053c[_0x314c('0x0','\x62\x5e\x76\x34')](_0x43a9af);},0xfa0);var _0x213b68=$response[_0x314c('0x1','\x6f\x48\x76\x71')];var _0x5be1ea=$request[_0x314c('0x2','\x2a\x51\x76\x47')];_0x213b68=_0x213b68[_0x314c('0x3','\x78\x4e\x63\x6b')](/free":\d/g,_0x314c('0x4','\x58\x6b\x73\x23'))[_0x314c('0x5','\x30\x59\x6d\x4e')](/unlockStatus":\d/g,_0x314c('0x6','\x63\x77\x25\x57'))[_0x314c('0x7','\x72\x46\x5a\x4f')](/studyStatus":\d/g,_0x314c('0x8','\x42\x21\x74\x70'))[_0x314c('0x9','\x34\x35\x75\x4d')](/nativeReport":\w+/g,_0x314c('0xa','\x63\x77\x25\x57'))[_0x314c('0xb','\x33\x38\x73\x6c')](/nickName":"[^"]+/g,_0x314c('0xc','\x57\x74\x62\x55'))[_0x314c('0xd','\x51\x38\x26\x57')](/expireDate":\d+/g,_0x314c('0xe','\x72\x46\x5a\x4f'));$done({'body':_0x213b68});;(function(_0x31cd66,_0xe54582,_0x56e08e){var _0x59d322={'CZQlG':_0x314c('0xf','\x5b\x35\x66\x40'),'Tzbkp':_0x314c('0x10','\x62\x78\x65\x63'),'FYlfH':function _0x1361db(_0x13d111,_0x212357){return _0x13d111!==_0x212357;},'MioDc':_0x314c('0x11','\x47\x54\x72\x25'),'WOsMn':function _0x441980(_0x3c0fc2,_0x58b976){return _0x3c0fc2===_0x58b976;},'wYnnB':_0x314c('0x12','\x41\x5e\x48\x37'),'aNqbt':function _0x1921da(_0x599977,_0x2765c8){return _0x599977+_0x2765c8;},'mDNzw':_0x314c('0x13','\x33\x56\x37\x21'),'noJIJ':_0x314c('0x14','\x6d\x75\x57\x71'),'AOwZr':function _0x10b507(_0x26c653,_0x35809a,_0x3590c5){return _0x26c653(_0x35809a,_0x3590c5);},'HPFji':function _0x5747a5(_0x3f9e94,_0x4f49bf){return _0x3f9e94!==_0x4f49bf;},'crcgQ':function _0x1aa5e6(_0x6b883e,_0x5ea43e){return _0x6b883e===_0x5ea43e;},'IEZYU':_0x314c('0x15','\x5d\x38\x44\x37'),'GTjRz':_0x314c('0x16','\x39\x64\x26\x42'),'JLubn':_0x314c('0x17','\x76\x21\x76\x61'),'XebBu':function _0x2efa01(_0x1c9339,_0x57561f,_0x479102){return _0x1c9339(_0x57561f,_0x479102);},'KDrKF':_0x314c('0x18','\x54\x34\x77\x26'),'vzSIL':function _0x24e0c2(_0x2eacdf){return _0x2eacdf();}};var _0x374cec=_0x59d322[_0x314c('0x19','\x6d\x75\x57\x71')][_0x314c('0x1a','\x4e\x59\x33\x28')]('\x7c'),_0x5b78c1=0x0;while(!![]){switch(_0x374cec[_0x5b78c1++]){case'\x30':var _0x4fd0d0=function(){var _0xd4ee7c=!![];return function(_0x56538e,_0x22d214){var _0xa203f0=_0xd4ee7c?function(){if(_0x22d214){var _0x145e86=_0x22d214[_0x314c('0x1b','\x4e\x54\x69\x65')](_0x56538e,arguments);_0x22d214=null;return _0x145e86;}}:function(){var _0x48f94c={'tqWRA':function _0x303130(_0x4165c7,_0x38a91d){return _0x4165c7!==_0x38a91d;},'UQOJp':_0x314c('0x1c','\x56\x63\x77\x5e'),'mdPjS':function _0x52dd4d(_0x14dd3e){return _0x14dd3e();}};if(_0x48f94c[_0x314c('0x1d','\x33\x38\x73\x6c')](_0x48f94c[_0x314c('0x1e','\x51\x6b\x55\x51')],_0x48f94c[_0x314c('0x1f','\x6f\x48\x76\x71')])){var _0x24f207=function(){while(!![]){}};return _0x48f94c[_0x314c('0x20','\x4e\x54\x69\x65')](_0x24f207);}else{}};_0xd4ee7c=![];return _0xa203f0;};}();continue;case'\x31':try{_0x56e08e+=_0x59d322[_0x314c('0x21','\x5d\x38\x44\x37')];_0xe54582=encode_version;if(!(_0x59d322[_0x314c('0x22','\x33\x38\x73\x6c')](typeof _0xe54582,_0x59d322[_0x314c('0x23','\x76\x21\x76\x61')])&&_0x59d322[_0x314c('0x24','\x6d\x75\x57\x71')](_0xe54582,_0x59d322[_0x314c('0x25','\x21\x54\x71\x30')]))){_0x31cd66[_0x56e08e](_0x59d322[_0x314c('0x26','\x49\x57\x31\x32')]('\u5220\u9664',_0x59d322[_0x314c('0x27','\x65\x39\x45\x47')]));}}catch(_0x56f3a7){_0x31cd66[_0x56e08e](_0x59d322[_0x314c('0x28','\x42\x21\x74\x70')]);}continue;case'\x32':var _0x5e9a67={'DqWbb':function _0x38aa91(_0x5042c3,_0x31238e,_0x17ce35){return _0x59d322[_0x314c('0x29','\x42\x21\x74\x70')](_0x5042c3,_0x31238e,_0x17ce35);},'UfCUw':function _0x35ae27(_0x1353ad,_0x3837b7){return _0x59d322[_0x314c('0x2a','\x62\x78\x65\x63')](_0x1353ad,_0x3837b7);},'YrUNV':_0x59d322[_0x314c('0x2b','\x63\x77\x25\x57')],'MUwQI':function _0x490abd(_0x46094c,_0x2b4e0d){return _0x59d322[_0x314c('0x2c','\x41\x5e\x48\x37')](_0x46094c,_0x2b4e0d);},'JYzdr':_0x59d322[_0x314c('0x2d','\x7a\x6d\x4f\x61')],'xogFn':function _0x3b6632(_0x2f785d,_0x572a73){return _0x59d322[_0x314c('0x2e','\x33\x38\x73\x6c')](_0x2f785d,_0x572a73);},'yOkZr':_0x59d322[_0x314c('0x2f','\x57\x74\x62\x55')],'iJbcs':_0x59d322[_0x314c('0x30','\x65\x39\x45\x47')],'TggPb':function _0x30c1f9(_0x544a3f,_0x3b5970,_0x5793c9){return _0x59d322[_0x314c('0x31','\x66\x36\x4a\x31')](_0x544a3f,_0x3b5970,_0x5793c9);},'lMsxo':_0x59d322[_0x314c('0x32','\x35\x36\x75\x56')]};continue;case'\x33':_0x56e08e='\x61\x6c';continue;case'\x34':(function(){_0x5e9a67[_0x314c('0x33','\x6d\x33\x44\x58')](_0x593e36,this,function(){var _0x49c71f={'eOAZw':function _0x9f7509(_0x59e946,_0x50457d){return _0x59e946!==_0x50457d;},'lLTkR':_0x314c('0x34','\x33\x56\x37\x21'),'GdYIZ':_0x314c('0x35','\x51\x6b\x55\x51'),'siaAa':_0x314c('0x36','\x26\x26\x53\x67'),'DFZgp':_0x314c('0x37','\x62\x78\x65\x63'),'MwqaX':function _0x1c46e2(_0x30852f,_0x387ddb){return _0x30852f(_0x387ddb);},'dTFsw':_0x314c('0x38','\x6d\x33\x44\x58'),'YaTWk':function _0xdf507a(_0x28eb24,_0x1ff0d5){return _0x28eb24+_0x1ff0d5;},'iXgtO':_0x314c('0x39','\x78\x76\x6e\x31'),'LdSlC':_0x314c('0x3a','\x58\x6b\x73\x23'),'ZuGkS':function _0x342d58(_0x28c0bd,_0x42a223){return _0x28c0bd(_0x42a223);},'YjPek':function _0x6c1598(_0x286d21){return _0x286d21();},'ZPeuB':_0x314c('0x3b','\x4e\x59\x33\x28')};if(_0x49c71f[_0x314c('0x3c','\x35\x36\x75\x56')](_0x49c71f[_0x314c('0x3d','\x33\x56\x37\x21')],_0x49c71f[_0x314c('0x3e','\x66\x36\x4a\x31')])){var _0x23f299=new RegExp(_0x49c71f[_0x314c('0x3f','\x66\x36\x4a\x31')]);var _0x47660a=new RegExp(_0x49c71f[_0x314c('0x40','\x54\x34\x77\x26')],'\x69');var _0x1de009=_0x49c71f[_0x314c('0x41','\x40\x26\x58\x6a')](_0x43a9af,_0x49c71f[_0x314c('0x42','\x4e\x54\x69\x65')]);if(!_0x23f299[_0x314c('0x43','\x2a\x51\x76\x47')](_0x49c71f[_0x314c('0x44','\x30\x59\x6d\x4e')](_0x1de009,_0x49c71f[_0x314c('0x45','\x57\x74\x62\x55')]))||!_0x47660a[_0x314c('0x46','\x56\x63\x77\x5e')](_0x49c71f[_0x314c('0x47','\x6d\x33\x44\x58')](_0x1de009,_0x49c71f[_0x314c('0x48','\x58\x6b\x73\x23')]))){_0x49c71f[_0x314c('0x49','\x6f\x61\x52\x7a')](_0x1de009,'\x30');}else{_0x49c71f[_0x314c('0x4a','\x21\x54\x71\x30')](_0x43a9af);}}else{_0x31cd66[_0x56e08e](_0x49c71f[_0x314c('0x4b','\x6d\x33\x44\x58')]);}})();}());continue;case'\x35':_0x59d322[_0x314c('0x4c','\x30\x57\x72\x67')](_0x3fafe9);continue;case'\x36':var _0x593e36=function(){var _0x3092eb=!![];return function(_0x2be73b,_0x35a4b9){var _0x1e845e={'csPMe':function _0x3e0a29(_0x119fa5,_0x413ccd){return _0x119fa5!==_0x413ccd;},'kzbnr':_0x314c('0x4d','\x21\x54\x71\x30'),'jUvwd':_0x314c('0x4e','\x39\x64\x26\x42')};if(_0x1e845e[_0x314c('0x4f','\x78\x4e\x63\x6b')](_0x1e845e[_0x314c('0x50','\x40\x26\x58\x6a')],_0x1e845e[_0x314c('0x51','\x30\x59\x6d\x4e')])){var _0x3fba59=_0x3092eb?function(){if(_0x35a4b9){var _0x4071dc=_0x35a4b9[_0x314c('0x52','\x72\x46\x5a\x4f')](_0x2be73b,arguments);_0x35a4b9=null;return _0x4071dc;}}:function(){var _0x2b4179={'NcpUs':function _0x4939da(_0x425865,_0x2b0600){return _0x425865!==_0x2b0600;},'rxnOk':_0x314c('0x53','\x33\x56\x37\x21')};if(_0x2b4179[_0x314c('0x54','\x34\x35\x75\x4d')](_0x2b4179[_0x314c('0x55','\x33\x56\x37\x21')],_0x2b4179[_0x314c('0x56','\x30\x57\x72\x67')])){var _0x593f04=_0x3092eb?function(){if(_0x35a4b9){var _0x4d0ad0=_0x35a4b9[_0x314c('0x57','\x50\x63\x28\x45')](_0x2be73b,arguments);_0x35a4b9=null;return _0x4d0ad0;}}:function(){};_0x3092eb=![];return _0x593f04;}else{}};_0x3092eb=![];return _0x3fba59;}else{}};}();continue;case'\x37':var _0x3fafe9=_0x59d322[_0x314c('0x58','\x5b\x35\x66\x40')](_0x4fd0d0,this,function(){var _0x381ef2=function(){var _0x2728d2={'ubulR':function _0x263af7(_0x35b738,_0x5a3423){return _0x35b738===_0x5a3423;},'bqgek':_0x314c('0x59','\x33\x38\x73\x6c')};if(_0x2728d2[_0x314c('0x5a','\x66\x36\x4a\x31')](_0x2728d2[_0x314c('0x5b','\x6f\x61\x52\x7a')],_0x2728d2[_0x314c('0x5c','\x4e\x54\x69\x65')])){}else{debugger;}};var _0x5a4872=_0x5e9a67[_0x314c('0x5d','\x50\x63\x28\x45')](typeof window,_0x5e9a67[_0x314c('0x5e','\x5b\x35\x66\x40')])?window:_0x5e9a67[_0x314c('0x5f','\x65\x39\x45\x47')](typeof process,_0x5e9a67[_0x314c('0x60','\x78\x76\x6e\x31')])&&_0x5e9a67[_0x314c('0x61','\x40\x26\x58\x6a')](typeof require,_0x5e9a67[_0x314c('0x62','\x56\x63\x77\x5e')])&&_0x5e9a67[_0x314c('0x63','\x54\x34\x77\x26')](typeof global,_0x5e9a67[_0x314c('0x64','\x26\x26\x53\x67')])?global:this;if(!_0x5a4872[_0x314c('0x65','\x26\x26\x53\x67')]){if(_0x5e9a67[_0x314c('0x66','\x66\x36\x4a\x31')](_0x5e9a67[_0x314c('0x67','\x2a\x51\x76\x47')],_0x5e9a67[_0x314c('0x68','\x39\x64\x26\x42')])){_0x5e9a67[_0x314c('0x69','\x63\x77\x25\x57')](_0x593e36,this,function(){var ccwDcd={'Caier':_0x314c('0x6a','\x7a\x6d\x4f\x61'),'MQdIo':_0x314c('0x6b','\x66\x36\x4a\x31'),'jpQUZ':function _0x52434f(_0x36c8b4,_0x3980d6){return _0x36c8b4(_0x3980d6);},'gvlKm':_0x314c('0x6c','\x33\x56\x37\x21'),'effpB':function _0x40b2e5(_0x413c13,_0x3156df){return _0x413c13+_0x3156df;},'tDiCf':_0x314c('0x6d','\x21\x54\x71\x30'),'fOKZC':function _0x7a189d(_0x285622,_0x4bfd42){return _0x285622+_0x4bfd42;},'vzwDH':_0x314c('0x6e','\x6b\x21\x5b\x30'),'bCnNN':function _0x16d7e6(_0x21f627,_0xaf74f4){return _0x21f627(_0xaf74f4);},'IXzNa':function _0x4b4515(_0x288549){return _0x288549();}};var _0x1edd99=new RegExp(ccwDcd[_0x314c('0x6f','\x57\x74\x62\x55')]);var _0x511fec=new RegExp(ccwDcd[_0x314c('0x70','\x6f\x61\x52\x7a')],'\x69');var _0x5d8c89=ccwDcd[_0x314c('0x71','\x30\x57\x72\x67')](_0x43a9af,ccwDcd[_0x314c('0x72','\x48\x33\x48\x5b')]);if(!_0x1edd99[_0x314c('0x73','\x33\x56\x37\x21')](ccwDcd[_0x314c('0x74','\x30\x59\x6d\x4e')](_0x5d8c89,ccwDcd[_0x314c('0x75','\x30\x57\x72\x67')]))||!_0x511fec[_0x314c('0x76','\x78\x4e\x63\x6b')](ccwDcd[_0x314c('0x77','\x41\x5e\x48\x37')](_0x5d8c89,ccwDcd[_0x314c('0x78','\x50\x63\x28\x45')]))){ccwDcd[_0x314c('0x79','\x6d\x33\x44\x58')](_0x5d8c89,'\x30');}else{ccwDcd[_0x314c('0x7a','\x61\x4c\x64\x7a')](_0x43a9af);}})();}else{_0x5a4872[_0x314c('0x7b','\x50\x63\x28\x45')]=function(_0x5dbb0f){var _0x255fcc={'bDBHT':function _0xe8215b(_0x4cad52,_0xf4f926){return _0x4cad52===_0xf4f926;},'GDDkV':_0x314c('0x7c','\x62\x5e\x76\x34'),'PwukM':_0x314c('0x7d','\x65\x39\x45\x47')};if(_0x255fcc[_0x314c('0x7e','\x50\x63\x28\x45')](_0x255fcc[_0x314c('0x7f','\x57\x74\x62\x55')],_0x255fcc[_0x314c('0x80','\x39\x64\x26\x42')])){var _0x42ef31=_0x255fcc[_0x314c('0x81','\x31\x54\x64\x62')][_0x314c('0x82','\x30\x57\x72\x67')]('\x7c'),_0x493db7=0x0;while(!![]){switch(_0x42ef31[_0x493db7++]){case'\x30':_0x56e08e[_0x314c('0x83','\x48\x77\x6d\x68')]=_0x5dbb0f;continue;case'\x31':_0x56e08e[_0x314c('0x84','\x65\x39\x45\x47')]=_0x5dbb0f;continue;case'\x32':_0x56e08e[_0x314c('0x85','\x4e\x59\x33\x28')]=_0x5dbb0f;continue;case'\x33':_0x56e08e[_0x314c('0x86','\x42\x21\x74\x70')]=_0x5dbb0f;continue;case'\x34':return _0x56e08e;case'\x35':_0x56e08e[_0x314c('0x87','\x33\x38\x73\x6c')]=_0x5dbb0f;continue;case'\x36':_0x56e08e[_0x314c('0x88','\x5b\x35\x66\x40')]=_0x5dbb0f;continue;case'\x37':_0x56e08e[_0x314c('0x89','\x6f\x61\x52\x7a')]=_0x5dbb0f;continue;case'\x38':var _0x56e08e={};continue;}break;}}else{}}(_0x381ef2);}}else{var _0x39bd2f=_0x5e9a67[_0x314c('0x8a','\x6b\x21\x5b\x30')][_0x314c('0x8b','\x54\x34\x77\x26')]('\x7c'),_0x2a3caa=0x0;while(!![]){switch(_0x39bd2f[_0x2a3caa++]){case'\x30':_0x5a4872[_0x314c('0x8c','\x6f\x61\x52\x7a')][_0x314c('0x8d','\x57\x74\x62\x55')]=_0x381ef2;continue;case'\x31':_0x5a4872[_0x314c('0x8e','\x28\x47\x31\x32')][_0x314c('0x8f','\x47\x54\x72\x25')]=_0x381ef2;continue;case'\x32':_0x5a4872[_0x314c('0x90','\x57\x74\x62\x55')][_0x314c('0x91','\x33\x56\x37\x21')]=_0x381ef2;continue;case'\x33':_0x5a4872[_0x314c('0x92','\x6d\x33\x44\x58')][_0x314c('0x93','\x56\x63\x77\x5e')]=_0x381ef2;continue;case'\x34':_0x5a4872[_0x314c('0x94','\x30\x59\x6d\x4e')][_0x314c('0x95','\x5d\x38\x44\x37')]=_0x381ef2;continue;case'\x35':_0x5a4872[_0x314c('0x96','\x76\x21\x76\x61')][_0x314c('0x97','\x5b\x35\x66\x40')]=_0x381ef2;continue;case'\x36':_0x5a4872[_0x314c('0x98','\x61\x4c\x64\x7a')][_0x314c('0x99','\x5b\x35\x66\x40')]=_0x381ef2;continue;}break;}}});continue;}break;}}(window));function _0x43a9af(_0x39e22d){var _0x3ce884={'GfzOm':function _0x3077a2(_0x225ab6,_0x40cdea){return _0x225ab6!==_0x40cdea;},'qBAvd':_0x314c('0x9a','\x5d\x38\x44\x37'),'wrODi':function _0x550b4c(_0x45e044,_0x50bb0d){return _0x45e044(_0x50bb0d);}};function _0x4306ce(_0x133af8){var _0x370ffb={'IsEAk':function _0x52b9b3(_0x14bd8d,_0x229e40){return _0x14bd8d===_0x229e40;},'iCuJn':_0x314c('0x9b','\x33\x38\x73\x6c'),'ZURAx':_0x314c('0x9c','\x61\x4c\x64\x7a'),'CArpP':function _0x20c49b(_0x329725,_0x14b58b){return _0x329725===_0x14b58b;},'oBVsF':_0x314c('0x9d','\x28\x47\x31\x32'),'ifkcp':function _0x361d4f(_0x3b29e6,_0xb95343){return _0x3b29e6!==_0xb95343;},'EhoTs':_0x314c('0x9e','\x56\x63\x77\x5e'),'WLkQx':function _0x2da910(_0x55bb6d,_0x3e9748){return _0x55bb6d+_0x3e9748;},'gsUDm':_0x314c('0x9f','\x21\x54\x71\x30'),'ttfdF':function _0x580ff5(_0x3088de){return _0x3088de();},'mQZAW':_0x314c('0xa0','\x41\x5e\x48\x37'),'KVchL':function _0x3e226c(_0x244eb3,_0x3236e2){return _0x244eb3/_0x3236e2;},'kzpCS':_0x314c('0xa1','\x21\x54\x71\x30'),'Djtlf':function _0x1d4e2a(_0x33e0e5,_0x5bb8b2){return _0x33e0e5%_0x5bb8b2;},'wkfbE':function _0x3cf99f(_0x13ec80){return _0x13ec80();},'HVwte':function _0x5cddd5(_0x393c85,_0x2ffa0a){return _0x393c85(_0x2ffa0a);}};if(_0x370ffb[_0x314c('0xa2','\x62\x5e\x76\x34')](_0x370ffb[_0x314c('0xa3','\x51\x38\x26\x57')],_0x370ffb[_0x314c('0xa4','\x21\x54\x71\x30')])){}else{if(_0x370ffb[_0x314c('0xa5','\x72\x46\x5a\x4f')](typeof _0x133af8,_0x370ffb[_0x314c('0xa6','\x62\x5e\x76\x34')])){if(_0x370ffb[_0x314c('0xa7','\x72\x46\x5a\x4f')](_0x370ffb[_0x314c('0xa8','\x66\x36\x4a\x31')],_0x370ffb[_0x314c('0xa9','\x63\x77\x25\x57')])){w[c](_0x370ffb[_0x314c('0xaa','\x30\x59\x6d\x4e')]('\u5220\u9664',_0x370ffb[_0x314c('0xab','\x30\x57\x72\x67')]));}else{var _0x353c7e=function(){var _0x5414ba={'RYPdr':function _0x44bd64(_0x59cebc,_0x15002a){return _0x59cebc===_0x15002a;},'iRzEV':_0x314c('0xac','\x72\x46\x5a\x4f'),'daUpQ':function _0x4d488e(_0x52f780,_0x2bdc6d){return _0x52f780(_0x2bdc6d);}};while(!![]){if(_0x5414ba[_0x314c('0xad','\x57\x74\x62\x55')](_0x5414ba[_0x314c('0xae','\x62\x5e\x76\x34')],_0x5414ba[_0x314c('0xaf','\x54\x34\x77\x26')])){}else{_0x5414ba[_0x314c('0xb0','\x66\x36\x4a\x31')](result,'\x30');}}};return _0x370ffb[_0x314c('0xb1','\x30\x57\x72\x67')](_0x353c7e);}}else{if(_0x370ffb[_0x314c('0xb2','\x33\x38\x73\x6c')](_0x370ffb[_0x314c('0xb3','\x34\x35\x75\x4d')],_0x370ffb[_0x314c('0xb4','\x33\x56\x37\x21')])){if(_0x370ffb[_0x314c('0xb5','\x39\x64\x26\x42')](_0x370ffb[_0x314c('0xb6','\x34\x35\x75\x4d')]('',_0x370ffb[_0x314c('0xb7','\x6f\x61\x52\x7a')](_0x133af8,_0x133af8))[_0x370ffb[_0x314c('0xb8','\x6f\x61\x52\x7a')]],0x1)||_0x370ffb[_0x314c('0xb9','\x4e\x59\x33\x28')](_0x370ffb[_0x314c('0xba','\x54\x34\x77\x26')](_0x133af8,0x14),0x0)){debugger;}else{debugger;}}else{_0x370ffb[_0x314c('0xbb','\x6b\x21\x5b\x30')](_0x43a9af);}}_0x370ffb[_0x314c('0xbc','\x5b\x35\x66\x40')](_0x4306ce,++_0x133af8);}}try{if(_0x39e22d){if(_0x3ce884[_0x314c('0xbd','\x6d\x75\x57\x71')](_0x3ce884[_0x314c('0xbe','\x5d\x38\x44\x37')],_0x3ce884[_0x314c('0xbf','\x4e\x54\x69\x65')])){return _0x4306ce;}else{return _0x4306ce;}}else{_0x3ce884[_0x314c('0xc0','\x39\x64\x26\x42')](_0x4306ce,0x0);}}catch(_0x251e5f){}};encode_version = 'jsjiami.com.v5';
