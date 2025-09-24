import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://ee220002048_db_user:%23ManaswiMane3104@cluster0.kxlt3lh.mongodb.net/blog-app?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("✅ DB Connected");
    } catch (error) {
        console.error("❌ DB Connection Error:", error);
    }
};
