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
};

global.$dc = dc;

})(window);
