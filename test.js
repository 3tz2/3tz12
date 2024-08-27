
/*           */
    window.onload = function() {
        document.querySelector('.navbar').style.top = '0';
    }
    /*           */
    document.getElementById("image-navbar").addEventListener("click", function() {
        window.location.href = "index.html";
    });
/*           */
document.querySelectorAll('.image-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      // The following line will redirect to the href specified in the clicked image link
      window.location.href = this.getAttribute('href');
    });
  });
  
      /*           */
  
      document.getElementById("menu-toggle").addEventListener("click", function() {
        document.querySelector(".menu-items").classList.toggle("active");
      });
      

// 
  
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.querySelector(".menu-items-home").classList.toggle("active");
});
// 
document.addEventListener('DOMContentLoaded', function() {
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const contents = document.querySelectorAll('.content');

  sidebarItems.forEach(item => {
      item.addEventListener('click', function() {
          // إزالة التفعيل من كل العناصر
          sidebarItems.forEach(el => el.classList.remove('active'));
          contents.forEach(content => content.classList.remove('active'));

          // تفعيل العنصر الحالي
          item.classList.add('active');
          const targetId = item.getAttribute('data-target');
          const targetContent = document.getElementById(targetId);
          contents.forEach(content => {
              if (content !== targetContent) {
                  content.style.display = 'none';
                  content.style.opacity = '0';
              }
          });
          targetContent.style.display = 'block';
          setTimeout(() => {
              targetContent.classList.add('active');
              targetContent.style.opacity = '1';
          }, 10); // تأخير قصير للسماح بعرض العنصر قبل تشغيل الأنميشن
      });
  });
});


   



