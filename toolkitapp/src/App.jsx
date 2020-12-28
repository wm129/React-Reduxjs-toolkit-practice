import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// 追加
import { changeName, berthday, fetchImage } from './stores/user';

import Counter from './Counter';

const App = () => {
  const dispach = useDispatch();
  const user = useSelector((state) => state.user);
  const [isShow, setIsShow] = useState(true);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // textがaction.payloadにあたる
    dispach(changeName(text));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>変更</button>
      </form>
      <button onClick={() => dispach(berthday())}>誕生日</button>
      {/* 追加 */}
      <button onClick={() => fetchImage()}>画像取得</button>
      <h2>
        ユーザー名: {user.name}({user.age})
      </h2>
      <button onClick={() => setIsShow(!isShow)}>show</button>
      {isShow && <Counter />}
    </>
  );
};
export default App;
 