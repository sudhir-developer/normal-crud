import ExampleComponent from "../components/example/example";

export default async function Example() {
     try{
         const res = await fetch("https://jsonmock.hackerrank.com/api/article_users/search?page=2");
         const apiData = await res.json();
         if(!res.ok){
            throw new Error(`Api error ${res.status}`);
         }
         return <ExampleComponent ApiData={apiData.data}/>
     }
     catch(error){
        return <div className="p-6 text-center max-w-[300] mx-auto my-5 text-red-500 bg-red-100">Failed to load</div>
     }

}