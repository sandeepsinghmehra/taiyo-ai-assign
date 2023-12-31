import Sidebar from "../components/Sidebar";
import ContactForm from "../components/ContactForm";


function CreateContact() {
    return (
      <>
        <header className='bg-blue-800 text-center py-3 font-mono font-bold text-white text-2xl h-full'>
          Contact Page
        </header>
        <div className="flex flex-col lg:flex-row h-full">
            <Sidebar />
            <div className="flex-1 bg-gray-100 p-4 pageHeight">
              <div className="flex flex-col items-center w-full h-full">
                  <ContactForm />
              </div>
            </div>
        </div>
      </>
    );
}
  
export default CreateContact;