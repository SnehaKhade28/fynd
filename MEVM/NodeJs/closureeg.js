/**
 * three function example that i came across.
 * 
 */
function outerScope() {
    const result = [];
    function innerScope() {
        for (let i =0; i<5; i++) {
            // this is just storing the execution of inner function
            result[i] = (function inner(x) {
                // additonal enclosing context
                return function() {
                    console.log(x);
                };
            })(i);
            
            
        }
    }
    innerScope();
    for(let i=0; i<5; i++){
        result[i]();
    }
}
outerScope();