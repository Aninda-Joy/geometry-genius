function calculateParallelogramArea() {
    //get rectangle length
    const parallelogramBase= document.getElementById('parallelogram-base');
    const parallelogramLengthBase = parallelogramBase.value;
    const length = parseFloat(parallelogramLengthBase);
    console.log(length);
    //get rectangle width
    const parallelogramWidth = document.getElementById('parallelogram-height');
    const parallelogramWidthBase = parallelogramWidth.value;
    const width = parseFloat(parallelogramWidthBase);
    console.log(width);
    //calculate rectangle area
    const area = length * width;
    console.log(area);
    //display rectangle area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}