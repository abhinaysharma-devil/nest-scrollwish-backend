import { stat } from "fs";

export const SUCCESS = {
    DEFAULT: {
        statusCode: 200,
        message: 'Success',
        type: 'DEFAULT',
        data: null,
    }
};

export const ERROR = {
    DEFAULT: {
        statusCode: 500,
        message: 'Something went wrong',
        type: 'DEFAULT',
    }
};