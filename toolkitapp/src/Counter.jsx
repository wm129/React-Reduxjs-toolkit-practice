import React,{ useState, useEffect } from 'react';

class Counter extends React.Component {
    state = {
        count:0,

    };
increment() {
    this.setState({ count: this.state.count + 1 });
}
decrement() {
    this.setState({ count: this.state.count - 1 });
}
componentDidMount() {
    console.log('componentDidMount のタイミング');
}
componentWillUnmount() {
    console.log('componentWillUnmount のタイミング');
}

    render() {
        const { count } = this.state;
        return (
            <>
            <h1>{count}</h1>
            <button onClick={() => this.increment()}>増加</button>
            <button onClick={() => this.decrement()}>減少</button>
            </>
        );
    }
}
//export default Counter;


const Counter2 = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    useEffect(() => {
        console.log('componentDidMountのタイミング');
        return () => {
            console.log('componentWillUnmountのタイミング');
        };
    },[]);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>増加</button>
            <button onClick={decrement}>減少</button>
            </>
    )
};
export default Counter2;




