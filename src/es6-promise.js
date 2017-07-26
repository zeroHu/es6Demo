var ajax = function(option) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: option.url,
      type: option.type || 'get',
      data: option.data || {},
      success(data) {
        resolve(data);
      },
      error(data) {
        reject(data);
      }
    })
  })
}
// 获取用户信息
var p1 = ajax({
  url: '/api/website/user/info/',
  type: 'get'
});
// 微信签名
var p2 = ajax({
  url: '/api/website/signature/weixin/',
  type: 'post',
  data: {
    url: location.href,
    type: 'pay'
  }
});
// 获取商品信息
var p3 = ajax({
  url: '/api/website/pay/product/info/',
  type: 'post',
  data: {
    products: '44bd8d05d4f44c629a493b1754da6dc0'
  }
});

// 异步请求函数
Promise.all([p1, p2, p3]).then(function(results) {
  results.forEach(function(result) {
    console.log('all====>', JSON.stringify(result));
  });
}).catch(function(err) {
  console.log(err);
});
// 同步请求函数
p1.then(function(resp1) {
  console.log('resp1', JSON.stringify(resp1));
  console.log(123);
  return p2;
}).then(function(resp2) {
  console.log(234);
  console.log('resp2', JSON.stringify(resp2))
  return p3;
}).then(function(resp3) {
  console.log(345);
  console.log('resp3', JSON.stringify(resp3))
});