import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
    const SALT_COUNT = 10;
    const newPassword = await bcrypt.hash(password, SALT_COUNT);
    return newPassword;
}

export const comparePassword = async (password, hashedPassword) => {
    const compare = bcrypt.compare(password, hashPassword);
    return compare;
}