import React from "react";
import { RegistrationForm } from "../components";
import styles from "./index.module.scss";

export function RegistrationPage(props){
    return <div className={styles.root}>
            <RegistrationForm></RegistrationForm>
        </div>
}