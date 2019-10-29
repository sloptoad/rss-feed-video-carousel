// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
  var style = window.top.document.createElement('style');
  style.innerHTML = `
  a{
    color: #000;
  }
  a:hover{
    color: #ff6567;
    text-decoration: none;
  }
.zlides {
    position: relative;
    height: 369px;
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    overflow:hidden;
    display:grid;
}
.zlide {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;

    -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
}
.bc-video-add {
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
    width:100%;
    height:200px;
    z-index:99999999;
}

#slide-title{
  z-index: 99999;
  position: absolute;
  background-color: #fff; 
  border-left: 5px solid #ff6567;
  left: 25px;
  font-size: 20px;
  max-height: 75px;
  bottom: 25px;
  display: flex;
  align-items: center;
  line-height: 25px;
  max-width: 478px;
  padding: 10px 5px;
  }

  #read-more{
    max-width: 100%;
    z-index: 99999;
    top: 89%;
    right: 0%;
    font-size: 14px;
    padding: 8px 5px;
    position: absolute;
  }
#read-more a{
    color: #ff6567;
    text-transform: uppercase;
}
.showing {
    opacity: 1;
    overflow:hidden;
}
#top-article{
    max-width: 100%;
    z-index: 99999;
    top: 4%;
    left: 4%;
    padding: 8px 5px;
    font-size: 12px;
    position: absolute;
}
#top-article span:first-child{
    background: #fff;
    padding: 6px 5px;

}
#top-article span:last-child{
    background: #000;
    color: #fff;
    padding: 6px 5px;
}
@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(1, 1);
  }
  to {
    -webkit-transform: scale(1.1, 1.1);
  }
}

.showing > img {
  -webkit-animation: zoom 5s;
  animation: zoom 5s;
}

@keyframes zoom {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(1.1, 1.1);
  }
}

@-webkit-keyframes loader {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes loader {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.progress-bar {
  overflow: hidden;
  width: 80px;
  position: absolute;
  z-index: 99999;
}

.bar {
    background: #fff;
    margin: 5px;
    width: 95px;
    display: inline-block;
  }

[id^=progress]{
  -webkit-animation: loader 5s linear infinite;
          animation: loader 5s linear infinite;
  background: #ff6567;
  color: #fff;
  padding: 2px;
  width: 0;
} 

.progress-bar {
  left: 50%;
  max-width: 100%;
  width: 550px;
  top: 68%;
  -webkit-transform: translate3d(-50%, -50%, 0);
          transform: translate3d(-50%, -50%, 0);
}
.not-filled{
    background:#fff !important;
}
.filled{
    background: #ff6567;
}
.filled .progress{
    background: #ff6567;
}
{/* slide 1 */}
 .progress-bar #pbar-0 #progress-0{
    background: #ff6567;
}
.progress-bar #pbar-1 #progress-1{
    background: #ff6567;
    animation-delay: 5s;
    -webkit-animation-delay: 5s;
  }
.progress-bar #pbar-2 #progress-2{
    background: #ff6567;
    animation-delay: 10s;
    -webkit-animation-delay: 10s;
  }
 .progress-bar #pbar-3 #progress-3{
    background: #ff6567;
    animation-delay: 15s;
    -webkit-animation-delay: 15s;
}
 .progress-bar #pbar-4 #progress-4{
    background: #ff6567;
    animation-delay: 20s;
    -webkit-animation-delay: 20s;
}
.white-block {
  position: absolute;
  bottom: 0;
  height: 65px;
  background: #fff;
  width: 100%;
  z-index: 2;
}

/* For mobile : like samsung grand(480 * 800): */
@media screen and (max-width : 480px){
  .zlides{
    height: 200px;
  }
  .progress-bar{
    display: none;
  }
  #slide-title{
    max-width: 89%;
    left: 8px;
    bottom: 21px;
    font-size: 14px;
    line-height: 20px;
  }
  #read-more{
    top: 88%;
  }
}
    `;

    (function(d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function(){
      player = window.top.document.getElementById("rss-video-ad");
      player2 = window.top.document.getElementsByClassName("bc-video-add");
      window.top.bc("rss-video-ad").on('ads-ad-ended', () => {
        player.parentNode.removeChild(player)
        player2[0].parentNode.removeChild(player2[0])

      })
    };
    script.src = 'https://players.brightcove.net/1125911414/7BrHKSTrsI_default/index.min.js?playlistId=5769553016001';
    d.getElementsByTagName('head')[0].appendChild(script);
}(window.top.document));

  window.top.document.head.appendChild(style);
  var feedimgs = ["http://api.billboard.com/files/media/akon-El-Negreeto-2019-billboard-embed.jpg","http://api.billboard.com/files/media/lunay-jimmy-kimmel-2019-billboard-embed.jpg","http://api.billboard.com/files/media/akon-El-Negreeto-2019-billboard-embed.jpg","http://api.billboard.com/files/media/lunay-jimmy-kimmel-2019-billboard-embed.jpg","http://api.billboard.com/files/media/akon-El-Negreeto-2019-billboard-embed.jpg"];
    var titles = [];
    var firsttitle = "";
    var urls = []
          $.ajax({
            type: 'GET',
            url: "https://api.rss2json.com/v1/api.json?rss_url=https://minutemedia:1bf80493@synd.bbthr.com/get/minutemedia/bb-minutemedia-programmatic-1",
            dataType: 'jsonp',
            success: function (result) {
                for (let item in result.items) {
                    if (result.items[item].thumbnail !== "") {
                        feedimgs.push(result.items[item].thumbnail)
                    }
                    if (result.items[item].title !== "") {
                        titles.push(result.items[item].title)
                    }
                    if (result.items[item].link !== "") {
                      urls.push(result.items[item].link)
                  }
                }
            var currentDiv = window.top.document.getElementById("m1_1"),
                zlidesdiv = window.top.document.getElementsByClassName("zlides");
            if ( zlidesdiv.length == 0 ) {
                var newDiv = window.top.document.createElement("div");
                $(newDiv).addClass("zlides");
                currentDiv.append(newDiv);
                newDiv.innerHTML = `
                <div class="bc-video-add" style="position:absolute;top:0px;right:0px;bottom:0px;left:0px;width:100%;height:200px;z-index:99999999">
                <video-js autoplay
                  data-account="1125911414"
                  data-player="7BrHKSTrsI"
                  data-embed="default"
                  data-playlist-id="5769553016001"
                  controls=""
                  id="rss-video-ad"
                  data-application-id=""
                  class="vjs-fluid"></video-js>
                </div>


                <div id="top-article">
                <span>TOP ARTICLES</span><span>1/5</span>
                </div>
                <div class="progress-bar">
                <div class="bar" id="pbar-0"><div id="progress-0"></div></div>
                <div class="bar" id="pbar-1"><div id="progress-1"></div></div>
                <div class="bar" id="pbar-2"><div id="progress-2"></div></div>
                <div class="bar" id="pbar-3"><div id="progress-3"></div></div>
                <div class="bar" id="pbar-4"><div id="progress-4"></div></div>
                </div>
                <div id="slide-title"></div>
                <div class="white-block"></div>
                <div id="read-more"></div>
                `
                var titleDiv = window.top.document.getElementById("slide-title");

                for (image in feedimgs) {
                  var newli = window.top.document.createElement("li");
                	if( image == 0){
                     $(newli).addClass("showing");
                    firsttitle = titles[0];
                    titleDiv.innerHTML = firsttitle
                	}
                    var outerDiv = window.top.document.createElement("div");
                     $(newli).addClass("zlide");
                    newDiv.append(newli);
                    var img = window.top.document.createElement("img");
                    img.src = feedimgs[image];
                    newli.append(img)
                }
  
            }
      var player = window.top.document.getElementById("rss-video-ad");
			var zlides = window.top.document.querySelectorAll('.zlides .zlide');
      var currentZlide = 0;
      var x = window.top.document.getElementById("top-article").lastElementChild;
      var readMoreDiv = window.top.document.getElementById("read-more");

      setInterval(nextZlide,5000);
      setInterval(reAddVideo,25000);
          function nextZlide() {
            var titleDiv = window.top.document.getElementById("slide-title");
                if(currentZlide == 0) {
                    window.top.document.getElementById("pbar-0").classList.remove("filled");
                    window.top.document.getElementById("pbar-1").classList.remove("filled");
                    window.top.document.getElementById("pbar-2").classList.remove("filled");
                    window.top.document.getElementById("pbar-3").classList.remove("filled");
                    window.top.document.getElementById("pbar-4").classList.remove("filled");
                    window.top.document.getElementById("progress-1").classList.add("not-filled");
                    window.top.document.getElementById("progress-2").classList.add("not-filled");
                    window.top.document.getElementById("progress-3").classList.add("not-filled");
                    window.top.document.getElementById("progress-4").classList.add("not-filled");
                    x.innerHTML = `1/5`
                    titleDiv.innerHTML = '<a target="_blank" href="'+urls[0]+'">'+firsttitle+'</a>';
                    readMoreDiv.innerHTML = '<a target="_blank" href="'+urls[0]+'">Read More >></a>'
                }
                if(currentZlide == 1){
                    window.top.document.getElementById("progress-1").classList.remove("not-filled");
                    window.top.document.getElementById("pbar-0").classList.add('filled')    
                    x.innerHTML = `2/5`
                    titleDiv.innerHTML = '<a target="_blank" href="'+urls[1]+'">'+ titles[1]+'</a>';
                    readMoreDiv.innerHTML = '<a href="'+urls[1]+'">Read More >></a>'

                }
                if(currentZlide == 2){
                    window.top.document.getElementById("progress-2").classList.remove("not-filled");
                    window.top.document.getElementById("pbar-1").classList.add('filled')    
                    x.innerHTML = `3/5`
                    titleDiv.innerHTML = '<a target="_blank" href="'+urls[2]+'">'+ titles[2]+'</a>';
                    readMoreDiv.innerHTML = '<a href="'+urls[2]+'">Read More >></a>'

                }                
                if(currentZlide == 3){
                    window.top.document.getElementById("progress-3").classList.remove("not-filled");
                    window.top.document.getElementById("pbar-2").classList.add('filled')   
                    x.innerHTML = `4/5`
                    titleDiv.innerHTML = '<a target="_blank" href="'+urls[3]+'">'+ titles[3]+'</a>';
                    readMoreDiv.innerHTML = '<a href="'+urls[3]+'">Read More >></a>'

                }
                if(currentZlide == 4){
                    window.top.document.getElementById("progress-4").classList.remove("not-filled");
                    window.top.document.getElementById("pbar-3").classList.add('filled')    
                    x.innerHTML = `5/5`
                    titleDiv.innerHTML = '<a target="_blank" href="'+urls[4]+'">'+ titles[4]+'</a>';
                    readMoreDiv.innerHTML = '<a href="'+urls[4]+'">Read More >></a>'

                }
              zlides[currentZlide].className = 'zlide';
              currentZlide = (currentZlide+1)%zlides.length;
              zlides[currentZlide].className = 'zlide showing';
          }
          function reAddVideo(){
            var checkDiv = window.top.document.getElementsByClassName("bc-video-add");
            if(checkDiv.length == 0){
              zlidesdiv = window.top.document.getElementsByClassName("zlides");
              (function(d, script) {
                script = d.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.onload = function(){
                  player = window.top.document.getElementById("rss-video-ad");
                  player2 = window.top.document.getElementsByClassName("bc-video-add");
                  window.top.bc("rss-video-ad").on('ads-ad-ended', () => {
                    player.parentNode.removeChild(player)
                    player2[0].parentNode.removeChild(player2[0])
            
                  })
                };
                script.src = 'https://players.brightcove.net/1125911414/7BrHKSTrsI_default/index.min.js?playlistId=5769553016001';
                d.getElementsByTagName('head')[0].appendChild(script);
            }(window.top.document));
              var playerHtml = window.top.document.createElement("div");
              $(playerHtml).addClass("bc-video-add");
                  playerHtml.innerHTML = `<video-js autoplay
                        data-account="1125911414"
                        data-player="7BrHKSTrsI"
                        data-embed="default"
                        data-playlist-id="5769553016001"
                        controls=""
                        id="rss-video-ad"
                        data-application-id=""
                        class="vjs-fluid">
                      </video-js>`
              zlidesdiv[0].append(playerHtml)
              var player = window.top.document.getElementById("rss-video-ad");
          }
        }
      }
      })


   
</script>	

<img src="%%VIEW_URL_UNESC%%%%CLICK_URL_UNESC%%" style="display:none">

