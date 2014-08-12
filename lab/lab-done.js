var lab = (function() {
  "use strict";
  
  var unstableURLs = true,  // Setting this to true will make the server randomly respond with an 500 error.
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
  // The promise should resolve or reject based on the response from the server.
  var get = function (url) {
    return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
      req.open("GET", url);

      req.onload = function() {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(url);
        }
      };

      req.onerror = function() {
        reject(Error("Network Error"));
      };

      req.send();
    });
  };
  
  var getRetry = function (url) {
    var p = get(url),
        retries = 3;
      
      for (; retries > 0; --retries) {
        p = p.catch(get);
      }
      
      p = p.catch(function (url) {
        return "Failed to get chapter from: " + url;
      });
    
      return p;
  }
  
  // Fetch all chapters (in parallell) and add them to the page as soon as possible.
  // The chapters will be added out of order.
  var function1 = function () {
    chapterURL.map(getRetry).forEach(function (p) { 
      p.then(addToPage, addToPage) 
    });
  };
  
  // Fetch a chapter, add it to the page, then fetch the next chapter.
  // This will add all chapters in order but no parallel requests will be made.
  var function2 = function () {
    chapterURL.reduce(function (acc, url) {
      return acc.then(function () {
        return getRetry(url);
      }).then(addToPage, addToPage);
    }, Promise.resolve());
  };
  
  // Fetch all chapters in parallel but wait until all of them has finished and then add them to the page.
  // This will add all chapters in the correct order, but not until all of them has been fetched.
  var function3 = function () {
    Promise.all(chapterURL.map(getRetry)).then(function (chapterTexts) {
      chapterTexts.forEach(addToPage, addToPage);
    });
  };
  
  // Fetch all chapters in parallel and add them to the page in the correct order as soon as possible.
  var function4 = function () {
    chapterURL.map(getRetry).reduce(function (acc, promise) {
      return acc.then(function () {
        return promise;
      }).then(addToPage, addToPage);
    }, Promise.resolve());
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