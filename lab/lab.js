var lab = (function() {
  "use strict";

  var unstableURLs = false,  // Setting this to true will make the server randomly respond with an 500 error.
      baseURL = "http://localhost:3000/chapter/",
      appendURL = unstableURLs ? "/unstable" : "",
      chapterURL = [
        baseURL + "1" + appendURL,
        baseURL + "2" + appendURL,
        baseURL + "3" + appendURL,
        baseURL + "4" + appendURL,
        baseURL + "5" + appendURL,
        baseURL + "6" + appendURL,
        baseURL + "7" + appendURL,
        baseURL + "8" + appendURL,
        baseURL + "9" + appendURL,
        baseURL + "10" + appendURL
    ];
  
  var addToPage = function (chapterText) {
    $("#result").append(chapterText).append("<hr>");
  };
  
  // ===================== 
  // LAB WORK STARTS HERE.  
  // =====================
  
  // Convert this function to return a Promise.
  // The promise should Resolve or Reject (with the appropriate data) based on the request response.
  var get = function (url) {
    var req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = function() {
      if (req.status === 200) {
        // OK
      } else {
        // Fail
      }
    };

    req.onerror = function() {
      // Fail
    };

    req.send();
  };
  
  // All functions below should use the get-function with its Promise!
  
  // Fetch all chapters (in parallell) and add them to the page as soon as possible.
  // The chapters will (very likely) be added out of order.
  var function1 = function () {
    // TODO Implement me!
  };
  
  // Fetch one chapter, add it to the page, then fetch the next chapter.
  // This will add all chapters in order but no parallel requests will be made.
  var function2 = function () {
    // TODO Implement me!
  };
  
  // Fetch all chapters in parallel and wait until all of them has been fetched - then add them to the page.
  // This will add all chapters in the correct order, but not until all of them has been fetched.
  var function3 = function () {
    // TODO Implement me!
  };
  
  // Fetch all chapters in parallel and add them to the page in the correct order as soon as possible.
  var function4 = function () {
    // TODO Implement me!
  };
  
  // ===================
  // LAB WORK ENDS HERE!
  // ===================
  
  var showImage = function (nr) {
    var img = $("<img>").attr("src", nr + ".gif").css("width", "800px");
    $("#result").empty().append(img);
  };
  
  return {
    function1: function () {
      $("#result").empty();
      function1();
    },
    
    function2: function () {
      $("#result").empty();
      function2();
    },
    
    function3: function () {
      $("#result").empty();
      function3();
    },
    
    function4: function () {
      $("#result").empty();
      function4();
    },
    
    showImage: showImage
  };
  
})();