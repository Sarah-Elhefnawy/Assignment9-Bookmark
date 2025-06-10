var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var tr = document.getElementById("tr");
var nameAlert = document.getElementById("nameAlert");
var urlAlert = document.getElementById("urlAlert");


var allBookmarks = [];
if (localStorage.getItem("allBookmarks") != null) {
    allBookmarks = JSON.parse(localStorage.getItem("allBookmarks"));
    display();
}
// localStorage.removeItem("allBookmarks")

function addBookmark() {
    var site = {
        name: siteName.value,
        url: siteUrl.value
    };
    allBookmarks.push(site);
    localStorage.setItem("allBookmarks", JSON.stringify(allBookmarks));
    display();
    // clearData();
}

function display() {
    var cartoona = [];
    for (let index = 0; index < allBookmarks.length; index++) {
        cartoona += `
        <tr>
            <td>${index + 1}</td>
            <td>${allBookmarks[index].name}</td>
            <td>
                <a href="${allBookmarks[index].url}" target="_blank" class="btn btn-visit">Visit</a>
            </td>
            <td>
                <button onclick="deleteBtn(${index})" class="btn btn-delete">Delete</button>
            </td>
        </tr>`;
    }
    tr.innerHTML = cartoona;
}

function deleteBtn(index) {
    allBookmarks.splice(index, 1);
    localStorage.setItem("allBookmarks", JSON.stringify(allBookmarks));
    display();
}

function clearData() {
    siteName.value = "";
    siteUrl.value = "";
}

function validateName() {
    var regex = /^[A-za-z]{3,}$/;
    var flag = regex.test(siteName.value);
    if (flag) {
        siteName.classList.add("is-valid");
        siteName.classList.remove("is-invalid");
        nameAlert.classList.add("d-none");
        return true;
    }
    else {
        nameAlert.classList.remove("d-none");
        siteName.classList.remove("is-valid");
        siteName.classList.add("is-invalid");
        return false;
    }
}

function validateUrl() {
    var regex = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-z0-9]{2,})(\.[a-zA-z0-9]{2,})?$/;
    var flag = regex.test(siteUrl.value);
    if (flag) {
        siteUrl.classList.add("is-valid");
        siteUrl.classList.remove("is-invalid");
        urlAlert.classList.add("d-none");
        return true;
    }
    else {
        urlAlert.classList.remove("d-none");
        siteUrl.classList.remove("is-valid");
        siteUrl.classList.add("is-invalid");
        return false;
    }
}

function testValidation() {
    if (validateName() && validateUrl()) {
        addBookmark();
        // console.log(modal.ariaModal = "true");
        siteName.classList.remove("is-valid");
        siteUrl.classList.remove("is-valid");
        siteName.classList.remove("is-invalid");
        siteUrl.classList.remove("is-invalid");
        btnClick();
        if (modal.ariaModal = "true") {
            console.log("hiiiiii");
            btnClick();
            //         true
            // console.log(modal.ariaModal);
            // console.log(closeModal.click());
        }
    }
}
//      null
// console.log(modal.ariaModal);
var closeModal = document.querySelector('.btn-close[data-bs-dismiss="modal"]');
var modal = document.getElementById("modal");
// const modalInstance = bootstrap.Modal.getInstance(modal);
function btnClick() {
       closeModal.click();
    // modalInstance.hide();
}


