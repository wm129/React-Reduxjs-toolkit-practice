import React,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeName,berthday, fetchImage, addSkills } from './Stores/user';

import Counter from './Counter';
const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [isShow, setIsShow] = useState(true);
    const [text, setText] = useState('');
    const [subtext, setsubtext] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //textがaction.payloadにあたる。
        dispatch(changeName(text));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //subtextがaction.payloadにあたる。
        dispatch(addSkills(subtext));
    };
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button>Change</button>
        </form>
        <button onClick={() =>dispatch(berthday())}>誕生日</button>
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(e) => setsubtext(e.target.value)} />
            <button>Let's add Skills</button>
        </form>
        <button onClick={() => fetchImage()}>画像取得</button>
        <h2>ユーザー名：{user.name}({user.age})</h2>
        <button onClick={() => setIsShow(!isShow)}>show</button>
         {isShow && <Counter />}
        </>
    );
};

export default App;