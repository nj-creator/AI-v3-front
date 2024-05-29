import moment from "moment";

export const timeHandler = (date) => {
    let now = moment();
    let momentDate=moment(date);
    let time=momentDate.fromNow(true);
    let dateByHourAndMin = momentDate.format('HH:mm');

    const getDay=()=>{
        let days = time.split(" ")[0];
        if(Number(days)<8){
            return now.subtract(Number(days),"days").format("dddd")
        }else{
            return momentDate.format('DD/MM/YYYY');
        }
    }

    if (time === "a few seconds"){
        return "Now";
    }
    if (time.search("minute") !== -1){
        let mins = time.split(" ")[0];
        if (mins === "a"){
            return "1 min ago";
        }
        else{
            return `${mins} mins ago`
        }
    }
    if (time.search('hour') !== -1) {
        let hoursDiff = now.diff(momentDate, 'hours');
        if (hoursDiff === 1){
            return `${hoursDiff} hour ago`;
        }
        return `${hoursDiff} hours ago`;
    }
    if(time==="a day"){
        return "Yesterday"
    }
    if(time.search("days") !== -1){
        return `on ${getDay()}`;
    }
    return `${time} ago`;
}