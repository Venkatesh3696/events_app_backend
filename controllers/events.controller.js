import supabase from "../config/supabase.config.js";
import Events from "../models/event.modle.js";

export const getAllEvents = async (req, res) => {
  try {
    const data = await Events.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const createEvent = async (req, res) => {
  const { title, description, date, time, location } = req.body;
  try {
    if (!title || !description) {
      return res
        .status(400)
        .json({ error: " title and description are required" });
    }
    const newEvent = {
      title,
      description,
      date,
      time,
      location,
    };
    const data = await Events.create(newEvent);

    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getSingleEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Events.findById(id);

    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description, location, date, time } = req.body;
  const toBeupdated = {};
  if (title) toBeupdated.title = title;
  if (description) toBeupdated.description = description;
  if (date) toBeupdated.date = date;
  if (time) toBeupdated.time = time;
  if (location) toBeupdated.location = location;
  try {
    const data = await Events.findByIdAndUpdate(id, toBeupdated);
    res.status(200).json(data);
    if (err) {
      throw error;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    await Events.findByIdAndDelete(id);
    res.status(202).send("deleted succesfully");
  } catch (error) {
    console.log(error);
  }
};
