
// import { useRecoilState, useRecoilValue } from "recoil";
// import countState from "../atom/countState";
import { Button, Card } from "@mui/material";
import { useState } from "react";



function CounterCard() {

    const [count, setCount] = useState(0);
    return <div>
        <Card>
            <IncreaseCard count={count} setCount={setCount}></IncreaseCard>
            <DecreaseCard count={count} setCount={setCount}></DecreaseCard>
            <DisplayCount count={count}></DisplayCount>
        </Card>
    </div>


}

function DisplayCount(props) {
    return <div>
        {props.count}
    </div>
}

function IncreaseCard(props) {

    return <div>
        <Button variant="outlined" onClick={() => props.setCount(props.count + 1)}>Increase</Button>
    </div>
}

function DecreaseCard(props) {

    return <div>
        <Button variant="outlined" onClick={() => props.setCount(props.count - 1)}>Decrease</Button>
    </div>
}


export default CounterCard;