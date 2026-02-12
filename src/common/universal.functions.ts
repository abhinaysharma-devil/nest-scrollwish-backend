export const sendSuccessResponse = (data: any, resObj: any) => {
    return {
        statusCode: resObj.statusCode || 200,
        message: resObj.message || 'Success',
        type: resObj.type || 'DEFAULT',
        data: data,
    };
};

export const sendErrorResponse = (error: any) => {
    return {
        statusCode: error.statusCode || 500,
        message: error.message || 'Something went wrong',
        type: error.type || 'DEFAULT',
    };
};