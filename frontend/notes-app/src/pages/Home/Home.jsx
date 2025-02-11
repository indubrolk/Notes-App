import React from 'react';
import Navbar from "../../components/Navbar/Navbar.jsx";
import NoteCard from "../../components/Cards/NoteCard.jsx";

const Home = () => {
    return (
        <>
        <Navbar/>
            <div className="container mx-auto">
                <NoteCard />
            </div>
        </>
    );
};

export default Home;