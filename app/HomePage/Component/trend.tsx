const trends = [
    {
       event: "Music",
        rate: 95,
    },
    {
       event: "Concert",
        rate: 93,
    },
    {
       event: "Classic Music",
        rate: 87,
    },
    {
       event: "Travelling and Expedition",
        rate: 82,
    },
    {
       event: "Food",
        rate: 93,
    },
    {
       event: "Cocktails",
        rate: 93,
    },
    {
       event: "LinkinPark",
        rate: 93,
    },
    {
       event: "NightShow",
        rate: 93,
    },
    {
       event: "Badminton",
        rate: 93,
    },
    {
       event: "SportMeet",
        rate: 93,
    },
]


const Trend = () => {
    return (
        <div 
        className="w-[70%] m-auto mt-10 rounded-2xl p-5 flex flex-col gap-5" 
        style={{ background: 'rgba(33, 120, 115, 0.20)' }}
        >
            <p className="text-[#252C2B] text-3xl font-semibold">
                Trending event hashtags in your area
            </p>
            <p className="text-[#252C2B]">
                Search among the trending event tags and become a part of what’s eventing in your area.
            </p>

            <div className="flex justify-between items-center gap-3">

            </div>
        </div>
    )
}

export default Trend