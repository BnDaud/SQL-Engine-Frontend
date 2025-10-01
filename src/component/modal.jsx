const Modal = ({ toggleModal, modal: { details, id, name } }) => {
  return (
    <div
      onClick={() => toggleModal(id)}
      className="fixed flex items-center justify-center inset-0 bg-black/30 backdrop-blur-sm z-50"
    >
      <div
        className="w-1/2 h-1/2 bg-gray_light p-6 rounded-lg shadow-lg overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h2 className="text-xl font-bold mb-4 capitalize">{name}</h2>
        <p dangerouslySetInnerHTML={{ __html: details }} />
      </div>
    </div>
  );
};

export default Modal;
