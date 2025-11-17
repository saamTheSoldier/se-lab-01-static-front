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
        }
    });
});