import Sidebar from "../components/Sidebar";
import ContactForm from "../components/ContactForm";
import { useParams } from "react-router-dom";
import { useContact } from "../hooks/contactsData";


function EditContact() {
    const params = useParams();
    const { data, isLoading, error } = useContact(params.contactId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.toString()}</p>;
  }
  console.log("Edit data", data);
    return (
      <>
        <header className='bg-blue-800 text-center py-3 font-mono font-bold text-white text-2xl h-full'>
          Contact Page
        </header>
        <div className="flex flex-col lg:flex-row h-full">
            <Sidebar />
            <div className="flex-1 bg-gray-100 p-4 pageHeight">
              <div className="flex flex-col items-center w-full h-full">
                  {data && <ContactForm isEdit={true} initialData={data} />}
              </div>
            </div>
        </div>
      </>
    );
}
  
export default EditContact;