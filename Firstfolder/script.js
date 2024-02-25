function toggleImageSize(img) {
    if (img.classList.contains('maximized')) {
        img.classList.remove('maximized');
    } else {
        img.classList.add('maximized');
    }
}
