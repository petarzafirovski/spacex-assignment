import axios_instance from "../axios/Axios";

const Service ={
    createComment: (missionId,rocketId,comment)=>{
        return axios_instance.post("/add",{
            "missionId":missionId,
            "rocketId":rocketId,
            "comment":comment
        })
    }
}

export default Service;