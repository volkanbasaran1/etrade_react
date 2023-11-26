![ekran](https://github.com/volkanbasaran1/etrade_react/assets/76842256/42040ed6-264a-48e0-9c43-15ea266bf8f7)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>E-Ticaret Uygulaması</h1>
    <h2>Ürünler</h2>
    <ul>
        <li>
            <strong>Ürün Adı:</strong> Akıllı Telefon
            <ul>
                <li><strong>Fiyat:</strong> $599.99</li>
                <li><strong>Stok Durumu:</strong> 50 adet</li>
                <li><strong>İnceleme:</strong> Harika bir telefon!</li>
                <li><strong>Sepete Ekle:</strong> <code>POST /api/cart/add</code></li>
            </ul>
        </li>
        <li>
            <strong>Ürün Adı:</strong> Laptop Bilgisayar
            <ul>
                <li><strong>Fiyat:</strong> $999.99</li>
                <li><strong>Stok Durumu:</strong> 20 adet</li>
                <li><strong>İnceleme:</strong> Hafif ve güçlü!</li>
                <li><strong>Sepete Ekle:</strong> <code>POST /api/cart/add</code></li>
            </ul>
        </li>
        <!-- Diğer ürünler buraya eklenebilir -->
    </ul>
    <h2>Sepet</h2>
    <ul>
        <li>
            <strong>Ürün Adı:</strong> Akıllı Telefon
            <ul>
                <li><strong>Fiyat:</strong> $599.99</li>
                <li><strong>Adet:</strong> 2</li>
                <li><strong>Toplam:</strong> $1199.98</li>
                <li><strong>Kaldır:</strong> <code>DELETE /api/cart/remove/1</code></li>
            </ul>
        </li>
    </ul>
    <h2>Nasıl Başlarım?</h2>
    <p>Projeyi yerel makinenize klonlayın ve bağımlılıkları yükleyin:</p>
    <pre><code>git clone https://github.com/kullanici/adiniz/e-ticaret-uygulamasi.git
cd e-ticaret-uygulamasi
npm install
npm start
    </code></pre>
    <p>Uygulama <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> adresinde çalışacaktır.</p>
    <h2>Lisans</h2>
    <p>Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için <a href="LICENSE" target="_blank">LICENSE</a> dosyasına bakınız.</p>
</body>
</html>

