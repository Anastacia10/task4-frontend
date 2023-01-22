import React from "react";
import styles from "./index.module.scss";
import { UsersTable } from "../components/usersTable";

export function UserAccountPage(props){
    return <div className={styles.root}>
            <UsersTable></UsersTable>
        </div>
}