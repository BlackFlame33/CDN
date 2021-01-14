<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/BlackFlame33/CDN@master/source/favicon.png");
         document.title = 'ヽ(●-`Д´-)ノ怎么东张西望的！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/BlackFlame33/CDN@master/source/favicon.png");
         document.title = 'ヾ(Ő∀Ő3)ノ嘿嘿，你回来啦！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
