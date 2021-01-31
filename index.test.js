const {calculationSurfaceOfEllipse} = require("./index");

test("calculationSurfaceOfEllipse() should return the surface of an ellipse by calculation with the two axes and Pi", function(){
//ARRANGE
    const axisA = 40
    const axisB = 10

// ACT
    const result = calculationSurfaceOfEllipse (axisA, axisB)

// ASSERT
    expect(result).toBe(314.16 + "cm\xB2" )
})


test("calculationSurfaceOfEllipse() should return the surface of an ellipse by calculation with the two axes and Pi", function(){
//ARRANGE
    const axisA = 53
    const axisB = 20

// ACT
    const result = calculationSurfaceOfEllipse (axisA, axisB)

// ASSERT
    expect(result).toBe(832.52 + "cm\xB2" )
})