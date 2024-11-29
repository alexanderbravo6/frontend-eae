import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";

const TemplateModal = ({ isOpen, className, onOpenChange, title, children, ...props }) => {
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
            <ModalContent>
                {(onClose) => (

                    <>
                        <ModalHeader className=" mb-5 bg-[#338ef7]" >
                            <h2 className="text-white uppercase">
                                {title}
                            </h2>
                        </ModalHeader>

                        {children}

                    </>

                )}
            </ModalContent>
        </Modal >
    );
};

export default TemplateModal;