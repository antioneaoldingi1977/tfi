document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

  // При загрузке страницы показываем визуальное окно
  overlay.style.display = 'block';

  // Закрываем окно при нажатии на кнопку "Закрыть"
  closeBtn.addEventListener('click', function () {
    overlay.style.display = 'none';
  });
});
