import { postData } from "../utils/serverHelper"

const checkTrial = async(type) => {
    try {
        const data =await postData("/checkTrial",{type})
        return data?.data?.isTrialComplete;
    } catch (error) {
        console.log(error);
    }
}

export default checkTrial
