import Menu from "./Menu";

function BaseLayout (props) {
    return (
        <>
        
        <div>
            {props.children}
        </div>
        </>
    )
}

export default BaseLayout;