const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fee,
      address,
    } = req.body();
  } catch (error) {
    console.error(error.message);
  }
};

export { addDoctor };
