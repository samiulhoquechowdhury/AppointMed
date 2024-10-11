//api for adding doctors
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
    const imageFile = req.file;
    // test the data
    // console.log({
    //   name,
    //   email,
    //   password,
    //   speciality,
    //   degree,
    //   experience,
    //   about,
    //   fee,
    //   address,
    // });
  } catch (error) {
    console.error(error.message);
  }
};

export { addDoctor };
