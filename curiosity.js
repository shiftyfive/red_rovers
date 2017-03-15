// moment.calendarFormat = function(myMoment, now) {
//     var diff = myMoment.diff(now, 'days', true);
//     var nextMonth = now.clone().add(1, 'month');
//
//     var retVal = diff < -6 ? 'sameElse' :
//         diff < -1 ? 'YYYY-MM-DD' :
//         diff < 0 ? 'YYYY-MM-DD' :
//         diff < 1 ? 'YYYY-MM-DD' :
//         diff < 2 ? 'YYYY-MM-DD' :
//         diff < 7 ? 'YYYY-MM-DD' :
//         // introduce thisMonth and nextMonth
//         (myMoment.month() === now.month() && myMoment.year() === now.year()) ? 'thisMonth' :
//         (nextMonth.month() === myMoment.month() && nextMonth.year() === myMoment.year()) ? 'nextMonth' : 'sameElse';
//     return retVal;
// };

var manifestObj;

var lastSevenDays = [];

(function() {
    let dateHolder;
    for (let i = 0; i < 7; i++) {
        dateHolder = moment().subtract(i, 'days').format("YYYY-MM-DD");
        lastSevenDays.push(dateHolder)
    }

}());

function shuffle(array) { //downloaded this off stack overflow
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function imgDimensionsCheck(img){
  $("#curiosity-img-check").html(`<img hidden id="check-img" src=${img}>`);
  return document.getElementById("check-img").naturalWidth;
}

var imgArr = [];

function renderImgs() {

}

function getPhotosDay(date, camera) {
    $.ajax({
        method: "GET",
        url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=xcbRk9wwyuts3TVWoW6Yh0SigQ0JcRUegzSAwaZi`,
        success: function(results) {
            console.log("Done", results);
            var roverObj = results;
            shuffle(roverObj["photos"])
            roverObj["photos"].forEach(function(element) {
                if (imgArr.length < 25) {
                  var imgWidth = imgDimensionsCheck(element["img_src"])
                  if(imgWidth > 300){
                    imgArr.push(element["img_src"]);
                  }
                } else {
                  return imgArr;
                }
            })
        },

        error: function(error) {
            console.log("Error: ", error)
        }
    })
};


function getPhotosWeek(dates, camera) {
  var accArr = [];
  for (var i = 0; i < dates.length; i++) {
    $.ajax({
    method: "GET",
    url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${dates[i]}&camera=${camera}&api_key=xcbRk9wwyuts3TVWoW6Yh0SigQ0JcRUegzSAwaZi`,
    success: function(results) {
      console.log("done: ", results)
      var roverObj = results
      shuffle(roverObj["photos"])
      accArr = accArr.concat(roverObj["photos"])
    },

    error: function(error) {
      console.log("Error: ", error)
      }
    })
  }
};

function getMissionManifest() {
  $.ajax({
    method: "GET",
    url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-01-05&camera=mast&api_key=xcbRk9wwyuts3TVWoW6Yh0SigQ0JcRUegzSAwaZi",
    success: function(result) {
      console.log("done: ", result)
      manifestObj = result["photos"][0]["rover"];
        let $roverManifest = (`
          <li>Launch Date: ${manifestObj["launch_date"]}</li>
          <li>
          <li>Landing Date: ${"landing_date"}`)
      }
    },

    error: function(error) {
      console.log("error: ", result)
    }
  })
  $("#curiosity-manifest-collection").append($roverManifest);
}

getMissionManifest();

// function getPhotosWeek(lastWeekArr) {
//     let roverPicArr =
//
//         $.ajax({
//             method: "GET",
//             url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-1-3&camera=mast&api_key=xcbRk9wwyuts3TVWoW6Yh0SigQ0JcRUegzSAwaZi",
//             success: function(results) {
//                 console.log("Done", results);
//                 pictures = results
//             },
//
//             error: function(error) {
//                 console.log("Error: ", error)
//             }
//         });
