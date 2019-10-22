// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script>
  var style = window.top.document.createElement('style');
  style.innerHTML = `
.zlides {
    position: relative;
    height: 500px;
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    overflow:hidden;
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


#slide-title{
  z-index: 99999;
  position: absolute;
  background-color: #fff; 
  border-left: 5px solid #ff6567;
  left: 25px;
  font-size: 20px;
  height: 75px;
  bottom: 25px;
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
  -webkit-animation: loader 5s ease infinite;
          animation: loader 5s ease infinite;
  background: #ff6567;
  color: #fff;
  padding: 2px;
  width: 0;
} 

.progress-bar {
  left: 50%;
  max-width: 100%;
  width: 550px;
  top: 72%;
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
    height: 355px;
  }
  .progress-bar{
    display: none;
  }
  #slide-title{
    max-width: 90%;
    left: 8px;
    bottom: 44px;
    font-size:16px;
    line-height: 23px;
    height: 72px;
  }
}


/* For iphone: */
@media screen and (max-width : 320px){} 


/* For ipad: */
@media screen and (max-width : 768px){} 

    `;

  window.top.document.head.appendChild(style);
  var feedimgs = [ "http://api.billboard.com/files/media/lunay-jimmy-kimmel-2019-billboard-embed.jpg","http://api.billboard.com/files/media/lunay-jimmy-kimmel-2019-billboard-embed.jpg","http://api.billboard.com/files/media/lunay-jimmy-kimmel-2019-billboard-embed.jpg","http://api.billboard.com/files/media/lunay-jimmy-kimmel-2019-billboard-embed.jpg","http://api.billboard.com/files/media/lunay-jimmy-kimmel-2019-billboard-embed.jpg"];
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
            if (currentDiv != undefined || currentDiv != null && zlidesdiv.length === 0 ) {
            	console.log("testtest");
                var newDiv = window.top.document.createElement("div");
                $(newDiv).addClass("zlides");
                currentDiv.append(newDiv);
                newDiv.innerHTML = `
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

			var zlides = window.top.document.querySelectorAll('.zlides .zlide');
      var currentZlide = 0;
      var x = window.top.document.getElementById("top-article").lastElementChild;
      var readMoreDiv = window.top.document.getElementById("read-more");

      setInterval(nextZlide,5000);
      console.log({urls})
          function nextZlide() {
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
                    titleDiv.innerHTML = firsttitle;
                    readMoreDiv.innerHTML = '<a target="_blank" href="'+urls[0]+'">Read More >></a>'
                }
                if(currentZlide == 1){
                    window.top.document.getElementById("progress-1").classList.remove("not-filled");
                    window.top.document.getElementById("pbar-0").classList.add('filled')    
                    x.innerHTML = `2/5`
                    titleDiv.innerHTML = titles[1];
                    readMoreDiv.innerHTML = '<a href="'+urls[1]+'">Read More >></a>'

                }
                if(currentZlide == 2){
                    window.top.document.getElementById("progress-2").classList.remove("not-filled");
                    window.top.document.getElementById("pbar-1").classList.add('filled')    
                    x.innerHTML = `3/5`
                    titleDiv.innerHTML = titles[2];
                    readMoreDiv.innerHTML = '<a href="'+urls[2]+'">Read More >></a>'

                }                
                if(currentZlide == 3){
                    window.top.document.getElementById("progress-3").classList.remove("not-filled");
                    window.top.document.getElementById("pbar-2").classList.add('filled')   
                    x.innerHTML = `4/5`
                    titleDiv.innerHTML = titles[3];
                    readMoreDiv.innerHTML = '<a href="'+urls[3]+'">Read More >></a>'

                }
                if(currentZlide == 4){
                    window.top.document.getElementById("progress-4").classList.remove("not-filled");
                    window.top.document.getElementById("pbar-3").classList.add('filled')    
                    x.innerHTML = `5/5`
                    titleDiv.innerHTML = titles[4];
                    readMoreDiv.innerHTML = '<a href="'+urls[4]+'">Read More >></a>'

                }
              zlides[currentZlide].className = 'zlide';
              currentZlide = (currentZlide+1)%zlides.length;
              zlides[currentZlide].className = 'zlide showing';
          }
        }
      })

   

</script>	

<img src="%%VIEW_URL_UNESC%%%%CLICK_URL_UNESC%%" style="display:none">

