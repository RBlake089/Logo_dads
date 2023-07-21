const {Circle, Square, Triangle} = require("./shapes")

describe ('Cicle',()=>{
    test ('renders a circle with a blue fill color', ()=>{
        const shape = new Circle ();
        const expected = `<circle cx="150" cy="100" r="80" fill="blue"/>`
        shape.setColor ("blue");
        expect(shape.render()).toEqual(expected);
    });
});
describe ('Square',()=>{
    test ('renders square with a red fill color', ()=>{
        const shape = new Square ();
        const expected = `<rect x="50" y="20" fill="red"/>`
        shape.setColor ("red");
        expect(shape.render()).toEqual(expected);
    });
});
describe ('Triangle',()=>{
    test ('renders triangle with a yellow fill color', ()=>{
        const shape = new Triangle ();
        const expected = `<polygon points="150, 18 244, 182 56, 182" fill="yellow"/>`
        shape.setColor ("yellow");
        expect(shape.render()).toEqual(expected);
    });
});