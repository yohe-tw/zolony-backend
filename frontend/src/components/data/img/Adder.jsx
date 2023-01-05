import { Image } from 'antd';

const Adder = () => {
  return (
    <article>
    <h1>計算機的第一步．加法器</h1><hr/>

    <section>
      <p>這篇文章的目標是利用前面學到的紅石元件與邏輯閘的概念，在 Minecraft 中拼湊出一個可以計算二進位加法的加法器。</p>
    </section>

    <section>
      <h2>二進位加法</h2>
      <p>在開始進入正題以前，先幫大家簡單介紹一下二進位加法。假設我們現在要計算 7 + 5 是多少，首先我們會需要把 7 和 5 轉換成二進位表示法，分別是 111 與 101。接下來再用我們熟悉的直式加法來計算 7 + 5 的和，只是因為我們是在二進位中計算加法，所以只要和超過 2 就需要進位。</p>
      <Image src={require("../img/adder/add-example-0.png")} alt="二進位加法" width="15%"/>

      <p>第一步，計算第一位數 1 + 1 = 2，因為和超過 2 了，所以就需要向第二位數進一。</p>
      <Image src={require("../img/adder/add-example-1.png")} alt="二進位加法 第一位數" width="15%"/>

      <p>第二步，計算第二位數 1 + 0 = 1，再加上剛剛從第一位數來的進位，1 + 1 = 2，最後的和還是超過 2，所以要向第三位數進一。</p>
      <Image src={require("../img/adder/add-example-2.png")} alt="二進位加法 第二位數" width="15%"/>
      
      <p>第三步，計算第三位數 1 + 1 = 2，再加上第二位數的進位，2 + 1 = 3，最後的和也超過 2 了，所以要向第四位數進一。</p>
      <Image src={require("../img/adder/add-example-3.png")} alt="二進位加法 第三位數" width="15%"/>

      <p>最後一步，計算第四位數 0 + 0 = 0，再加上前面的進位，0 + 1 = 1，因為比 2 小，所以不需要再進位了。</p>
      <Image src={require("../img/adder/add-example-4.png")} alt="二進位加法 第四位數" width="15%"/>

      <p>因此我們可以得到最終的結果 1100，也就是十進位中的 12。</p>

      <p>在上面的範例中，每一個步驟恰好都是計算一個特定的位數，除了第一位數以外，每個位數都會進行兩次加法：一次是被加數與加數的加法，另一次是前者之和與進位的加法。因此，單個位數的加法器應該要包含兩個小型加法器，用來計算兩次加法。</p>
    </section>

    <section>
      <h2>半加器</h2>
      <p>為了說明方便，我們將前段提到的「小型加法器」稱為<b>半加器</b>（Half Adder），而兩個半加器合起來的單位數加法器稱為全加器。</p>

      <p>一個半加器應該要有辦法處理 0 + 0、0 + 1、1 + 0、1 + 1 共四種不同的輸入，並產生 0、1、2 三種不同的輸出。輸入的部分可以把被加數當成輸入 A、加數當成輸入 B；而因為輸出需要表示 3 個不同的值，所以單個布林輸出是不夠的，會需要用到一個輸出 X 表示和的第二位數、另一個輸出 Y 表示和的第一位數。</p>

      <p>如果把上面這段文字轉換為真值表，會變成下表這樣：</p>
      <table className="property-list">
        <thead>
          <tr>
            <th>輸入 A</th>
            <th>輸入 B</th>
            <th>輸出 X</th>
            <th>輸出 Y</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>

      <p>眼尖的你可能會發現，輸出 X 似乎就是 A 和 B 經過 AND Gate 之後的結果，而輸出 Y 是 A 和 B 經過 XOR Gate 之後的結果。因此，所謂半加器，其實就是一個 AND Gate 和一個 XOR Gate 而已。</p>

      <p>下圖是一個遊戲中實作出來的半加器，因為之後這個半加器會與另一個半加器合成為單位數全加器，而多個單位數全加器還會合併成多位數的全加器，為了合併方便，所以半加器的結構並沒有很直覺好懂，不過我們有用不同的顏色標記每個方塊的充能狀態分別代表的布林值，讓你跟圖片做對照。</p>
      <Image src={require("../img/adder/half-adder.png")} alt="各個角度的半加器" width="90%"/>
      <ul>
        <li>淺藍色：A</li>
        <li>粉紅色：B</li>
        <li>綠色：NOT(A) OR NOT(B)</li>
        <li>深藍色：NOT(A) OR (A AND B)</li>
        <li>洋紅色：NOT(B) OR (A AND B)</li>
        <li>橘色：X = A AND B</li>
        <li>黃色：Y = A XOR B</li>
      </ul>
    </section>

    <section>
      <h2>全加器</h2>
      <p>前段提到的<b>全加器</b>（Full Adder）其實就是把兩個半加器合起來的單位數加法器。雖然說聽起來很像是只要把兩個半加器直接串起來就可以了，但其實新加入的半加器要處理的運算是不一樣的，它會需要處理 0 + 0、0 + 1、1 + 0、1 + 1、2 + 0、2 + 1 共六種不同的輸入，並產生 0、1、2、3 共四種不同的輸出。在輸入中，被加數是從前一個加法器來的，所以可以直接引用 X 和 Y 作為輸入，並多加一個輸入 C 來代表前一位數的進位；而輸出的部分可以用輸出 S 來表示和的第二位數、用輸出 T 來表示和的第一位數。</p>

      <p>我們就繼續用相同的手法，把所有可能組合的真值表全部列出來：</p>
      <table className="property-list">
        <thead>
          <tr>
            <th>輸入 X</th>
            <th>輸入 Y</th>
            <th>輸入 C</th>
            <th>輸出 S</th>
            <th>輸出 T</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>

      <p>因為 X 和 Y 是前一個半加器計算後的結果，而前一個半加器不可能計算出 3 這個數字，所以 X 和 Y 不可能同時為 1，在上表就直接忽略這種組合了。</p>

      <p>雖然因為布林變數變得有點多，有點難觀察出布林公式，但不能否認的是，輸出 S 可以表示成 X OR (Y AND C)，而輸出 T 可以表示成 Y XOR C。從這兩個式子就可以看出，餵給第二個半加器的兩個輸入應該要是 Y 和 C，這樣一來，它可以產出 Y AND C、Y XOR C 兩個輸出了，最後再把 X 和 Y AND C 用紅石粉相連，就可以得到 S 了。</p>

      <p>下圖就是利用兩個半加器所組成的一個全加器，這邊同樣也用不同顏色的方塊來表示不同的充能狀態：</p>
      <Image src={require("../img/adder/full-adder.png")} alt="各個角度的全加器" width="90%"/>
      <ul>
        <li>橘色：S = X OR (Y AND C)</li>
        <li>黃色：Y</li>
        <li>灰色：NOT(Y) OR NOT(C)</li>
        <li>紅色：NOT(Y) OR (Y AND C)</li>
        <li>紫色：NOT(C) OR (Y AND C)</li>
        <li>深綠色：Y XOR C</li>
        <li>白色：第一個半加器</li>
        <li>黑色：沒被充能，用來隔絕兩條線路的方塊</li>
      </ul>
    </section>

    <section>
      <h2>多位數加法器</h2>
      <p>有了單位數的加法器以後，只需要將加法器緊緊並排，就可以得到多位數加法器了，而下圖是一個四位數加法器的例子，可以計算 0~15 + 0~15 之內的加法運算。</p>
      <Image src={require("../img/adder/4-bits-adder.png")} alt="四位數全加器" width="50%"/>
    </section>
  </article>
  );
}

export default Adder;