import { useQuery } from 'react-query';
import { XCircle } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import axios from 'axios';
import { useContacts } from '../hooks/contactsData';
import { Card } from '../components/card';

function Contact() {
  const { data, isLoading, error } = useContacts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.toString()}</p>;
  }
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
                {data.length !== 0 ? <div className="flex flex-wrap items-start mt-5 h-full">
                  <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
                    {data.map((item:any) => (
                      <Card key={item._id} data={item} />
                    ))}
                  </div>
                </div> :
                <div className="flex items-start mt-5 h-full">
                  <Alert>
                    <XCircle className="h-4 w-4" />
                    <AlertTitle>No Contact Found</AlertTitle>
                    <AlertDescription>
                      Please add contact form Create Contact Button
                    </AlertDescription>
                  </Alert>
                </div>}
              </div>
              
            </div>
        </div>
      </>
    );
}
  
export default Contact;