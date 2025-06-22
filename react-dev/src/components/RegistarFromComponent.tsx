import "../styles/form.css";

export const RegistarFromComponent = () => {
  return (
    <section className="studentRegisterScreenLayout">
      <form>
        <div className="formPosition">
          <div className="studentRegister">
            <span>受講者名</span>
            <div className="inputGroup">
              <label>
                姓
                <input
                  className="studentRegisterTextBox"
                  type="text"
                  placeholder="山田"
                />
              </label>
              <label>
                名
                <input
                  className="studentRegisterTextBox"
                  type="text"
                  placeholder="太郎"
                />
              </label>
            </div>
          </div>

          <div className="studentRegister">
            <span>ふりがな</span>
            <div className="inputGroup">
              <label>
                姓
                <input
                  className="studentRegisterTextBox"
                  type="text"
                  placeholder="やまだ"
                />
              </label>
              <label>
                名
                <input
                  className="studentRegisterTextBox"
                  type="text"
                  placeholder="たろう"
                />
              </label>
            </div>
          </div>

          <div className="studentRegister">
            <span>申込コース</span>
            <div className="inputGroup">
              <select className="studentRegisterTextBox">
                <option value="">選択してください</option>
                <option value="プログラミング">プログラミング</option>
                <option value="ロボット">ロボット</option>
                <option value="AI">AI</option>
                <option value="ゲーム制作">ゲーム制作</option>
              </select>
            </div>
          </div>

          <div className="studentRegister">
            <span>授業コマ</span>
            <div className="inputGroup">
              <select className="studentRegisterTextBox">
                <option value="">選択してください</option>
                <option value="1">1コマ</option>
                <option value="2">2コマ</option>
                <option value="3">3コマ</option>
                <option value="4">4コマ</option>
              </select>
            </div>
          </div>

          <div className="studentRegister">
            <span>学年</span>
            <div className="inputGroup">
              <select className="studentRegisterTextBox">
                <option value="">選択してください</option>
                <option value="1">小1</option>
                <option value="2">小2</option>
                <option value="3">小3</option>
                <option value="4">小4</option>
                <option value="5">小5</option>
                <option value="6">小6</option>
                <option value="7">中1</option>
                <option value="8">中2</option>
                <option value="9">中3</option>
              </select>
            </div>
          </div>

          <div className="studentRegister">
            <span>年齢</span>
            <div className="inputGroup">
              <input
                className="studentRegisterTextBox"
                type="number"
                min="6"
                max="15"
                placeholder="6"
              />
            </div>
          </div>

          <div className="studentRegister">
            <span>機材レンタル</span>
            <div className="inputGroup">
              <select className="studentRegisterTextBox">
                <option value="">選択してください</option>
                <option value="利用する">利用する</option>
                <option value="利用しない">利用しない</option>
              </select>
            </div>
          </div>

          <div className="studentRegister">
            <span>備考</span>
            <div className="inputGroup">
              <input
                className="studentRegisterTextBox"
                type="text"
                placeholder="自由記述"
              />
            </div>
          </div>

          <div className="buttonSection">
            <button className="registButton" type="submit">
              登録
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
