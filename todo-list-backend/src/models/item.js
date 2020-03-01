const {Schema, model} = require ('mongoose')

const ItemSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

module.exports = model('Item', ItemSchema)