import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from 'react-query';
import { queryClient } from "../App";


const formSchema = z.object({
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    status: z.string().min(1),
});

type ContactFormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC<any> = ({
    initialData,
}) => {
    const navigate = useNavigate();
    const {contactId} = useParams();

    const [loading, setLoading] = useState(false);

    const title = initialData ? "Edit Contact Screen": "Create Contact Screen";
    const toastMessage = initialData ? "Contact updated.": "Contact created.";
    const action = initialData ? "Save Editted Contact": "Save Contact";
    
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData ? {
            ...initialData
        }: {
            first_name: '',
            last_name: '',
            status: 'Inactive',
        }
    });
    const updateContactMutation = useMutation((data: ContactFormValues) =>
        axios.patch(`${process.env.REACT_APP_BASE_API_URL}/update-contact/${contactId}`, data)
    );
    const onSubmit = async (data: ContactFormValues) => {
        try {
            setLoading(true);
            if(initialData) {
                console.log("patch data", data);
                // Call the update mutation with the data
                await updateContactMutation.mutateAsync(data);

                // Invalidate the cached data to trigger a re-fetch
                queryClient.invalidateQueries('contacts');

            } else {
                // console.log("body onSubmit", data);
                await axios.post(`${process.env.REACT_APP_BASE_API_URL}/create-contact`, data);
            }
            navigate("/");
            toast.success(toastMessage);
        } catch (error) {
            console.log("error", error);
            toast.error("Something went wrong.")
        } finally {
            setLoading(false)
        }
    }
    
    return (
        <>
            <div className="flex flex-col items-center justify-between">
                <h1 className="text-2xl font-bold">
                    {title}
                </h1>
                
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full my-5">
                    <div className="w-[500px] mx-auto border border-green-500 grid gap-8 py-5 px-3 rounded-md">
                        <FormField 
                            control={form.control}
                            name="first_name"
                            render={({field})=>(
                                <FormItem className="flex flex-row">
                                    <FormLabel className="w-40 m-auto">First Name</FormLabel>
                                    <div className="flex-col w-80">
                                        <FormControl className="w-80">
                                            <Input disabled={loading} placeholder="first name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="last_name"
                            render={({field})=>(
                                <FormItem className="flex flex-row">
                                    <FormLabel className="w-40 m-auto">Last Name</FormLabel>
                                    <div className="flex-col w-80">
                                        <FormControl>
                                            <Input disabled={loading} placeholder="last name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />
                       
                         <FormField 
                            control={form.control}
                            name="status"
                            render={({field})=>(
                                <FormItem className="flex flex-row">
                                    <FormLabel className="w-40 m-auto">Status</FormLabel>
                                    <div className="flex-col w-80">
                                        <RadioGroup 
                                            disabled={loading} 
                                            onValueChange={field.onChange} 
                                            value={field.value} 
                                            defaultValue={"active"}>
                                            <div className="w-80 flex items-center space-x-2">
                                                <RadioGroupItem value="active" id="active" />
                                                <Label htmlFor="active">Active</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="inactive" id="inactive" />
                                                <Label htmlFor="inactive">Inactive</Label>
                                            </div>
                                        </RadioGroup>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />
                        <Button disabled={loading} className="m-auto" type="submit">
                            {action}
                        </Button>
                    </div>
                </form>
            </Form>
            </div>
        </>
    )
}
export default ContactForm;