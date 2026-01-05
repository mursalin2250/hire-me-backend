const generateResponse = (status, statusCode, message, data) => {
    return{
        success: status,
        code: statusCode,
        message: message,
        data: data
    }
}

export default generateResponse;