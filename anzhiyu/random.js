var posts=["2024/07/02/Bravoneworld/","2024/07/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };