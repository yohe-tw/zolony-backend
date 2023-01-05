# 網服期末專題報告

- **組別：**第 65 組
- **組長中文姓名：**王政越
- **題目名稱：**Minecraft 紅石教學網
- **Deployed service 網址：** (https://zolony-production.up.railway.app/)
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

### **王政越(b10902049):** 

題目發想與大方向規劃、3D 紅石關卡設計與製作、前後端溝通、debugger

### **梁仁瑋(b10902050):**

前端網頁 UI 介面設計師

### **林昀禾(b10902048):**

後端伺服器設計、前後端溝通、布署

## **使用與參考之框架 / 模組 / 原始碼：**
- Frontend：React.js, @ant-design/icon, antd, crypto-js, graphql, apollo/client, react-latex-next
- Backend：Express.js, Mongoose, path, babel, dotenv-defaults, nodemon, uuidv4, graphql-yoga
- SQL：MongoDB Atlas
- Deployment：Railway

## **心得：**

### **王政越：**
很高興這學期修了這門網服的課程，雖然在這短短的半年課程很緊湊，但真的學到了很多東西。這次專案我主要負責 3D 遊戲畫面的渲染，在不使用其他外部套件的條件下實作出了小型的 Minecraft，真的還們有成就感的。最後也很感謝我的組員和我一起熬夜趕死線完成這項專案。

### **林昀禾：**
這次專案中，我主要負責後端伺服器架設與API設計和網頁布署，在這堂課中，我學到的不僅僅是javascript與他們網服的快樂模組夥伴們，更多的是我學到了如何用github與別人偕同開發專案，並避免repo爛掉的事情發生，相信這些經歷能讓我以後不管是課業上還是工作都能跟別人快樂共同開發專案。

### **梁仁瑋：**
這次專案中，我主要負責的是前端網頁UI介面的設計。這次主要是利用ant-design來設計前端，過程中我必須閱讀每個components的使用方法與並學會應用API，也讓我更加了解react hook的使用方法。除此之外，最感謝的是組員間的互相幫助，讓我學會透過git來跟組員合作，也很感謝他們幫助我完成與後端溝通的部分。

## **下面皆為為發布至臉書之預覽文**
```txt
[111-1] Web Programming Final
(Group 65) Minecraft 紅石教學網

1.組員：
王政越 b10902049
林昀禾 b10902048
梁仁瑋 b10902050

2. Demo 影片連結：

3. 網頁服務功能：

此網頁是 Minecraft 的紅石教學網站，結構主要分為文章區、挑戰區以及實作區。在文章區，透過撰文者以淺顯易懂的白話文由淺入深，來讓 Minecraft 的新手玩家們可以逐漸以系統化的方式學習紅石這一個困難的系統。在一些文章的結尾有挑戰區，主要以此網站最特別的獨創系統：3D 紅石挑戰地圖，來讓學習者可以透過親手操控 3D 紅石地圖來更強化學習的成效，並且由此做中學。實作區則是創立帳號後可享受到的另外一個網頁服務。玩家可以在網站上自由創建 3D 紅石地圖，並且可以將地圖檔保存在雲端資料庫中，確保資料不遺失。

4. Deploy 連結： （怕被惡意攻擊，故提供deploy的第二網址）

5. 網頁操作說明：

進入主頁後可以看到左邊有文章列表，並且右上有一個 account 登入按鈕。點擊左邊的文章列表可以自由切換不同的文章，在右上的 account 按鈕中可以自由的創建帳號與登入。登入後點擊 account 按鈕的 Your profile 可以進入個人檔案畫面，在這裡可以自由更換大頭貼與自介，並且右邊還可以創建自己的3D紅石地圖。如前所述，自己的檔案和一些文章之中都會有3D紅石地圖，這些3D紅石地圖基本上操作方法與一般的minecraft類似，其他的操作像是長按滑鼠左鍵拖曳可以移動視角、滑鼠滾輪可以切換方塊。

6. 使用與參考之框架 / 模組 / 原始碼：

Frontend：React.js, @ant-design/icon, antd, crypto-js, graphql, apollo/client, react-latex-next
Backend：Express.js, Mongoose, path, babel, dotenv-defaults, nodemon, uuidv4, graphql-yoga
SQL：MongoDB Atlas
Deployment：Railway

7. Github 原始碼：暫不提供

8. 心得：

王政越：
很高興這學期修了這門網服的課程，雖然在這短短的半年課程很緊湊，但真的學到了很多東西。這次專案我主要負責 3D 遊戲畫面的渲染，在不使用其他外部套件的條件下實作出了小型的 Minecraft，真的還們有成就感的。最後也很感謝我的組員和我一起熬夜趕死線完成這項專案。

林昀禾：
這次專案中，我主要負責後端伺服器架設與API設計和網頁布署，在這堂課中，我學到的不僅僅是javascript與他們網服的快樂模組夥伴們，更多的是我學到了如何用github與別人偕同開發專案，並避免repo爛掉的事情發生，相信這些經歷能讓我以後不管是課業上還是工作都能跟別人快樂共同開發專案。

梁仁瑋：
這次專案中，我主要負責的是前端網頁UI介面的設計。這次主要是利用ant-design來設計前端，過程中我必須閱讀每個components的使用方法與並學會應用API，也讓我更加了解react hook的使用方法。除此之外，最感謝的是組員間的互相幫助，讓我學會透過git來跟組員合作，也很感謝他們幫助我完成與後端溝通的部分。



```

