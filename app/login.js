const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('error') === 'true') {
  const banner = document.getElementById('errorBanner');
  if (banner) {
    banner.style.display = 'block';
  }
}
