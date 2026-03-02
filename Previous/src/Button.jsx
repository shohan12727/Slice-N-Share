import './index.css';

function Button() {
    const styles = {
        color: "black",
        padding: "10px 10px",
        backgroundColor: "rgba(0, 255, 255, 0.438)"

    }
    return (
        <button style={styles} >Click me</button>
    );
}

export default Button;

