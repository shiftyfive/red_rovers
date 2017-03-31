
let picArray = [];
let lastPhotoTakenDate;
let proxy = "https://galvanize-cors-proxy.herokuapp.com/"

function getLastPhotoDate () {
  $.ajax({
    method: "GET",
    url: `${proxy}https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2016-1-5&camera=mast&api_key=xcbRk9wwyuts3TVWoW6Yh0SigQ0JcRUegzSAwaZi`,
    success: function(results) {
      lastPhotoTakenDate = results.photos[0].rover.max_date

    },
    error: function(error) {
      console.log("error", error)
    }
  })
}


function appendCarousel (date, camera){
let appendCarousel = new Promise (resolve, reject) {
  $.ajax({
    method: "GET",
    url: `${proxy}https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=xcbRk9wwyuts3TVWoW6Yh0SigQ0JcRUegzSAwaZi`,
    success: function(results) {
      console.log(results);
      return roverObj = results.photos;

    },
    error: function(error) {
      alert("oops it looks like something went wrong ☹️");
    }
    })
  }
}

  appendCarousel.then(function(roverObj){

  })

$('.picture-cards').on('click', 'a', callAjax)

function callAjax(event) {
  event.preventDefault();
  let selectedCamera = $(event.target).attr("id");
  appendCarousel(lastPhotoTakendate, selectedCamera)
};

function photoCall(date, camera) {
  console.log(date);
  console.log(camera);
  for (var i = 0; i < lastSevenDays.length; i++) {
    if (picArray.length === 30) {
      renderImgs();
    } else {
      ajaxRequest(date[i], camera)
    }
  }
};


function renderImgs(roverObj) {
  roverObj.forEach(function (imgSrc){
    <a class="carousel-item" href="#"><img src=`imgSrc`></a>
  })
}
