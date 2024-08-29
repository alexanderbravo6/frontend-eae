import { Modal } from "@nextui-org/react";

const TemplateBaseModal = ({ isOpen, className, onOpenChange, children, ...props }) => {
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            placement="top-center"
            backdrop={"blur"}
            className={`max-h-[90vh] max-sm:w-full overflow-auto ${className}`}
            {...props}
        >
            {children}
        </Modal>
    );
};

export default TemplateBaseModal;