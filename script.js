// Şu anda çalan müzikleri ve ilgili kutuları takip etmek için bir Map kullanalım
const calanMuzikler = new Map(); 

// Müzik çalan/durduran ana fonksiyon
function playMusic(muzikId) {
    const hedefMuzik = document.getElementById(muzikId);
    const muzikKutusu = document.querySelector(`[onclick="playMusic('${muzikId}')"]`);

    // Eğer müzik şu anda çalıyorsa, durdur
    if (hedefMuzik.paused === false) {
        hedefMuzik.pause();
        hedefMuzik.currentTime = 0; // İsteğe bağlı: Başa sar
        muzikKutusu.classList.remove('aktif'); // Vurgulamayı kaldır
        calanMuzikler.delete(muzikId); // Map'ten kaldır
        
    } else {
        // Eğer müzik şu anda durmuşsa, çal
        hedefMuzik.play();
        muzikKutusu.classList.add('aktif'); // Vurgula
        calanMuzikler.set(muzikId, hedefMuzik); // Map'e ekle
    }
}