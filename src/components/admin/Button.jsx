import styles from '../../styles/admin/sidebar.module.css';

function Button({selected, text, onClickFunc}) {
    return (
        <button className={`${styles.button} ${selected ? styles.buttonSelected : styles.buttonUnselected}`} onClick={onClickFunc}>
            {text}
        </button>
    );
}

export default Button;