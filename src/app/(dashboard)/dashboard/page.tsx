import { auth, currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId, redirectToSignIn } = await auth()

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return redirectToSignIn()
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser()

  // Use `user` to render user details or create UI elements
  return <div>Welcome, {user?.firstName}!</div>
}