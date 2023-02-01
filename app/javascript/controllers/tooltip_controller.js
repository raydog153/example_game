import {Controller} from "@hotwired/stimulus"
// Not sure why, but does not work if this is in cc_application
window.bootstrap = require('bootstrap');

// To allow data-controller elements
const myDefaultAllowList = bootstrap.Tooltip.Default.allowList
myDefaultAllowList.a.push("data-controller");

// Connects to data-controller="tooltip"
export default class extends Controller {
    initialize() {
        //console.log("initialize tooltips")
        super.initialize();
    }

    connect() {
        //console.log("Hooking up tooltip")
        super.connect();
        $(this.element).tooltip("enable", {"allowList": myDefaultAllowList});
    }

    disconnect() {
        //console.log("destroy tooltip")
        $(this.element).tooltip('dispose');
        super.disconnect();
    }
}
