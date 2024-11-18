function loadTemplate(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${file}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading template:', error);
        });
}

// GNB와 Footer 불러오기
document.addEventListener('DOMContentLoaded', () => {
    loadTemplate('gnb-container', 'gnb.html');
    loadTemplate('footer-container', 'footer.html');
});
