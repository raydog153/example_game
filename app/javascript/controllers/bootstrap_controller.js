import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="bootstrap"
export default class extends Controller {
    static targets = ["sp"]

    // SelectPicker connected, so lets init control
    spTargetConnected(selectInput) {
        selectInput.setAttribute("data-style-base", "form-control");
        selectInput.setAttribute("data-selected-text-format", "count > 2");
        selectInput.setAttribute("data-size", "6");
        selectInput.classList.add("selectpicker")
        selectInput.classList.remove("form-select")
        $(selectInput).selectpicker();
    }
}
