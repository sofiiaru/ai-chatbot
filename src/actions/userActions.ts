'use server'

import { currentUser } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export const onCompleteUserRegistration = async (
    fullname: string,
    clerkId: string,
    type: string
) => {
    try {
        const registered = await db.user.create({
            data: {
                fullname,
                clerkId,
                type,
            },
            select: {
                fullname: true,
                id: true,
                type: true,
            },
        })

        if(registered) {
            return { status: 200, user: registered }
        }
    } catch (error) {
        return { status: 400, error }
    }
}

// export const onLoginUser = async () => {
//   const user = await currentUser()
//   if (!user) return { status: 400, error: 'User not found' }
//   else {
//       try {
//           const authenticated = await db.user.findUnique({
//               where: {
//                   clerkId: user.id
//               }
//           })
//       } catch (error) {
//           return { status: 400, error }
//       }
//   }
// }
