import { useState } from "react";

export default function HomeChoice(){
    const [showBtns, handleShowBtns] = useState(true);
    const [clickedNo, setClickedNo] = useState(false);

    if(showBtns){
        return(
            <section className="flex items-center justify-center space-x-20 mt-9">
                <a href="#three" onClick={() => handleShowBtns(false)} className="text-3xl font-semibold tracking-wide rounded-md border border-green-400 px-4 py-2 shadow-md shadow-green-400/25 hover:shadow-lg hover:shadow-green-400/40 hover:bg-green-400/75 transition-all ease-in duration-100">Hell Yes</a>
                <button onClick={() => {setClickedNo(true); handleShowBtns(false);}} className="text-3xl font-semibold tracking-wide rounded-md border border-red-400 px-4 py-2 shadow-md shadow-red-400/25 hover:shadow-lg hover:shadow-red-400/40 hover:bg-red-400/75 transition-all ease-in duration-100">Fuck No</button>
            </section>
        )
    } else if(clickedNo){
        return(
            <section className="mt-9">
                <p className="text-2xl text-center">
                    Then what are you doing here? Like seriously, why are you here.
                    <br />Go do your homework.
                </p>
            </section>
        )
    }
}