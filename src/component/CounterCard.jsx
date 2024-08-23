
import { Button, Card } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import countState from "../atom/countState"



function CounterCard() {

    return (
        <div>
            <Card>
                <IncreaseCard ></IncreaseCard>
                <DecreaseCard ></DecreaseCard>
                <DisplayCount ></DisplayCount>
            </Card>
        </div>

    )
}

function DisplayCount() {
    const count = useRecoilValue(countState);
    return <div>
        {count}
    </div>
}

function IncreaseCard() {
    const setCount = useSetRecoilState(countState);
    return <div>
        <Button variant="outlined" onClick={() => setCount((existingCount) => existingCount + 1)}>Increase</Button>
    </div>
}

function DecreaseCard() {
    const setCount = useSetRecoilState(countState);
    return <div>
        <Button variant="outlined" onClick={() => setCount((existingCount) => existingCount - 1)}>Decrease</Button>
    </div>
}


export default CounterCard;