"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaTimes,
  FaTrash,
  FaShoppingCart,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { useHydratedCart } from "../../hooks/useHydratedCart";
import { useEffect, useState } from "react";
import MyConfirm from "../MyConfirm";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const {
    items,
    removeFromCart,
    clearCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useHydratedCart();

  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean;
    itemId: string;
    itemName: string;
  }>({
    isOpen: false,
    itemId: "",
    itemName: "",
  });

  // Helper functions untuk quantity management
  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      const item = items.find((item) => item.id === itemId);
      setConfirmDialog({
        isOpen: true,
        itemId,
        itemName: item?.name || "",
      });
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleQuantityInput = (itemId: string, value: string) => {
    const numValue = parseInt(value) || 0;
    handleQuantityChange(itemId, numValue);
  };

  const confirmRemoveItem = () => {
    removeFromCart(confirmDialog.itemId);
    setConfirmDialog({ isOpen: false, itemId: "", itemName: "" });
  };

  const cancelRemoveItem = () => {
    setConfirmDialog({ isOpen: false, itemId: "", itemName: "" });
  };

  const totalPrice = getTotalPrice();
  const itemCount = getTotalItems();

  // Handle escape key only
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      <>
        {/* Transparent Backdrop - dengan sedikit background untuk smooth transition */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, display: "none" }}
            animate={
              isOpen
                ? { opacity: 1, display: "flex" }
                : { opacity: 0, display: "none" }
            }
            exit={{ opacity: 0, display: "none" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.4,
            }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 w-full h-screen z-[90]"
          />
        </AnimatePresence>

        {/* Cart Modal */}
        <AnimatePresence>
          <motion.div
            initial={{ x: "100%" }}
            animate={isOpen ? { x: 0 } : { x: "100%" }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.4,
            }}
            className="fixed right-0 top-0 flexcc h-[100dvh] w-full max-w-[80vw] lg:max-w-[25vw] bg-secondary shadow-2xl z-[95] overflow-hidden border-l-2 border-primary/20"
          >
            {/* Header */}
            <div className="bg-primary text-secondary h-[100px] px-6 w-full flexc justify-between relative">
              <div className="flexc gap-3">
                <h2 className="text-xl font-bold">Keranjangmu</h2>
              </div>
              <button
                onClick={onClose}
                className="p-3.5 mr-2 hover:bg-primary_dark rounded-lg transition-colors"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex flex-col h-[100%] overflow-hidden w-full">
              {/* Items List */}
              <div className="flexcc flex-1 !justify-start overflow-y-auto">
                {itemCount === 0 ? (
                  <div className="flexcc flex-col gap-4 p-8 text-center">
                    <FaShoppingCart className="text-4xl text-accent/50" />
                    <div>
                      <p className="text-lg font-semibold text-primary">
                        Keranjang Kosong
                      </p>
                      <p className="text-sm text-accent mt-1">
                        Tambahkan produk kopi untuk memulai belanja
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-2.5 gap-2.5 w-full flexcc">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white w-full rounded-lg p-4 shadow-sm border border-secondary"
                      >
                        <div className="bg-primary/50 w-full h-40 lg:h-80 mb-3 overflow-hidden rounded">
                          <Image
                            src={item.image || ""}
                            alt={item.name}
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flexc w-full justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-primary text-sm">
                              {item.name}
                            </h3>
                            <p className="text-xs text-accent mb-1">
                              {item.origin}
                            </p>
                            <p className="font-bold text-accent">
                              Rp{item.price.toLocaleString("id-ID")}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setConfirmDialog({
                                isOpen: true,
                                itemId: item.id,
                                itemName: item.name,
                              });
                            }}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            title="Hapus dari keranjang"
                          >
                            <FaTrash className="text-sm" />
                          </button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flexc justify-between">
                          <div className="flexc gap-2">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              className="flexcc w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                              <FaMinus className="text-xs" />
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityInput(item.id, e.target.value)
                              }
                              className="w-16 text-center border border-gray-300 rounded-lg py-1 text-sm focus:border-accent focus:outline-none"
                              min="1"
                            />
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              className="flexcc w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                              <FaPlus className="text-xs" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">Subtotal</p>
                            <p className="font-bold text-primary text-sm">
                              Rp
                              {(item.price * item.quantity).toLocaleString(
                                "id-ID"
                              )}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {itemCount > 0 && (
                <div className="border-t border-accent/20 p-6 bg-white">
                  {/* Total */}
                  <div className="flexc justify-between mb-4">
                    <span className="text-sm font-semibold text-primary">
                      Total ({itemCount} item{itemCount > 1 ? "" : ""})
                    </span>
                    <span className="text-base font-bold text-accent">
                      Rp{totalPrice.toLocaleString("id-ID")}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 text-sm">
                    <button
                      onClick={() => {
                        alert(
                          "Terima kasih telah berbelanja di Aroma Bumi Roaster, semoga harimu selalu menyenangkan 🙏😄🙏"
                        );
                        clearCart();
                      }}
                      className="w-full bg-primary text-secondary py-3 rounded-lg font-semibold hover:bg-primary_dark transition-colors"
                    >
                      Beli Sekarang
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full border-2 border-red-500 text-red-500 py-2 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-colors"
                    >
                      Kosongkan Keranjang
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </>

      {/* Confirmation Dialog */}
      <MyConfirm
        isOpen={confirmDialog.isOpen}
        title="Hapus Item dari Keranjang"
        message={`Apakah Anda yakin ingin menghapus "${confirmDialog.itemName}" dari keranjang?`}
        onConfirm={confirmRemoveItem}
        onCancel={cancelRemoveItem}
        confirmText="Hapus"
        cancelText="Batal"
        type="warning"
      />
    </>
  );
};

export default CartModal;
