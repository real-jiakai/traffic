import { useEffect,useState } from "react"

export default function JMS() {
    const [jms, setJMS] = useState([])

    useEffect(() => {
        async function getJMS() {
            const res = await fetch('/api/jms')
            const data = await res.json()
            setJMS(data)
        }
        getJMS()
    }, [])

    const roundToThreeDecimalPlaces = (number) => {
        return parseFloat(number.toFixed(3));
    }

    const roundToOneDecimalPlaces = (number) => {
        return Math.round(number * 10) / 10;
    }

    const resetDate = (day) => {
        let totalTimeStamp = Date.now() + day * 24 * 60 * 60 * 1000;
        let resetDate = new Date(totalTimeStamp);
        let formattedDate = `${resetDate.getFullYear()}年${resetDate.getMonth() + 1}月${resetDate.getDate()}日`;
        return formattedDate;
    };
    
    return (
        <>
            <h4>Just My Socks机场流量监控</h4>
            {jms.bw_reset_day_of_month !== undefined && (
                <>
                    本月总流量：{jms.monthly_bw_limit_b / 1000000000} GB<br />
                    本月已使用流量：{roundToThreeDecimalPlaces(jms.bw_counter_b / 1000000000)} GB<br />
                    本月流量使用率：{roundToOneDecimalPlaces((jms.bw_counter_b / jms.monthly_bw_limit_b) * 100)}%<br />
                    距离每月流量重置剩余天数：{jms.bw_reset_day_of_month}天<br />
                    将于{resetDate(jms.bw_reset_day_of_month)}重置
                </>
            )}
        </>
    );
}      
