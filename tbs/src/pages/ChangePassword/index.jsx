import { ProfileMenu } from "src/components/ProfileMenu";
import React from "react";
import Layout from "src/components/Layouts/Layout";
import { ChangePasswordComponent } from "src/components/ChangePassword";

export default function ChangePassword() {
    return (
        <div>
            <Layout>
                <ChangePasswordComponent/>
            </Layout>

        </div>
    )
}