export const modalListener = (event) => {
    event.preventDefault();
    const link = event.target.parentElement;

    if (link && link.classList.contains('js-video-link')) {
        console.log(link.dataset.videoid);
    }

}