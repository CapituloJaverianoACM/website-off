(function (global) {

var dc = {};

var eventsHtml = "snippets/events.html";
var aboutHtml = "snippets/about.html";
var contactHtml = "snippets/contact.html";
var officersHtml = "snippets/officers.html";


// Loads activity page
$ajaxUtils.sendGetRequest(
  eventsHtml,
  function (responseText) {
    document.querySelector(".page-content")
      .innerHTML = responseText;
  },
  false
);

// Loads about page
dc.loadAbout = function() {
  $ajaxUtils.sendGetRequest(
    aboutHtml,
    function (responseText) {
      document.querySelector(".page-content")
        .innerHTML = responseText;
    },
    false
  );
  deselctAll();
  document.getElementById("aboutId").className = "selected";
};

// Loads contact page
dc.loadContact = function() {
  $ajaxUtils.sendGetRequest(
    contactHtml,
    function (responseText) {
      document.querySelector(".page-content")
        .innerHTML = responseText;
    },
    false
  );
  deselctAll();
  document.getElementById("contId").className = "selected";
};

// Loads officers page
dc.loadOfficers = function() {
  $ajaxUtils.sendGetRequest(
    officersHtml,
    function (responseText) {
      document.querySelector(".page-content")
        .innerHTML = responseText;
    },
    false
  );
  deselctAll();
  document.getElementById("officersId").className = "selected";
};

dc.foo = function() {
  console.log("Hello Sebas");
  emailjs.send("gmail", "template_nOdqYSC1", {
          name: "James",
          notes: "Check this out!",
          reply_email: 'john@doe.com',
          message: 'This is awesome!'
      })
      .then(function(response) {
          console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
      }, function(err) {
          console.log("FAILED. error=", err);
      });
  console.log("Bye Sebas");
};

function deselctAll() {
  document.getElementById("homeId").className = "";
  document.getElementById("aboutId").className = "";
  document.getElementById("contId").className = "";
  document.getElementById("officersId").className = "";
}

global.$dc = dc;

})(window);
