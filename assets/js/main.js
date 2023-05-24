const socket = io("http://127.0.0.1:3000"); // Khởi tạo connect đến server socket

let username = ''
while(!username || !username.trim()) {
    username = window.prompt('Vui lòng nhập tên để tiếp tục.')
}

const sendBtnEle = document.querySelector('.send-btn')
const messageInputEle = document.querySelector('.message-input')
// Ràng buộc sự kiện click cho nút send
sendBtnEle.addEventListener('click', () => {
    // Lấy content của input
    const content = messageInputEle.value.trim()
    if (!content) { // Kiểm tra content có rỗng hay không, nếu rỗng thì return
        return
    }

    // Emit event client_send_message đến server
    socket.emit('client_send_message', {
        content,
        username
    })

    messageInputEle.value = ''
    messageInputEle.focus()
})

socket.on('server_send_message', (data) => {
    render(data)
})

const render = (message) => {
    const messageListEle = document.querySelector('.message-list')
    const messageItemEle = document.createElement('li')
    
    const nameEle = document.createElement('strong')
    nameEle.textContent = `${message.username}: `
    const contentEle = document.createElement('span')
    contentEle.textContent = message.content

    messageItemEle.append(nameEle, contentEle)
    messageListEle.appendChild(messageItemEle)
}

socket.on('server_send_current_messages', (data) => {
    data.forEach(message => render(message))
})

/**
 * Gửi tin nhắn lên server 
 * Server sẽ gửi lại tin nhắn cho toàn bộ client
 * Client nhận được tin nhắn -> createElement -> appendChild
 */
