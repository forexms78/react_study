import React from "react";

const Promblematic = () => {
    throw (new Error('버그 발생...!'));
};

class Error extends React.Component {
    constructor(props) {
        console.log('1. constructor');
        super(props);

        this.state = {
            number: 0,
            isUpdate: false,
            error: false,
        };
    }

    componentDidCatch(error, info){
        console.log('에러 발생!! : componentDidCatch');
        this.setState({
            error: true,
        });
    }

    static getDerivedStateFromProps(nextProps, preveState){
        const {isUpdate} = preveState;
        const order = isUpdate === true ? 1 : 2;
        console.log(`${order}.. getDerivedStateFromProps`);
        return null;
    }

    componentDidMount() {
        console.log('4. componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.number % 3 === 0){
            console.log('2. shouldComponentUpdate 3의 배수');
            return false;
        }
        console.log('2. shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(preveProps, preveState, snapshot) {
        console.log('4 .getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(preveProps, preveState, snapshot){
        console.log('5. componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number : number + 1,
            isUpdate: true,
        });
    }

    handleDecrease = () => {
        const { number } = this.state;
        this.setState({
            number: number - 1,
            isUpdate: true,
        });
    }

    render() {
        const {error, number} = this.state;
        console.log('3. render');
        if (error) return (
            <React.Fragment>
                <h1>에러 발생...!</h1>
            </React.Fragment>
        )

        return (
            <div>
                <div>
                    <div>값: {number}</div>
                    { number === 4 && <Promblematic />}
                    <button onClick={this.handleIncrease}>+</button>
                    <button onClick={this.handleDecrease}>-</button>
                </div>
            </div>
        )
    }
}

export default Error;