$(function () {
  console.log("index.js loaded ...");
  getRecommendations()
})

// load ajax recommendations
// make a class model
// make custom function on the prototype of the class model

// attached this function to a link or button

function getRecommendations() {
  $.ajax({
    url: 'http://localhost:3000/recommendations.json',
    method: 'get'
    // dataType: 'json'
  }).done(function (response) {

    console.log("[index.js]response: ", response);

    let rec = new Recommendation(response[0])
    // look at javascript .map function to process all items response array

    let recHtmlDisplay = rec.recHTML()

    // append recHtmlDisplay to the DOM
    debugger;
  })
}

class Recommendation {
  constructor(obj) {
    this.title = obj.title
    this.description = obj.description
    this.user_id = obj.user_id
  }
}

Recommendation.prototype.recHTML = function () {
  return (`
    <div>${this.title}</div>
  `)
}


