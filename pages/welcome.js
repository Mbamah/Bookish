import { useUser } from "@auth0/nextjs-auth0"


const Welcome = () => {
 const{user} = useUser();
 return (
  <div>
   You are welcome {user.name}
  </div>
 )
}

export default Welcome
