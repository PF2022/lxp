/*************************************

项目功能：起伏 解锁VIP
下载地址：https://t.cn/A6ouQzMi
脚本作者：chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]

https?:\/\/api\.risingfalling\.com\/api\/vip\/detail url script-response-body 

[mitm] 

hostname = api.risingfalling.com

*************************************/


var = JSON.parse($response.body);
chxm1023.body={"isVip":true,"vipEndTime":4092599350000};
$done({body: JSON.stringify(2023)});
