import { Schema, model } from "mongoose";

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	cartId: {
		type: String,
		default: "0"
	},
	role: { // anteriormente type
		type: String,
		default: "user",
		enum: ["user", "admin", "premium"],
	},
});

// * first_name:String,
// * last_name:String,
// * email:String (único)
// * age:Number,
// * password:String(Hash)
// * cart:Id con referencia a Carts
// * role:String(default:’user’)

const userModel = model("User", userSchema);

export { userModel };
