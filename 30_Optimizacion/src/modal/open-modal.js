import ModalVideo from 'modal-video';
import 'modal-video/css/modal-video.min.css';

export const openModal = videoId => {
    console.log(videoId);
    
    const button = document.createElement('button');
    button.dataset.videoId = videoId;

    new ModalVideo([button]);
    button.click();
}