// app/javascript/controllers/form_validator_controller.js
import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["form"]

    initialize() {
        console.log("In form-validator initialize")
        super.initialize();
    }

    // Reference: https://getbootstrap.com/docs/5.2/forms/validation
    validate(event) {
        console.log("In validate")
        //const form = event.target // Original code
        //let form_id = event.target.attributes["data-forms-id"].value;
        const form = this.formTarget;

        if (form.checkValidity() === false) {
            const invalidFields = form.querySelectorAll(":invalid")

            this.displayInvalidFeedback(invalidFields)
            this.focusAndAnimateField(invalidFields[0])

            event.preventDefault()
            event.stopPropagation()
            console.log("Invalid form")
        } else {
            // Close model if we are on one, safe to call even if we are not in one
            $('#cc_model').modal('hide')
        }

        form.classList.add("was-validated")
    }

    displayInvalidFeedback(invalidFields) {
        invalidFields.forEach(invalidField => {
            const invalidFeedback = this.findOrCreateInvalidFeedback(invalidField)
            invalidFeedback.innerHTML = invalidField.validationMessage
        })
    }

    findOrCreateInvalidFeedback(invalidField) {
        let invalidFeedback = this.findInvalidFeedback(invalidField)

        if (invalidFeedback == null) {
            invalidFeedback = this.createInvalidFeedback(invalidField)
        }

        return invalidFeedback
    }

    findInvalidFeedback(invalidField) {
        return invalidField.parentElement.querySelector(".invalid-feedback")
    }

    createInvalidFeedback(invalidField) {
        const invalidFeedback = document.createElement("div")
        invalidFeedback.className = "invalid-feedback"

        this.insertInvalidFeedback(invalidFeedback, invalidField)

        return invalidFeedback
    }

    insertInvalidFeedback(invalidFeedback, invalidField) {
        const invalidFieldParent = invalidField.parentElement

        if (invalidFieldParent.classList.contains("input-group") ||
            invalidFieldParent.classList.contains("form-check")) {
            invalidFieldParent.insertBefore(invalidFeedback, null)
        } else {
            const invalidFieldSibling = invalidField.nextSibling
            invalidFieldParent.insertBefore(invalidFeedback, invalidFieldSibling)
        }
    }

    focusAndAnimateField(field) {
        const animationClass = "vibrate-1"

        field.addEventListener("animationend", () => {
            field.classList.remove(animationClass)
        })

        field.classList.add(animationClass)
        field.focus()
    }
}
