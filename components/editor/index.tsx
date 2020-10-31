import editorStyles from "./editor.module.css";

interface EditorProps {
    onChange: Function
}

export default function Editor(props: EditorProps) {
    return (
        <div className={editorStyles.browser}>
            <div className={editorStyles.browser__header}>
                <i></i>
                <i></i>
                <i></i>
            </div>

                <textarea name="" cols={30} rows={10} className={editorStyles.browser__content} onChange={(ev) => props.onChange(ev.target.value)}></textarea>
        </div>
    );
}