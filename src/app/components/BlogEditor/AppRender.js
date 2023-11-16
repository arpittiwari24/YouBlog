import "./renderStyles.css";
import Editor from "./Editor";
import EditorRender from "./Blogrender";

export default function AppRender({dataToRender}) {
    return (
        <div className="AppRender">
            <EditorRender dataToRender={dataToRender} />
        </div>
    );
}
