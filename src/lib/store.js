import { proxy } from "valtio";

const defaultRemainingTime = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0
}

const announcementTimer = proxy({
    time: defaultRemainingTime
})

export default announcementTimer;