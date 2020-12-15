require('dotenv').config()

module.exports = (mongoose) => {
    const FamousQuote = mongoose.model(
        process.env.DB_FQ_COLECTION,
        mongoose.Schema({
            quote: {type: String, required: True},
            image: {type: String, required: True}
        })
    );
    return FamousQuote
}