//Compoñente para enseñar cada imagen no grid de forma que non queden espacios nin se corte
import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 }

        //Creamos ref para acceder ao tamaño da imaxe
        this.imageRef = React.createRef();
    }

    //Despois de que a imaxe se renderice, accedemos a ela para modificara  porción de grid que ocupa
    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 150 + 1);
        this.setState({ spans: spans });
    }

    render() {
        const { description, urls } = this.props.img;

        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        )
    }
}

export default ImageCard;