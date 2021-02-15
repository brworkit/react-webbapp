import './Rectangle.css';

const shape = (props) => {    
    return (
        <div className="Rectangle" style={{ 
            backgroundColor: props?.backgroundColor,
            width: props?.width,
            height: props?.height,
            left: props?.left,
            top: props?.top,
            right: props?.right,
            bottom: props?.bottom,
            float: props?.float,
            position: props?.position
         }}>
             {props.children}
        </div>
    )
}

export default shape