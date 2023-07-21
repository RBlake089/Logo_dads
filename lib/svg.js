class SVG{
    constructor(){
        this.textEl = ""
        this.shapeEl = ""
    }
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }
    setText(text, color){
        if(text.length > 3){
            throw new Error("must be less then 3 characters")
        }
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShape(shape){
        this.shapeEl = shape.render()
    }
}


module.exports = SVG