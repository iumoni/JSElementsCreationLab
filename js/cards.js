body = document.getElementById("mainBody");
count = 1;

function createCard(Holi) {
   
    let cardTitleText = Holi || count;

    // <div class="col....">
    let divCol = document.createElement("div");
    divCol.classList.add("col-12", "col-md-4", "col-xl-3");

    // <div class="card">
    let divCard = document.createElement("div");
    divCard.classList.add("card", "mb-4");

    // <div class="card-body">
    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    // <h5 class="card-title">
    let h5CardTitle = document.createElement("h5");
    h5CardTitle.classList.add("card-title");
    h5CardTitle.innerText = cardTitleText;

    // <button class="btn btn-outline-success">
    let buttonBtn = document.createElement("button");
    buttonBtn.classList.add("btn", "btn-outline-success");
    buttonBtn.innerText = "Add new";

    let labelFormLabel = document.createElement("label");
    labelFormLabel.classList.add("form-label");
    labelFormLabel.innerText = "new item title";

    let inputFormControl = document.createElement("input");
    inputFormControl.classList.add("form-control", "mb-4");
    inputFormControl.type = "text";

    // ponemos etiquetas dentro de etiquetas
    divCardBody.appendChild(h5CardTitle);
    divCardBody.appendChild(buttonBtn);
    divCardBody.appendChild(labelFormLabel);
    divCardBody.appendChild(inputFormControl);
    divCard.appendChild(divCardBody);
    divCol.appendChild(divCard);
    body.appendChild(divCol);

    count++;

    buttonBtn.addEventListener("click", function (e) {
        let innerText = inputFormControl.value;
        createCard(innerText); // Pasamos el valor del input aquí
        e.target.disabled = true;
        e.target.classList.remove("btn-outline-success");
        e.target.classList.add("btn-outline-danger");
        e.target.innerText = "Clicked";
    });
}

// Llamada inicial para que aparezca la primera tarjeta al cargar
createCard();