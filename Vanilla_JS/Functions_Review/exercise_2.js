// Make an object literal of a circle, the radius may be mutable but the area cannot be adjusted.

const circle = {
    radius: 2.5,
    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(circle.area);