
// import { useRecoilState, useRecoilValue } from "recoil";
// import countState from "../atom/countState";
import { Button, Card } from "@mui/material";
import { createContext, useContext, useState } from "react";

const CountContext = createContext();

function CounterCard() {

    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={{
            count: count,
            setCount: setCount
        }}>
            <div>
                <Card>
                    <IncreaseCard ></IncreaseCard>
                    <DecreaseCard ></DecreaseCard>
                    <DisplayCount ></DisplayCount>
                </Card>
            </div>
        </CountContext.Provider>
    )
}

function DisplayCount() {
    const { count } = useContext(CountContext);
    return <div>
        {count}
    </div>
}

function IncreaseCard() {
    const { count, setCount } = useContext(CountContext);
    return <div>
        <Button variant="outlined" onClick={() => setCount(count + 1)}>Increase</Button>
    </div>
}

function DecreaseCard() {
    const { count, setCount } = useContext(CountContext);
    return <div>
        <Button variant="outlined" onClick={() => setCount(count - 1)}>Decrease</Button>
    </div>
}


export default CounterCard;