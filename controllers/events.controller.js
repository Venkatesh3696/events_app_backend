import supabase from "../config/supabase.config.js";

export const getAllEvents = async (req, res) => {
  const { data, error } = await supabase.from("events").select("*");

  if (error) {
    throw error;
  }

  res.json(data);
};

export const createEvent = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: " title and description are required" });
  }

  const { data, error } = await supabase
    .from("events")
    .insert({ title, description });

  if (error) {
    throw error;
  }

  res.json(data);
};

export const getSingleEvent = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  res.json(data);
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const toBeupdated = {};
  if (title) toBeupdated.title = title;
  if (description) toBeupdated.description = description;
  toBeupdated.updated_at = Date.now();
  try {
    const { data, error } = await supabase
      .from("events")
      .update(toBeupdated)
      .eq("id", id);
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
    const { data, error } = await supabase.from("events").delete().eq("id", id);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.log(error);
  }

  res.status(202).send("deleted succesfully");
};
