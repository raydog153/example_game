import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="gridster"
export default class extends Controller {
    static targets = ["plant"]

    // SelectPicker connected, so lets init control
    connect() {
        $(".gridster ul").gridster({
            widget_margins: [10, 10],
            widget_base_dimensions: [140, 140],
            resize: {
                enabled: true
            }
        }).data('gridster');


    }

    // Plant connected, so lets init control
    plantTargetConnected(element) {
        element.setAttribute("data-action", "click->gridster#click");
    }

    click(event) {
        alert("Clicked a plant")
    }

}
