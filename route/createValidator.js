const createValidator = formData => requestBody => {

    if (Object.entries(requestBody).length !== formData.length) return false;

    formData.map(input => {
        if (typeof(requestBody[input.name]) !== input.type) return false;
        if (!input.check(requestBody[input.name])) return false;
    });

    return true;

};

export {createValidator};