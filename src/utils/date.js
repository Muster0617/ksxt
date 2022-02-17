let date = new Date()
export function getDate(year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate(), hour = date.getHours(), minute = date.getMinutes()) {
    let time = new Date(year, month, day, hour, minute).getTime()
    return time
}
