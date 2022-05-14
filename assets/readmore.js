const cari = document.querySelectorAll('.sepatua p');
for ( let i = 0; i < cari.length; i++ ){
  const pisahkan = cari[i].innerHTML;
  const jumlahkarakter = 300;
  if ( pisahkan.length > jumlahkarakter) {
  const treadless = pisahkan.substr(0, jumlahkarakter);
  const treadless1 = treadless.substr(0, treadless.lastIndexOf(" ") + 1);
  const readmore = pisahkan.substr(treadless1.length, pisahkan.length);
  cari[i].innerHTML = treadless1;

  const createtombol = document.createElement('button');
  const kata = document.createTextNode('Readmore');
  createtombol.appendChild(kata);
  createtombol.setAttribute('class', 'read-more');
  cari[i].append(createtombol);


  createtombol.onclick = function(){
    if ( this.className.indexOf('read-more') > -1) {
          cari[i].innerHTML = treadless1 + readmore;
           this.innerText = "Readless";
           this.classList.remove('read-more');
          }else {
           cari[i].innerHTML = treadless;
           this.innerText = "Readmore";
           this.classList.add('read-more');
         }
         cari[i].append(this);
         };
}
}
