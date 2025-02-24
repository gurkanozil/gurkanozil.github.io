import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}
export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 md:bg-black/50 md:backdrop-blur-sm z-50"
                onClick={onClose}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                transition={{ type: "spring", duration: 0.3 }}
                className="fixed left-[50%] top-[50%] z-50 max-w-[95vw] max-h-[95vh] -translate-x-1/2 -translate-y-1/2 md:block hidden"
              >
                <div className="relative">
                  <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 p-2 rounded-full bg-gray-800/80 text-white hover:bg-gray-700/80"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <img
                    src={imageUrl}
                    alt={title}
                    className="rounded-lg shadow-2xl max-w-full max-h-[85vh] object-contain"
                  />
                  <p className="text-center text-white mt-2 text-lg">{title}</p>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};
