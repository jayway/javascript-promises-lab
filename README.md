Javascript Promises Lab
=======================
[Promise documentation on Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). 

This lab requires Node.JS and NPM.

Install dependencies by running:
```bash
npm install
```

Start the webserver by running:
```bash
node app.js
```

This will start a webserver which will listen to requests on port 3000 and respond with 10 different chapters on 10 URLs. Visit http://localhost:3000 to run the lab code and see examples of the expected results. The goal of the lab is to asynchronously fetch the 10 different chapters and present the whole book for the user. The webserver will delay each request with a random amount of time in the interval 0 - 5 seconds. 

The code for the lab should be written in _lab/lab.js_ and is executed when visiting _http://localhost:3000_. The lab consists of converting a function _get_ to return a native browser Promise which should resolve or reject based on the response from the request. 

When the _get_-function is working properly, four functions should be implemented using it. These four functions should perform 10 requests (using the _get_-function) and use the 10 returned promises in four different ways. You can see GIF-images of the expected results of this by going to localhost:3000 and click the _Expected X_-buttons.

The functions should work as follows:

1. Fetch all chapters (in parallell) and add them to the page as soon as possible.
   The chapters will (very likely) be added out of order.

2. Fetch one chapter, add it to the page, then fetch the next chapter.
   This will add all chapters in order but no parallel requests will be made.

3. Fetch all chapters in parallel and wait until all of them has been fetched - then add them to the page.
   This will add all chapters in the correct order, but not until all of them has been fetched.

4. Fetch all chapters in parallel and add them to the page in the correct order as soon as possible.

These four functions can be called by going to localhost:3000 and click the _Function X_-button. Note that if you click a button several times or click one button before the previous requests has completed, then they will interfere with each other and cause weird results! Do a refresh if you're impatient.

When this is done, you may change the variable _unstableURLs_ to true in _lab/lab.js_. This will cause the webserver to randomly cause a failure (with 50% probability) and respond with a HTTP status code 500. You may then change your four solutions to handle this failure by for example retry the same request up to three times and then give up and notify the user.
