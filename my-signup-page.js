const whitePage = document.querySelector('.mainWhiteDiv');
const unReadNotification = document.querySelector('.spanNo');
const notificationFour = document.querySelector('.notDiv4');
const message = document.querySelector('.message');

let notificationCount = 7;

unReadNotification.innerHTML = notificationCount;
const notificationOne = document.querySelector('.notDiv1');



const notifications = document.querySelectorAll('.notification');
notifications.forEach(notification => {
    notification.addEventListener('click', () => {
        const icons = document.querySelectorAll('.icon');
        icons.forEach(icon => {
            icon.style.display = 'none'
        });
      notification.style.backgroundColor = 'white';
      
    });
  });

notificationFour.addEventListener('click', onTap)

function onTap() {
    
    message.style.display = 'flex'
}