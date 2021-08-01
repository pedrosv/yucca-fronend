import NavButton from "./NavigateButton"

import "../styles/footer.css"

function Footer(props) {

    const previous= props.previous
    const next= props.next

    return (
        <footer id="footer">
            <NavButton path={previous} >Voltar</NavButton>
            <NavButton path={next}>Proximo</NavButton>
            {console.log(previous)}
        </footer>
        
    );
}

export default Footer;