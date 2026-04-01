# Ejercicio: Creación de Elementos con JavaScript (DOM + Eventos)

Este ejercicio te guía paso a paso para practicar la **manipulación del DOM** mediante JavaScript: creación de elementos con `document.createElement`, inserción con `appendChild`, registro de eventos con `addEventListener`, y modificación de clases y atributos desde código.

---

## 1) Requisitos previos

- Un navegador web moderno (Chrome, Edge, Firefox, Safari).
- Un editor de código (VS Code, Sublime, etc.).
- Git instalado en tu máquina.

## 2) Archivos del proyecto

- `index.html` → Página web principal. Contiene la estructura base que será modificada dinámicamente.
- `js/cards.js` → Script con la lógica de creación de tarjetas y manejo de eventos.
- `css/` → Estilos del proyecto.
- `img/` → Recursos de imagen.
- `README.md` → Este documento con el tutorial paso a paso.

Para ver el resultado, **abre `index.html` en tu navegador**.

---

## 3) Objetivo de aprendizaje

- Comprender cómo JavaScript puede generar contenido HTML dinámicamente.
- Practicar `document.createElement`, `appendChild` y `addEventListener`.
- Identificar el objeto `document` y su rol en el DOM.
- Manipular clases CSS y atributos de elementos desde JS.
- Usar parámetros en funciones para pasar datos entre eventos y el DOM.

---

## 4) Paso a paso

### Paso 1 — Clonar el repositorio y explorar el proyecto

Clona el repositorio en tu máquina local:

```
git clone "{url}"
```

1. Abre `index.html` en tu navegador.
2. Revisa el código fuente en VS Code.
3. Responde en un archivo `entregable.txt`: ¿por qué hay contenido en el `body` al abrir el archivo en el navegador, pero ese mismo contenido **no aparece** en el código fuente de VS Code?

---

### Paso 2 — Analizar el script `js/cards.js`

1. Abre `js/cards.js` y localiza esta línea cerca del final del archivo:

```js
buttonBtn.addEventListener("click", createCard);
```

2. Responde en `entregable.txt`:
   - ¿`createCard` es una función recursiva? Justifica tu respuesta.
   - ¿Qué representa el valor `document` en JavaScript?
   - ¿Qué hace la función `createElement`?
   - ¿Qué hace la función `appendChild`?

---

### Paso 3 — Modificar el `addEventListener` y observar el evento

1. Reemplaza el listener actual por la siguiente versión:

```js
buttonBtn.addEventListener("click", function (e) {
    createCard();
    e.target.disabled = true;
    e.target.classList.remove("btn-outline-success");
    e.target.classList.add("btn-outline-danger");
    e.target.innerText = "Clicked";
});
```

2. Recarga el navegador y haz clic en el botón. Observa qué ocurre.
3. Agrega la siguiente línea dentro de la función y revisa la consola del navegador:

```js
console.log(e);
```

4. Responde en `entregable.txt`:
   - ¿Qué es la variable `e`?
   - ¿Cómo es que el botón cambia de color y se deshabilita?

---

### Paso 4 — Agregar un campo de texto y pasar datos a la tarjeta

1. Agrega las siguientes líneas **antes** del comentario que indica dónde poner etiquetas dentro de etiquetas:

```js
// <label class="form-label">
labelFormLabel = document.createElement("label");
labelFormLabel.classList.add("form-label");
labelFormLabel.innerText = "new item title";

// <input type="text" class="form-control mb-4">
inputFormControl = document.createElement("input");
inputFormControl.classList.add("form-control", "mb-4");
inputFormControl.type = "text";
```

2. Recarga el navegador. Responde en `entregable.txt`: ¿por qué aún no hay cambios visibles?
3. Agrega las siguientes líneas **después** de `divCardBody.appendChild(buttonBtn);`:

```js
divCardBody.appendChild(labelFormLabel);
divCardBody.appendChild(inputFormControl);
```

4. Modifica el listener para que el valor del input se pase como argumento a `createCard`:

```js
buttonBtn.addEventListener("click", function (e, innerText = inputFormControl.value) {
    createCard(innerText);
    e.target.disabled = true;
    e.target.classList.remove("btn-outline-success");
    e.target.classList.add("btn-outline-danger");
    e.target.innerText = "Clicked";
});
```

5. Agrega el parámetro correspondiente en la función `createCard()` y úsalo como valor de `innerText` en el elemento `h5CardTitle`, de modo que el texto del input se convierta en el título de la siguiente tarjeta creada.

---

### Paso 5 — Subir los cambios al repositorio

1. Guarda todos los cambios realizados.
2. Agrega los archivos modificados al área de staging:

```
git add entregable.txt
git add js/cards.js
```

3. Crea una rama llamada `entregable`:

```
git branch entregable
```

4. Cámbiate a esa rama:

```
git checkout entregable
```

5. Realiza el commit y el push:

```
git commit -m "entregable"
git push origin entregable
```

6. Abre el repositorio en GitHub y solicita un **Pull Request** desde la rama `entregable` hacia `main`.
