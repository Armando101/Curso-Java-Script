export const modalListener = (event) => {
    event.preventDefault();
    const link = event.target.parentElement;
    
    if (link && link.classList.contains('js-video-link')) {
        const video = link.dataset.videoid;
        // Lazy loading
        import(/*webpackChunkName: "modal-video" */ './open-modal').then(({ openModal  }) => {
            openModal(video);
        });
    }

}