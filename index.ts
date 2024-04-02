type shape = {
    kind: "Circle" | "Rectangle";

    radius?: number;
    width?: number;
    height?: number;
};

let Circle: shape =  {
    kind: "Circle",
    radius: 10
}

let Rectangle: shape = {
    kind: "Rectangle",
    height: 15,
    width: 10
};

console.log(Circle);

console.log(Rectangle); 