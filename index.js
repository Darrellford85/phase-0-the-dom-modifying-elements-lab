// Write your code here!

const element = document.getElementById("main");
// queryslector does not complete task as seen in assessing element video, will try and use element.remove() and element.create() to remove and create as newheader is failing//
element.remove();

const newHeader = document.createElement("h1");
//^//


newHeader.id = "victory";
newHeader.innerHTML = "DarrellSubmit is the champion"
