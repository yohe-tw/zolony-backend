# 前言

目前此repo主要為展示111-1學期台大電機系所開的網路服務程式設計，某一組的final project。此專案名稱為紅石教學網，目前專案部屬的網頁已經失效，主要功用為展示以前做過的內容供履歷檢視。另有一demo影片因為個人資料隱私問題不會放在這裡，而是會直接提供給欲檢視履歷之人。另為確保組員個資不外露，具有個資的部分我會用<font color='red'>xx</font>或是<font color='red'>A同學</font>來代替，而此github的帳號本人yohe-tw的名稱會用<font color='red'>C同學</font>來代替。
另有一公開的協作repo，為完成作業後公開展示的repo。[連結點此](https://github.com/Zollo757347/Zolony)

# 網服期末專題報告

- **組別：**第 65 組
- **組長中文姓名：**<font color='red'>A同學</font>
- **題目名稱：**Minecraft 紅石教學網
- **Deployed service 網址：** [連結](https://zolony-production.up.railway.app/)
- **Demo 影片網址：**
- **FB 社團貼文網址：**

## **服務內容：**

此網頁是 Minecraft 的紅石教學網站，結構主要分為文章區、挑戰區以及實作區。在文章區，透過撰文者以淺顯易懂的白話文由淺入深，來讓 Minecraft 的新手玩家們可以逐漸以系統化的方式學習紅石這一個困難的系統。在一些文章的結尾有挑戰區，主要以此網站最特別的獨創系統：3D 紅石挑戰地圖，來讓學習者可以透過親手操控 3D 紅石地圖來更強化學習的成效，並且由此做中學。實作區則是創立帳號後可享受到的另外一個網頁服務。玩家可以在網站上自由創建 3D 紅石地圖，並且可以將地圖檔保存在雲端資料庫中，確保資料不遺失。

## **在 localhost 安裝與測試之詳細步驟：**

1. 分別在 `final`、`frontend` 與 `backend` 的檔案夾底下打
``` bash
yarn
```
這個指令來安裝模組包。

2. 根據在 `backend` 的 `.env.default` 檔，在 `backend` 裡面新增一個 `.env` ，並打入自己的 `MONGO_URL` 。
3. 在 `final` 開兩台終端機分別打入
```bash
yarn start
```
與
```bash
yarn server
```

即可開啟前端與後端。

## **登入方法：**

點開右上角的 Account 會跳出 Dropdown 即可創辦帳號 (Sign up) 與登入 (Log in)，登入後可看到自己的個人資料與地圖 (Your profile)，未登入也可查看文章與操作 3D 紅石關卡。

## **每位組員之負責項目：**

### <font color='red'>A同學</font>:** 

題目發想與大方向規劃、3D 紅石關卡設計與製作、前後端溝通、debugger

### <font color='red'>B同學</font>:**

前端網頁 UI 介面設計師

### <font color='red'>C同學</font>:**

後端伺服器設計、前後端溝通、布署

## **使用與參考之框架 / 模組 / 原始碼：**
- Frontend：React.js, @ant-design/icon, antd, crypto-js, graphql, apollo/client, react-latex-next
- Backend：Express.js, Mongoose, path, babel, dotenv-defaults, nodemon, uuidv4, graphql-yoga
- SQL：MongoDB Atlas
- Deployment：Railway

## **心得：**

### **<font color='red'>A同學</font>：**
很高興這學期修了這門網服的課程，雖然在這短短的半年課程很緊湊，但真的學到了很多東西。這次專案我主要負責 3D 遊戲畫面的渲染，在不使用其他外部套件的條件下實作出了小型的 Minecraft，真的還們有成就感的。最後也很感謝我的組員和我一起熬夜趕死線完成這項專案。

### **<font color='red'>C同學</font>：**
這次專案中，我主要負責後端伺服器架設與API設計和網頁布署，在這堂課中，我學到的不僅僅是javascript與他們網服的快樂模組夥伴們，更多的是我學到了如何用github與別人偕同開發專案，並避免repo爛掉的事情發生，相信這些經歷能讓我以後不管是課業上還是工作都能跟別人快樂共同開發專案。

### **<font color='red'>B同學</font>：**
這次專案中，我主要負責的是前端網頁UI介面的設計。這次主要是利用ant-design來設計前端，過程中我必須閱讀每個components的使用方法與並學會應用API，也讓我更加了解react hook的使用方法。除此之外，最感謝的是組員間的互相幫助，讓我學會透過git來跟組員合作，也很感謝他們幫助我完成與後端溝通的部分。

