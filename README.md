## m3u8 Downloader GUI

## 개발 진행 중

> 군대가기 전에 Electron 찍먹 겸 만들어봤습니다.

[CLI 버전 소스코드](https://github.com/kweonminsung/m3u8-downloader)를 기반으로 작성되었으며, 프론트엔드는 [Electron](https://www.electronjs.org/)을 사용하여 만들어졌습니다.

### Requirements

- Node.js 18.12.0 or higher

### Installation

- Clone & Install Dependencies

  ```bash
  $ git clone https://github.com/kweonminsung/m3u8-downloader-gui.git
  $ npm install
  ```

- Development
  ```bash
  $ npm run start:dev
  ```
- Production (Windows)
  ```bash
  $ npm run build
  $ cd dist/win-unpacked
  $ ./m3u8-downloader-gui.exe
  ```
