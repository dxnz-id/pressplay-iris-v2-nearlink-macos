# IRIS v2 NearLink - macOS Application Port

![Logo](./dist/logo/hhk.png)

Bilingual Version: [English](#english) | [Bahasa Indonesia](#bahasa-indonesia)

<a href="https://www.ko-fi.com/dxnzid"><img src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" width="120" alt="ko-fi" /></a>

---

## English

This project is a native macOS application for the **Pres PLay IRIS v2 NearLink** Gaming Mouse. Originally just built for Windows with Electron, this version provides seamless HID device communication and full compatibility with modern macOS systems (10.15 and later).

### 🖱️ Supported Hardware

- **Vendor ID**: `0x363C`
- **Product ID**: `0xEC05` (Wired), `0xEC06` (Wireless/Dongle)

### 🛠️ Prerequisites

Before building or running, ensure your system has the following dependencies:

- **Node.js**: version 18.0 or later
- **npm**: version 10.0 or later
- **Xcode Command Line Tools**: Install via `xcode-select --install`

### ⚙️ Setup & Hardware Access

macOS allows direct USB HID device access. No special configuration is required, but you may be prompted to allow the app to access USB devices on first use.

1. Grant the necessary permissions when prompted by the system
2. Restart the application if permissions were initially denied

### 📦 Building the Application

To create a standalone macOS application:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the build command:
   ```bash
   npm run package
   ```
3. The built application will be in the `build-out/mac/` directory as `IRIS_V2_NearLink.app`

### 🚀 Installation & Running

1. Extract the `IRIS_V2_NearLink.zip` from `build-out/` or install from the `.dmg` file
2. Copy `IRIS_V2_NearLink.app` to your `Applications` folder
3. Allow the app to run from System Preferences if prompted
4. Launch the application

### 🔒 Security & Gatekeeper

Since the application is not code-signed by an Apple Developer ID, you may need to allow it to run:

```bash
xattr -rd com.apple.quarantine /Applications/IRIS_V2_NearLink.app
```

Or simply right-click the app and select **Open** to bypass Gatekeeper.

---

## Bahasa Indonesia

Proyek ini adalah aplikasi native macOS untuk **Press Play IRIS v2 NearLink** Gaming Mouse. Aslinya hanya dikembangkan untuk Windows menggunakan Electron, versi ini menyediakan komunikasi perangkat HID yang mulus dan kompatibilitas penuh dengan sistem macOS modern (10.15 dan lebih baru).

### 🖱️ Hardware yang Didukung

- **Vendor ID**: `0x363C`
- **Product ID**: `0xEC05` (Wired), `0xEC06` (Wireless/Dongle)

### 🛠️ Prasyarat

Sebelum melakukan build atau menjalankan aplikasi, pastikan sistem Anda memiliki dependensi berikut:

- **Node.js**: versi 18.0 atau lebih baru
- **npm**: versi 10.0 atau lebih baru
- **Xcode Command Line Tools**: Install via `xcode-select --install`

### ⚙️ Setup & Akses Hardware

macOS memungkinkan akses langsung ke perangkat USB HID. Tidak ada konfigurasi khusus yang diperlukan, namun Anda mungkin diminta untuk mengizinkan aplikasi mengakses perangkat USB pada penggunaan pertama.

1. Berikan izin yang diperlukan ketika diminta oleh sistem
2. Restart aplikasi jika izin awalnya ditolak

### 📦 Membangun Aplikasi

Untuk membuat aplikasi macOS mandiri:

1. Install dependensi:
   ```bash
   npm install
   ```
2. Jalankan perintah build:
   ```bash
   npm run package
   ```
3. Aplikasi yang sudah dibangun akan ada di folder `build-out/mac/` sebagai `IRIS_V2_NearLink.app`

### 🚀 Instalasi & Menjalankan

1. Extract `IRIS_V2_NearLink.zip` dari `build-out/` atau install dari file `.dmg`
2. Copy `IRIS_V2_NearLink.app` ke folder `Applications` Anda
3. Izinkan aplikasi berjalan dari System Preferences jika diminta
4. Luncurkan aplikasi

### 🔒 Keamanan & Gatekeeper

Karena aplikasi tidak ditandatangani oleh Apple Developer ID, Anda mungkin perlu mengizinkannya berjalan:

```bash
xattr -rd com.apple.quarantine /Applications/IRIS_V2_NearLink.app
```

Atau cukup klik kanan pada aplikasi dan pilih **Open** untuk membypass Gatekeeper.

---

## 🎨 Spotlight Integration

The application automatically integrates with macOS Spotlight search once installed in the `Applications` folder. You can quickly launch it by pressing `Cmd+Space` and typing "IRIS".

---

_Ported with ❤️ for macOS users._
