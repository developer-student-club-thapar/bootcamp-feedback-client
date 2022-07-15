const Modal = ({ setModalOpen, children }) => {
  return (
    <>
      <div
        className="overlay w-screen h-full fixed top-0 left-0 bg-black opacity-25"
        onClick={() => {
          setModalOpen(false);
        }}
      ></div>
      <div className="rounded-xl z-10 bg-white w-1/2 max-h-[90vh] overflow-y-scroll fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </>
  );
};

export default Modal;
