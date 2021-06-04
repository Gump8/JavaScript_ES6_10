// 协议（http、https） 域名（www.xxxx.com） 端口(http 默认 80、https 默认 43)，有一个不同就算跨域
var req = new XMLHttpRequest()
req.open('GET', '/api', false)
req.onreadystatechange = function () {
  if (req.readyState === 4) {
    if (req.status === 200) {
      alert(req.responseText)
    }
  }
}
req.send(null)

// 跨域标签
/**
 * <img src= >
 * <link href= >
 * <script src= >
 */
