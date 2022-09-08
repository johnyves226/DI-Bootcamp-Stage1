let newDiv = document.getElementById("elem")

//getAttribute('name attribute')
newDiv.getAttribute('about'); // return 'Elephant'

//setAttribute(name attribute, value attribute)
newDiv.setAttribute('style', "color:blue;");

//you get --> <div id="elem" about="Elephant" style="color:blue" ></div>

//loop through the attributes of an element
for (let attr of elem.attributes) { // Lists all attributes
    alert(attr.name + '=' + attr.value);
}

let img = document.getElementsByTagName("img")[0]
img.src = "test.jpg";
img.style.height = '20%'
img.style.width = '100%'