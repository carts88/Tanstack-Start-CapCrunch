//     import { createServerFn } from "@tanstack/react-start";
//     import { redirect, isRedirect, va} from "@tanstack/react-router";

// export const assertAuthenticatedFn = createServerFn().handler(async () => {
//         const {user } = await validate();

//         if(!user){
//             throw redirect({to: "/unauthenticated"})
//         }

//         return user;
//     })
//     export const assertIsAdminFn = createServerFn().handler(async () => {
//         const user =  await assertAuthenticatedFn();
// })