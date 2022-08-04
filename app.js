// https://calculator.swiftutors.com/elastic-potential-energy-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const elasticPotentialEnergyRadio = document.getElementById('elasticPotentialEnergyRadio');
const elasticForceConstantRadio = document.getElementById('elasticForceConstantRadio');
const stretchLengthRadio = document.getElementById('stretchLengthRadio');

let elasticPotentialEnergy;
let elasticForceConstant = v1;
let stretchLength = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

elasticPotentialEnergyRadio.addEventListener('click', function() {
  variable1.textContent = '(k) Elastic Force Constant (N/m)';
  variable2.textContent = '(x) Stretch Length (m)';
  elasticForceConstant = v1;
  stretchLength = v2;
  result.textContent = '';
});

elasticForceConstantRadio.addEventListener('click', function() {
  variable1.textContent = '(U) Elastic Potential Energy (J)';
  variable2.textContent = '(x) Stretch Length (m)';
  elasticPotentialEnergy = v1;
  stretchLength = v2;
  result.textContent = '';
});

stretchLengthRadio.addEventListener('click', function() {
  variable1.textContent = '(U) Elastic Potential Energy (J)';
  variable2.textContent = '(k) Elastic Force Constant (N/m)';
  elasticPotentialEnergy = v1;
  elasticForceConstant = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(elasticPotentialEnergyRadio.checked)
    result.textContent = `Elastic Potential Energy = ${computeElasticPotentialEnergy().toFixed(2)} J`;

  else if(elasticForceConstantRadio.checked)
    result.textContent = `Elastic Force Constant = ${computeElasticForceConstant().toFixed(2)} N/m`;

  else if(stretchLengthRadio.checked)
    result.textContent = `Stretch Length = ${computeStretchLength().toFixed(2)} m`;
})

// calculation

function computeElasticPotentialEnergy() {
  return 0.5 * Number(elasticForceConstant.value) * Math.pow(Number(stretchLength.value), 2);
}

function computeElasticForceConstant() {
  return (Number(elasticPotentialEnergy.value) * 2) / Math.pow(Number(stretchLength.value), 2);
}

function computeStretchLength() {
  return Math.sqrt((Number(elasticPotentialEnergy.value) * 2) / Number(elasticForceConstant.value));
}