import bcyrpt from "bcrypt";

export const hashedText = async (text) => {
  try {
    let hashText = await bcyrpt.hash(text, 10);
    return hashText;
  } catch (err) {
    throw err;
  }
};

export const compareText = async (text, hashText) => {
  try {
    let isMatch = await bcyrpt.compare(text, hashText);
    return isMatch;
  } catch (err) {
    throw err;
  }
};
