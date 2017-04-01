
let picArray = [];
let lastPhotoTakenDate;
let proxy = "https://galvanize-cors-proxy.herokuapp.com/"

function appendCarousel (camera){
  let promise = $.ajax({
    method: "GET",
    url: `${proxy}https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2016-1-5&camera=${camera}&api_key=xcbRk9wwyuts3TVWoW6Yh0SigQ0JcRUegzSAwaZi`,
    success: function(results) {
      roverObj = results.photos;

    },
    error: function(error) {
      alert("oops it looks like something went wrong ☹️");
    }
  })
  promise.done(successfunction);

}

function successfunction(){
  $(".carousel").empty();
  roverObj.forEach(function(picture){
    $(".carousel").append(`<a class="carousel-item" href="#"><img src=${picture.img_src}></a>`)
  })
  $('.carousel').carousel();
}

$('.picture-cards').on('click', 'a', callAjax)

function callAjax(event) {
  event.preventDefault();
  let selectedCamera = $(event.target).attr("id");
  appendCarousel(selectedCamera);
};
