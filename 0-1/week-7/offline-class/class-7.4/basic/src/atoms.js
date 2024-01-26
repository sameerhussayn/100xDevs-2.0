import {atom, selector} from 'recoil'

export const networkAtom = atom({
    key: 'neworkAtom',
    default: 102
})

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 0
})

export const notificationsAtom = atom({
    key: 'notificationsAtom',
    default: 12
})

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 0
})

export const totalNumOfNotifications = selector({
    key: 'totalNotifications',
    get: ({get})=>{
        const network = get(networkAtom)
        const jobs = get(jobsAtom)
        const notifications = get(notificationsAtom)
        const messages = get(messagingAtom)

        return (network+ jobs + notifications + messages)
    }
})