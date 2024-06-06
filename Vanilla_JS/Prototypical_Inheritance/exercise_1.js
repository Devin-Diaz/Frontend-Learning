

function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}
HtmlElement.prototype.focus = function() { console.log('focused'); }

function HtmlSelectElement(array = []) {
    this.array = array;
    
    this.addItem = function(item) {
        this.array.push(item);
    }

    this.removeItem = function() {
        this.array.splice(this.items.indexOf((item), 1));
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

