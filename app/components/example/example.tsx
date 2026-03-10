import UserCard from "./card"
interface ApiData{
    id:number,
    username:string,
    about:string,
    comment_count:number,
    submission_count:number,
    image?:string
}

export default function ExampleComponent({ApiData}:{ApiData:ApiData[]}){
    return(
        <>
        <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {ApiData?.map((user)=>(
            
            <UserCard
             key={user.id}
             imageUrl={user.image}
             title={user.username}
             description={user.about}
             count1={user.comment_count}
             count2={user.submission_count}
            />


          
        ))}
        </div>
        </div>
        </>
    )
}