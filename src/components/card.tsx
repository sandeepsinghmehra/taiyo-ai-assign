import { MouseEventHandler } from "react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from 'react-query';
import { queryClient } from "../App";


interface CardProps {
    data: any
}

export const Card: React.FC<CardProps> = ({
    data
}) => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const onUpdate = async(contactId:any) => {
        // return <Navigate to={`/edit-contact/${contactId}`} replace={true} />
        navigate(`/edit-contact/${contactId}`);
    }
    
    const deleteContactMutation = useMutation((contactId:any) => axios.delete(`${process.env.REACT_APP_BASE_API_URL}/delete-contact/${contactId}`));
    const onDelete = async (contactId:any) => {
        try {
          setLoading(true); 
          await deleteContactMutation.mutateAsync(contactId, {
            onSuccess: () => {
              // Invalidate the cached data to trigger a re-fetch
              queryClient.invalidateQueries('contacts');
              navigate("/");
              toast.success("Contact deleted.");
            },
          });
        } catch (error) {
          console.log("error", error);
          toast.error("Something went wrong.");
        } finally {
          setLoading(false);
        }
      };
      
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 w-60 overflow-hidden">
            {/* Description */}
            <div>
                <p className="flex items-center font-semibold text-lg h-10 my-auto leading-tight line-clamp-2">
                    {data.first_name} {data.last_name}
                </p>
                <p className="text-sm text-gray-500 my-1">
                    Status: <span className={`capitalize ${data.status === "active"? "text-green-500": "text-red-500"}`}>{data.status}</span>
                </p>
            </div>

            <div className="flex flex-col">
                <Button 
                    size={'lg'}
                    variant={'secondary'}
                    className="rounded-3xl text-teal-900 hover:bg-teal-900 hover:text-white my-2"
                    onClick={()=>{onUpdate(data._id)}}
                >
                    Edit
                </Button>
                <Button 
                    size={'lg'}
                    variant={'secondary'}
                    className="rounded-3xl text-red-900 hover:bg-red-900 hover:text-white my-2"
                    onClick={()=>{ onDelete(data._id) }}
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}