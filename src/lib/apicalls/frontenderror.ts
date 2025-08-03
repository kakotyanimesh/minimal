export const handleFrontendTypeError = (error: unknown): string => {
    let errorMessage : string = "something went wrong with the server"
    if(error instanceof Error){
        if (error.message.includes("fetch")) {
            errorMessage = "Network error, Please Try again later"
        } else if(error.message.includes("HTTP Error")) {
            errorMessage = "Server Error, Please Try again later"
        } else {
            errorMessage = error.message
        }
    }
    
    return errorMessage
};
