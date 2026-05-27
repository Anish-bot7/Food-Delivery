import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://anishsathavu:021050@cluster0.wqt7mqc.mongodb.net/Food-del').then(()=>console.log("DB connected"))
}
// mongodb+srv://anishsathavu:021050@cluster0.wqt7mqc.mongodb.net/Food-del
//mongodb+srv://anishsathavu:<db_password>@cluster0.wqt7mqc.mongodb.net/?appName=Cluster0