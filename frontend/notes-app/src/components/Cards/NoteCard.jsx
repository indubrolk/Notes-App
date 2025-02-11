import React from 'react'


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
                    <h6 className="text-sm font-medium"></h6>
                    <span className="text-xs text-slate-500">{date}</span>
                </div>
            </div>
        </div>

    );

};

export default NoteCard;