export function getTimeZoneOffset() {
    const date = new Date();
    const timeOffset = date.getTimezoneOffset() / 60;
    if(timeOffset < 0){
        return "GMT+" + Math.abs(timeOffset)
    }
    if(timeOffset > 0){
        return "GMT-" + -Math.abs(timeOffset)
    }
    return "No GMT";
}