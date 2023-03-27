import mongoose from "mongoose";
const { Schema} = mongoose
const Image = new Schema({
    base_url: {
        type: String,
        required: true
    },
    is_gallery: Boolean,
    label: String,
    large_url: {
        type: String,
        required: true
    },
    medium_url: {
        type: String,
        required: true
    },
    position: String,
    small_url: {
        type: String,
        required: true
    },
    thumbnail_url: {
        type: String,
        required: true
    },

})
const Attributes = new Schema(
    {
        code: {
            type: Number,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        value:{
            type: String,
            required: true
        }
    })
const Specifications = new Schema({
    name:{
        type: String,
        required: true
    },
    attributes: {
        type: [Attributes],
        required: true
    }

})
const Product = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: Number,
    original_price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [Image],
        required: true
    },
    brand:{
        id:{
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        }
    },
    specifications: {
        type: [Specifications],
        required: true
    },
    
})
export default mongoose.model("Product", Product)