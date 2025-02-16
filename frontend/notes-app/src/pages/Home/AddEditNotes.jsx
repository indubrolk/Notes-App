import React, {useState} from "react";
import TagInput from "../../components/input/TagInput.jsx";

const AddEditNotes = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
    return (
        <div>
            <div className="flex flex-col gap-2">
                <label className="input-label">Title</label>
                <input
                type="text"
                className="text-2xl text-slate-950 outline-none"
                placeholder="Go To Gym At 5"
                value={title}
                onChange={({target}) => setTitle(target.value)}
                />
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <label className="input-label">Content</label>
                <textarea
                    type="text"
                    className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded "
                    placeholder="Content"
                    rows={10}
                    value={content}
                    onChange={({target}) => setContent(target.value)}
                    />
            </div>
            <div className="mt-3">
                <label className="input-label">Tags</label>
                <TagInput tags={tags} setTags={setTags} />
            </div>
            <button className="btn-primary font-medium mt-5 p-3" onClick={() => {}}>
                Add
            </button>
        </div>

    )
}

export default AddEditNotes;