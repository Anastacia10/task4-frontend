import React from "react";
import { AuthorizationForm } from "../components";
import styles from "./index.module.scss";

export function AuthorizationPage(props){
    return <div className={styles.root}>
            <AuthorizationForm></AuthorizationForm>
        </div>
}