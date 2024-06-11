import Frame from "../../components/frame";
import Modal from "../../components/modal";

export default function PhotoModal() {
    const photo =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXID5NQ4IompY-CCfEyDuTFGdjM50tRFie_w&usqp=CAU";

    return (
        <Modal>
            <Frame photo={photo} />
        </Modal>
    );
}