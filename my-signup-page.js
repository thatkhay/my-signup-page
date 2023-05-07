const whitePage = document.querySelector('.mainWhiteDiv');
const unReadNotification = document.querySelector('.spanNo');
const notificationFour = document.querySelector('.notDiv4');
const message = document.querySelector('.message');
const markAllAsRead = document.querySelector('.topRight');

let notificationCount = 7;

unReadNotification.innerHTML = notificationCount;
const notificationOne = document.querySelector('.notDiv1');
const icons = document.querySelectorAll('.icon');


const notifications = document.querySelectorAll('.notification');
notifications.forEach(notification => {
    notification.addEventListener('click', () => {
      notification.style.backgroundColor = 'white';
      for (let i = 0; i < notifications.length; i++) {
        icons[i].style.display = 'none'
    
      }
    });
  });


  markAllAsRead.addEventListener('click', markAll)

  function markAll() {
    for (let i = 0; i < notifications.length; i++) {
      notifications[i].style.backgroundColor = 'white'
  
    }
    for (let i = 0; i < notifications.length; i++) {
      icons[i].style.display = 'none'
  
    }

    
  }

notificationFour.addEventListener('click', onTap)

function onTap() {
    
    message.style.display = 'flex'
}