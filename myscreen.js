var myTemplate = document.getElementById('myTemplate').innerHTML;
var myTemplateInstance = Handlebars.compile(myTemplate);

var results = [
  {},
  {},
];

document.getElementById("displayResults").innerHTML = myTemplateInstance(results);
