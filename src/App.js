import React, {useEffect, useState} from "react";
import Menu from "./components/menu";
import Imageframe from "./components/imageframe";
import Loader from "./components/loader";
import FormRegister from "./components/formRegister";

import "./components/globals.scss"
import "./components/Home.scss"
import Card from "./components/card";


function App() {

    const [data, setData] = useState({
        success: false,
        page: 1,
        total_pages: 1,
        total_users: 1,
        count: 1,
        links: {
            next_url: "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6",
            prev_url: ''
        },
        users: [],
    });
    /*const [error, setError] = useState(null);*/
    const [loading, setLoading] = useState(true)
    const [stateButton, setStateButton] = useState(false)

    function getUsers() {
        fetch(data.links.next_url)
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                    setLoading(false)
                })
            .catch((error) => {
                console.log("Ошибка загрузки")
            })
    }

    function handleClick() {
        setLoading(false)
        getUsers()

        if (data.total_pages - data.page === 1) setStateButton(true)

    }

    useEffect(() => {
        getUsers()

    }, [])


    return (
        <div className={"bg360"}>

            <header>
                <Menu/>
            </header>

            <main className={"main"}>

                <Imageframe/>


                <div className={"frameCards"} id={"Users"}>
                    <div className={"frameTopCard"}>
                        <div className={"titleCard"}>
                            <h1>Working with GET request</h1>
                            {loading && <Loader/>}
                        </div>
                        <div className={"cards"}>

                            {data.users.map((user) =>
                                <Card
                                    key={user.id}
                                    data={user}
                                />
                            )}
                        </div>
                    </div>
                    <button className={"buttonCard"} onClick={handleClick} disabled={stateButton}>
                        <div className={"p1"}>Show more</div>
                    </button>

                </div>

                <FormRegister/>

            </main>


        </div>
    );
}

export default App;
