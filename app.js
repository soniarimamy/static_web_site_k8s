async function getPodName() {
    try {
        const response = await fetch('/pod-info');
        const data = await response.json();
        document.getElementById('pod-name').textContent = data.podName || 'Unknown';
    } catch (error) {
        document.getElementById('pod-name').textContent = 'Error loading';
    }
}

async function getInfo() {
    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = '<p>🔄 Récupération des infos...</p>';
    
    try {
        const response = await fetch('/api/info');
        const data = await response.json();
        infoDiv.innerHTML = `
            <div class="info-box">
                <p><strong>Pod Name:</strong> ${data.podName}</p>
                <p><strong>Node Name:</strong> ${data.nodeName}</p>
                <p><strong>Pod IP:</strong> ${data.podIP}</p>
                <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            </div>
        `;
    } catch (error) {
        infoDiv.innerHTML = '<p>❌ Erreur de connexion</p>';
    }
}

// Charger les infos au démarrage
getPodName();