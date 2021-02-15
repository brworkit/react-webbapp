import './Circle.css';

const shape = (props) => {
    return (
        <div className="Circle" style={{ 
            backgroundColor: props?.backgroundColor,
            width: props?.side,
            height: props?.side,
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