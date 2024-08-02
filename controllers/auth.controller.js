import supabase from "../config/supabase.config.js";

export const signupController = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    console.log(error);
    return res.status(401).json({ message: "Enter all fields" });
  }
  return res.status(201).json(data);
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid email or password" });
  }
  return res.status(200).json(data);
};
