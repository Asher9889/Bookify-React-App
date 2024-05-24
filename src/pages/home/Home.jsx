import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContentWrapper, Card } from "../../components/index"
import books2 from "../../assets/books2.png"
import books3 from "../../assets/books3.png"
import { useFirebase } from "../../firebase/FirebaseContext"

const Home = ()=>{

    const[books, setBooks] = useState();
    const navigate = useNavigate();
    const {isLoggedIn, getDataFromFirestore} = useFirebase()

    console.log(typeof books)

    // console.log(data)
    // useEffect(()=>{
    //     isLoggedIn ? navigate("/home") : navigate("/login")

    //     getDataFromFirestore()
    //     .then((res)=> console.log(res))
    //     .catch((err)=> console.log(err))
    //     // console.log(data)
    // }, [isLoggedIn, navigate, getDataFromFirestore])
    useEffect(() => {
        if (isLoggedIn === undefined) return;
    
        if (isLoggedIn) {
          getDataFromFirestore()
            .then((res) => {
                console.log(res.docs)
                setBooks(res.docs)
                if(res.docs) console.log(books)
            })
            .catch((err) => console.error("Error fetching data from Firestore:", err));
        } else {
          navigate("/login");
        }
      }, [isLoggedIn, navigate, getDataFromFirestore]);

    return (
        <div className="bg-red-300 w-full pt-5 ">
            <ContentWrapper>
                <div className="w-full text-black flex flex-wrap" >
                    {/* {books && books.map((book)=> <h1>{book.data().bookName}</h1>) } */}
                    {books?.length > 0 && books.map((e)=> <Card key={e.data().isbnNumber} {...e.data()}/>)}
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Home