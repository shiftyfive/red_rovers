


let picArray = [];

let lastSevenDays = [];

function getDates(startDate) {
  let dayToPush;
  for (var i = 0; i < 7; i++) {
    dayToPush = moment().subtract(i, "days").format("YYYY-MM-DD");
    lastSevenDays.push(dayToPush);
  }
};

function collectImgs(arr) {
  for (var i = 0; i < 30; i++) {
    picArray.push(arr[i]);
  }
};


function ajaxRequest(date, camera) {
  $.ajax({
    method: "GET",
    url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=xcbRk9wwyuts3TVWoW6Yh0SigQ0JcRUegzSAwaZi`,
    success: function(results) {
      console.log(results);
      roverObj = results.photos;

      collectImgs(roverObj);

    },
    error: function(error) {
      console.error(error);
    }
  })
};


$('.picture-cards').on('click', 'a', callAjax)

function callAjax(event) {
  event.preventDefault();
  let selectedCamera = $(event.target).attr("id");
  photoCall(lastSevenDays, selectedCamera)
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
