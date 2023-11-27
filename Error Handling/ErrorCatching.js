

const ErrorCatching = () => {
    let x = 1;
    while(x <= 5){
        try {
            // throw new CustomError('This is an Error')  this is a generic Error way
            if (x % 2 !== 0) {
                throw new Error('Odd number')
            }
        } catch (e) {
            console.log(e.name)
            console.error(e.message)
            console.warn(e.stack)
            console.table(e)
        }
        finally{
            console.log('....finally block');
            x++
        }
    }
}

ErrorCatching()

/** 
 * This is for creating Custom Errors
 * function CustomError(error) {
 *     this.message = error;
 *     this.name = "CustomErrors";
 *     this.stack = `${this.name}: ${this.message}`
 * }
*/