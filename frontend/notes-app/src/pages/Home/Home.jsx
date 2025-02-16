import React from 'react';
import Navbar from "../../components/Navbar/Navbar.jsx";
import NoteCard from "../../components/Cards/NoteCard.jsx";
import AddEditNotes from "./AddEditNotes.jsx";
import Modal from "react-modal";
import {useState} from "react";
import {MdAdd} from "react-icons/md";


const Home = () => {
    const[openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: "add",
        data: null,
    });

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



            </div>
            </div>

            <button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500 hover:bg-blue-600 absolute right-10 bottom-10" onClick={() => {
                setOpenAddEditModal({isShown: true, type: "add", data: null});
            }}

            >
                <MdAdd className="text-[32px] text-white"/>
            </button>

            <Modal
                isOpen={openAddEditModal.isShown}
                onRequestClose={() => {}}
                style={{
                    overlay:{
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                    }
                }}
                contentLabel=""
                className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-15 overflow-scroll"
                >

                <AddEditNotes
                    onClose={() => {
                        setOpenAddEditModal({ isShown: false, type: "add", data: null });
                    }}
                />
            </Modal>
        </>
    );
};

export default Home;