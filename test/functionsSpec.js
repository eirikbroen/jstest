describe("Should do something", function(){
        it("should return value", function(){
           expect(repeater("value")).toEqual("value");
        });
		
		it("when value is multiple of 5 should return double", function(){
           expect(doubleIfMultipleOfFive(5)).toEqual(10);
        });
		
		it("when value is multiple of 3 should return triple", function(){
           expect(tripleIfMultipleOfThree(3)).toEqual(9);
        });
		
		it("when value is multiple of 4 should return quadruple", function(){
           expect(quadrupleIfMultipleOfFour(4)).toEqual(16);
        });

	}
)