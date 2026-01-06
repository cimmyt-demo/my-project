/**
 * Stale UI Component
 * TODO: This component is outdated and should be replaced with the new design system.
 */

import React from "react";

function StaleUserCard(props) {
    const { username, email, role } = props;

    return (
        <div style={{
            border: "1px solid #999",
            padding: "12px",
            borderRadius: "4px",
            backgroundColor: "#f0f0f0",
            maxWidth: "300px"
        }}>
            <h3>👤 User Profile (Legacy)</h3>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Role:</strong> {role}</p>
            <small style={{ color: "#777" }}>
                This component is deprecated and scheduled for removal.
            </small>
        </div>
    );
}

export default StaleUserCard;
