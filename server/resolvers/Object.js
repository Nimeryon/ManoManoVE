const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectSchema = new Schema({
    name: String,
    size: [String],
    color: String,
    shape: [[Boolean]]
});
const Object = mongoose.model("Object", ObjectSchema);

const ObjectResolver = {
    object: async ({ id }) => {
        try {
            return Object.findById(id);
        } catch (error) {
            throw error;
        }
    },
    objects: () => {
        try {
            return Object.find();
        } catch (error) {
            throw error;
        }
    },
    createObject: async ({ name, size, color, shape }) => {
        try {
            const object = new Object({ name, size, color, shape });
            await object.save();
            return object;
        } catch (error) {
            throw error;
        }
    },
    updateObject: async ({ id, name, size, color, shape }) => {
        try {
            await Object.findByIdAndUpdate(id, { name, size, color, shape });
            return true;
        } catch (error) {
            throw error;
        }
    },
    deleteObject: async ({ id }) => {
        try {
            await Object.findByIdAndRemove(id);
            return true;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = ObjectResolver;