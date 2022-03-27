import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const API = 'https://uts-pam.herokuapp.com';
export const SIZES = {
    // app dimensions
    width,
    height
};

export default SIZES;
export const ColorPrimary = '#111f70';
export const ColorDanger = '#FF0000';