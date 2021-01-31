function calculationSurfaceOfEllipse(axisA, axisB) {
    const halfAxisA = axisA / 2
    const halfAxisB = axisB / 2
    const calculation = Math.PI * halfAxisA * halfAxisB
    return calculation.toFixed(2) + "cm\xB2"
}

console.log(calculationSurfaceOfEllipse(40, 10))
console.log(calculationSurfaceOfEllipse(53, 20))

// in de READ ME, staat een uitleg hoe je het oppervlakte van een elipse berekend.

// Opdracht 1.a
// Langste as is 40cm
// Korste as is 10cm
// Verwachte uitkomst 314.16cm (Met twee cijfers achter de komma en een squared 2, om aan te geven dat het om oppervlakte gaat.)

// Opdracht 1.b
// Langste as is 53cm
// Korste as is 20cm
// Verwachte uitkomst 832.52cm (Met twee cijfers achter de komma en een squarede 2, om aan te geven dat het om oppervlakte gaat.)


module.exports ={
    calculationSurfaceOfEllipse: calculationSurfaceOfEllipse,
};