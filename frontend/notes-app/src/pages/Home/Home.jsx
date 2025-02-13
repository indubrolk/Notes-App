import React from 'react';
import Navbar from "../../components/Navbar/Navbar.jsx";
import NoteCard from "../../components/Cards/NoteCard.jsx";

const Home = () => {
    return (
        <>

        <Navbar/>


            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4 mt-8">
                <NoteCard

                    title="Meeting on 14th February"
                    date="13th Feb 2025"
                    content="Meeting on ................"
                    tags="meeting"
                    isPinned={true}
                    onEdit={() => {}}
                    onDelete={() => {}}
                    onPinNote={() => {}}
                />
                    <NoteCard

                        title="Meeting on 14th February"
                        date="13th Feb 2025"
                        content="Meeting on ................"
                        tags="meeting"
                        isPinned={true}
                        onEdit={() => {}}
                        onDelete={() => {}}
                        onPinNote={() => {}}
                    />
                    <NoteCard

                        title="Meeting on 14th February"
                        date="13th Feb 2025"
                        content="Meeting on ................"
                        tags="meeting"
                        isPinned={true}
                        onEdit={() => {}}
                        onDelete={() => {}}
                        onPinNote={() => {}}
                    />

            </div>
            </div>
        </>
    );
};

export default Home;