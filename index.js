class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newDiameter) {
        // this._radius = newDiameter / 2
        this.radius = newDiameter / 2
    }

    get circumference() {
        // return 2 * Math.PI * this.radius 
        return Math.PI * this.diameter
    }

    set circumference(newCircumference) {
        this.diameter = newCircumference / Math.PI
    }


    get area() {
        // return Math.PI * (this.radius ** 2)
        return Math.PI * (this.radius * this.radius)
    }
 
}

// let circle = new Circle(3);
// circle.diameter;
// circle.diameter = 8;
// circle.diameter; 