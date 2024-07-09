// clases para libros y usuarios 

class Book {
  constructor(Id, Titulo, Autor, Ubicacion, Disponible) {
    this.Id = Id;
    this.Titulo = Titulo;
    this.Autor = Autor;
    this.Ubicacion = Ubicacion;
    this.Disponible = Disponible;
  }
  toStringArray() {
    return "[ " + this.Id + ", " + this.Titulo + ", " + this.Autor + ", " + this.Ubicacion + this.Disponible + " ]"; 
  }
}

class User {
  constructor(Id, NomApe, Direccion, Contacto) {
    this.Id        = Id;       
    this.NomApe    = NomApe;   
    this.Direccion = Direccion;
    this.Contacto  = Contacto; 
  }
  toString() {
    return "[ " + this.Id + ", " + this.NomApe + ", " + this.Direccion + ", " + this.Contacto + " ]"; 
  }
}

// estas son las funciones del (Baja), upd (modificacion), add (Alta)
// sirven para cualquier coleccion de datos, 
// para que funcione la clave de todas las clases debe ser .Id

function del(tabObj, tipoObj, clave) {
  var respuesta = {"msg": "", "sts": 0};
  var idx = tabObj.findIndex(e => e.Id == clave);
  var unObj;
  if (idx > -1) {
    unObj = tabObj[idx];
    tabObj.splice(idx, 1);
    respuesta.msg = "Baja exitosa de " + tipoObj + ": " + unObj.toString();
    respuesta.sts = 0;
  } else {
    respuesta.msg = "No existe " + tipoObj + " con clave: " + clave;
    respuesta.sts = 1;
  }
  return respuesta;
}

function upd(tabObj, tipoObj, clase) {
  var respuesta = {"msg": "", "sts": 0};
  var idx = tabObj.findIndex(e => e.Id == clase.Id);
  if (idx > -1) {
    tabObj[idx] = clase;
    respuesta.msg = "Modificación exitosa de " + tipoObj + ": " + clase.toString();
    respuesta.sts = 0;
  } else {
    respuesta.msg = "No existe " + tipoObj + " con clave: " + clase.Id;
    respuesta.sts = 1;
  }
  return respuesta;
}


function add(tabObj, tipoObj, clase) {
  var respuesta = {"msg": "", "sts": 0};
  var idx = tabObj.findIndex(e => e.Id == clase.Id);
  var unObj;
  if (idx < 0) {
    tabObj.splice(tabObj.length, 0, clase);
    respuesta.msg = "Alta exitosa de " + tipoObj + ": " + clase.toString();
    respuesta.sts = 0;
  } else {
    unObj = tabObj[idx];
    respuesta.msg = "Ya existe " + tipoObj + ": " + unObj.toString();
    respuesta.sts = 1;
  }
  return respuesta;
}

// definimos las colecciones como Arrays y la variable que va a contener una clase

var Books = [], unBook, Users = [], unUser;

// así creamos objetos y agregamos el objeto a la coleccion

unBook = new Book(1, "Papillon", "Hery Carriere", "Ubicacion 1", true);
Books.push(unBook);

unUser = new User(2, "Juan Perez", "Direccion 28", "Contacto 28");
Users.push(unUser);

// así usamos las funciones add, upd, del
// el primer argumento es la coleccion el último es el objeto a agregar o modificar, 
// en la baja solamente va la clave que se quiere borrar 

add(Books, "Book", unBook);
upd(Books, "Book", unBook);
del(Books, "Book", 1);

add(Users, "User", unUser);
upd(Users, "User", unUser);
del(Users, "User", 2);

class Book {
  constructor(Id, Titulo, Autor, Ubicacion, Disponible) {
    this.Id = Id;
    this.Titulo = Titulo;
    this.Autor = Autor;
    this.Ubicacion = Ubicacion;
    this.Disponible = Disponible;
  }
  toStringJSON() {
    return "{ " + this.Id + ", " + this.Titulo + ", " + this.Autor + ", " + this.Ubicacion + ", " + this.Disponible + " }"; 
  }
  toPublish() {
    return '&lt;div class="row"&gt;&lt;div class="column"&gt;' + this.Id + '&lt;/div&gt;&lt;div class="column"&gt;' + this.Titulo + '&lt;/div&gt;&lt;div class="column"&gt;' + this.Ubicacion+ '&lt;/div&gt;&lt;/div&gt;'; 
  }


<script>

var unidad = '&lt;div class="row"&gt;&lt;div class="column"&gt;varId&lt;/div&gt;&lt;div class="column"&gt;varTitulo&lt;/div&gt;&lt;div class="column"&gt;varUbicacion&lt;/div&gt;&lt;/div&gt;'

var salida = "";



class Book {
  constructor(Id, Titulo, Autor, Ubicacion, Disponible) {
    this.Id = Id;
    this.Titulo = Titulo;
    this.Autor = Autor;
    this.Ubicacion = Ubicacion;
    this.Disponible = Disponible;
  }
  toStringJSON() {
    return "{ " + this.Id + ", " + this.Titulo + ", " + this.Autor + ", " + this.Ubicacion + ", " + this.Disponible + " }"; 
  }
  toPublish() {
    salida = unidad.replace("varId", this.Id);
    salida = salida.replace("varTitulo", this.Titulo);
    salida = salida.replace("varUbicacion", this.Ubicacion);
    return salida; 
  }

  

}

mybook = new Book(1,"Titulo", "Autor", "Ubicacion", true);

//const obj = JSON.parse(text);
document.getElementById("demo").innerHTML = "<pre>" + mybook.toPublish() + "</pre>";

false

</script>




// prueba de delete


<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h2>prueba clases y colecciones</h2>
<p id="demo">This is a paragraph.</p>
<p id="demo1">This is a paragraph.</p>
<p id="demo2">This is a paragraph.</p>
<script>

function del(tabObj, tipoObj, clave) {
  var respuesta = {"msg": "", "sts": 0};
  var idx = tabObj.findIndex(e => e.Id == clave);
  var unObj;
  if (idx > -1) {
    unObj = tabObj[idx];
    tabObj.splice(idx, 1);
    respuesta.msg = "Baja exitosa de " + tipoObj + ": " + unObj.toStringJSON();
    respuesta.sts = 0;
  } else {
    respuesta.msg = "No existe " + tipoObj + " con clave: " + clave;
    respuesta.sts = 1;
  }
  return respuesta;
}



var Books = [];

class Book {
  constructor(Id, Titulo, Autor, Ubicacion, Disponible) {
    this.Id = Id;
    this.Titulo = Titulo;
    this.Autor = Autor;
    this.Ubicacion = Ubicacion;
    this.Disponible = Disponible;
  }
  toStringJSON() {
    return "{ " + this.Id + ", " + this.Titulo + ", " + this.Autor + ", " + this.Ubicacion + "," + this.Disponible + " }"; 
  }
}

unBook = new Book(1, "Papillon", "Hery Carriere", "Ubicacion 1", true);
Books.push(unBook);
unBook = new Book(2, "Papillon 2", "Hery Carriere 2", "Ubicacion 2", true);
Books.push(unBook);
unBook = new Book(4, "Papillon 4", "Hery Carriere 4", "Ubicacion 4", true);
Books.push(unBook);
unBook = new Book(8, "Papillon 8", "Hery Carriere 8", "Ubicacion 8", true);
Books.push(unBook);

document.getElementById("demo").innerHTML = "<pre>" + JSON.stringify(Books, null, 2) + "</pre>";

var resultado = del(Books, "Book", 4);

document.getElementById("demo1").innerHTML = "<pre>" + JSON.stringify(resultado, null, 2) + "</pre>";

document.getElementById("demo2").innerHTML = "<pre>" + JSON.stringify(Books, null, 2) + "</pre>";




</script>

<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h2>prueba clases y colecciones</h2>
<p id="demo">This is a paragraph.</p>
<p id="demo1">This is a paragraph.</p>
<p id="demo2">This is a paragraph.</p>
<script>

function upd(tabObj, tipoObj, clase) {
  var respuesta = {"msg": "", "sts": 0};
  var idx = tabObj.findIndex(e => e.Id == clase.Id);
  if (idx > -1) {
    tabObj[idx] = clase;
    respuesta.msg = "Modificación exitosa de " + tipoObj + ": " + clase.toStringJSON();
    respuesta.sts = 0;
  } else {
    respuesta.msg = "No existe " + tipoObj + " con clave: " + clase.Id;
    respuesta.sts = 1;
  }
  return respuesta;
}




var Books = [];

class Book {
  constructor(Id, Titulo, Autor, Ubicacion, Disponible) {
    this.Id = Id;
    this.Titulo = Titulo;
    this.Autor = Autor;
    this.Ubicacion = Ubicacion;
    this.Disponible = Disponible;
  }
  toStringJSON() {
    return "{ " + this.Id + ", " + this.Titulo + ", " + this.Autor + ", " + this.Ubicacion + ", " + this.Disponible + " }"; 
  }
}

unBook = new Book(1, "Papillon", "Hery Carriere", "Ubicacion 1", true);
Books.push(unBook);
unBook = new Book(2, "Papillon 2", "Hery Carriere 2", "Ubicacion 2", true);
Books.push(unBook);
unBook = new Book(4, "Papillon 4", "Hery Carriere 4", "Ubicacion 4", true);
Books.push(unBook);

document.getElementById("demo").innerHTML = "<pre>" + JSON.stringify(Books, null, 2) + "</pre>";

unBook = new Book(2, "Papillon 11", "Hery Carriere 11", "Ubicacion 11", true);

var resultado = upd(Books, "Book", unBook);

document.getElementById("demo1").innerHTML = "<pre>" + JSON.stringify(resultado, null, 2) + "</pre>";

document.getElementById("demo2").innerHTML = "<pre>" + JSON.stringify(Books, null, 2) + "</pre>";



<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p id="demo">This is a paragraph.</p>

<script>
// Selects the input file from the HTML document
//const fileInput = document.getElementById("file-input");

// Creates an XMLHttpRequest instance
const xhr = new XMLHttpRequest();

// We set up the callback to handle the server response
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // The file has been uploaded successfully
    console.log("File successfully uploaded!");
  }
};

// We open the connection to the server
xhr.open("POST", "/upload-file", true);

// We set the "Content-Type" header to "multipart/form-data"
xhr.setRequestHeader("Content-Type", "multipart/form-data");

// We create a FormData object and add the selected file
const formData = new FormData();
formData.append("info1", "identificacion");
formData.append("Info2", "identificacion 2");

                object= {}
//                formData = new FormData(event.target);
                formData.forEach((value, key) => object[key] = value);
                alert('got here');
                var txt = JSON.stringify(object, null, 2);
                alert(txt)


// We send the request to the server with the send() method
//xhr.send(formData);



//document.getElementById("demo").innerHTML = JSON.stringify( $(formData).serializeArray());

//JSON.stringify($('#frmSearch').serializeObject())
</script>
</body>
</html>




<!DOCTYPE html>
<html>
<body>

<h1>This is a Heading</h1>
<p id="demo">This is a paragraph.</p>

<p>Click on the "Choose File" button to upload a file:</p>

<form   action="">
  <input id="file-input" type="file" id="myFile" name="filename">
  <input type="submit" onclick="mostrar();">
</form>

<script>

function mostrar(){
	var formData = new FormData();
	var fileInput = document.getElementById("file-input");
    
	formData.append("info", "identificacion");
	formData.append("file", fileInput.files[0]);
    document.getElementById("demo").innerHTML = formData.get("file").name;
    var object= {};
    formData.forEach((value, key) => object[key] = value);
    alert('got here');
    var txt = JSON.stringify(object, null, 2);
    alert(txt)
}
</script>

</body>
</html>



<!DOCTYPE html>
<html>
<head>
<style>
div.row {
  display: flex;
}

div.column {
  flex: 50%;
  padding: 10px;
}

</style>
</head>
<body>
<h1>The Element Object</h1>
<h2>The cloneNode() Method</h2>

<button onclick="myFunction()">Copy</button>
<p>Click "Copy" to copy an item from one list to another.</p>

<ul id="myList1"><li>Coffee</li><li>Tea</li></ul>
<ul id="myList2"><li>Water</li><li>Milk</li></ul>

<p>If you change the <b>deep</b> parameter to false, only an empty LI element will be cloned.</p>


        <h1 class="titulo">Consultas: Libros Disponibles y Libros Prestados</h1>
        <div class="row">
	        <div class="column">
                <section id="Disponibles">
    <p style="text-align:center; font-weight:bold;">Libros Disponibles</p>
				    <article>
                        <div class="row">
	                        <div class="column">
							    Código 
					        </div>
	                        <div class="column">
							    Título
					        </div>
	                        <div class="column">
							    Ubicación
					        </div>
                        </div> 
					</article>
                </section>
		    </div>
			<div class="column">
                <section id="Prestados">
                <p style="text-align:center; font-weight:bold;">Libros Prestados</p>
				    <article>
                        <div class="row">
	                        <div class="column">
							    Código
					        </div>
	                        <div class="column">
							    Título
					        </div>
	                        <div class="column">
							    Ubicación
					        </div>
                        </div> 
					</article>
                </section>
		    </div>
		</div>


<script>
function myFunction() {
  const nodoDisponibles = document.getElementById("Disponibles");
  const collection = nodoDisponibles.children[1].children[0].children;
let text = "";
for (let i = 0; i < collection.length; i++) {
  text += collection[i].tagName + " - " + collection[i].innerHTML + "<br>";
}
alert(text);
  const nodoArtDisp = nodoDisponibles.children[1];
  const clone = nodoArtDisp.children[0].cloneNode(true);
  
  clone.children[0].innerText = "xx";
  clone.children[1].innerText = "yy";
  clone.children[2].innerText = "zz";
/*
alert(clone.children[0].innerText + " " + clone.children[1].innerText + " " + clone.children[2].innerText); */
  nodoArtDisp.appendChild(clone);
}

function listSection(Section) {
  const nodoSection = document.getElementById(Section);
  const nodoArticle = nodoSection.children[1];
  const nodoBook = nodoArticle.children[0].cloneNode(true);
  
  nodoBook.children[0].innerText = "xx";
  nodoBook.children[1].innerText = "yy";
  nodoBook.children[2].innerText = "zz";

  nodoArticle.appendChild(clone);
}



</script>

</body>
</html>
