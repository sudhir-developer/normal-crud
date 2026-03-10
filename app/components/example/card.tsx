import Image from "next/image"
interface CardProps{
    title:string,
    description:string,
    count1:number,
    count2:number,
    imageUrl?:string
}
export default function UserCard({title, description, count1, count2, imageUrl}:CardProps){
  return(
    <>
     <div className="p-4">
             {imageUrl? (
            <>
             <Image src={imageUrl} alt="" height={200} width={200}/>
             </>
            ):(
            <><div className="border-1 p-6 text-center">No Image</div></>
            )}
             <p>{title}</p>
             <p dangerouslySetInnerHTML={{__html:(description).replace(/<p>/g, "<br/>").replace(/[\[\]]/g,"")}}></p>
             <p><b>Comment:</b>{count1}</p>
             <p><b>Submission:</b>{count2}</p>
          </div>
    </>
  )
}