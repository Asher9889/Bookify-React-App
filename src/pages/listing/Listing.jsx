import React, { useState } from "react";
import { ContentWrapper } from "../../components";
import { useFirebase } from "../../firebase/FirebaseContext";

const Listing = ()=>{

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [ISBN, setISBN] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState(null);

    
    const {addDataInFirestore} = useFirebase();
    
    const submitHandle = async(e)=>{
        try {
            e.preventDefault();
            if(!file){
                throw new Error("Please select a file")
            }
            await addDataInFirestore(name, desc, ISBN, price, file )
        } catch (error) {
            console.error("Error uploading file:", error.message);
        }
        
        // navigate("/home")

    }



    return(
        <div className="w-full pt-3">
            <ContentWrapper>
                <div className="w-full ">
                    <form onSubmit={submitHandle} className="w-[50%] flex flex-col gap-2  ">

                        <label className="text-lg font-bold " htmlFor="title">Book Name:</label>
                        <input 
                            onChange={(e)=> setName(e.target.value)}
                            value={name}
                            className="w-full bg-zinc-200 px-4 py-2 rounded-md outline-none" type="text" id="title" placeholder="Write title here..." required />
                            

                        <label className="text-lg font-bold " htmlFor="desc">Description: </label>
                        <textarea 
                            onChange={(e)=> setDesc(e.target.value)}
                            value={desc}
                            className=" w-full bg-zinc-200 outline-none rounded-md p-2" name="" id="desc" placeholder="Write description here..."></textarea>

                        <label className="text-lg font-bold " htmlFor="isbn">ISBN Number</label>
                        <input 
                            onChange={(e)=> setISBN(e.target.value)}
                            value={ISBN}
                            className="w-full bg-zinc-200 px-4 py-2 rounded-md outline-none" type="text" id="isbn" placeholder="ISBN NUMBER..." required />
                            
                        <label className="text-lg font-bold " htmlFor="price">Price</label>
                        <input 
                            onChange={(e)=> setPrice(e.target.value)}
                            value={price}
                            className="w-full bg-zinc-200 px-4 py-2 rounded-md outline-none" type="number" id="price" placeholder="Rupees" required />
                       
                        <label className="text-lg font-bold " htmlFor="files">Files</label>
                        <input 
                            onChange={(e)=> setFile(e.target.files[0])}
                            
                            
                            className="w-full bg-zinc-200 px-4 py-2 rounded-md outline-none" 
                            type="file" id="files"  required />

                       
                        <button 
                            type="submit" 
                            className="bg-blue-500 py-2 mt-4 rounded-md text-white cursor-pointer">
                            Create
                        </button>
                               
                    </form>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Listing;