import { setHours, setMinutes, format, addMinutes } from "date-fns";

export function generateDayTimeList(date:Date):string[]{
    const startime = setMinutes(setHours(date, 9), 0); // set start time to 9h
    const endtime = setMinutes(setHours(date, 21), 0); // set end time to 21h
    const interval = 45 ; // interval in minutes
    const timelist: string[] = [];
    
    let currentTime = startime;

    while (currentTime <= endtime){
        timelist.push(format(currentTime, "HH:mm"));
        currentTime = addMinutes(currentTime, interval);
    }


    return timelist;
}