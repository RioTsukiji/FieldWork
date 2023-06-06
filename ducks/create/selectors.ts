import {useSelector} from "react-redux";
import { CreaterState } from "@/ducks/create/slice";

export const useCreaterState = () => {
    return useSelector((state: {creater: CreaterState}) => state);
}