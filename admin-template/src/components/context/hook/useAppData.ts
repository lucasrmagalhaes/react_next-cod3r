import { useContext } from "react";
import AppContext from "../../../data/context/AppContext";

const useAppData = () => useContext(AppContext)

export default useAppData