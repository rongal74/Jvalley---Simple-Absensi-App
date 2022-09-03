let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

let absensi_data = [];

absensi_form.addEventListener('submit', (event) => {
  // mencegah reload page
  event.preventDefault();

  let fullname = event.target.fullname.value;

  if (fullname == '') {
    alert('Silahkan masukkan nama lengkap');
    return;
  }

  absensi_data.push({
    nama_lengkap: fullname,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });

  event.target.fullname.value = '';
  // console.log(absensi_data);

  renderToHtml();
});

function renderToHtml() {
  // reset data
  root.innerHTML = '';

  // mapping data from array
  absensi_data.forEach((e, i) => {
    root.innerHTML += `
      <div class="card" draggable="true" ondragend="handleDelete(${i})">
        <span>${i + 1}. &nbsp; ${e.nama_lengkap}</span>
        <span>${e.waktu} ${e.tanggal}</span>
      </div>
    `;
  });
}

function handleDelete(index) {
  absensi_data.splice(index, 1);
  renderToHtml();
}
