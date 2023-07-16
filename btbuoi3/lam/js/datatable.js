const comboboxShowPage = document.querySelector(".combobox__show_page");

const comboboxOptions = document.querySelector("#table__combobox_options");
const comboboxShowPageOptions = document.querySelectorAll(".combobox__show_page .combobox__options .combobox__option");

const comboboxShowNumberOfRecordsPerPage = document.querySelector("#span__number_of_records_perpage");

console.log(comboboxShowPage);

comboboxShowPage.addEventListener('click', function () {
    if (!comboboxOptions.classList.contains("show")) {
        comboboxOptions.classList.add("show");
    }
    else {
        comboboxOptions.classList.remove("show");
    }
});

comboboxShowPageOptions.forEach(function (comboboxShowPageOption) {
    comboboxShowPageOption.addEventListener("click", function (e) {
        e.stopPropagation();
        comboboxShowNumberOfRecordsPerPage.innerHTML = comboboxShowPageOption.innerHTML;
        comboboxOptions.classList.remove("show");
    });
});