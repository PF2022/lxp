/*
 *脚本功能： 写作 ulysses VIP 
 *脚本整理：Peng-Lx
  APP:https://apps.apple.com/us/app/ulysses-%E5%86%99%E4%BD%9C%E8%BD%AF%E4%BB%B6/id1225571038?l=zh
 **********************
 *QX
 [rewrite_local]
 ^https:\/\/sk\.ulysses\.app\/api\/v1\/itunes_receipt_verify$ url script-response-body https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Ulysses.js
 **********************
 *hostname = sk.ulysses.app
 **********************
 
 *Surge&loon
 [Script]
 http-response ^https:\/\/sk\.ulysses\.app\/api\/v1\/itunes_receipt_verify$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Peng-Lx/lxpscript/master/JS/Ulysses.js
 */
 
 
 var body = $response.body;
var obj = JSON.parse(body);
var url =  $request.url;
if (url.indexOf('itunes_receipt_verify')!=-1) {
  var receiptInapp = obj.receipt.in_app;
//console.log(receiptInapp.length);
for (var i = 0; i < receiptInapp.length; i++) {
 obj.receipt.in_app[i].expires_date="2030-09-18 14:31:56 Etc/GMT";
obj.receipt.in_app[i].expires_date_ms="1884436316000";
obj.receipt.in_app[i].expires_date_pst="2030-09-18 07:31:56 America/Los_Angeles";
}
for (var i = 0; i < obj.latest_receipt_info.length; i++) {
 obj.latest_receipt_info[i].expires_date="2030-09-18 14:31:56 Etc/GMT";
obj.latest_receipt_info[i].expires_date_ms="1884436316000";
obj.latest_receipt_info[i].expires_date_pst="2030-09-18 07:31:56 America/Los_Angeles";
}

obj.pending_renewal_info[0]={"auto_renew_product_id":"com.ulyssesapp.ios.yearly","original_transaction_id":"520000477566272","product_id":"com.ulyssesapp.ios.yearly","auto_renew_status":"1"};
}

if (url.indexOf('user_offers')!=-1) {
 obj.accepted=true;
}

$done({body: JSON.stringify(obj)});
//BY langkhach
