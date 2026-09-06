const btns=document.querySelectorAll('.btn-modal');
const modal=document.querySelector('.bloc-modal');
const close =document.querySelector('.close');
 const index=document.querySelector('.bloc-modal img');
 btns.forEach(btn => {
   
    btn.addEventListener('click', (e) => {
        const dataIndex = e.target.getAttribute('data-index');
        let imageExtension = '.png'; // امتداد الصورة الافتراضي
 
        // تحديد الامتداد بناءً على القيمة المحددة
        if (dataIndex === '1') {
            imageExtension = '.jpg';
        } else if (dataIndex === '2') {
            imageExtension = '.webp';
        } else if (dataIndex === '3') {
            imageExtension = '.png';
        }else if (dataIndex === '4') {
            imageExtension = '.webp';
        }else if (dataIndex === '5') {
            imageExtension = '.webp';
        }else if (dataIndex === '6') {
            imageExtension = '.jfif';
        }else if (dataIndex === '7') {
            imageExtension = '.JPG';
        }else if (dataIndex === '8') {
            imageExtension = '.JPG';
        }else if (dataIndex === '9') {
            imageExtension = '.JPG';
        }
 
        index.src = `equip-${dataIndex}${imageExtension}`;
        modal.classList.add('active-modal');
    });
   
 });
 close.addEventListener('click', () => {
    modal.classList.remove('active-modal');
  });


