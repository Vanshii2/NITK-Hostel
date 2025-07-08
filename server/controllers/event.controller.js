import Event from '../models/Event.js';
import mongoose from 'mongoose';
import Notification from '../models/Notification.js';

export const getEvent= async(req,res)=>{
    try{

        const event  = await Event.find();
        res.status(200).json({success:true,data:event});
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"});

    }
}
export const createEvent = async(req,res)=> {
    const event= req.body;
    if(!event.title||!event.image||!event.description||!event.date)
    {
        return res.status(400).json({success:false,message:"Please provide all feilds"});
       
    }
        const newEvent = new Event(event)
        try{
                await newEvent.save();
                const newNotification= new Notification({
                    name:event.title,
                    heading:event.title,
                    content:event.description,
                    image:event.image
                })
                await newNotification.save();

                res.status(201).json({success:true,event:newEvent});
        }
        catch(error){
            console.error("Error creating event:", error.message);
            res.status(500).json({success:false,message:"Internal Server Error"});

        }
}
export const updateEvent=async(req,res)=>{
    const {id}= req.params;
    const event = req.body;
   if(!mongoose.Types.ObjectId.isValid(id))
   {
     return res.status(404).json({success:false,message:"Invalid Event ID"});
   }

    try{
        const updatedEvent= await Event.findByIdAndUpdate(id,event,{new:true});
        res.status(200).json({success:true,data:updatedEvent});
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"});

    }
}
export const deleteEvent=async(req,res)=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Event ID" });
      }
    console.log("id:",id);
    try{
           const event= await Event.findByIdAndDelete(id);
            if (!event) return res.status(404).json({success:false,message:"Event not found"});
            res.status(200).json({success:true,message:"Event deleted successfully"});
    }
    catch(error){
        console.log("Error deleting product:", error.message)
            res.status(500).json({success:false,message:"Internal Server Error"});
    }
}
