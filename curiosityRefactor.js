//$(document).ready(function() {

  let $imageToBeTested

  let picArray = [];

  let lastSevenDays = [];

  (function() {
    function getDates(startDate) {
      let dayToPush;
      for (var i = 0; i < 7; i++) {
        dayToPush = moment().subtract(i, "days").format("YYYY-MM-DD");
        lastSevenDays.push(dayToPush);
      }
    }
  });

  function renderImgCheck(img) {
    document.getElementById("img-to-check").src=`${img.img_url}`;

    img.onload = function() {
      console.log('image loaded');
      var width    = img.Width;
      console.log(width);
    };

    console.log('post load call');
  }

  function collectImgs (arr) {
    for (var i = 0; i < 30; i++) {
      picArray.push(arr[i]);
    }
  }
//
//   let photoCall = function(date, camera) {
//     $.ajax({
//       method: "GET",
//       url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=xcbRk9wwyuts3TVWoW6Yh0SigQ0JcRUegzSAwaZi`,
//       success: function(results) {
//         console.log("Success, ", results);
//
//         roverObj = results.photos;
//
//       error: function(error) {
//         photoCall(date[i], camera)
//       }
//     })
//   }
// }


function cool_function(event){
    alert(event.data.param1);
}

$("picButton").click({param1: this.id}, cool_function)


//});
