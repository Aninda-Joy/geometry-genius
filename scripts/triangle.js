
function calculateTriangleArea(){
    //get triangle base
  const triangleBase = document.getElementById('triangle-base');
  const triangleBaseText = triangleBase.value;
  const base = parseFloat(triangleBaseText);
  console.log(base)
  //get triangle height
  const  triangleHeight = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeight.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);
  //calculate triangle area
  const area = 0.5 * base * height;
  console.log(area);
  //display triangle area
  const triangleAreaSpan = document.getElementById('triangle-area');
  triangleAreaSpan.innerText=area;
}

