var config = {
  'title': '',
  'welcomeMessage': 'URBAN ROLEPLAY INDONESIA',
  // Add images for the loading screen background.
  images: [
  'https://img.skordy.com/j/RGvCc.jpeg', 'https://img.skordy.com/j/nsQy5.jpeg', 'https://img.skordy.com/j/KNlLn.jpeg',
  ],
  // Turn on/off music
  enableMusic: true,
  // Music list. (Youtube video IDs). Last one should not have a comma at the end.
  music: [
    'vraG1S_SPAc', 'dBb060OPegg', 'VXUlwPSS-SQ', 'tgIqecROs5M'
  ],
  // Change music volume 0-100.
  musicVolume: 05,
  // Change Discord settings and link.
  'discord': {
    'show': true,
    'discordLink': 'https://website.com/discord',
  },
  // Change which key you have set in guidehud/client/client.lua
  'menuHotkey': 'F2',
  // Turn on/off rule tabs. true/false
  'rules': {
    'generalconduct': true,
    'roleplaying': true,
    'rdmvdm': true,
    'metagaming': true,
    'newlife': true,
    'abuse': true,
  },
}

// Home page annountments.
var announcements = [
  '[Discord Link]: urbanroleplay.id/discord',
  '[Instagram]: @urbanroleplay',
]


// Add/Modify rules below.
var guidelines = [
  'Pastikan mobil benar benar hilang sebelum impound. Karna bagasi antar mobil ter-link',
  'Barang inventory kamu akan hilang jika kamu respawn ke rumah sakit.',
  'Dilarang mengambil barang legal > 30%.',
  'Jika barang mobil kerja hilang karna kesalahan server dapat refund lewat DM Admin yang online.',
  'Jangan mencoba cheating karna akan terdeteksi dan di-ban Permanen',
  'Melaporkan bug yang dapat menghasilkan uang atau Duplikat item akan mendapatkan reward minimal tiga juta uang ingame',
  // 'aaaaaaaaaaa.',
]

var generalconduct = [
   'Dilarang berbahasa kasar baik IC atau OOC.',
  'Dilarang melakukan RP Berbau seksual tanpa persetujuan lawan RP.',
  'Dilarang mixing saat RP, Ciptakan situasi kreatif IC untuk izin OOC.',
  'Dilarang me-reset waktu bleeding dengan cara relog..',
  'Dilarang mencuri barang legal > 30%.',
  'Dilarang Magang untuk Mechanic, Ambulance, Polisi, dan Taxi jika on duty dibawah tiga.',
  'Dilarang melakukan cheat karna akan terdeteksi dan di-banned permanen.',
  'Dilarang Bug Abuse karna akan mengakibatkan harta direset menjadi 0.',
]

var roleplaying = [
  'RolePlay (bermain peran) adalah sebuah permainan didalam dunia mod multiplayer, yang dimana kalian memerankan sebuah karakter kalian sebagai seorang warga se-realistis mungkin selayaknya di dunia nyata (seperti menghargai nyawa dan harta).',
  'IC adalah segala sesuatu yang berhubungan dengan karaktermu, character didalam game(kota), semisalnya nama karakter kamu cecep, jadi IC adalah segala sesuatu yang berhubungan dengan si cecep seperti riwayatnya, sifatnya, perilakunya dan sebagainya.',
  'OOC adalah segala sesuatu yang berhubungan dengan dirimu sendiri atau real life kamu didunia nyata(kebalikan dari IC).',
  'Mixing adalah pencampuran dari IC dan OOC. Contohnya seperti anda melihat streaming orang dan anda ingin bertemu dengan beliau di dalam kota dan langsung menyebutkan nama beliau, padahal anda dikota tidak kenal sama sekali dengan beliau, termasuk melihat discord bertanda !OOC!.',
  'MetaGaming merupakan pemanfaatan fitur yang tidak seharusnya, seperti mengecek nama seseorang menggunakan Fitur data penduduk dan fitur lainnya, contoh : mengecek jumlah polisi, ems dll dari data penduduk.',
  'PowerGaming adalah sebuah tindakan dalam memainkan roleplay yang tidak nyata. Contoh : Anda ditabrak oleh kendaraan player lain namun anda tidak merasa kesakitan.',
  'DeathMatch adalah Membunuh / menembak pemain lain tanpa alasan secara IC yang jelas..',
  'Kill on Sight adalah Membunuh / menembak tanpa melakukan RP terlebih dahulu sebelumnya.',
  'Revenge Kill adalah Kalian balas dendam dengan membunuh / menembak pemain yang membunuh kalian sebelumnya.',
  'Refusing RP adalah Kalian secara sepihak menolak RP namun dengan cara seperti pause game, keluar dari game..',
  'Player Kill adalah kejadian terbunuhnya character yang kita perankan.',
  'Character Kill adalah kejadian terbunuhnya character game anda secara permanent.',
  'KEADAAN DIMANA KAMU MENGABAIKAN SITUASI BAHAYA / ANCAMAN YANG SEDANG KAMU HADAPI SAAT BERMAIN RP. CONTOH : SAAT DITODONG DENGAN PISTOL LALU ANDA TIDAK TAKUT SAMA SEKALI. DAN ANDA MEMUKUL BALIK YANG MENODONG KEPADA ANDA.',
  'Fail RP adalah pelanggaran dimana kalian melakukan tindakan tidak sesuai RP yang kamu perankan atau melanggar peraturan RP yang sudah ditetapkan.',
]

var rdmvdm = [
  'Zona Hijau Merupakan Daerah Yang Memiliki Keamanan yang Tinggi Seperti Rumah Sakit, Kantor polisi, Bandara, LSC Dan Seluruh Garasi Kota.', 
  'Didalam zona hijau kalian TIDAK boleh melakukan tindakan KRIMINAL apapun Gagal dalam menjalani aturan ini akan berakibat pada Penjara OOC (60 Menit)  Tanpa ada Peringatan.',
]

var metagaming = [
  'Zona Putih Merupakan Daerah Yang Memiliki Keamanan Yang Rendah dimana biasanya ditempat itu tidak ada warga sekitar (npc).',
  'Seperti Barbershop, Gas Station, Gang sempit Dll. Diwajibkan Menodong Terdahulu, Jika Tertodong Lari Maka Boleh Ditembak.',
  'Jika Tertodong Sudah Memegang Senjata Dari Awal Maka Di Perbolehkan Menembak Balik Penodong (Jika Tertodong Sudah Menyerah Maka Tidak Boleh Dibunuh).',
]

var newlife = [
  'Zona merah merupakan zona terlarang memperbolehkan siapapun untuk melakukan tindak kejahatan yang harus beralasan secara RP..',
  'Tindakan apapun, harus dimulai dengan penodongan.',
  'Minimal 1 EMS & 3 Polisi (untuk prosesing) | untuk mencabut canabis diperbolehkan tanpa ada EMS & Polisi.',
  'Minimal 2 Polisi 1 EMS untuk menjual Marijuana .',
  'Senjata yang diperbolehkan hanya pistol saja.',
  'Tindakan apapun, harus dimulai dengan penodongan. Lakukan percakapan terlebih dahulu agar memiliki alasan untuk tindakan RP selanjutnya.',
  'Pembunuhan (PK/CK) dapat dilakukan ketika alasan RP sesuai.',
  'Apabila seseorang sudah memegang senjata di ZONA ini maka dinyatakan perang.',
  'Perang wajib dimulai didalam blip ZONA MERAH sesuai di MAP terlebih dahulu. setelah itu lanjut pengejaran/perang di luar ZONA diperbolehkan.',
  'DC/Exit dianggap keluar dari situasi perang dan harus melarikan diri apabila sudah masuk lagi.',
  'Apabila pelaku sudah terlihat melarikan diri dari zona merah dan sudah terlihat oleh kepolisian maka Polisi dapat langsung melakukan pengejaran terhadap pelaku.',
  'Dilarang membunuh dengan cara menabrak menggunakan kendaraan.',
  'Maximal barang diambil ada di [Pembegalan]',
  'Pengecualian untuk POLISI tidak diperbolehkan mengambil barang-barang POLISI.',
]

var abuse = [
  'Minimal 2 Polisi dan 1 EMS.',
  'Hanya diperbolehkan menggunakan Pistol.',
  'Hanya Boleh Dilakukan Di Zona Putih Dan Merah.',
  'Uang yang diambil hanya yang boleh didompet dilarang menyuruh korban ambil ke bank.',
  'Maksimal uang yang diambil sebanyak 30.000.',
  'Maximal barang legal yang diambil sebanyak Total 30%.',
  ' Maximal bandage yang diambil sebanyak 5.',
  'Maximal repair kit / body kit maximal 1.',
  'Diperbolehkan mengambil semua barang illegal korban.',
  'Korban tidak boleh melawan apabila sudah ditodong penjahat.',
  'Apabila korban sudah ditodong tapi kabur / melawan penjahat boleh membunuh korban.',
  'Apabila korban membawa senjata illegal penodong boleh mengambil..',
  'Dilarang melakukan pembegalan diarea lokasi tempat para pekerja.',
]

// Modify hotkeys below.
var generalhotkeys = [
  'Tekan <kbd>F11</kbd> untuk mengatur HUD.',
  'Tekan <kbd>SHIFT</kbd> + <kbd>H</kbd> untuk mengatur jarak berbicara.',
  'Tahan <kbd>F</kbd> untuk naik kendaraan.',
  'Tahan <kbd>N</kbd> untuk berbicara.',
  'Tahan <kbd>4</kbd> untuk membuka RadialMenu.',
  'Tekan <kbd>Z</kbd> untuk melihat scoreboard.',
  'Tekan <kbd>Y</kbd> untuk membuka bagasi kendaraan.',
]

var rphotkeys = [
  'Ketik <code>/ooc {pesan}</code> untuk chat ooc..',
  'Ketik <code>/help {pesan}</code> untuk meminta tolong EMS.',
  'Tekan <kbd>LEFT CTRL</kbd> untuk jongkok.',
  'Tekan <kbd>SHIFT</kbd> + <kbd>E</kbd> untuk duduk.',
  'Tahan <kbd>H</kbd> untuk menyilangkan tangan.',
  'Tahan <kbd>delete</kbd> untuk mengangkat jempol.',
  'Tekan <kbd>B</kbd> untuk menunjuk.',
  'Tekan <kbd>F1</kbd> untuk membuka handphone.',
  'Tekan <kbd>F2</kbd> untuk membuka inventory.',
  'Tekan <kbd>F3</kbd> untuk membuka animations.',
  'Tekan <kbd>F5</kbd> untuk membuka data diri.',
  'Tekan <kbd>F7</kbd> untuk membuka invoices.',
]

var vehiclehotkeys = [
  'Ketik <code>/ooc {pesan}</code> untuk chat ooc..',
  'Ketik <code>/help {pesan}</code> untuk meminta tolong EMS.',
  'Tekan <kbd>LEFT CTRL</kbd> untuk jongkok.',
  'Tekan <kbd>SHIFT</kbd> + <kbd>E</kbd> untuk duduk.',
  'Tahan <kbd>H</kbd> untuk menyilangkan tangan.',
  'Tahan <kbd>delete</kbd> untuk mengangkat jempol.',
  'Tekan <kbd>B</kbd> untuk menunjuk.',
  'Tekan <kbd>F1</kbd> untuk membuka handphone.',
  'Tekan <kbd>F2</kbd> untuk membuka inventory.',
  'Tekan <kbd>F3</kbd> untuk membuka animations.',
  'Tekan <kbd>F5</kbd> untuk membuka data diri.',
  'Tekan <kbd>F7</kbd> untuk membuka invoices.',
  ]

var jobshotkeys = [
  'Ketik <code>/hud</code> untuk toogle HUD..',
]
