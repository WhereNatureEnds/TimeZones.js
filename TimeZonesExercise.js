import React, { useState, useEffect } from 'react';



function TimeZones({ timeZone }) {
    return (
        <div>
            {timeZone.zoneName}

        </div>
    )

}



function App() {
    const [zoneNameList, setTimeZoneList] = useState([

    ]);

    useEffect(() => {
        fetch('http://api.timezonedb.com/v2/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=Europe\/*')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setTimeZoneList((json.zones))
            })
            .catch((err) => {
                return
            })
    })





    return (

        <div>
            {zoneNameList.map((value, index) => {
                return (
                    <div>
                        <TimeZones timeZone={value} />
                    </div>
                )
            })}

            <input type="text"></input>
        </div>

    )



}

export default App;







