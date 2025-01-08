var posts=["2025/01/06/hello-world/","2025/01/08/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };