import { useParams } from "@tanstack/router";

interface ProfileUserProps {

}

export function ProfileUser({}:ProfileUserProps){
const {user} = useParams()
return (
 <div className='w-full h-full flex items-center justify-center'>
    
        {user}
 </div>
);
}
