const imagen = document.querySelector(".img");
const request = new Request('https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_960/public/purina-porque-lloran-los-gatos.png?itok=LgOSocae')


fetch(request)
    .then(res=> res.blob())
    .then(img => imagen.src = URL.createObjectURL(img))