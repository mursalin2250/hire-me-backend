import generateResponse from "../utils/generateResponse.js"

const validator = (schema) => {
    return (req, res, next) => {
        const validation = schema.validate(req.body, {abortEarly: false});

        if(validation.error) {
            return res.status(400).json(generateResponse(false, 400, validation.error.message, null));
        }

        req.body = validation.value;

        next();
    };
};

export default validator;