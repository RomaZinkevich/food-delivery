const errorHandler = (error, req, res, next) => {
    if (["SectionError", "RestaurantError", "ProductError"].includes(error.name)){
        return res.status(400).send({
            type: error.type,
            details: error.details
        });
    }

    console.log(error)
    return res.status(400).send({
        type: "Unexpected error",
        details: error.message
    });
}

module.exports = errorHandler;