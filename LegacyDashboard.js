/**
 * Legacy Dashboard Page
 * This page still uses old UI components and should be refactored.
 */

import React from "react";
import StaleUserCard from "../components/StaleUserCard";

function LegacyDashboard() {
    const dummyUser = {
        username: "legacy_user_01",
        email: "legacy@example.com",
        role: "admin"
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Legacy Dashboard</h2>
            <p>
                This dashboard is still using outdated UI components.
                It will be replaced in a future update.
            </p>

            <StaleUserCard
                username={dummyUser.username}
                email={dummyUser.email}
                role={dummyUser.role}
            />
        </div>
    );
}

export default LegacyDashboard;
