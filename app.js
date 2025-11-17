document.addEventListener('DOMContentLoaded', function() {
    const emojiToggle = document.querySelector('.emoji-toggle');
    const emojiPicker = document.querySelector('.emoji-picker');
    const messageTextarea = document.getElementById('message');
    const emojis = document.querySelectorAll('.emoji');
    const contactForm = document.querySelector('.contact-form');
    const fileInput = document.getElementById('file');
    const imagePreview = document.getElementById('imagePreview');
    const messagesTableBody = document.getElementById('messagesTableBody');

    // Create modal for enlarged images
    createImageModal();

    // Load messages from localStorage
    loadMessages();

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

    // Image preview
    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
                imagePreview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        } else {
            imagePreview.style.display = 'none';
            imagePreview.innerHTML = '';
        }
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const file = fileInput.files[0];

        if (!name || !email || !message) {
            alert('لطفاً تمام فیلدهای ضروری را پر کنید.');
            return;
        }

        let imageData = null;
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imageData = e.target.result;
                // Create message object after image is loaded
                const messageObj = {
                    id: Date.now(),
                    name: name,
                    email: email,
                    message: message,
                    image: imageData,
                    timestamp: new Date().toLocaleString('fa-IR')
                };

                // Save message
                saveMessage(messageObj);

                // Add to table
                addMessageToTable(messageObj);

                // Reset form
                contactForm.reset();
                imagePreview.style.display = 'none';
                imagePreview.innerHTML = '';

                alert('پیام با موفقیت ارسال شد!');
            }
            reader.readAsDataURL(file);
        } else {
            // Create message object without image
            const messageObj = {
                id: Date.now(),
                name: name,
                email: email,
                message: message,
                image: null,
                timestamp: new Date().toLocaleString('fa-IR')
            };

            // Save message
            saveMessage(messageObj);

            // Add to table
            addMessageToTable(messageObj);

            // Reset form
            contactForm.reset();
            imagePreview.style.display = 'none';
            imagePreview.innerHTML = '';

            alert('پیام با موفقیت ارسال شد!');
        }
    });

    function saveMessage(message) {
        let messages = JSON.parse(localStorage.getItem('sentMessages')) || [];
        messages.unshift(message); // Add to beginning
        localStorage.setItem('sentMessages', JSON.stringify(messages));
    }

    function loadMessages() {
        let messages = JSON.parse(localStorage.getItem('sentMessages')) || [];
        messagesTableBody.innerHTML = '';

        if (messages.length === 0) {
            messagesTableBody.innerHTML = `
        <tr>
          <td colspan="5" class="no-messages">هنوز پیامی ارسال نشده است</td>
        </tr>
      `;
            return;
        }

        messages.forEach(message => {
            addMessageToTable(message);
        });
    }

    function addMessageToTable(message) {
        // Remove "no messages" row if it exists
        const noMessagesRow = messagesTableBody.querySelector('.no-messages');
        if (noMessagesRow) {
            noMessagesRow.remove();
        }

        const row = document.createElement('tr');

        let imageContent = '<span class="no-image">بدون عکس</span>';
        if (message.image) {
            imageContent = `<img src="${message.image}" alt="پیام تصویری" onclick="openImageModal('${message.image}')">`;
        }

        row.innerHTML = `
      <td>${message.name}</td>
      <td>${message.email}</td>
      <td class="message-content" title="${message.message}">${message.message}</td>
      <td class="message-image">${imageContent}</td>
      <td>${message.timestamp}</td>
    `;
        messagesTableBody.appendChild(row);
    }

    function createImageModal() {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
      <span class="close-modal">&times;</span>
      <img class="image-modal-content" id="modalImage">
    `;
        document.body.appendChild(modal);

        // Close modal when clicking X
        modal.querySelector('.close-modal').addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside the image
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

// Global function to open image modal
function openImageModal(imageSrc) {
    const modal = document.querySelector('.image-modal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}