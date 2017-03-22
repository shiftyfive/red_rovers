$(document).ready(function() {
  var roverObj;
  var imgArr = [];

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


  let photoCall = function(date, camera) {
    console.log('here man');
    $.ajax({
      method: "GET",
      url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=xcbRk9wwyuts3TVWoW6Yh0SigQ0JcRUegzSAwaZi`,
      success: function(results) {
        console.log(results)
        roverObj = results.photos

      },
      error: function(error) {
        console.error(error);
        alert("Sorry it doesn't look like any photos were taken with this camera on that day")
      }
    })
  };

  $("#mast").on('click', function (e) {
    e.preventDefault()
    photoCall('2016-01-02', 'mast')
  });

  $("#chemcam").on('click', function (e) {
    e.preventDefault()
    photoCall('2016-01-02', 'chemcam')
  });

  $("#fhaz").on('click', function (e) {
    e.preventDefault()
    photoCall('2016-01-02', 'fhaz')
  });

  $("#rhaz").on('click', function (e) {
    e.preventDefault()
    photoCall('2016-01-02', 'rhaz')
  });

  $("#navcam").on('click', function (e) {
    e.preventDefault()
    photoCall('2016-01-02', 'navcam')
  });

});
