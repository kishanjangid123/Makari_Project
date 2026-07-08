import React from "react";

interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  name?: string;
  disabled?: boolean;
  onChange: (e: any) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  name,
  disabled = false,
  onChange,
}) => {
  return (
    <div style={styles.container}>
      {label && <label style={styles.label}>{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        disabled={disabled}
        onChange={onChange}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
    marginBottom: "16px",
  },

  label: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#333",
  },

  input: {
    padding: "10px 12px",
    fontSize: "14px",
    border: "1px solid #d9d9d9",
    borderRadius: "6px",
    outline: "none",
  },
};

export default InputField;