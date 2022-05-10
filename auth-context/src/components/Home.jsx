

import { useContext } from "react";
import React from "react";

import { AuthContext } from "../context/AuthContext";

const Home = () => {
    const { login } = useContext(AuthContext);
    return (
        <div className="Home">
            {login === "" ? (
                <h2 style={{color:"brown"}}> Login First So will your Token Number will DIsplay</h2>
            ) : (
                <div>
                    {" "}
                    <h2
                        style={{
                            fontSize: "35px",
                            color: "orange",
                            textAlign: "center"
                        }}
                    >
                        Login Successfully
                    </h2>
                    <h3 style={{

                        fontSize: "35px",
                        color: "tomato",
                        textAlign: "center"

                    }}>Token Number-{login}</h3>
                </div>
            )}
        </div>
    );
};

export default Home;