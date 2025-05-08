class Apierror extends Error {
    cosntructor (
        statusCode,
        message="something went wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = false;
        this.error = errors

        if (stack) {
            this.stack = statck
        } else {
            Error.captureStackTrace(this,this.constructor)
            
        }

    }
}