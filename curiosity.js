
var roverObj;
var imgArr = [];

// function imgDimensionsCheck(img) {
//   var $container = $(".img-check")
//   var $myImg = $(`<img src='${img}'/>`)
//   $container.prepend($myImg)
//   setTimeout(function() {
//     return $myImg[0].width
//
//   }, 200)
// }

function render(arr) {
  if (arr.length === 0) {
    alert("oops it looks like there were no photos of note that day sorry :(")
  } else {
    for (let value of arr) {
      console.log(value)
      $(".carousel.carousel-slider").append(`<a class="carousel-item" href=${value}><img src=${value}></a>`)
    }
  }
}

function getPhotosDay(date, camera) {
  $.ajax({
    method: "GET",
    url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=xcbRk9wwyuts3TVWoW6Yh0SigQ0JcRUegzSAwaZi`,
    success: function(results) {
      console.log(results)
      roverObj = results.photos

      for (var i = 0; i < 4; i++) {
        if ( i < 4) {
          console.log(roverObj[i]["img_src"])
          $(".row.img-row1").append(`<div class="col s12 m3 responsive-img"><img style="max-height:220px;max-width:257px;padding:5px" src='${roverObj[i]["img_src"]}'></div>`)
        } else {
          return roverObj;
        }
      }
      return roverObj;
    },
    error: function(error) {
      console.error(error);
      alert("Sorry it doesn't look like any photos were taken with this camera on that day")
    }
  })
};

function notify() {
  alert( "clicked" );
}
$( ".card-action a" ).on( "click", getPhotosDay("2016-01-02", "mast" ));

// $("mast-button").click(getPhotosDay("2016-1-1", "mast"))



//
// function getMissionManifest() {
//   $.ajax({
//     method: "GET",
//     url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-01-05&camera=mast&api_key=xcbRk9wwyuts3TVWoW6Yh0SigQ0JcRUegzSAwaZi",
//     success: function(result) {
//       console.log("done: ", result)
//       manifestObj = result["photos"][0]["rover"];
//         let $roverManifest = (`
//           <li>Launch Date: ${manifestObj["launch_date"]}</li>
//           <li>
//           <li>Landing Date: ${"landing_date"}`)
//       }
//     },
//
//     error: function(error) {
//       console.log("error: ", result)
//     }
//   })
//   $("#curiosity-manifest-collection").append($roverManifest);
// }
//
