describe("Should do something", function(){
        it("should return value", function(){
           expect(repeater("value")).toEqual("value");
        });
		
		it("when value is 5 should return double", function(){
           expect(doubleIfMultipleOfFive(5)).toEqual(10);
        });
    }
)