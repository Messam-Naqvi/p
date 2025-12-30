import React, { ReactNode } from "react";

// Primary Button (like MUI contained purple)
export const PrimaryButton = ({
  children,
  onClick,
  href,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}) => {
  return href ? (
    <a
      href={href}
      className={`bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition ${className}`}
    >
      {children}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition ${className}`}
    >
      {children}
    </button>
  );
};

// Outline Button (like MUI outlined purple)
export const OutlineButton = ({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-purple-700 text-white px-4 py-2 rounded hover:bg-purple-700 hover:text-white transition ${className}`}
    >
      {children}
    </button>
  );
};

// Modal Container (dark modal)
export const ModalContainer = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "black",
          padding: "2rem",
          borderRadius: "8px",
          maxWidth: "600px",
          width: "90%",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
