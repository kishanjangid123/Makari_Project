import React from "react";
import CustomBtn from "./CustomButton";

interface WorkspaceCardProps {
    title: string;
    description: string;
    buttonText: string;
    onButtonClick: () => void;
    type?: "primary" | "default" | "dashed";
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({
    title,
    description,
    buttonText,
    onButtonClick,
    type,
}) => {
    return (
        <div style={styles.card}>
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.description}>{description}</p>
            <CustomBtn
                text={buttonText}
                onClick={onButtonClick}
                type={type}
        
            />
        </div>
    );
};

const styles = {
    card: {
        width: "320px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        background: "#fff",
    },

    title: {
        margin: 0,
        marginBottom: "10px",
        fontSize: "20px",
    },

    description: {
        marginBottom: "20px",
        color: "#555",
        fontSize: "14px",
    },
};

export default WorkspaceCard;