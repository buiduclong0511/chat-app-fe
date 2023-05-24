/**
 * subject: Chủ thể
 * event: Sự kiện
 * listener: Người nghe
 * dispatch / emit: Gửi đi
 */

const buttonEle = document.querySelector('button')
const ulEle = document.querySelector('ul')
const inputEle = document.querySelector('input')

buttonEle.addEventListener('click', (event) => {
    const message = inputEle.value.trim()
    if (!message) {
        return
    }

    const liEle = document.createElement('li')
    const spanEle = document.createElement('span')    
    const deleteBtnEle = document.createElement('button')
    spanEle.innerText = message
    deleteBtnEle.innerText = 'x'

    deleteBtnEle.addEventListener('click', (event) => {
        liEle.remove()
    })

    liEle.appendChild(spanEle)
    liEle.appendChild(deleteBtnEle)
    ulEle.appendChild(liEle)

    inputEle.value = ''
    inputEle.focus()
})

/**
 * Bài tập: 
 * Khi click vào nút send -> lấy nội dung của input
 *  Nếu có nội dung thì sẽ thêm 1 thẻ li với nội dung trên vào ul
 *  Ngược lại thì không làm gì
 */
