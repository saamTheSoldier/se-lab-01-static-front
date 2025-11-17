document.addEventListener('DOMContentLoaded', function() {

    const emojiToggle = document.querySelector('.emoji-toggle');
    const emojiPicker = document.querySelector('.emoji-picker');
    const messageTextarea = document.getElementById('message');
    const emojis = document.querySelectorAll('.emoji');

    // Toggle emoji picker
    emojiToggle.addEventListener('click', function() {
        emojiPicker.classList.toggle('show');
    });

    // Add emoji to textarea
    emojis.forEach(emoji => {
        emoji.addEventListener('click', function() {
            const emojiChar = this.textContent;
            const start = messageTextarea.selectionStart;
            const end = messageTextarea.selectionEnd;
            const text = messageTextarea.value;

            messageTextarea.value = text.substring(0, start) + emojiChar + text.substring(end);
            messageTextarea.focus();
            messageTextarea.selectionStart = messageTextarea.selectionEnd = start + emojiChar.length;

            // Close picker after selection
            emojiPicker.classList.remove('show');
        });
    });

    // Close emoji picker when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.emoji-picker-container')) {
            emojiPicker.classList.remove('show');
        }});

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