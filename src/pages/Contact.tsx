import { XCircle } from "lucide-react";
import { Button } from "../@/components/ui/button";
import Sidebar from "../components/Sidebar";
import { Alert, AlertDescription, AlertTitle } from "../@/components/ui/alert";
import { Link } from "react-router-dom";



function Contact() {
    return (
      <>
        <header className='bg-blue-800 text-center py-3 font-mono font-bold text-white text-2xl h-full'>
          Contact Page
        </header>
        <div className="flex flex-col lg:flex-row h-full">
            <Sidebar />
            <div className="flex-1 bg-gray-100 p-4 pageHeight">
              <div className="flex flex-col items-center w-full h-full">
                <div>
                  <Link to={'/create-contact'}>
                    <Button 
                      variant={'outline'}
                      size={"lg"}
                      className="bg-green-500 text-white"
                    >
                      Create Contact
                    </Button>
                  </Link>
                </div>

                <div className="flex justify-center items-center h-full">
                  
                </div>
              </div>
              
            </div>
        </div>
      </>
    );
}
  
export default Contact;