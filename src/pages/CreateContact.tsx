import { XCircle } from "lucide-react";
import { Button } from "../@/components/ui/button";
import Sidebar from "../components/Sidebar";
import { Alert, AlertDescription, AlertTitle } from "../@/components/ui/alert";



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
                <div>
                  <h1 className="text-2xl font-bold">
                    Create Contact Screen
                  </h1>
                </div>

                <div className="flex justify-center items-center h-full">
                  <Alert>
                    <XCircle className="h-4 w-4" />
                    <AlertTitle>No Contact Found</AlertTitle>
                    <AlertDescription>
                      Please add contact form Create Contact Button
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
              
            </div>
        </div>
      </>
    );
}
  
export default CreateContact;