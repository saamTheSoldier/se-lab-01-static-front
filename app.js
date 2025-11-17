document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const fileInput = document.getElementById('file');
    const imagePreview = document.getElementById('imagePreview');

    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            };

            reader.readAsDataURL(file);
        } else {
            imagePreview.innerHTML = '';
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.reset();
        imagePreview.innerHTML = '';
        alert('پیام شما با موفقیت ارسال شد!');
    });
});