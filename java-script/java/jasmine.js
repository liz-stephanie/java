//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255
function Sum1toN(n){
    sum=0;
    for (i=1; i<=n; i++){
        sum=sum+i;
    }
    return sum;
}
console.log (Sum1toN (3));

//devuelve la suma del primer y último número en el array
function sumFirstLast(arr){
    sum=0;
    for (i=0; i<arr.length; i++){
        sum=arr[0]+arr[arr.length-1];
    }
    return sum;
}
console.log (sumFirstLast ([1,2]));

// crea una prueba o función que devuelva el número más grande del array. 
    function array (x){
        var max= x[0];
        for(i=0; i<x.length; i++){
            if (max<x[i]){
                max=x[i];
            }
        }
        return max;
    }
    a=[-1, 4,5,-3,10];
    console.log (array (a));

    
describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
});

describe("array", function() { 
    it("should return 10 when we pass [-1, 4,5,-3,10] as an argument", function() { 
        expect(array([-1, 4,5,-3,10])).toEqual(10); 
    }); 

}); 