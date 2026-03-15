import { createServerFn } from '@tanstack/react-start'
import { getStaffBios } from './staff.controllers'


export const getStaff = createServerFn({method: "GET"}).handler(async () => {
    const rawStaff = await getStaffBios()
    return rawStaff
})