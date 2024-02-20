function calculateRectangleArea() {
    //get rectangle length
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthBase= rectangleLength.value;
    const length = parseFloat(rectangleLengthBase);
    console.log(length);
    //get rectangle width
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthBase = rectangleWidth.value;
    const width = parseFloat(rectangleLengthBase);
    console.log(width);
    //calculate rectangle area
    const area = length * width;
    console.log(area);
    //display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

}