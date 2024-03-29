import React from "react";
import styles from "./FormsControls.module.css";

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={styles.formsControls + " " + (hasError ? styles.error : "")}>
        {props.children}
        {hasError && <div className={styles.errorText}>{meta.error}</div>}
    </div>
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
}
