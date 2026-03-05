import ContactComponent from "../components/contactComponent";
export default async function Contactus(){



    return(
        <>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols1 md:grid-cols1 lg:grid-cols1 p-6">
            <h1>Contact Page</h1>

            <ContactComponent/>

        </div>
        </div>
        </>
    )
}