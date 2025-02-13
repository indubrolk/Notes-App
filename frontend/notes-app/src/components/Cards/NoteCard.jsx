import React from 'react'
import {MdOutlinePushPin} from "react-icons/md";
import {MdCreate, MdDelete} from "react-icons/md";


const NoteCard = (
    {
        title,
        date,
        content,
        tags,
        isPinned,
        onEdit,
        onDelete,
        onPinNote,
    }
) => {
    return(

        <div>
            <div>
                <div>
                    <h6 className="text-sm font-medium">{title}</h6>
                    <span className="text-xs text-slate-500">{date}</span>
                </div>

                <MdOutlinePushPin className="" onClick={onPinNote}/>
            </div>

            <p className="">{content?.slice(0, 60)}</p>

            <div></div>

        </div>

    );

};

export default NoteCard;