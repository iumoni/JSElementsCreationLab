# Creación de elementos con JS

Este repositorio tiene como objetivo revisar y comprender el llamado de elementos, listeners y la modificación de HTML mediante JS

Escribe en un archivo de texto llamado entregable.txt las respuestas a las preguntas del laboratrorio

## Paso1

Clona el repositorio en tu local
```cmd
git clone "{url}"
```

1. Abre en un navegador el archivo index.html
2. Revisa el código fuente en VS Code
3. Describe en el archivo entregable.txt por qué hay contenido en el body al revisar en el navegador web pero en vs code no 

## Paso2

1. Revisa el documento js/cards.js y revisa el contenido y ubica casi al final del archivo esta línea de código
```js
buttonBtn.addEventListener("click",createCard);
```
2. Responde en el archivo entregable.txt createCard ¿es una función recursiva?
3. Analiza el código y si hace falta investiga para responder en entregable.txt ¿qué es el valor document?
4. Responde en entregable.txt ¿qué hace la función createElement?
4. Responde en entregable.txt ¿qué hace la función appendChild?

## paso3
1. Modifica el llamado de addEvent listener de la siguiente manera:
```js
buttonBtn.addEventListener("click",function (e) {
    createCard();
    e.target.disabled=true;
    e.target.classList.remove("btn-outline-success");
    e.target.classList.add("btn-outline-danger")
    e.target.innerText= "Clicked" ;
});
```
2. Visualiza en el navegador lo que ocurre al agregar un nuevo elemento
3. agrega en la función la siguiente linea y en el navegador revisa en la consola el resultado y describe en entregable.txt qué es la variable e
```js
console.log(e);
```
4. explica cómo es que cambia de color el botón y cómo se deshabilita en entregable.txt

## paso4 

1. Agrega las siguientes líneas de código antes del comentario de poner etiquetas dentro de etiquetas

```js
// <label class="form-label">
labelFormLabel= document.createElement("label");
labelFormLabel.classList.add("form-label")
labelFormLabel.innerText="new item title" ;

//<input type="text" class="form-control mb-4">
inputFormControl=document.createElement("input");
inputFormControl.classList.add("form-control","mb-4")
inputFormControl.type="text";
```
2. Carga nuevamente el navegador web y responde en entregable.txt ¿por qué no hay cambios?
3. agraga las siguientes lineas después de ```divCardBody.appendChild(buttonBtn);```

```js
divCardBody.appendChild(labelFormLabel);
divCardBody.appendChild(inputFormControl);
```
4. Cambia la función nuevamente para que se parezca a esta
```js
buttonBtn.addEventListener("click",function (e,innerText=inputFormControl.value) {
    createCard(innerText);
    e.target.disabled=true;
    e.target.classList.remove("btn-outline-success");
    e.target.classList.add("btn-outline-danger")
    e.target.innerText= "Clicked" ;
});
```
5. Queremos que el input pase a ser el título de la siguiente card creada, para eso requerimos pasarlo como parametro en la función createCard(), agrega el parametro y agrega el título en el innerText de h5CardTitle

## Paso5
1. Guarda los cambios
2. Agrega los cambios a tu repositorio junto al archivo entregable.txt
``` git add entreganle.txt ```
``` git add js/card.js ```
3. Haz una rama llamada entregable
``` git branch entregable ```
4. Cambiate a la rama recién creada
``` git checkout entregable ```
5. Realza un push sobre la rama
``` git commit -m "entregable" ```
``` git push origin entregable ```
6. solicita un pullrequest en github