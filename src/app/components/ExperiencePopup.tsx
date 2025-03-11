import { motion } from 'framer-motion';

interface ExperiencePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const ExperiencePopup = ({ isOpen, onClose, title, content }: ExperiencePopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#1a1a1a] rounded-xl w-full max-w-2xl max-h-[90vh] flex flex-col relative border border-[#ffc876]"
      >
        <div className="sticky top-0 bg-[#1a1a1a] p-8 pb-4 rounded-t-xl border-b border-[#ffc876]/20 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-[#ffc876]">{title}</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-[#ffc876] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <div className="p-8 pt-4 overflow-y-auto">
          <div className="text-white">
            {content}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperiencePopup; 