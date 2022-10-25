import dayjs from "dayjs";

export function getRemainingTime(CountdownTimeStamp) {
    const now = dayjs();
    const remainingTime = dayjs(CountdownTimeStamp);

    if (CountdownTimeStamp.isBefore(now)) {
        return {
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0,
        };
    }

    return {
        seconds: getRemainingSeconds(now, remainingTime),
        minutes: getRemainingMinutes(now, remainingTime),
        hours: getRemainingHours(now, remainingTime),
        days: getRemainingDays(now, remainingTime)
    }

    function getRemainingSeconds(now, remainingTime){
        const seconds = remainingTime.diff(now, 'seconds') % 60;
        return seconds; 
    }

    function getRemainingMinutes(now, remainingTime){
        const minutes = remainingTime.diff(now, 'minutes') % 60;
        return minutes; 
    }

    function getRemainingHours(now, remainingTime){
        const hours = remainingTime.diff(now, 'hours') % 24;
        return hours; 
    }

    function getRemainingDays(now, remainingTime){
        const days = remainingTime.diff(now, 'days');
        return days; 
    }
}