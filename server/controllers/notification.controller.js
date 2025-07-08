import Notification from "../models/Notification.js";

export const getnotifications = async(req,res)=>{
    try{
        const notifications = await Notification.find();

        res.status(200).json(notifications);

    }
    catch(error){
        console.error("Error fetching notifications:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const deletenotifications = async(req,res)=>{
    try{
                await Notification.deleteMany();
            res.status(200).json({ message: "Notifications deleted successfully" });

    }
    catch(error){
        console.error("Error deleting notifications:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
