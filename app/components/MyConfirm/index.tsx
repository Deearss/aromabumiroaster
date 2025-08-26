import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExclamationTriangle, FaTimes, FaCheck } from "react-icons/fa";

interface MyConfirmProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  type?: "warning" | "danger" | "info";
}

const MyConfirm = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = "Ya",
  cancelText = "Batal",
  type = "warning",
}: MyConfirmProps) => {
  const iconColors = {
    warning: "text-yellow-500",
    danger: "text-red-500",
    info: "text-blue-500",
  };

  const buttonColors = {
    warning: "bg-yellow-500 hover:bg-yellow-600",
    danger: "bg-red-500 hover:bg-red-600",
    info: "bg-blue-500 hover:bg-blue-600",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="insetcenter w-full h-screen bg-black/50 z-[9999] flexc"
            onClick={onCancel}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flexc gap-4 mb-4">
                <div
                  className={`flexcc w-12 h-12 rounded-full bg-gray-100 ${iconColors[type]}`}
                >
                  <FaExclamationTriangle className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary">{title}</h3>
                </div>
              </div>

              {/* Message */}
              <p className="text-text/80 mb-6 leading-relaxed">{message}</p>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={onCancel}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transall flexc gap-2"
                >
                  <FaTimes />
                  {cancelText}
                </button>
                <button
                  onClick={onConfirm}
                  className={`flex-1 text-white py-3 px-4 rounded-lg font-semibold transall flexc gap-2 ${buttonColors[type]}`}
                >
                  <FaCheck />
                  {confirmText}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MyConfirm;
