import { atom } from "recoil";

const countState = atom({
    key: "countState",
    default: ""
});

export default countState;