function girisYap() {
    const kullaniciAdi = document.getElementById('kullaniciAdi').value;
    const sifre = document.getElementById('sifre').value;

    if (kullaniciAdi === 'Tersakan' && sifre === '1453') {
        window.location.href = 'anasayfa.html'; // Başarılı giriş durumunda anasayfa.html'ye yönlendir
    } else {
        alert('Kullanıcı adı veya şifre hatalı!'); // Hatalı giriş durumunda uyarı mesajı göster
    }
}

// Tarih ve saat güncelleme fonksiyonu (önceki koddan)
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const dateTime = now.toLocaleDateString('tr-TR', options);
    document.getElementById('date-time').textContent = dateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);